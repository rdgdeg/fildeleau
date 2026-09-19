import { isAdmin, kvEnabled, listVisits } from '../server/visits'

export const config = { runtime: 'nodejs' }

export async function GET(request: Request) {
  const password = request.headers.get('x-admin-key')
  if (!isAdmin(password)) {
    return Response.json({ error: 'Mot de passe incorrect' }, { status: 401, headers: { 'Cache-Control': 'no-store' } })
  }
  const visits = await listVisits()
  return Response.json(
    {
      visits,
      stats: {
        pageViews: visits.length,
        visitors: new Set(visits.map((v) => v.session)).size,
        facebook: visits.filter((v) => v.fromFacebook).length,
        lastVisit: visits[0]?.at ?? null,
        durable: kvEnabled(),
      },
    },
    { headers: { 'Cache-Control': 'no-store' } },
  )
}
