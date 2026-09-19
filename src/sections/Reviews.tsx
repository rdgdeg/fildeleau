import { useState } from 'react'
import { site } from '../data/site'

export function Reviews() {
  return (
    <section className="bg-paper py-16 md:py-24">
      <p className="kicker">Ce que disent les tables</p>
      <h2 className="mx-auto mb-3 max-w-2xl px-5 text-center font-display text-3xl font-light text-mute md:text-4xl">
        Vos avis Google, ici — pas sur un annuaire
      </h2>
      <p className="mx-auto mb-12 max-w-xl px-5 text-center text-sm text-mute">
        Exemple – vos avis Google s’afficheront ici. Aucun témoignage inventé.
      </p>
      <div className="mx-auto grid w-[min(1100px,calc(100%-2.25rem))] gap-5 md:grid-cols-3">
        {site.reviews.map((r) => (
          <figure key={r.author} className="border border-dashed border-line bg-lin p-7">
            <figcaption className="mb-4 text-[10px] uppercase tracking-[0.18em] text-cuivre">
              Exemple – vos avis Google s’afficheront ici
            </figcaption>
            <blockquote className="font-display text-lg font-light leading-snug text-mute">« {r.quote} »</blockquote>
            <p className="mt-5 text-sm text-mute">{r.author}</p>
          </figure>
        ))}
      </div>
    </section>
  )
}

export function FaqList({ preview = false }: { preview?: boolean }) {
  const items = preview ? site.faq.slice(0, 4) : site.faq
  const [open, setOpen] = useState(0)

  return (
    <div className="mx-auto w-[min(820px,calc(100%-2.25rem))]">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.q} className="border-b border-line">
            <button
              type="button"
              className="relative w-full py-5 pr-10 text-left text-lg"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              {item.q}
              <span className={`absolute right-2 top-1/2 h-2.5 w-2.5 border-b border-r border-ardoise ${isOpen ? '-translate-y-1/4 rotate-[225deg]' : '-translate-y-[70%] rotate-45'}`} />
            </button>
            {isOpen ? <p className="pb-5 pr-2 text-mute">{item.a}</p> : null}
          </div>
        )
      })}
    </div>
  )
}
