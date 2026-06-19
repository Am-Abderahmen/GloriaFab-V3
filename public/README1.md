# GloriaFab — Site Web V1

Site web premium multilingue pour **GloriaFab**, atelier de confection textile en Tunisie.

> **V1 — Site statique.** Pas de base de données, pas d'administration, pas de connexion, pas d'e-commerce, pas de panier, pas de formulaire de contact.

---

## Table des matières

1. [Vue d'ensemble du projet](#1-vue-densemble-du-projet)
2. [Stack technique](#2-stack-technique)
3. [Structure des dossiers](#3-structure-des-dossiers)
4. [Installation locale](#4-installation-locale)
5. [Commandes de développement](#5-commandes-de-développement)
6. [Commandes de production](#6-commandes-de-production)
7. [Comment modifier le contenu](#7-comment-modifier-le-contenu)
8. [Remplacer les images placeholder](#8-remplacer-les-images-placeholder)
9. [Recommandations performance](#9-recommandations-performance)
10. [Recommandations SEO](#10-recommandations-seo)
11. [Déploiement](#11-déploiement)
12. [V2 — Évolutions prévues](#12-v2--évolutions-prévues)

---

## 1. Vue d'ensemble du projet

GloriaFab V1 est un site vitrine statique. Son rôle est de présenter l'entreprise, son histoire, son savoir-faire et ses réalisations. Il ne vend pas de produits en ligne.

**Pages :**
| Route FR | Route EN | Route IT | Contenu |
|---|---|---|---|
| `/fr` | `/en` | `/it` | Accueil |
| `/fr/about` | `/en/about` | `/it/about` | À propos / Histoire |
| `/fr/realisations` | `/en/realisations` | `/it/realisations` | Portfolio |
| `/fr/contact` | `/en/contact` | `/it/contact` | Contact |

La langue par défaut est le **français**. La racine `/` redirige automatiquement vers `/fr`.

**Page Réalisations :** filtres en barre latérale sur ordinateur (catégorie + public), tiroir de filtres rétractable sur mobile. Au clic sur une pièce, une fenêtre modale large s'ouvre avec galerie photo, navigation par flèches, miniatures et bouton de contact WhatsApp.

---

> **Important :** toutes les images du site vivent désormais sous `public/assets/`. Il n'y a qu'un seul endroit à connaître pour gérer les visuels du site.

---

## 4. Installation locale

**Prérequis :** Node.js 18 ou supérieur.

```bash
# 1. Cloner ou extraire le projet
cd gloriafab

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

Le site s'ouvre sur **http://localhost:3000** et redirige automatiquement vers `/fr`.

URLs disponibles en local :
- http://localhost:3000/fr
- http://localhost:3000/en
- http://localhost:3000/it

---

## 5. Commandes de développement

```bash
npm run dev      # Serveur de développement avec hot-reload
npm run lint     # Vérification ESLint (0 erreur, 0 warning attendu)
npx tsc --noEmit # Vérification TypeScript uniquement
```

---

## 6. Commandes de production

```bash
npm run build    # Construit l'application optimisée dans .next/
npm run start    # Lance le serveur de production (après build)
```

Le build produit des pages server-rendered (SSR) pour chaque locale. Le site peut être déployé sur n'importe quel hébergeur compatible Next.js.

---

## 7. Comment modifier le contenu

### 7.1 — Coordonnées et réseaux sociaux

Modifier **`data/site.ts`** :

```typescript
export const siteConfig = {
  email:    "contact@gloriafab.com",    // ← Remplacer
  phone:    "+216 XX XXX XXX",          // ← Remplacer
  whatsapp: "+216XXXXXXXX",             // ← Numéro WhatsApp sans espaces ni +
  address: {
    line1:     "El Guettar",
    line2:     "Gafsa, Tunisie",        // ← Adresse exacte à compléter
    mapsUrl:   "https://maps.google.com/...",   // ← URL Google Maps
    mapsEmbed: "https://www.google.com/maps/embed?...", // ← URL embed
  },
  social: {
    linkedin:  "https://www.linkedin.com/company/gloriafab",  // ← Remplacer
    facebook:  "https://www.facebook.com/gloriafab",          // ← Remplacer
    instagram: "https://www.instagram.com/gloriafab",         // ← Remplacer
  },
};
```

### 7.2 — Textes et traductions

Les textes sont dans **`messages/`** :
- `messages/fr.json` → Français
- `messages/en.json` → Anglais
- `messages/it.json` → Italien

Structure JSON par page :

```
nav          → Navigation et CTA principal
footer       → Pied de page
home         → Page d'accueil
about        → Page À propos
realisations → Page Portfolio
contact      → Page Contact
```

Modifier une traduction : trouver la clé dans `fr.json`, puis mettre à jour la même clé dans `en.json` et `it.json`.

### 7.3 — Réalisations (portfolio)

Modifier **`data/realisations.ts`** pour ajouter, modifier ou supprimer des réalisations. Le portfolio contient actuellement **28 réalisations**.

**Modèle d'une réalisation :**

```typescript
{
  id: "h001-tshirt-homme-ete",   // Identifiant unique (kebab-case)
  code: "H001",                  // Code court affiché dans la grille
  name: "T-shirt homme été",     // Nom affiché
  category: "vetements",         // vetements | lingerie | travail | sport | uniformes | maison
  audience: "homme",             // homme | femme | enfant | unisexe | b2b | maison
  description: "Description...", // Texte affiché dans la popup
  material: "Jersey léger",      // Optionnel — masqué si vide
  usage: "Casual / été",         // Optionnel — masqué si vide
  customizable: true,            // Donnée interne — jamais affichée visuellement (voir note ci-dessous)
  images: [                      // 1 à 4 images maximum
    "/assets/realisations/h001-tshirt-homme-ete/01.webp",
    "/assets/realisations/h001-tshirt-homme-ete/02.webp",
    "/assets/realisations/h001-tshirt-homme-ete/03.webp",
    "/assets/realisations/h001-tshirt-homme-ete/04.webp",
  ],
  featured: true,                // true = affiché sur la page d'accueil
}
```

**Règles :**
- Maximum 4 images par réalisation.
- Les champs `material` et `usage` sont optionnels. S'ils sont vides ou absents, ils n'apparaissent pas dans la popup.
- Le champ `customizable` est conservé dans la donnée (utile pour une évolution future) mais **n'est jamais affiché** dans l'interface — aucun mot « Personnalisable » n'apparaît sur le site.
- Seules les réalisations avec `featured: true` apparaissent sur la page d'accueil (4 à 6 recommandées).
- Catégories disponibles : `vetements`, `lingerie`, `travail`, `sport`, `uniformes`, `maison`.
- Publics disponibles : `homme`, `femme`, `enfant`, `unisexe`, `b2b`, `maison`. Dans le filtre visiteur, `unisexe` et `b2b` sont regroupés sous le même bouton **« Unisexe / B2B »**.

### 7.4 — Comment remplacer les photos d'une réalisation

Toutes les photos du portfolio sont organisées dans **`public/assets/realisations/`**, avec **un dossier par réalisation**.

**Étapes pour remplacer une photo (sans toucher au code) :**

1. Ouvrir le dossier `public/assets/realisations/`.
2. Trouver le dossier de la réalisation à modifier, par exemple :
   `h001-tshirt-homme-ete`
3. Remplacer les fichiers à l'intérieur en gardant **exactement les mêmes noms** :
   - `01.webp`
   - `02.webp`
   - `03.webp`
   - `04.webp`
4. C'est tout — aucune modification de code n'est nécessaire si les noms de fichiers restent identiques.

**Si la réalisation n'a qu'une seule photo :**
- Garder uniquement `01.webp` dans le dossier.
- Dans `data/realisations.ts`, vérifier que le tableau `images` ne contient qu'une seule ligne :
  ```typescript
  images: ["/assets/realisations/h001-tshirt-homme-ete/01.webp"]
  ```

**Pour ajouter une photo supplémentaire (jusqu'à 4 maximum) :**
1. Ajouter le fichier dans le bon dossier, ex. `03.webp`.
2. Ajouter la ligne correspondante dans le tableau `images` de cette réalisation dans `data/realisations.ts`.

**Pour ajouter une toute nouvelle réalisation :**
1. Créer un nouveau dossier dans `public/assets/realisations/`, ex. `h009-veste-homme/`.
2. Y placer 1 à 4 images nommées `01.webp` à `04.webp`.
3. Ajouter un nouvel objet dans `data/realisations.ts` en suivant le modèle ci-dessus (section 7.3).

**Règles photo :**

| Critère | Recommandation |
|---|---|
| Format | WebP |
| Ratio | 3:4 (portrait) |
| Résolution | environ 800 × 1067 px |
| Poids | moins de 200 Ko par image |
| Nombre | 1 à 4 photos maximum par réalisation |
| Noms de fichiers | `01.webp`, `02.webp`, `03.webp`, `04.webp` — ne pas renommer |

> **Ne jamais utiliser d'URL d'image externe** (Unsplash, autre site web, etc.) dans la version finale du site. Toutes les images doivent être des fichiers locaux dans `public/assets/`.

### 7.5 — Vidéo hero

1. Placer la vidéo dans **`public/assets/hero/`** :
   - `public/assets/hero/hero-textile.mp4` (format principal)
   - `public/assets/hero/hero-textile.webm` (recommandé pour Chrome/Firefox)

2. Dans **`components/sections/HeroSection.tsx`** :
   - Supprimer le bloc `<div>` avec l'image placeholder (lignes marquées `PLACEHOLDER HERO IMAGE`)
   - Décommenter le bloc `<video>` (lignes marquées `HERO VIDEO`) et mettre à jour le chemin `src` vers `/assets/hero/hero-textile.mp4`

**Paramètres vidéo recommandés :**
- Codec : H.264 pour MP4, VP9 pour WebM
- Résolution : 1920 × 1080 px maximum
- CRF : 28 (bonne qualité / poids)
- Durée : 20–40 secondes en boucle
- Poids cible : 10–25 Mo

### 7.6 — Google Maps embed

1. Aller sur [maps.google.com](https://maps.google.com), trouver l'adresse exacte.
2. Cliquer **Partager** → **Intégrer une carte** → Copier l'URL de l'`<iframe>`.
3. Dans **`data/site.ts`**, remplacer la valeur de `mapsEmbed`.
4. Dans **`app/[locale]/contact/ContactContent.tsx`**, repérer le commentaire `Uncomment when you have a real embed URL` et décommenter la balise `<iframe>`.

---

## 8. Remplacer les images placeholder

Toutes les images du portfolio sont actuellement des **placeholders générés localement** (fond noir, cadre or, code produit) servant uniquement à valider la mise en page. Elles doivent être remplacées par de vraies photos avant la mise en ligne.

**Où chercher les images à remplacer :**

```bash
# Vérifier qu'aucune URL externe (Unsplash, etc.) n'est utilisée :
grep -r "unsplash.com\|http://\|https://" data/realisations.ts
# → ne doit rien retourner si tout est bien en local
```

**Dossiers contenant des images à remplacer :**

| Dossier / fichier | Rôle |
|---|---|
| `public/assets/realisations/<id>/01.webp` … `04.webp` | Photos des 28 réalisations du portfolio |
| `public/assets/hero/` | Vidéo et image de fond de la page d'accueil |
| `public/assets/about/` | Photos El Guettar, montagne, oasis, atelier GloriaFab |
| `public/assets/logo/` | Logo GloriaFab si une version image est nécessaire |

**Procédure générale :**
1. Préparer les vraies photos en WebP (outil recommandé : [Squoosh](https://squoosh.app)).
2. Les déposer dans le bon sous-dossier de `public/assets/`.
3. Garder les mêmes noms de fichiers que les placeholders pour éviter toute modification de code (voir section 7.4 pour les réalisations).

---

## 9. Recommandations performance

- **Format images** : WebP ou AVIF. Éviter PNG et JPEG non compressés.
- **Poids images** : viser moins de 200 Ko par image, moins de 500 Ko pour le hero.
- **Vidéo hero** : ne pas dépasser 25 Mo. Utiliser ffmpeg pour compresser.
- **Lazy loading** : activé par défaut sur toutes les images via Next.js.
- **Animations** : toutes les animations Framer Motion utilisent `transform` et `opacity` — compatibles GPU, pas de reflow.
- **Polices** : auto-hébergées via `@fontsource`, pas de requête externe.

Commande ffmpeg recommandée pour compresser la vidéo :
```bash
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -vf scale=1920:-2 -movflags +faststart output.mp4
```

---

## 10. Recommandations SEO

- Chaque page a ses propres `title` et `description` dans son fichier `page.tsx`.
- Les balises `lang` sont correctement définies par locale (`fr`, `en`, `it`).
- La structure H1/H2 est respectée sur chaque page.
- Ajouter les balises OpenGraph image (`og:image`) dans chaque `generateMetadata()` avant la mise en ligne.
- Ajouter un fichier `app/sitemap.ts` pour générer un sitemap XML automatique.
- Toujours renseigner les attributs `alt` sur les vraies images.

**Mots-clés cibles :**
- textile manufacturing Tunisia
- garment manufacturing Tunisia
- confection textile Tunisie
- clothing production partner
- fashion manufacturing Tunisia
- atelier de confection Tunisie

---

## 11. Déploiement

Le projet produit une application Next.js standard. Il peut être déployé sur **n'importe quel hébergeur compatible Next.js**.

### Prérequis généraux

- Node.js 18 ou supérieur sur le serveur.
- La commande `npm run build` doit s'exécuter sans erreur.
- Le serveur doit lancer `npm run start` (port 3000 par défaut) ou être configuré pour servir le dossier `.next/`.

### Déploiement générique (tout hébergeur)

```bash
# 1. Construire le projet
npm run build

# 2. Lancer en production
npm run start
```

Le serveur expose l'application sur le port `3000`. Configurer un reverse proxy (nginx, Caddy, Apache) pour exposer ce port via HTTPS.

### Hébergeurs compatibles (exemples)

Le projet a été testé pour fonctionner sans modification avec :

- **Vercel** — déploiement automatique depuis GitHub, zero configuration.
- **Netlify** — compatible Next.js via l'adaptateur `@netlify/next`.
- **Render** — Node.js web service, `npm run build && npm run start`.
- **Railway** — Node.js, configuration automatique.
- **DigitalOcean App Platform** — Node.js, `npm run build`.
- **Serveur VPS** (Ubuntu, Debian) — Node.js + PM2 + nginx.

> Quel que soit l'hébergeur, configurer les DNS du domaine selon les instructions du fournisseur choisi. Les enregistrements DNS varient (A, CNAME, ALIAS) selon l'hébergeur.

### VPS avec PM2 + nginx (exemple)

```bash
# Sur le serveur
npm install
npm run build
npm install -g pm2
pm2 start npm --name "gloriafab" -- start
pm2 save

# nginx — exemple de configuration
server {
  listen 80;
  server_name gloriafab.com www.gloriafab.com;

  location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```

### Variables d'environnement

Ce projet V1 n'a pas de variables d'environnement requises.  
Si nécessaire, créer un fichier `.env.local` à la racine (ne pas le committer) :

```env
# V1 : aucune variable requise
# V2 : compléter ici (base de données, clé API maps, etc.)
```

---

## 12. V2 — Évolutions prévues

Ces fonctionnalités sont prévues pour V2 et ne font pas partie du scope V1 :

| Fonctionnalité | Description |
|---|---|
| **Panel d'administration** | Interface pour gérer les réalisations sans modifier le code |
| **Base de données** | Stockage dynamique des réalisations (ex : PostgreSQL, SQLite) |
| **Upload d'images** | Ajout / suppression de photos depuis l'admin |
| **Réalisations dynamiques** | Chargement depuis la base de données, pagination |
| **Certifications** | Section certifications affichée dynamiquement si données disponibles |
| **Sitemap XML** | Généré automatiquement via `app/sitemap.ts` |
| **Visionneuse 360°** | Visualisation produit interactive (Three.js ou pannellum) |
| **Blog / Articles** | Si besoin éditorial ultérieur |

---

## Aide rapide

| Besoin | Fichier / dossier à modifier |
|---|---|
| Changer email / téléphone | `data/site.ts` |
| Modifier un texte | `messages/fr.json` (puis en.json, it.json) |
| Ajouter / modifier une réalisation | `data/realisations.ts` |
| Remplacer une photo de réalisation | `public/assets/realisations/<id>/01.webp` … `04.webp` |
| Ajouter une catégorie ou un public de filtre | `messages/*.json` → `realisations.filters` / `realisations.audience`, puis `data/realisations.ts` |
| Modifier l'ordre ou le style des filtres (sidebar) | `app/[locale]/realisations/RealisationsContent.tsx` |
| Activer la vidéo hero | `public/assets/hero/` + `components/sections/HeroSection.tsx` |
| Ajouter Google Maps | `data/site.ts` + `ContactContent.tsx` |
| Modifier les réseaux sociaux | `data/site.ts` |
