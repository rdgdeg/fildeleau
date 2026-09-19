import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { site } from '../data/site'

export function NotFoundPage() {
  return (
    <main className="px-5 py-40 text-center">
      <Seo title={`Page introuvable | ${site.name}`} description="Cette page n’existe pas." />
      <h1 className="font-display text-3xl font-light text-mute">Page introuvable</h1>
      <p className="mt-4 text-mute">Cette adresse ne mène nulle part dans la maquette.</p>
      <Link to="/" className="btn mt-8">
        Retour à l’accueil
      </Link>
    </main>
  )
}
