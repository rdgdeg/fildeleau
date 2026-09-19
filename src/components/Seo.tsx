import { Helmet } from 'react-helmet-async'
import { site } from '../data/site'

type Props = {
  title?: string
  description?: string
  path?: string
}

export function Seo({ title, description, path = '/' }: Props) {
  const fullTitle = title ?? site.seo.title
  const desc = description ?? site.seo.description
  const url = `https://au-fil-de-leau.example${path}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: site.name,
    image: site.seo.ogImage,
    telephone: site.phone.international,
    servesCuisine: ['Belge', 'Brasserie'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressCountry: 'BE',
    },
    url,
    sameAs: [site.social.facebook],
    areaServed: [site.commune, ...site.villages].map((name) => ({
      '@type': 'City',
      name,
    })),
  } as const

  return (
    <Helmet>
      <html lang="fr-BE" />
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="robots" content="noindex, nofollow" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="fr_BE" />
      <meta property="og:image" content={site.seo.ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  )
}
