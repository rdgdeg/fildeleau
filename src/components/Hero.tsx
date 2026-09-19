import { Link } from 'react-router-dom'
import { site } from '../data/site'

export function Hero() {
  const slide = site.hero.slides[0]

  return (
    <section className="relative min-h-[640px] overflow-hidden bg-deep text-white" style={{ height: '100svh' }} aria-label="Accueil">
      <div className="absolute inset-0">
        <img
          src={slide.image.src}
          alt={slide.image.alt}
          width={slide.image.width}
          height={slide.image.height}
          className="h-full w-full object-cover contrast-[1.05] saturate-[0.92]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-black/20" />
      </div>
      <div className="absolute bottom-20 left-1/2 z-10 w-[min(720px,88vw)] -translate-x-1/2 text-center">
        <p className="mb-7 font-display text-lg font-light md:text-xl">{slide.caption}</p>
        <a href="#maison" className="inline-flex flex-col items-center gap-3 text-[12px] uppercase tracking-[0.2em] text-white/90">
          Découvrir
          <span className="h-10 w-px bg-white/70" />
        </a>
      </div>
      <div className="sr-only">
        <Link to="/reserver">Réserver une table</Link>
      </div>
    </section>
  )
}
