import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'

export type Visit = {
  id: string
  at: string
  path: string
  referrer: string
  search: string
  device: 'mobile' | 'tablet' | 'desktop'
  lang: string
  session: string
  fromFacebook: boolean
}

const KEY = 'fildeleau-visits'
const MAX = 400

export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'ldmedia'

function filePath() {
  if (process.env.VERCEL) return join('/tmp', 'fildeleau-visits.json')
  return join(process.cwd(), 'data', 'visits.json')
}

function isFacebook(referrer: string, search: string) {
  const blob = `${referrer} ${search}`.toLowerCase()
  return (
    blob.includes('facebook.') ||
    blob.includes('fbclid') ||
    blob.includes('l.facebook') ||
    blob.includes('m.facebook')
  )
}

function deviceOf(value: string | undefined): Visit['device'] {
  if (value === 'mobile' || value === 'tablet') return value
  return 'desktop'
}

async function fromKv(): Promise<Visit[] | null> {
  const url = process.env.KV_REST_API_URL
  const token = process.env.KV_REST_API_TOKEN
  if (!url || !token) return null
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([['GET', KEY]]),
  })
  if (!res.ok) return null
  const data = (await res.json()) as { result?: unknown }
  const raw = Array.isArray(data.result) ? data.result[0] : data.result
  if (!raw) return []
  if (typeof raw === 'string') {
    try {
      return JSON.parse(raw) as Visit[]
    } catch {
      return []
    }
  }
  if (Array.isArray(raw)) return raw as Visit[]
  return []
}

async function toKv(visits: Visit[]) {
  const url = process.env.KV_REST_API_URL
  const token = process.env.KV_REST_API_TOKEN
  if (!url || !token) return false
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([['SET', KEY, JSON.stringify(visits)]]),
  })
  return res.ok
}

async function fromFile(): Promise<Visit[]> {
  try {
    const raw = await readFile(filePath(), 'utf8')
    const parsed = JSON.parse(raw) as Visit[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

async function toFile(visits: Visit[]) {
  const path = filePath()
  await mkdir(dirname(path), { recursive: true })
  await writeFile(path, JSON.stringify(visits, null, 2))
}

export async function listVisits(): Promise<Visit[]> {
  const kv = await fromKv()
  if (kv) return kv
  return fromFile()
}

export async function recordVisit(input: {
  path?: string
  referrer?: string
  search?: string
  device?: string
  lang?: string
  session?: string
}): Promise<Visit> {
  const referrer = (input.referrer ?? '').slice(0, 400)
  const search = (input.search ?? '').slice(0, 300)
  const visit: Visit = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    at: new Date().toISOString(),
    path: (input.path || '/').slice(0, 200),
    referrer,
    search,
    device: deviceOf(input.device),
    lang: (input.lang ?? '').slice(0, 16),
    session: (input.session ?? 'inconnu').slice(0, 80),
    fromFacebook: isFacebook(referrer, search),
  }
  const current = await listVisits()
  const next = [visit, ...current].slice(0, MAX)
  const saved = await toKv(next)
  if (!saved) await toFile(next)
  return visit
}

export function isAdmin(password: string | null | undefined) {
  return Boolean(password) && password === ADMIN_PASSWORD
}

export function kvEnabled() {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN)
}
