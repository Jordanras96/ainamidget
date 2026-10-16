# Aina Midget — Portfolio

Portfolio francophone, éditorial et animé, réalisé avec Next.js 16 App Router, React 19 et TypeScript. Sans base de données, compte utilisateur, abonnement, suivi publicitaire ou clé API.

## Démarrer

Prérequis : Node.js 20.9 ou ultérieur (Node 22 LTS conseillé).

```sh
npm ci
npm run dev
```

Ouvrir l’adresse indiquée dans le terminal.

```sh
npm run typecheck
npm run build
npm start
```

## Déployer sur Vercel

1. Envoyer ce dossier à la racine d’un dépôt GitHub.
2. Dans Vercel, importer le dépôt et conserver le preset **Next.js**.
3. Si vous importez le dossier parent, choisir **portfolio-aina** comme Root Directory.
4. Définir `NEXT_PUBLIC_SITE_URL` avec l’URL publique finale (`https://votre-domaine.fr`), sans slash final. En l’absence de cette variable, le domaine de production Vercel est utilisé automatiquement via `VERCEL_PROJECT_PRODUCTION_URL`.
5. Déployer. Aucun service de données et aucune autre variable ne sont nécessaires.
6. Après l’ajout ou le changement d’un domaine, actualiser `NEXT_PUBLIC_SITE_URL` et redéployer. Soumettre `/sitemap.xml` dans Google Search Console si souhaité.

Sans domaine configuré en local, le sitemap est volontairement vide plutôt que d’annoncer une fausse URL. Le domaine réel est indispensable pour les liens canoniques et les aperçus sociaux absolus. Un bon socle technique SEO ne garantit pas une position dans les résultats.

## Direction artistique

Encre verte, ivoire et cuivre discret ; typographies Manrope et Instrument Serif auto-hébergées. Ouverture en rideau de 1,5 seconde à la première visite de la session, portrait en composition, mouvements de profondeur au pointeur, révélations au défilement, facettes interactives au clavier, transitions et compositions graphiques réactives au survol. Le réglage système `prefers-reduced-motion` coupe les animations. Le contenu reste accessible sans JavaScript ; le premier panneau de compétences est alors visible.

## Contenu et honnêteté éditoriale

Les expériences proviennent du CV 2026 et du profil LinkedIn fournis. Les fiches synthétisent des expériences professionnelles ; les visuels sont des compositions typographiques originales, pas des maquettes clients. Aucun projet UX/UI, témoignage, livrable ou résultat chiffré non fourni n’est inventé. Le niveau UX/UI junior est explicite.

Le financement de plus de 6 000 € et les 102 foyers proviennent du profil LinkedIn (IKORIANTSOA). Les sources divergent sur le nombre de laboratoires : aucun total n’est mis en avant dans le site. Les anciennes coordonnées présentes dans les PDF ne sont pas publiées ; le téléphone demandé pour le site est **0385231242**, lien international **+261385231242**. Aucun PDF contenant l’ancien numéro n’est diffusé.

Les PDF originaux ne font pas partie du dépôt. Le portrait extrait du CV est utilisé uniquement comme visuel professionnel. Sa résolution d’origine est limitée (254 × 261 px) ; un portrait haute définition pourra remplacer `public/images/aina-midget.png` pour améliorer encore la netteté.

## Modifier

- `lib/content.ts` : compétences, expériences, chronologie et LinkedIn.
- `app/page.tsx` : accueil et coordonnées.
- `components/motion.tsx` : interactions, navigation et ouverture.
- `app/globals.css` : design, responsive et animations.
- `app/layout.tsx` : métadonnées générales.
- `app/opengraph-image.tsx` : image de partage générée localement.
- `lib/site.ts` : domaine SEO.

Les contacts utilisent `mailto:` et `tel:` ; pas de formulaire factice. Le bouton de copie utilise le presse-papiers du navigateur. Pas de cookies de suivi ni d’outil d’analyse tiers ; aucun bandeau de consentement inutile.

## Logiciels et licences

Next.js, React et TypeScript : licences libres, sans abonnement requis. Manrope et Instrument Serif : SIL Open Font License, distribuées avec les paquets `@fontsource`. Animations natives CSS et navigateur ; aucune extension payante, aucune ressource distante au rendu. L’éligibilité et les quotas de l’hébergement Vercel dépendent de son offre et de l’usage : les dépendances du site sont gratuites.

## Vérifications de livraison

Compilation de production et contrôle TypeScript réussis. Audit npm des dépendances de production : aucune vulnérabilité signalée lors de la livraison. Vérification visuelle dans le navigateur à 320, 390, 768, 1024 et 1347 px ; absence de débordement horizontal vérifiée à 320, 390 et 768 px. Menu mobile, fermeture après navigation, changement de facettes au clic et au clavier et navigation vers une fiche d’expérience contrôlés.
