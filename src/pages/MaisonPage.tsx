import { Editorial } from '../components/Editorial'
import { Seo } from '../components/Seo'
import { site } from '../data/site'

export function MaisonPage() {
  return (
    <main>
      <Seo
        path="/maison"
        title={`La maison | ${site.name} à ${site.commune}`}
        description="Brasserie Au Fil de l’Eau au Chemin de Tenre à Ath : une table de Wallonie picarde, entre Rebaix et le canal."
      />
      <header className="page-hero">
        <p className="kicker">
          {site.commune} · Wallonie picarde
        </p>
        <h1 className="font-display text-3xl font-light uppercase tracking-[0.04em] text-mute md:text-[42px]">La maison</h1>
      </header>
      <Editorial
        title="Une brasserie au Chemin de Tenre"
        lede="Hospitalité, terroir, simplicité"
        image={site.images.interieur}
        botanical="right"
      >
        <p>
          Au Fil de l’Eau n’est pas un restaurant que l’on traverse. C’est une maison que l’on habite le temps
          d’un repas. On y parle fort parfois, on s’y attarde souvent.
        </p>
        <p>
          L’histoire de la maison, les noms, l’année d’ouverture :{' '}
          <span className="confirm">[À CONFIRMER]</span>
        </p>
      </Editorial>
      <Editorial
        reverse
        title="Pour Ath et les villages autour"
        lede="Rebaix, Maffle, Irchonwelz, Ostiches, Ligne"
        image={site.images.convives}
        actions={[
          { to: '/carte', label: 'Découvrir la carte' },
          { to: '/reserver', label: 'Réserver une table' },
        ]}
      >
        <p>
          Anniversaires, repas de famille, midi de semaine : la maison s’adapte. Signalez un régime, une
          chaise haute, une tablée nombreuse. Pour les groupes, appelez le {site.phone.display}.
        </p>
        <p>
          Capacité, privatisation, accessibilité PMR : <span className="confirm">[À CONFIRMER]</span>
        </p>
      </Editorial>
    </main>
  )
}
