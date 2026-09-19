import { Link } from 'react-router-dom'
import { Editorial } from '../components/Editorial'
import { Hero } from '../components/Hero'
import { Seo } from '../components/Seo'
import { site } from '../data/site'
import { MenuBoard, Seasonal } from '../sections/MenuBoard'
import { FaqList, Reviews } from '../sections/Reviews'

export function HomePage() {
  return (
    <main>
      <Seo path="/" />
      <Hero />
      <Editorial
        id="maison"
        kicker={`Restaurant-brasserie à ${site.commune}`}
        title="Une table au bord du canal"
        lede="La carte chez vous, pas seulement sur Facebook."
        image={site.images.salle}
        botanical="right"
        actions={[
          { to: '/maison', label: 'La maison' },
          { to: '/reserver', label: 'Réserver une table' },
        ]}
      >
        <p>
          Au Fil de l’Eau est une brasserie au Chemin de Tenre, à Ath — côté Rebaix, le long de l’eau. On y
          vient pour une tablée sans chichi : terrasse, jardin, plaine de jeux pour les enfants, et une cuisine
          de brasserie.
        </p>
        <p>
          Aujourd’hui, pour voir la carte, il faut encore passer par TripAdvisor ou resto.be. Ce site sert à
          ça : la carte, les suggestions de saison, et une table réservée en direct.
        </p>
      </Editorial>
      <Editorial
        reverse
        title="Terrasse, jardin, jeux"
        lede="Le week-end, c’est souvent pour ça qu’on appelle."
        images={[site.images.jardin, site.images.jeux]}
        actions={[
          { to: '/terrasse', label: 'Terrasse & jeux' },
          { to: '/reserver', label: 'Réserver' },
        ]}
      >
        <p>
          Dès qu’il fait beau, les tables sortent. Les enfants ont de la place. Les parents voient la table
          depuis le jardin — l’agencement exact est à confirmer avec la maison, mais l’idée est claire : on
          s’attable sans surveiller la route.
        </p>
        <p>
          Précisez « terrasse » ou « près des jeux » quand vous réservez. On fait ce qu’on peut ; le ciel
          décide du reste.
        </p>
      </Editorial>
      <Seasonal />
      <div className="bg-lin pt-16 md:pt-20">
        <p className="kicker">À table</p>
        <h2 className="mb-8 text-center font-display text-3xl font-light text-mute md:text-4xl">La carte, lisible sur le téléphone</h2>
        <div className="mx-auto mb-12 grid w-[min(1100px,calc(100%-1.5rem))] grid-cols-1 gap-3 sm:grid-cols-3">
          {[site.images.plat, site.images.fromage, site.images.steak].map((img) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="h-52 w-full object-cover md:h-64"
              loading="lazy"
            />
          ))}
        </div>
        <MenuBoard />
      </div>
      <Editorial
        dark
        title="Pas besoin d’un agrégateur pour s’asseoir"
        lede={`${site.proof.google} · ${site.proof.zone}`}
        image={site.images.terrasse}
        actions={[
          { to: '/reserver', label: 'Réserver une table', light: true },
          { to: '/acces', label: 'Accès & horaires', light: true },
        ]}
      >
        <p>
          Ath, Rebaix, Maffle, Irchonwelz, Ostiches, Ligne : vous n’êtes jamais loin. Le numéro est le 068 28
          33 38. Les horaires : <span className="confirm">{site.hours.label}</span>
        </p>
      </Editorial>
      <Reviews />
      <section className="bg-lin py-16 md:py-24">
        <p className="kicker">Questions fréquentes</p>
        <FaqList preview />
        <p className="mt-10 text-center">
          <Link to="/faq" className="btn">
            Toute la FAQ
          </Link>
        </p>
      </section>
    </main>
  )
}
