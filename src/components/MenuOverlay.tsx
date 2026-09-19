import { X } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../data/site'

type Props = {
  open: boolean
  current: string
  onClose: () => void
}

export function MenuOverlay({ open, current, onClose }: Props) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  const main = site.nav.filter((l) => l.group === 'main')
  const sub = site.nav.filter((l) => l.group === 'sub')

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Menu">
      <button type="button" className="absolute inset-0 bg-ardoise/30" onClick={onClose} aria-label="Fermer le menu" />
      <div className="relative z-10 h-full w-[min(420px,92vw)] overflow-auto bg-white px-12 py-8">
        <button type="button" className="mb-16 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em]" onClick={onClose}>
          <X size={14} strokeWidth={1.5} />
          Fermer
        </button>
        <nav className="flex flex-col gap-3.5">
          {main.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={onClose}
              className={`font-display text-[22px] font-normal ${current === l.to ? 'text-canal' : 'hover:text-canal'}`}
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-9 flex flex-col gap-3">
            {sub.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={onClose}
                className={`text-[15px] text-mute ${current === l.to ? 'text-canal' : 'hover:text-ardoise'}`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  )
}
