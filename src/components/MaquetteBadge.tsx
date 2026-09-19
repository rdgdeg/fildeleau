import { site } from '../data/site'

export function MaquetteBadge() {
  if (!site.showMaquetteBadge) return null
  return (
    <p className="pointer-events-none fixed bottom-20 left-3 z-30 hidden max-w-[220px] text-[10px] leading-snug tracking-wide text-mute/80 md:bottom-4 md:block">
      {site.maquetteBadge}
    </p>
  )
}
