import { useCallback, useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import { MaquetteBadge } from './MaquetteBadge'
import { MenuOverlay } from './MenuOverlay'
import { MobileBar } from './MobileBar'

export function Layout() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const close = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight - 90)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  return (
    <>
      <Header overHero={pathname === '/'} solid={solid} onOpen={() => setMenuOpen(true)} />
      <MenuOverlay open={menuOpen} current={pathname} onClose={close} />
      <Outlet />
      <Footer />
      <MobileBar />
      <MaquetteBadge />
    </>
  )
}
