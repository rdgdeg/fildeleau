# Au Fil de l’Eau — maquette LD Media

Proposition de site vitrine pour la brasserie **Au Fil de l’Eau**, Chemin de Tenre 77, 7800 Ath. Maquette non indexée (`noindex`, `robots.txt` en `Disallow`).

## Lancer en local

```bash
npm install
npm run dev
```

Ouvrir l’URL indiquée (en général http://localhost:5173).

Build de contrôle :

```bash
npm run build
```

## Recycler pour un autre prospect

Modifier **`src/data/site.ts`** (nom, adresse, téléphone, horaires, textes, images) et les photos. Les couleurs et polices se règlent dans `src/styles/index.css` (`@theme`). Le badge maquette se masque avec `showMaquetteBadge: false`.

## [À CONFIRMER] à récupérer en rendez-vous

- E-mail professionnel
- Horaires d’ouverture (jours, services, fériés)
- N° BCE, RPM, TVA, nom de l’exploitant
- Année d’ouverture / « depuis… »
- Note et nombre d’avis Google (puis widget)
- Recette exacte des payelles et liste réelle de la carte
- Tous les tarifs
- Composition du menu junior
- Capacité, privatisation, PMR, parking, animaux
- Agencement de la plaine de jeux (âges, visibilité depuis les tables)
- Instagram s’il existe
- Textes « à propos » (noms, histoire) — ne pas inventer

## Images

Les photos du restaurant (page Facebook officielle) sont dans `public/images/`. Il manque encore un cliché de la plaine de jeux.

Fichiers de marque : `public/images/logo.jpg`, `public/roseaux.svg`.
