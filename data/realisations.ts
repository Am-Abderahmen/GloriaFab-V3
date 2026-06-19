// ─────────────────────────────────────────────────────────────────────────
// GloriaFab — Realisations data
//
// This file is the single source of truth for the "Réalisations" page.
// Each entry represents one item in the showcase (NOT a product for sale).
//
// To add or edit a realisation:
//   1. Duplicate an existing object below.
//   2. Give it a unique `id` (kebab-case, prefixed by its product code).
//   3. Place 1 to 4 images in /public/assets/realisations/<id>/ named
//      01.webp, 02.webp, 03.webp, 04.webp and list them in `images`.
//   4. Optional fields (material, usage) are hidden automatically in the
//      modal if left empty — no need to delete the field, just omit it.
//
// See README.md → "Comment remplacer les photos" for non-developer instructions.
// ─────────────────────────────────────────────────────────────────────────

export type RealisationCategory =
  | "vetements"
  | "lingerie"
  | "travail"
  | "sport"
  | "uniformes"
  | "maison";

export type RealisationAudience =
  | "homme"
  | "femme"
  | "enfant"
  | "unisexe"
  | "b2b"
  | "maison";

export interface Realisation {
  id: string;
  code: string;
  name: string;
  category: RealisationCategory;
  audience: RealisationAudience;
  description: string;
  material?: string;
  usage?: string;
  /**
   * Kept in the data model for potential future use (e.g. a "customizable"
   * filter or icon in V2). Intentionally NOT rendered in the modal in V1.
   */
  customizable?: boolean;
  images: string[]; // 1 to 4 images, local paths under /assets/realisations/<id>/
  featured?: boolean;
}

