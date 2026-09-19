import { useState } from 'react'
import { site } from '../data/site'

export function MenuBoard() {
  const [active, setActive] = useState(site.menu.categories[0].id)
  const current = site.menu.categories.find((c) => c.id === active) ?? site.menu.categories[0]

  return (
    <section className="bg-lin pb-20">
      <div className="mx-auto flex w-[min(900px,calc(100%-1.5rem))] gap-0 overflow-x-auto border-b border-line">
        {site.menu.categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActive(cat.id)}
            className={`shrink-0 px-5 py-3 text-[12px] uppercase tracking-[0.16em] ${
              cat.id === active ? 'border-b-2 border-canal text-canal' : 'text-mute'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <p className="mx-auto mt-8 w-[min(760px,calc(100%-2.25rem))] text-center text-sm text-mute">{current.intro}</p>
      <div className="mx-auto mt-10 w-[min(760px,calc(100%-2.25rem))]">
        {current.dishes.map((dish) => (
          <article key={dish.name} className="grid grid-cols-[1fr_auto] gap-x-6 border-b border-line py-4">
            <h3 className="text-base font-medium">{dish.name}</h3>
            <span className="confirm self-start">{dish.price}</span>
            <p className="col-start-1 text-sm text-mute">{dish.description}</p>
          </article>
        ))}
      </div>
      <p className="mx-auto mt-10 w-[min(760px,calc(100%-2.25rem))] text-center text-sm text-mute">{site.menu.note}</p>
    </section>
  )
}

export function Seasonal() {
  return (
    <section className="bg-paper py-16 md:py-20">
      <p className="kicker">L’ardoise</p>
      <h2 className="mb-3 text-center font-display text-3xl font-light text-mute md:text-4xl">{site.seasonal.title}</h2>
      <p className="mx-auto mb-12 max-w-2xl px-5 text-center text-sm text-mute">{site.seasonal.intro}</p>
      <div className="mx-auto grid w-[min(1100px,calc(100%-2.25rem))] gap-6 md:grid-cols-3">
        {site.seasonal.items.map((item) => (
          <article key={item.name} className="border border-dashed border-chene/40 bg-lin p-8">
            <p className="confirm mb-4">{item.tag}</p>
            <h3 className="font-display text-2xl font-light text-mute">{item.name}</h3>
            <p className="mt-3 text-sm text-mute">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
