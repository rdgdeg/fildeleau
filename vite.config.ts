import type { IncomingMessage, ServerResponse } from 'node:http'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import type { Plugin } from 'vite'
import { defineConfig } from 'vite'
import { isAdmin, kvEnabled, listVisits, recordVisit } from './server/visits.ts'

function readJson(req: IncomingMessage): Promise<Record<string, string>> {
  return new Promise((resolve) => {
    const chunks: Buffer[] = []
    req.on('data', (chunk) => {
      chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
    })
    req.on('end', () => {
      if (!chunks.length) {
        resolve({})
        return
      }
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString('utf8')) as Record<string, string>)
      } catch {
        resolve({})
      }
    })
  })
}

function send(res: ServerResponse, status: number, body?: unknown) {
  res.statusCode = status
  if (body === undefined) {
    res.end()
    return
  }
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(body))
}

function visitsApi(): Plugin {
  const middleware = async (req: IncomingMessage, res: ServerResponse, next: () => void) => {
    const url = req.url?.split('?')[0]
    try {
      if (url === '/api/visit' && req.method === 'POST') {
        const body = await readJson(req)
        await recordVisit(body)
        send(res, 204)
        return
      }
      if (url === '/api/visits' && req.method === 'GET') {
        const password = String(req.headers['x-admin-key'] ?? '')
        if (!isAdmin(password)) {
          send(res, 401, { error: 'Mot de passe incorrect' })
          return
        }
        const visits = await listVisits()
        send(res, 200, {
          visits,
          stats: {
            pageViews: visits.length,
            visitors: new Set(visits.map((v) => v.session)).size,
            facebook: visits.filter((v) => v.fromFacebook).length,
            lastVisit: visits[0]?.at ?? null,
            durable: kvEnabled(),
          },
        })
        return
      }
    } catch {
      send(res, 500, { error: 'Erreur serveur' })
      return
    }
    next()
  }
  return {
    name: 'visits-api',
    configureServer(server) {
      server.middlewares.use(middleware)
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware)
    },
  }
}

export default defineConfig({
  plugins: [visitsApi(), react(), tailwindcss()],
})
