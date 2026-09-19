import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { site } from '../data/site'

export function OffrirPage() {
  return (
    <main>
      <Seo
        path="/offrir"
        title={`Bons cadeaux | ${site.name} à ${site.commune}`}
        description="Offrez un repas à la brasserie Au Fil de l’Eau à Ath. Bons cadeaux à retirer à la maison."
      />
      <header className="page-hero">
        <p className="kicker">À offrir</p>
        <h1 className="font-display text-3xl font-light uppercase tracking-[0.04em] text-mute md:text-[42px]">
          Bons cadeaux
        </h1>
      </header>
      <p className="mx-auto mb-12 max-w-xl px-5 text-center text-sm text-mute">
        Un déjeuner au jardin, une payelle à partager, un dimanche en famille. Montants et validité à caler
        avec la maison.
      </p>
      <img
        src={site.images.convives.src}
        alt={site.images.convives.alt}
        width={site.images.convives.width}
        height={site.images.convives.height}
        className="mx-auto mb-14 h-64 w-[min(1100px,calc(100%-1.5rem))] object-cover md:h-[420px]"
        loading="lazy"
      />
      <section className="mx-auto mb-20 grid w-[min(1100px,calc(100%-2.25rem))] gap-5 md:grid-cols-3">
        {site.gifts.map((g) => (
          <article key={g.title} className="border border-line bg-white p-9 text-center">
            <h2 className="font-display text-2xl font-normal text-mute">{g.title}</h2>
            <p className="my-4 font-display text-2xl font-light text-canal">{g.amount}</p>
            <p className="text-sm text-mute">{g.text}</p>
            <Link to="/reserver" className="btn mt-6">
              Demander
            </Link>
          </article>
        ))}
      </section>
    </main>
  )
}
