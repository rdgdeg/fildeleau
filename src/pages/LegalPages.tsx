import { Seo } from '../components/Seo'
import { site } from '../data/site'

export function MentionsPage() {
  return (
    <main>
      <Seo path="/mentions-legales" title={`Mentions légales | ${site.name}`} description="Mentions légales de la maquette Au Fil de l’Eau à Ath." />
      <header className="page-hero">
        <p className="kicker">Informations</p>
        <h1 className="font-display text-3xl font-light uppercase tracking-[0.04em] text-mute md:text-[42px]">
          Mentions légales
        </h1>
      </header>
      <article className="mx-auto mb-24 w-[min(760px,calc(100%-2.25rem))] space-y-4 text-mute">
        <p>Maquette de prospection. Canevas belge, à compléter avec les données de l’exploitant.</p>
        <h2 className="pt-4 text-xl font-medium text-ardoise">Éditeur</h2>
        <p>
          {site.legalName}
          <br />
          {site.address.street}
          <br />
          {site.address.postalCode} {site.address.city}
          <br />
          Belgique
          <br />
          Tél. : {site.phone.display}
          <br />
          E-mail : {site.email.display}
        </p>
        <p>
          Responsable de publication : {site.legal.responsable}
          <br />
          BCE : {site.legal.bce}
          <br />
          RPM : {site.legal.rpm}
          <br />
          TVA : {site.legal.tva}
        </p>
        <h2 className="pt-4 text-xl font-medium text-ardoise">Hébergement</h2>
        <p>[À CONFIRMER : hébergeur belge] — à définir à la mise en ligne.</p>
        <h2 className="pt-4 text-xl font-medium text-ardoise">Photographies</h2>
        <p>Visuels d’ambiance Unsplash. À remplacer par les photographies de la maison, de la terrasse et des assiettes.</p>
        <p className="pt-4 text-sm">Site réalisé par {site.agency} — proposition commerciale, non indexée.</p>
      </article>
    </main>
  )
}

export function ConfidentialitePage() {
  return (
    <main>
      <Seo
        path="/confidentialite"
        title={`Politique de confidentialité | ${site.name}`}
        description="Politique de confidentialité RGPD de la maquette Au Fil de l’Eau à Ath."
      />
      <header className="page-hero">
        <p className="kicker">RGPD</p>
        <h1 className="font-display text-3xl font-light uppercase tracking-[0.04em] text-mute md:text-[42px]">
          Politique de confidentialité
        </h1>
      </header>
      <article className="mx-auto mb-24 w-[min(760px,calc(100%-2.25rem))] space-y-4 text-mute">
        <p>
          Cette maquette n’envoie aucune donnée vers un serveur. Le formulaire de réservation reste dans votre
          navigateur.
        </p>
        <h2 className="pt-4 text-xl font-medium text-ardoise">Responsable du traitement</h2>
        <p>
          {site.legalName}, {site.address.street}, {site.address.postalCode} {site.address.city}. BCE :{' '}
          {site.legal.bce}.
        </p>
        <h2 className="pt-4 text-xl font-medium text-ardoise">Données collectées en production</h2>
        <p>
          Nom, téléphone, e-mail, date, nombre de convives, message. Finalité : gérer une réservation. Base
          légale : mesures précontractuelles. Durée : le temps du service, puis archivage comptable si une
          facture est émise. Pas de cession à des fins commerciales.
        </p>
        <h2 className="pt-4 text-xl font-medium text-ardoise">Vos droits</h2>
        <p>
          Accès, rectification, effacement, limitation, opposition : écrire à {site.email.display} ou appeler
          le {site.phone.display}. Réclamation : Autorité de protection des données (APD), rue de la Presse
          35, 1000 Bruxelles.
        </p>
      </article>
    </main>
  )
}
