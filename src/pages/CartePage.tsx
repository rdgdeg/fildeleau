import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { site } from '../data/site'
import { MenuBoard, Seasonal } from '../sections/MenuBoard'

export function CartePage() {
  return (
    <main>
      <Seo
        path="/carte"
        title={`Carte du restaurant à ${site.commune} | ${site.name}`}
        description="Carte de la brasserie Au Fil de l’Eau à Ath : payelles, brasserie, menu enfants. Suggestions de saison. Tarifs à confirmer."
      />
      <header className="page-hero">
        <p className="kicker">Cuisine de brasserie</p>
        <h1 className="font-display text-3xl font-light uppercase tracking-[0.04em] text-mute md:text-[42px]">La carte</h1>
      </header>
      <p className="mx-auto mb-10 max-w-2xl px-5 text-center text-sm text-mute">
        Plus besoin de TripAdvisor pour savoir ce qu’on mange. Les plats ci-dessous sont une structure de
        carte, à caler sur la vraie — chaque tarif reste marqué.
      </p>
      <div className="mx-auto mb-14 grid w-[min(1100px,calc(100%-1.5rem))] grid-cols-1 gap-3 sm:grid-cols-3">
        {[site.images.plat, site.images.fromage, site.images.steak].map((img) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            className="h-56 w-full object-cover md:h-72"
            loading="lazy"
          />
        ))}
      </div>
      <MenuBoard />
      <Seasonal />
      <p className="py-16 text-center">
        <Link to="/reserver" className="btn">
          Réserver une table
        </Link>
      </p>
    </main>
  )
}
