export type NavLink = {
  to: string
  label: string
  group: 'main' | 'sub'
}

export type MenuDish = {
  name: string
  description: string
  price: string
}

export type MenuCategory = {
  id: string
  label: string
  intro: string
  dishes: MenuDish[]
}

export type SiteImage = {
  src: string
  alt: string
  width: number
  height: number
}

const photo = (file: string, alt: string, width: number, height: number): SiteImage => ({
  src: `/images/${file}`,
  alt,
  width,
  height,
})

export const site = {
  agency: 'LD Media',
  showMaquetteBadge: true,
  maquetteBadge: 'Maquette LD Media – proposition pour Au Fil de l’Eau',

  name: 'Au Fil de l’Eau',
  legalName: 'Au Fil de l’Eau',
  tagline: 'taverne · terrasse · canal',
  activity: 'Restaurant-brasserie',
  commune: 'Ath',
  villages: ['Rebaix', 'Maffle', 'Irchonwelz', 'Ostiches', 'Ligne'],

  address: {
    street: 'Chemin de Tenre 77',
    postalCode: '7800',
    city: 'Ath',
    country: 'Belgique',
    mapsQuery: 'Chemin de Tenre 77, 7800 Ath, Belgique',
    mapsUrl: 'https://maps.google.com/?q=Chemin+de+Tenre+77+7800+Ath',
    mapsEmbed:
      'https://maps.google.com/maps?q=Chemin%20de%20Tenre%2077%207800%20Ath&z=15&output=embed',
  },

  phone: {
    display: '068 28 33 38',
    href: 'tel:+3268283338',
    international: '+32 68 28 33 38',
  },
  email: {
    display: '[À CONFIRMER]',
    href: null as string | null,
  },
  social: {
    facebook: 'https://www.facebook.com/restaurantathhainaut/',
    instagram: null as string | null,
  },

  hours: {
    label: '[À CONFIRMER]',
    note: 'Horaires à confirmer auprès de la maison, notamment les jours fériés.',
    lines: [
      { day: 'Lundi', value: '[À CONFIRMER]' },
      { day: 'Mardi', value: '[À CONFIRMER]' },
      { day: 'Mercredi', value: '[À CONFIRMER]' },
      { day: 'Jeudi', value: '[À CONFIRMER]' },
      { day: 'Vendredi', value: '[À CONFIRMER]' },
      { day: 'Samedi', value: '[À CONFIRMER]' },
      { day: 'Dimanche', value: '[À CONFIRMER]' },
    ],
  },

  seo: {
    title: 'Restaurant-brasserie à Ath | Au Fil de l’Eau',
    description:
      'Brasserie au Chemin de Tenre à Ath : terrasse au canal, plaine de jeux, carte sur place. Réservez votre table sans passer par un agrégateur.',
    ogImage: '/images/salle.jpg',
  },

  proof: {
    google: '[À CONFIRMER : note Google]',
    since: '[À CONFIRMER : année]',
    zone: 'Ath, Rebaix, Maffle, Irchonwelz',
  },

  nav: [
    { to: '/', label: 'Accueil', group: 'main' },
    { to: '/maison', label: 'La maison', group: 'main' },
    { to: '/carte', label: 'La carte', group: 'main' },
    { to: '/terrasse', label: 'Terrasse & jeux', group: 'main' },
    { to: '/offrir', label: 'Bons cadeaux', group: 'main' },
    { to: '/galerie', label: 'Galerie photos', group: 'sub' },
    { to: '/acces', label: 'Accès & horaires', group: 'sub' },
    { to: '/faq', label: 'FAQ', group: 'sub' },
    { to: '/reserver', label: 'Réserver une table', group: 'sub' },
  ] satisfies NavLink[],

  hero: {
    kicker: 'Brasserie à Ath',
    slides: [
      {
        image: photo(
          'salle.jpg',
          'Convives trinquant au jardin d’Au Fil de l’Eau, près de la fontaine',
          1366,
          1366,
        ),
        caption: 'Une table au jardin, entre Ath et Rebaix',
      },
    ],
  },

  images: {
    salle: photo(
      'plat.jpg',
      'Tablée au jardin d’Au Fil de l’Eau, autour de la fontaine',
      1366,
      1366,
    ),
    interieur: photo(
      'interieur.jpg',
      'Salle de la brasserie : luminaire en rotin, baie ouverte sur le jardin',
      1366,
      1366,
    ),
    jardin: photo(
      'jardin.jpg',
      'Table de terrasse dressée, cube gravé Au Fil de l’Eau',
      1366,
      1366,
    ),
    terrasse: photo(
      'terrasse.jpg',
      'Terrasse pavée et jardin avec fontaine, Au Fil de l’Eau à Ath',
      2048,
      1331,
    ),
    jeux: photo(
      'table.jpg',
      'Fontaine du jardin — photo de la plaine de jeux encore à fournir',
      1366,
      1366,
    ),
    steak: photo(
      'frites.jpg',
      'Plat de brasserie : volaille en sauce, frites et salade',
      965,
      965,
    ),
    plat: photo('sole.jpg', 'Poisson grillé, citron et salade, servi à Au Fil de l’Eau', 1536, 1536),
    fromage: photo(
      'croquettes.jpg',
      'Croquettes dorées, salade et citron, assiette de la maison',
      1988,
      1988,
    ),
    dessert: photo(
      'cuisine.jpg',
      'Dressage en cuisine : assiettes de brasserie prêtes au service',
      1366,
      1366,
    ),
    verres: photo(
      'service-vin.jpg',
      'Service du vin en terrasse, cube de table Au Fil de l’Eau',
      1366,
      1366,
    ),
    convives: photo(
      'salle.jpg',
      'Couple trinquant au jardin d’Au Fil de l’Eau',
      1366,
      1366,
    ),
    facade: photo(
      'enseigne.jpg',
      'Façade et enseigne Au Fil de l’Eau, Chemin de Tenre à Ath',
      1366,
      1366,
    ),
    atelier: photo(
      'moules-1.jpg',
      'Préparation des croquettes en cuisine, panure maison',
      1071,
      1071,
    ),
  } satisfies Record<string, SiteImage>,

  gallery: [
    {
      src: '/images/terrasse.jpg',
      full: '/images/terrasse.jpg',
      alt: 'Terrasse et jardin : fontaine, haies et tables sous les parasols',
      wide: true,
    },
    {
      src: '/images/enseigne.jpg',
      full: '/images/enseigne.jpg',
      alt: 'Entrée du restaurant-brasserie Au Fil de l’Eau',
      wide: false,
    },
    {
      src: '/images/interieur.jpg',
      full: '/images/interieur.jpg',
      alt: 'Intérieur : lumière du jardin et luminaire en rotin',
      wide: false,
    },
    {
      src: '/images/jardin.jpg',
      full: '/images/jardin.jpg',
      alt: 'Table de terrasse, verres et cube gravé au nom de la maison',
      wide: false,
    },
    {
      src: '/images/salle.jpg',
      full: '/images/salle.jpg',
      alt: 'Convives au jardin, près de la fontaine',
      wide: false,
    },
    {
      src: '/images/plat.jpg',
      full: '/images/plat.jpg',
      alt: 'Déjeuner au jardin, autour de la fontaine',
      wide: false,
    },
    {
      src: '/images/table.jpg',
      full: '/images/table.jpg',
      alt: 'Détail de la fontaine du jardin',
      wide: false,
    },
    {
      src: '/images/sole.jpg',
      full: '/images/sole.jpg',
      alt: 'Poisson grillé servi à la brasserie',
      wide: false,
    },
    {
      src: '/images/croquettes.jpg',
      full: '/images/croquettes.jpg',
      alt: 'Croquettes et salade',
      wide: false,
    },
    {
      src: '/images/frites.jpg',
      full: '/images/frites.jpg',
      alt: 'Plat de brasserie, frites et salade',
      wide: false,
    },
    {
      src: '/images/cuisine.jpg',
      full: '/images/cuisine.jpg',
      alt: 'Dressage des assiettes en cuisine',
      wide: false,
    },
    {
      src: '/images/service-vin.jpg',
      full: '/images/service-vin.jpg',
      alt: 'Service du vin en terrasse',
      wide: false,
    },
    {
      src: '/images/trinquer.jpg',
      full: '/images/trinquer.jpg',
      alt: 'Trinquer au jardin',
      wide: false,
    },
    {
      src: '/images/moules-1.jpg',
      full: '/images/moules-1.jpg',
      alt: 'Préparation des croquettes, panure maison',
      wide: false,
    },
  ],

  menu: {
    note: 'Carte d’inspiration, à valider avec la maison. Les prix ne sont pas publiés ici.',
    categories: [
      {
        id: 'payelles',
        label: 'Les payelles',
        intro: 'La spécialité de la maison, servie dans sa poêle. Déclinaisons à confirmer.',
        dishes: [
          {
            name: 'Payelle savoyarde',
            description: 'Pommes de terre, lardons, fromage — [À CONFIRMER : recette exacte]',
            price: '[À CONFIRMER : tarif]',
          },
          {
            name: 'Payelle forestière',
            description: 'Champignons, crème — [À CONFIRMER : recette exacte]',
            price: '[À CONFIRMER : tarif]',
          },
          {
            name: 'Payelle du moment',
            description: 'Selon le marché, écrite au tableau',
            price: '[À CONFIRMER : tarif]',
          },
        ],
      },
      {
        id: 'brasserie',
        label: 'Brasserie',
        intro: 'Cuisine de brasserie belge, portions généreuses. Liste à caler sur la vraie carte.',
        dishes: [
          {
            name: 'Moules-frites',
            description: 'Selon arrivage — [À CONFIRMER : préparations]',
            price: '[À CONFIRMER : tarif]',
          },
          {
            name: 'Viande grillée',
            description: 'Pièce et garniture du jour — [À CONFIRMER]',
            price: '[À CONFIRMER : tarif]',
          },
          {
            name: 'Vol-au-vent',
            description: '[À CONFIRMER : présence à la carte]',
            price: '[À CONFIRMER : tarif]',
          },
          {
            name: 'Salade copieuse',
            description: '[À CONFIRMER : variantes]',
            price: '[À CONFIRMER : tarif]',
          },
        ],
      },
      {
        id: 'enfants',
        label: 'Pour les enfants',
        intro: 'La plaine de jeux n’a d’intérêt que si l’assiette suit. Menu junior à confirmer.',
        dishes: [
          {
            name: 'Menu junior',
            description: '[À CONFIRMER : composition]',
            price: '[À CONFIRMER : tarif]',
          },
          {
            name: 'Mini-payelle',
            description: '[À CONFIRMER : présence à la carte]',
            price: '[À CONFIRMER : tarif]',
          },
        ],
      },
      {
        id: 'douceurs',
        label: 'Douceurs',
        intro: 'Pour finir au jardin, ou à l’intérieur s’il pleut.',
        dishes: [
          {
            name: 'Crêpe',
            description: '[À CONFIRMER : garnitures]',
            price: '[À CONFIRMER : tarif]',
          },
          {
            name: 'Glace',
            description: '[À CONFIRMER]',
            price: '[À CONFIRMER : tarif]',
          },
        ],
      },
    ] satisfies MenuCategory[],
  },

  seasonal: {
    title: 'Suggestions de saison',
    intro:
      'Un bloc à tenir à jour (ardoise du week-end, asperges, gibier, moules…). Les plats ci-dessous sont des exemples de mise en page, pas la carte réelle.',
    items: [
      {
        name: 'Exemple — plat du moment',
        text: 'Une ligne courte, le produit, la cuisson. Rien de plus.',
        tag: 'Exemple',
      },
      {
        name: 'Exemple — suggestion du chef',
        text: 'Ce que vous écririez au feutre, près de la caisse.',
        tag: 'Exemple',
      },
      {
        name: 'Exemple — dessert du dimanche',
        text: 'Pour ceux qui restent encore un quart d’heure au jardin.',
        tag: 'Exemple',
      },
    ],
  },

  gifts: [
    {
      title: 'Table pour deux',
      text: 'Un repas à composer sur place, d’après la carte du jour.',
      amount: '[À CONFIRMER : tarif]',
    },
    {
      title: 'La payelle',
      text: 'De quoi savourer la spécialité de la maison.',
      amount: '[À CONFIRMER : tarif]',
    },
    {
      title: 'Montant libre',
      text: 'Le montant que vous choisissez. Validité à confirmer.',
      amount: '[À CONFIRMER]',
    },
  ],

  reviews: [
    {
      quote: 'Ici s’afficheront vos vrais avis Google : terrasse, service, plat du jour.',
      author: 'Prénom · Ath',
    },
    {
      quote: 'Les familles parleront des jeux. Les habitués, de « leur » table.',
      author: 'Prénom · Rebaix',
    },
    {
      quote: 'On relie le widget Google dès que le compte est confirmé. Pas d’avis inventés.',
      author: 'Prénom · Maffle',
    },
  ],

  faq: [
    {
      q: 'Faut-il réserver, surtout pour la terrasse ?',
      a: 'Oui, surtout le week-end et dès qu’il fait beau. Précisez « terrasse » ou « près des jeux ». Vous pouvez réserver ici ou appeler le 068 28 33 38.',
    },
    {
      q: 'Y a-t-il une plaine de jeux ?',
      a: 'Oui : terrasse, jardin et plaine de jeux. L’agencement exact (âge, visibilité depuis les tables) est à confirmer avec la maison.',
    },
    {
      q: 'Où se trouve Au Fil de l’Eau ?',
      a: 'Chemin de Tenre 77, 7800 Ath — côté Rebaix, au bord du canal. Pratique depuis le centre d’Ath, Maffle, Irchonwelz, Ostiches et Ligne.',
    },
    {
      q: 'Quels sont les horaires ?',
      a: '[À CONFIRMER]. Le plus simple reste d’appeler avant de vous déplacer, surtout un jour férié.',
    },
    {
      q: 'Peut-on voir la carte sans Facebook ni TripAdvisor ?',
      a: 'C’est précisément le rôle de ce site : la carte, les suggestions de saison et la réservation, sans passer par un agrégateur.',
    },
    {
      q: 'Acceptez-vous les groupes et les anniversaires ?',
      a: '[À CONFIRMER : capacité, privatisation]. Appelez le 068 28 33 38 : on s’organise autour d’une tablée.',
    },
  ],

  legal: {
    bce: '[À CONFIRMER : n° BCE]',
    rpm: '[À CONFIRMER : RPM Mons]',
    tva: '[À CONFIRMER : n° TVA]',
    responsable: '[À CONFIRMER : nom de l’exploitant]',
  },
} as const

export type Site = typeof site
