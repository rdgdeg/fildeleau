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
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/30" />
      </div>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
        <p className="mb-5 text-[11px] uppercase tracking-[0.32em] text-white/75">{site.activity}</p>
        <h1 className="font-display text-[clamp(2.4rem,7vw,6.5rem)] font-light leading-[1.05] tracking-[0.04em] text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.35)]">
          {site.name}
        </h1>
        <p className="mt-6 max-w-xl font-display text-base font-light text-white/90 md:text-xl">{slide.caption}</p>
      </div>
      <a
        href="#maison"
        className="absolute bottom-16 left-1/2 z-10 inline-flex -translate-x-1/2 flex-col items-center gap-3 text-[12px] uppercase tracking-[0.2em] text-white/90"
      >
        Découvrir
        <span className="h-10 w-px bg-white/70" />
      </a>
      <div className="sr-only">
        <Link to="/reserver">Réserver une table</Link>
      </div>
    </section>
  )
}
