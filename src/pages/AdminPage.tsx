import { useEffect, useState } from 'react'
import { Seo } from '../components/Seo'
import { skipTracking } from '../lib/track'

type Visit = {
  id: string
  at: string
  path: string
  referrer: string
  search: string
  device: 'mobile' | 'tablet' | 'desktop'
  fromFacebook: boolean
  session: string
}

type Stats = {
  pageViews: number
  visitors: number
  facebook: number
  lastVisit: string | null
  durable: boolean
}

const KEY = 'ldm-admin-key'

function formatWhen(iso: string) {
  return new Intl.DateTimeFormat('fr-BE', {
    dateStyle: 'short',
    timeStyle: 'medium',
  }).format(new Date(iso))
}

function sourceOf(visit: Visit) {
  if (visit.fromFacebook) return 'Facebook'
  if (visit.referrer) {
    try {
      return new URL(visit.referrer).hostname.replace(/^www\./, '')
    } catch {
      return 'Lien externe'
    }
  }
  return 'Direct / inconnu'
}

export function AdminPage() {
  const [password, setPassword] = useState(() => sessionStorage.getItem(KEY) ?? '')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [visits, setVisits] = useState<Visit[] | null>(null)
  const [stats, setStats] = useState<Stats | null>(null)

  async function load(key: string) {
    setLoading(true)
    setError('')
    const res = await fetch('/api/visits', { headers: { 'x-admin-key': key } })
    if (!res.ok) {
      setVisits(null)
      setStats(null)
      setError('Mot de passe incorrect.')
      sessionStorage.removeItem(KEY)
      setLoading(false)
      return
    }
    const data = (await res.json()) as { visits: Visit[]; stats: Stats }
    sessionStorage.setItem(KEY, key)
    skipTracking()
    setVisits(data.visits)
    setStats(data.stats)
    setLoading(false)
  }

  useEffect(() => {
    const saved = sessionStorage.getItem(KEY)
    if (saved) void load(saved)
  }, [])

  return (
    <main className="min-h-svh bg-lin px-5 py-16 text-ardoise">
      <Seo title="Visites de la maquette | LD Media" description="Suivi interne des visites." />
      <div className="mx-auto w-[min(960px,100%)]">
        <p className="text-[11px] uppercase tracking-[0.28em] text-mute">LD Media</p>
        <h1 className="mt-3 font-display text-3xl font-light md:text-4xl">Visites de la maquette</h1>
        <p className="mt-2 max-w-xl text-sm text-mute">
          Pour voir si le restaurant a ouvert le lien. Cette page n’est pas dans le menu du site.
        </p>

        {!visits ? (
          <form
            className="mt-10 max-w-sm"
            onSubmit={(e) => {
              e.preventDefault()
              void load(password)
            }}
          >
            <label className="text-[12px] uppercase tracking-[0.16em] text-mute" htmlFor="admin-key">
              Mot de passe
            </label>
            <input
              id="admin-key"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full border-b border-line bg-transparent py-2 outline-none"
              autoComplete="current-password"
            />
            {error ? <p className="mt-3 text-sm text-cuivre">{error}</p> : null}
            <button type="submit" className="btn mt-6" disabled={loading}>
              {loading ? 'Vérification…' : 'Entrer'}
            </button>
          </form>
        ) : (
          <>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <article className="border border-line bg-white p-6">
                <p className="text-[11px] uppercase tracking-[0.16em] text-mute">Visiteurs</p>
                <p className="mt-2 font-display text-4xl font-light">{stats?.visitors ?? 0}</p>
              </article>
              <article className="border border-line bg-white p-6">
                <p className="text-[11px] uppercase tracking-[0.16em] text-mute">Pages vues</p>
                <p className="mt-2 font-display text-4xl font-light">{stats?.pageViews ?? 0}</p>
              </article>
              <article className="border border-line bg-white p-6">
                <p className="text-[11px] uppercase tracking-[0.16em] text-mute">Depuis Facebook</p>
                <p className="mt-2 font-display text-4xl font-light">{stats?.facebook ?? 0}</p>
              </article>
            </div>
            <p className="mt-4 text-sm text-mute">
              Dernière visite : {stats?.lastVisit ? formatWhen(stats.lastVisit) : 'aucune pour l’instant'}
            </p>
            {!stats?.durable ? (
              <p className="mt-2 text-sm text-mute">
                Stockage encore temporaire. Dans Vercel : Storage → Create → KV, puis redéployer, pour garder
                l’historique.
              </p>
            ) : null}
            <div className="mt-6 flex gap-3">
              <button type="button" className="btn" onClick={() => void load(password)} disabled={loading}>
                Actualiser
              </button>
            </div>
            <div className="mt-8 overflow-x-auto border border-line bg-white">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-line text-[11px] uppercase tracking-[0.14em] text-mute">
                    <th className="px-4 py-3 font-medium">Quand</th>
                    <th className="px-4 py-3 font-medium">Page</th>
                    <th className="px-4 py-3 font-medium">Appareil</th>
                    <th className="px-4 py-3 font-medium">Provenance</th>
                  </tr>
                </thead>
                <tbody>
                  {visits.length === 0 ? (
                    <tr>
                      <td className="px-4 py-8 text-mute" colSpan={4}>
                        Personne n’a encore ouvert la maquette.
                      </td>
                    </tr>
                  ) : (
                    visits.map((visit) => (
                      <tr key={visit.id} className="border-b border-line/70">
                        <td className="px-4 py-3 whitespace-nowrap">{formatWhen(visit.at)}</td>
                        <td className="px-4 py-3">{visit.path}</td>
                        <td className="px-4 py-3 capitalize">{visit.device}</td>
                        <td className="px-4 py-3">{sourceOf(visit)}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </main>
  )
}
