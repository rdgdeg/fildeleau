import { useState } from 'react'
import { Seo } from '../components/Seo'
import { site } from '../data/site'

export function GaleriePage() {
  const [full, setFull] = useState<string | null>(null)

  return (
    <main>
      <Seo
        path="/galerie"
        title={`Galerie photos | ${site.name} à ${site.commune}`}
        description="Photos de la brasserie Au Fil de l’Eau à Ath : terrasse, jardin, façade, assiettes et salle."
      />
      <header className="page-hero">
        <p className="kicker">Ambiances</p>
        <h1 className="font-display text-3xl font-light uppercase tracking-[0.04em] text-mute md:text-[42px]">
          Galerie photos
        </h1>
      </header>
      <div className="mx-auto grid w-[min(1180px,calc(100%-1.5rem))] grid-cols-1 gap-3.5 pb-8 sm:grid-cols-2 md:grid-cols-3">
        {site.gallery.map((img) => (
          <button
            key={img.src}
            type="button"
            className={`overflow-hidden ${img.wide ? 'sm:col-span-2' : ''}`}
            onClick={() => setFull(img.full)}
          >
            <img src={img.src} alt={img.alt} className="h-72 w-full object-cover transition duration-700 hover:scale-105" loading="lazy" width={900} height={600} />
          </button>
        ))}
      </div>
      <p className="mx-auto max-w-2xl px-5 pb-16 text-center text-sm text-mute">
        Photos de la page Facebook officielle du restaurant, intégrées pour la maquette. La plaine de jeux
        n’apparaît pas encore : cliché à fournir.
      </p>
      {full ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-8" onClick={() => setFull(null)} onKeyDown={(e) => e.key === 'Escape' && setFull(null)} role="dialog" aria-modal="true">
          <button type="button" className="absolute right-6 top-6 text-[12px] uppercase tracking-[0.16em] text-white">
            Fermer
          </button>
          <img src={full} alt="" className="max-h-[88vh] max-w-[min(1100px,92vw)] object-contain" />
        </div>
      ) : null}
    </main>
  )
}
