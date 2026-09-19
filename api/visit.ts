import { recordVisit } from '../server/visits'

export const config = { runtime: 'nodejs' }

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as Record<string, string>
  await recordVisit({
    path: body.path,
    referrer: body.referrer,
    search: body.search,
    device: body.device,
    lang: body.lang,
    session: body.session,
  })
  return new Response(null, { status: 204, headers: { 'Cache-Control': 'no-store' } })
}