export const realisations: Realisation[] = [
  // ── HOMME ────────────────────────────────────────────────────────────
  {
    id: "h001-tshirt-homme-ete",
    code: "H001",
    name: "T-shirt homme été",
    category: "vetements",
    audience: "homme",
    description:
      "T-shirt léger à coupe confortable, pensé pour les collections casual et estivales. Confection soignée avec finitions propres et toucher agréable.",
    material: "Jersey léger",
    usage: "Casual / collection été",
    customizable: true,
    images: [
      "/assets/realisations/h001-tshirt-homme-ete/01.webp",
      "/assets/realisations/h001-tshirt-homme-ete/02.webp",
      "/assets/realisations/h001-tshirt-homme-ete/03.webp",
      "/assets/realisations/h001-tshirt-homme-ete/04.webp",
    ],
    featured: false,
  },
  {
    id: "h002-tshirt-homme-hiver",
    code: "H002",
    name: "T-shirt homme hiver",
    category: "vetements",
    audience: "homme",
    description:
      "T-shirt manches longues en matière plus structurée, adapté aux collections automne-hiver. Une pièce simple, confortable et facile à décliner.",
    material: "Jersey épais ou maille interlock",
    usage: "Casual / demi-saison / hiver",
    customizable: true,
    images: [
      "/assets/realisations/h002-tshirt-homme-hiver/01.webp",
      "/assets/realisations/h002-tshirt-homme-hiver/02.webp",
    ],
    featured: false,
  },
  {
    id: "h003-hoodie-oversize-homme",
    code: "H003",
    name: "Hoodie oversize homme",
    category: "vetements",
    audience: "homme",
    description:
      "Hoodie oversize en molleton, conçu pour un rendu moderne et confortable. Capuche, volume généreux et finitions propres pour collections casual premium.",
    material: "Molleton",
    usage: "Streetwear / casual",
    customizable: true,
    images: [
      "/assets/realisations/h003-hoodie-oversize-homme/01.webp",
      "/assets/realisations/h003-hoodie-oversize-homme/02.webp",
      "/assets/realisations/h003-hoodie-oversize-homme/03.webp",
    ],
    featured: true,
  },
  {
    id: "h004-bermuda-homme",
    code: "H004",
    name: "Bermuda homme",
    category: "vetements",
    audience: "homme",
    description:
      "Bermuda homme à coupe simple et pratique, adapté aux collections estivales. Confection confortable avec finitions nettes et lignes épurées.",
    material: "Coton ou molleton léger",
    usage: "Casual / été",
    customizable: true,
    images: [
      "/assets/realisations/h004-bermuda-homme/01.webp",
      "/assets/realisations/h004-bermuda-homme/02.webp",
    ],
    featured: false,
  },
  {
    id: "h005-ensemble-jogging-homme",
    code: "H005",
    name: "Ensemble jogging homme",
    category: "sport",
    audience: "homme",
    description:
      "Ensemble jogging composé d'une veste et d'un pantalon, pensé pour le confort et la liberté de mouvement. Une base polyvalente pour collections sport et casual.",
    material: "Molleton ou interlock",
    usage: "Sport / casual",
    customizable: true,
    images: [
      "/assets/realisations/h005-ensemble-jogging-homme/01.webp",
      "/assets/realisations/h005-ensemble-jogging-homme/02.webp",
      "/assets/realisations/h005-ensemble-jogging-homme/03.webp",
    ],
    featured: false,
  },
  {
    id: "h006-ensemble-kamraya-homme-ete",
    code: "H006",
    name: "Ensemble Kamraya homme été",
    category: "vetements",
    audience: "homme",
    description:
      "Ensemble léger inspiré des tenues estivales, composé d'une pièce haute et d'un bas assorti. Confection fluide, confortable et adaptée aux climats chauds.",
    material: "Tissu léger",
    usage: "Été / casual",
    customizable: true,
    images: [
      "/assets/realisations/h006-ensemble-kamraya-homme-ete/01.webp",
      "/assets/realisations/h006-ensemble-kamraya-homme-ete/02.webp",
    ],
    featured: false,
  },
  {
    id: "h007-boxer-homme",
    code: "H007",
    name: "Boxer homme",
    category: "lingerie",
    audience: "homme",
    description:
      "Boxer homme en coton stretch, pensé pour le confort quotidien. Finitions souples, maintien agréable et coupe simple.",
    material: "Coton stretch",
    usage: "Sous-vêtement",
    customizable: true,
    images: [
      "/assets/realisations/h007-boxer-homme/01.webp",
    ],
    featured: false,
  },
  {
    id: "h008-camisole-homme",
    code: "H008",
    name: "Camisole homme",
    category: "lingerie",
    audience: "homme",
    description:
      "Camisole légère et confortable, adaptée aux lignes de sous-vêtements essentiels. Confection simple avec finitions propres.",
    material: "Coton léger",
    usage: "Sous-vêtement / basique",
    customizable: true,
    images: [
      "/assets/realisations/h008-camisole-homme/01.webp",
    ],
    featured: false,
  },

  // ── FEMME ────────────────────────────────────────────────────────────
  {
    id: "f001-tshirt-femme-ete",
    code: "F001",
    name: "T-shirt femme été",
    category: "vetements",
    audience: "femme",
    description:
      "T-shirt femme léger à coupe fine, conçu pour les collections estivales. Une pièce simple, douce et facile à décliner selon les besoins de marque.",
    material: "Jersey léger",
    usage: "Casual / été",
    customizable: true,
    images: [
      "/assets/realisations/f001-tshirt-femme-ete/01.webp",
      "/assets/realisations/f001-tshirt-femme-ete/02.webp",
    ],
    featured: false,
  },
  {
    id: "f002-polo-femme",
    code: "F002",
    name: "Polo femme",
    category: "vetements",
    audience: "femme",
    description:
      "Polo femme à finition soignée, adapté aux collections casual ou uniformes élégants. Col structuré, coupe confortable et rendu professionnel.",
    material: "Piqué coton ou maille polo",
    usage: "Casual / uniforme premium",
    customizable: true,
    images: [
      "/assets/realisations/f002-polo-femme/01.webp",
      "/assets/realisations/f002-polo-femme/02.webp",
    ],
    featured: false,
  },
  {
    id: "f003-haut-hiver-maille-tricotee",
    code: "F003",
    name: "Haut hiver maille tricotée",
    category: "vetements",
    audience: "femme",
    description:
      "Haut en maille tricotée au volume confortable, pensé pour les collections froides. Texture douce, silhouette moderne et finitions délicates.",
    material: "Maille tricotée",
    usage: "Automne / hiver",
    customizable: true,
    images: [
      "/assets/realisations/f003-haut-hiver-maille-tricotee/01.webp",
      "/assets/realisations/f003-haut-hiver-maille-tricotee/02.webp",
    ],
    featured: false,
  },
  {
    id: "f004-haut-cashmere-touch",
    code: "F004",
    name: "Haut Cashmere Touch",
    category: "vetements",
    audience: "femme",
    description:
      "Haut doux au toucher cashmere, conçu pour une silhouette élégante et confortable. Une pièce premium adaptée aux collections féminines raffinées.",
    material: "Maille douce effet cashmere",
    usage: "Premium / casual chic",
    customizable: true,
    images: [
      "/assets/realisations/f004-haut-cashmere-touch/01.webp",
    ],
    featured: false,
  },
  {
    id: "f005-robe-ete-legere",
    code: "F005",
    name: "Robe été légère",
    category: "vetements",
    audience: "femme",
    description:
      "Robe d'été fluide, pensée pour une silhouette féminine et légère. Confection confortable avec finitions propres et tombé naturel.",
    material: "Tissu léger fluide",
    usage: "Été / fashion",
    customizable: true,
    images: [
      "/assets/realisations/f005-robe-ete-legere/01.webp",
      "/assets/realisations/f005-robe-ete-legere/02.webp",
      "/assets/realisations/f005-robe-ete-legere/03.webp",
    ],
    featured: true,
  },
  {
    id: "f006-ensemble-kamraya-femme",
    code: "F006",
    name: "Ensemble Kamraya femme",
    category: "vetements",
    audience: "femme",
    description:
      "Ensemble femme composé d'une chemise légère et d'un pantalon assorti. Une pièce fluide et élégante, adaptée aux collections estivales.",
    material: "Tissu léger",
    usage: "Été / casual chic",
    customizable: true,
    images: [
      "/assets/realisations/f006-ensemble-kamraya-femme/01.webp",
      "/assets/realisations/f006-ensemble-kamraya-femme/02.webp",
      "/assets/realisations/f006-ensemble-kamraya-femme/03.webp",
    ],
    featured: true,
  },
  {
    id: "f007-legging-femme",
    code: "F007",
    name: "Legging femme",
    category: "sport",
    audience: "femme",
    description:
      "Legging femme en matière extensible, pensé pour le confort et l'accompagnement du mouvement. Une base essentielle pour lignes sport ou casual.",
    material: "Jersey stretch",
    usage: "Sport / casual",
    customizable: true,
    images: [
      "/assets/realisations/f007-legging-femme/01.webp",
    ],
    featured: false,
  },
  {
    id: "f008-pyjama-ete-femme",
    code: "F008",
    name: "Pyjama été femme",
    category: "lingerie",
    audience: "femme",
    description:
      "Pyjama d'été léger et confortable, conçu pour les lignes homewear. Coupe simple, toucher doux et finitions agréables au porté.",
    material: "Coton léger ou jersey",
    usage: "Homewear / nuit",
    customizable: true,
    images: [
      "/assets/realisations/f008-pyjama-ete-femme/01.webp",
      "/assets/realisations/f008-pyjama-ete-femme/02.webp",
    ],
    featured: false,
  },
  {
    id: "f009-pyjama-hiver-femme",
    code: "F009",
    name: "Pyjama hiver femme",
    category: "lingerie",
    audience: "femme",
    description:
      "Pyjama hiver en matière douce et chaude, pensé pour le confort quotidien. Confection propre et silhouette simple pour collections homewear.",
    material: "Molleton léger ou interlock",
    usage: "Homewear / hiver",
    customizable: true,
    images: [
      "/assets/realisations/f009-pyjama-hiver-femme/01.webp",
    ],
    featured: false,
  },
  {
    id: "f010-jebba-traditionnelle-femme",
    code: "F010",
    name: "Jebba traditionnelle femme",
    category: "vetements",
    audience: "femme",
    description:
      "Jebba traditionnelle femme revisitée avec une confection soignée. Une pièce qui valorise l'élégance, la simplicité et le savoir-faire textile.",
    material: "Tissu fluide ou structuré selon modèle",
    usage: "Traditionnel / occasion",
    customizable: true,
    images: [
      "/assets/realisations/f010-jebba-traditionnelle-femme/01.webp",
      "/assets/realisations/f010-jebba-traditionnelle-femme/02.webp",
    ],
    featured: false,
  },
  {
    id: "f011-hoodie-oversize-femme",
    code: "F011",
    name: "Hoodie oversize femme",
    category: "vetements",
    audience: "femme",
    description:
      "Hoodie oversize femme en molleton, conçu pour un style moderne et confortable. Volume généreux, capuche structurée et finitions propres.",
    material: "Molleton",
    usage: "Streetwear / casual",
    customizable: true,
    images: [
      "/assets/realisations/f011-hoodie-oversize-femme/01.webp",
      "/assets/realisations/f011-hoodie-oversize-femme/02.webp",
    ],
    featured: false,
  },

  // ── ENFANT ───────────────────────────────────────────────────────────
  {
    id: "e001-ensemble-garcon-tshirt-bermuda",
    code: "E001",
    name: "Ensemble garçon T-shirt + bermuda",
    category: "vetements",
    audience: "enfant",
    description:
      "Ensemble garçon composé d'un T-shirt et d'un bermuda léger. Confection confortable, adaptée au mouvement et aux collections enfant.",
    material: "Jersey coton + tissu léger",
    usage: "Enfant / été",
    customizable: true,
    images: [
      "/assets/realisations/e001-ensemble-garcon-tshirt-bermuda/01.webp",
      "/assets/realisations/e001-ensemble-garcon-tshirt-bermuda/02.webp",
    ],
    featured: true,
  },
  {
    id: "e002-ensemble-fille-tshirt-jupe",
    code: "E002",
    name: "Ensemble fille T-shirt + jupe",
    category: "vetements",
    audience: "enfant",
    description:
      "Ensemble fille composé d'un T-shirt et d'une jupe assortie. Une pièce légère, joyeuse et confortable pour collections enfant.",
    material: "Jersey coton + tissu léger",
    usage: "Enfant / été",
    customizable: true,
    images: [
      "/assets/realisations/e002-ensemble-fille-tshirt-jupe/01.webp",
      "/assets/realisations/e002-ensemble-fille-tshirt-jupe/02.webp",
    ],
    featured: false,
  },

  // ── ARTICLES PROFESSIONNELS ──────────────────────────────────────────
  {
    id: "p001-blouse-travail",
    code: "P001",
    name: "Blouse de travail",
    category: "travail",
    audience: "b2b",
    description:
      "Blouse de travail simple et fonctionnelle, adaptée aux environnements professionnels. Confection résistante, coupe pratique et finitions propres.",
    material: "Coton ou polycoton",
    usage: "Industrie / atelier / multi-secteurs",
    customizable: true,
    images: [
      "/assets/realisations/p001-blouse-travail/01.webp",
      "/assets/realisations/p001-blouse-travail/02.webp",
    ],
    featured: true,
  },
  {
    id: "p002-tablier-serveur-demi-long",
    code: "P002",
    name: "Tablier serveur demi-long",
    category: "travail",
    audience: "b2b",
    description:
      "Tablier demi-long pour service et restauration, pensé pour une utilisation professionnelle. Design sobre, pratique et facile à personnaliser.",
    material: "Coton ou polycoton",
    usage: "Hôtellerie / restauration",
    customizable: true,
    images: [
      "/assets/realisations/p002-tablier-serveur-demi-long/01.webp",
    ],
    featured: false,
  },
  {
    id: "p003-gilet-haute-visibilite",
    code: "P003",
    name: "Gilet haute visibilité",
    category: "travail",
    audience: "b2b",
    description:
      "Gilet haute visibilité conçu pour les environnements professionnels nécessitant visibilité et praticité. Coupe simple et finitions adaptées à l'usage terrain.",
    material: "Polyester haute visibilité",
    usage: "Sécurité / industrie",
    customizable: true,
    images: [
      "/assets/realisations/p003-gilet-haute-visibilite/01.webp",
    ],
    featured: false,
  },
  {
    id: "p004-uniforme-medical",
    code: "P004",
    name: "Uniforme médical",
    category: "uniformes",
    audience: "b2b",
    description:
      "Uniforme médical confortable et fonctionnel, adapté aux besoins des professionnels de santé. Confection pratique avec finitions nettes.",
    material: "Polycoton ou tissu médical",
    usage: "Santé / médical",
    customizable: true,
    images: [
      "/assets/realisations/p004-uniforme-medical/01.webp",
      "/assets/realisations/p004-uniforme-medical/02.webp",
    ],
    featured: false,
  },
  {
    id: "p005-uniforme-hospitality",
    code: "P005",
    name: "Uniforme hospitality",
    category: "uniformes",
    audience: "b2b",
    description:
      "Uniforme hospitality élégant, conçu pour valoriser l'image professionnelle d'un établissement. Coupe propre, confort et rendu soigné.",
    material: "Tissu professionnel",
    usage: "Hôtellerie / accueil",
    customizable: true,
    images: [
      "/assets/realisations/p005-uniforme-hospitality/01.webp",
      "/assets/realisations/p005-uniforme-hospitality/02.webp",
    ],
    featured: false,
  },

  // ── MAISON / TEXTILE ─────────────────────────────────────────────────
  {
    id: "m001-parure-de-lit",
    code: "M001",
    name: "Parure de lit",
    category: "maison",
    audience: "maison",
    description:
      "Parure de lit conçue pour offrir confort, simplicité et finition propre. Une réalisation qui illustre notre capacité à travailler le linge de maison.",
    material: "Coton ou polycoton",
    usage: "Linge de maison / literie",
    customizable: true,
    images: [
      "/assets/realisations/m001-parure-de-lit/01.webp",
      "/assets/realisations/m001-parure-de-lit/02.webp",
    ],
    featured: true,
  },
  {
    id: "m002-parure-de-coussins",
    code: "M002",
    name: "Parure de coussins",
    category: "maison",
    audience: "maison",
    description:
      "Parure de coussins réalisée avec soin pour valoriser les détails décoratifs et les finitions textiles. Une pièce adaptée aux univers maison et hospitality.",
    material: "Tissu décoratif",
    usage: "Décoration / linge de maison",
    customizable: true,
    images: [
      "/assets/realisations/m002-parure-de-coussins/01.webp",
    ],
    featured: false,
  },
];
