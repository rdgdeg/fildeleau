import { Menu } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { site } from '../data/site'
import { Logo } from './Logo'

type Props = {
  overHero: boolean
  solid: boolean
  onOpen: () => void
}

export function Header({ overHero, solid, onOpen }: Props) {
  const { pathname } = useLocation()
  const light = overHero && !solid && pathname === '/'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        light ? 'header-over text-white' : 'bg-lin text-ardoise'
      } ${light ? 'bg-gradient-to-b from-black/45 to-transparent' : ''}`}
    >
      <div className="header-grid">
        <div className="header-cell">
          <button type="button" className="inline-flex items-center gap-3" onClick={onOpen} aria-expanded="false">
            <Menu size={16} strokeWidth={1.5} />
            <span className="hidden sm:inline">Menu</span>
          </button>
        </div>
        <Link to="/" className="flex items-center justify-center" aria-label={`${site.name}, accueil`}>
          <Logo />
        </Link>
        <Link to="/offrir" className="header-cell header-offrir">
          Offrir
        </Link>
        <Link to="/reserver" className="header-cell font-semibold">
          Réserver
        </Link>
      </div>
    </header>
  )
}
