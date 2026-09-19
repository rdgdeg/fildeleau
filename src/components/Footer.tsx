import { Link } from 'react-router-dom'
import { site } from '../data/site'

export function Footer() {
  return (
    <footer className="border-t border-line bg-lin pb-24 pt-14 md:pb-10">
      <div className="mx-auto grid w-[min(1180px,calc(100%-2.5rem))] gap-10 pb-12 md:grid-cols-3">
        <div>
          <h2 className="mb-3 text-[13px] font-medium uppercase tracking-[0.18em]">{site.name}</h2>
          <p className="text-[15px] text-mute">
            {site.address.street}
            <br />
            {site.address.postalCode} {site.address.city}
          </p>
          <p className="mt-3">
            <a className="text-[15px] text-mute hover:text-ardoise" href={site.phone.href}>
              Téléphone : {site.phone.display}
            </a>
          </p>
          <p className="mt-1 text-[15px] text-mute">
            E-mail : <span className="confirm">{site.email.display}</span>
          </p>
          <a
            className="mt-4 inline-block text-[11px] uppercase tracking-[0.14em] text-mute hover:text-ardoise"
            href={site.social.facebook}
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </div>
        <div>
          <h2 className="mb-3 text-[13px] font-medium uppercase tracking-[0.18em]">Venir à table</h2>
          <ul className="space-y-1.5 text-[15px] text-mute">
            <li>
              <Link to="/reserver" className="hover:text-ardoise">
                Réserver une table
              </Link>
            </li>
            <li>
              <Link to="/carte" className="hover:text-ardoise">
                La carte
              </Link>
            </li>
            <li>
              <Link to="/offrir" className="hover:text-ardoise">
                Offrir un bon cadeau
              </Link>
            </li>
            <li>
              <Link to="/acces" className="hover:text-ardoise">
                Accès &amp; horaires
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-3 text-[13px] font-medium uppercase tracking-[0.18em]">Horaires</h2>
          <p className="text-[15px] text-mute">
            <span className="confirm">{site.hours.label}</span>
            <br />
            {site.hours.note}
          </p>
        </div>
      </div>
      <div className="mx-auto flex w-[min(1180px,calc(100%-2.5rem))] flex-wrap justify-between gap-3 border-t border-line pt-5 text-[12px] text-mute">
        <span>
          © {site.name} — {site.commune}
          <span className="mt-1 block text-[11px] text-line">
            Maquette de prospection — photos d’ambiance, horaires et tarifs à valider.
          </span>
        </span>
        <span className="flex flex-wrap gap-x-3">
          <Link to="/mentions-legales">Mentions légales</Link>
          <Link to="/confidentialite">Confidentialité</Link>
          <span>Site réalisé par {site.agency}</span>
        </span>
      </div>
    </footer>
  )
}
