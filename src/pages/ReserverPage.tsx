import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { site } from '../data/site'

type Errors = Record<string, string>

export function ReserverPage() {
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState<Errors>({})

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const next: Errors = {}
    if (!String(data.get('nom')).trim()) next.nom = 'Indiquez votre nom.'
    if (!String(data.get('tel')).trim()) next.tel = 'Indiquez un téléphone.'
    if (!String(data.get('email')).trim()) next.email = 'Indiquez un e-mail.'
    if (!String(data.get('couverts'))) next.couverts = 'Choisissez le nombre de convives.'
    if (!String(data.get('date'))) next.date = 'Choisissez une date.'
    if (!String(data.get('service'))) next.service = 'Choisissez un service.'
    setErrors(next)
    if (Object.keys(next).length === 0) setSent(true)
  }

  return (
    <main>
      <Seo
        path="/reserver"
        title={`Réserver une table à Ath | ${site.name}`}
        description="Réservez votre table à Au Fil de l’Eau, Chemin de Tenre à Ath. Terrasse ou salle, sans passer par un agrégateur."
      />
      <header className="page-hero">
        <p className="kicker">Une table</p>
        <h1 className="font-display text-3xl font-light uppercase tracking-[0.04em] text-mute md:text-[42px]">Réserver</h1>
      </header>
      <p className="mx-auto mb-10 max-w-xl px-5 text-center text-sm text-mute">
        Directement à la maison — pas de commission Booking, pas de file TripAdvisor. Vous pouvez aussi
        appeler le <a className="underline" href={site.phone.href}>{site.phone.display}</a>.
      </p>
      {sent ? (
        <div className="mx-auto max-w-lg px-5 pb-24 text-center">
          <h2 className="font-display text-3xl font-light text-mute">Votre demande est notée</h2>
          <p className="mt-4 text-mute">
            Dans la version définitive, ce message arrive à la maison. En attendant, confirmez au {site.phone.display}.
          </p>
          <Link to="/" className="btn mt-8">
            Retour à l’accueil
          </Link>
        </div>
      ) : (
        <form className="mx-auto mb-24 grid w-[min(640px,calc(100%-2.25rem))] gap-5" onSubmit={onSubmit} noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field name="nom" label="Nom" error={errors.nom} required />
            <Field name="tel" label="Téléphone" type="tel" error={errors.tel} required />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field name="email" label="E-mail" type="email" error={errors.email} required />
            <label className="flex flex-col gap-2">
              <span className="text-[11px] uppercase tracking-[0.16em] text-mute">Nombre de convives</span>
              <select name="couverts" className="min-h-[42px] w-full border-b border-[#c4c0b6] bg-transparent py-2 outline-none" required>
                <option value="">Choisir</option>
                {['2', '3', '4', '5', '6', '7', '8'].map((n) => (
                  <option key={n}>{n}</option>
                ))}
                <option value="9+">9 et plus</option>
              </select>
              {errors.couverts ? <span className="text-sm text-cuivre">{errors.couverts}</span> : null}
            </label>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field name="date" label="Date" type="date" error={errors.date} required />
            <label className="flex flex-col gap-2">
              <span className="text-[11px] uppercase tracking-[0.16em] text-mute">Service</span>
              <select name="service" className="min-h-[42px] w-full border-b border-[#c4c0b6] bg-transparent py-2 outline-none" required>
                <option value="">Choisir</option>
                <option>Déjeuner</option>
                <option>Dîner</option>
                <option>Dimanche — service continu [À CONFIRMER]</option>
              </select>
              {errors.service ? <span className="text-sm text-cuivre">{errors.service}</span> : null}
            </label>
          </div>
          <label className="flex flex-col gap-2">
            <span className="text-[11px] uppercase tracking-[0.16em] text-mute">Souhait de place</span>
            <select name="place" className="min-h-[42px] w-full border-b border-[#c4c0b6] bg-transparent py-2 outline-none">
              <option>Sans préférence</option>
              <option>Terrasse / jardin</option>
              <option>Près de la plaine de jeux</option>
              <option>Salle</option>
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-[11px] uppercase tracking-[0.16em] text-mute">Message, allergies, occasion</span>
            <textarea name="message" rows={4} className="w-full border-b border-[#c4c0b6] bg-transparent py-2 outline-none" placeholder="Anniversaire, chaise haute, régime…" />
          </label>
          <button className="btn justify-self-start" type="submit">
            Envoyer la demande
          </button>
        </form>
      )}
    </main>
  )
}

function Field({
  name,
  label,
  type = 'text',
  error,
  required,
}: {
  name: string
  label: string
  type?: string
  error?: string
  required?: boolean
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[11px] uppercase tracking-[0.16em] text-mute">{label}</span>
      <input name={name} type={type} required={required} className="min-h-[42px] w-full border-b border-[#c4c0b6] bg-transparent py-2 outline-none" />
      {error ? <span className="text-sm text-cuivre">{error}</span> : null}
    </label>
  )
}
