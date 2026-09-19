const SKIP = 'ldm-skip-track'
const SID = 'ldm-sid'

function device() {
  const w = window.innerWidth
  if (w < 768) return 'mobile'
  if (w < 1024) return 'tablet'
  return 'desktop'
}

export function skipTracking() {
  sessionStorage.setItem(SKIP, '1')
}

export function trackPage(path: string) {
  if (path.startsWith('/admin')) return
  if (sessionStorage.getItem(SKIP)) return
  let session = sessionStorage.getItem(SID)
  if (!session) {
    session = crypto.randomUUID()
    sessionStorage.setItem(SID, session)
  }
  const payload = {
    path,
    referrer: document.referrer,
    search: window.location.search,
    device: device(),
    lang: navigator.language,
    session,
  }
  void fetch('/api/visit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch(() => undefined)
}
