import { Seo } from '../components/Seo'
import { site } from '../data/site'
import { FaqList } from '../sections/Reviews'

export function FaqPage() {
  return (
    <main>
      <Seo
        path="/faq"
        title={`FAQ | ${site.name} à ${site.commune}`}
        description="Horaires, terrasse, jeux, réservation : questions fréquentes sur Au Fil de l’Eau à Ath."
      />
      <header className="page-hero">
        <p className="kicker">Infos pratiques</p>
        <h1 className="font-display text-3xl font-light uppercase tracking-[0.04em] text-mute md:text-[42px]">
          Foire aux questions
        </h1>
      </header>
      <div className="pb-20">
        <FaqList />
      </div>
    </main>
  )
}
