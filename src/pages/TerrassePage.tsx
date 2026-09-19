import { Editorial } from '../components/Editorial'
import { Seo } from '../components/Seo'
import { site } from '../data/site'

export function TerrassePage() {
  return (
    <main>
      <Seo
        path="/terrasse"
        title={`Terrasse et plaine de jeux à Ath | ${site.name}`}
        description="Terrasse au canal, jardin et plaine de jeux à Au Fil de l’Eau, Chemin de Tenre à Ath. Réservez votre table dehors."
      />
      <header className="page-hero">
        <p className="kicker">Au bord du canal</p>
        <h1 className="font-display text-3xl font-light uppercase tracking-[0.04em] text-mute md:text-[42px]">
          Terrasse &amp; jeux
        </h1>
      </header>
      <Editorial
        title="Manger dehors, à Ath"
        lede="Le vrai luxe, ici, c’est le temps."
        image={site.images.jardin}
        botanical="right"
        actions={[
          { to: '/reserver', label: 'Réserver la terrasse' },
          { to: '/galerie', label: 'Voir les photos' },
        ]}
      >
        <p>
          La terrasse donne sur l’eau, entre les arbres. On y déjeune longuement, on y dîne à la fraîche. Pour
          une place dehors, surtout depuis Rebaix, Maffle ou le centre d’Ath un samedi, réservez et précisez
          « terrasse ».
        </p>
        <p>
          Fontaine, haies, tables sous les parasols : le jardin tel qu’il se photographie aujourd’hui.
        </p>
      </Editorial>
      <Editorial
        reverse
        title="La plaine de jeux"
        lede="Les enfants occupés, la table qui tient."
        image={site.images.jeux}
        actions={[{ to: '/reserver', label: 'Réserver près des jeux' }]}
      >
        <p>
          C’est l’argument que TripAdvisor raconte à votre place. Ici, on le dit nous-mêmes : il y a de quoi
          occuper les plus jeunes pendant que les grands finissent leur plat.
        </p>
        <p>
          Âges, clôture, visibilité depuis les tables : <span className="confirm">[À CONFIRMER]</span>. Photo
          de la plaine de jeux : <span className="confirm">[à fournir]</span>.
        </p>
      </Editorial>
      <Editorial
        dark
        title="Et quand il pleut ?"
        lede="La salle vous attend."
        image={site.images.interieur}
      >
        <p>
          La maison n’est pas qu’un jardin. À l’intérieur, on retrouve la même carte, le même accueil, et le
          vert derrière les baies.
        </p>
      </Editorial>
    </main>
  )
}
