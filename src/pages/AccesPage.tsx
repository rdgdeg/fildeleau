import { Seo } from '../components/Seo'
import { site } from '../data/site'

export function AccesPage() {
  return (
    <main>
      <Seo
        path="/acces"
        title={`Accès et horaires à Ath | ${site.name}`}
        description="Comment venir à Au Fil de l’Eau, Chemin de Tenre 77 à Ath. Parking, villages voisins, horaires à confirmer."
      />
      <header className="page-hero">
        <p className="kicker">
          {site.commune} · Rebaix
        </p>
        <h1 className="font-display text-3xl font-light uppercase tracking-[0.04em] text-mute md:text-[42px]">
          Accès &amp; horaires
        </h1>
      </header>
      <section className="mx-auto grid w-[min(1180px,calc(100%-2.25rem))] gap-12 pb-10 md:grid-cols-2">
        <div>
          <img
            src={site.images.facade.src}
            alt={site.images.facade.alt}
            width={site.images.facade.width}
            height={site.images.facade.height}
            className="mb-8 h-56 w-full object-cover object-top md:h-72"
            loading="lazy"
          />
          <h2 className="font-display text-3xl font-light text-mute">Venir au Fil de l’Eau</h2>
          <p className="mt-2 font-medium text-mute">
            {site.address.street} · {site.address.postalCode} {site.address.city}
          </p>
          <p className="mt-4 max-w-[52ch] text-mute">
            La brasserie se trouve au bord du canal, à quelques minutes du centre d’Ath. Pratique depuis
            Rebaix, Maffle, Irchonwelz, Ostiches et Ligne.
          </p>
          <p className="mt-3 max-w-[52ch] text-mute">
            Parking : <span className="confirm">[À CONFIRMER]</span>. Accessibilité PMR :{' '}
            <span className="confirm">[À CONFIRMER]</span>.
          </p>
          <div className="mt-7 flex flex-wrap">
            <a className="btn" href={site.address.mapsUrl} target="_blank" rel="noreferrer">
              Itinéraire
            </a>
            <a className="btn -ml-px" href={site.phone.href}>
              {site.phone.display}
            </a>
          </div>
        </div>
        <div>
          <h2 className="font-display text-3xl font-light text-mute">Horaires</h2>
          <div className="mt-4 max-w-md">
            {site.hours.lines.map((line) => (
              <div key={line.day} className="flex justify-between gap-6 border-b border-line py-2.5 text-[15px]">
                <span>{line.day}</span>
                <span className="text-mute">{line.value}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-mute">{site.hours.note}</p>
        </div>
      </section>
      <iframe
        className="mx-auto mb-16 block h-[420px] w-[min(1180px,calc(100%-2.25rem))] border-0 grayscale-[0.35]"
        title={`Carte — ${site.name}, ${site.commune}`}
        src={site.address.mapsEmbed}
        loading="lazy"
      />
    </main>
  )
}
