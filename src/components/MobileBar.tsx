import { Phone, MapPinned, CalendarCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { site } from '../data/site'

export function MobileBar() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-line bg-lin/95 backdrop-blur md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      aria-label="Actions rapides"
    >
      <a className="flex flex-col items-center gap-1 py-3 text-[10px] font-medium uppercase tracking-[0.16em]" href={site.phone.href}>
        <Phone size={16} strokeWidth={1.5} />
        Appeler
      </a>
      <a
        className="flex flex-col items-center gap-1 border-x border-line py-3 text-[10px] font-medium uppercase tracking-[0.16em]"
        href={site.address.mapsUrl}
        target="_blank"
        rel="noreferrer"
      >
        <MapPinned size={16} strokeWidth={1.5} />
        Itinéraire
      </a>
      <Link className="flex flex-col items-center gap-1 py-3 text-[10px] font-medium uppercase tracking-[0.16em]" to="/reserver">
        <CalendarCheck size={16} strokeWidth={1.5} />
        Réserver
      </Link>
    </nav>
  )
}
