import { seedPlants } from "./plants/seeds";

const dragonfruitQuickCare = {
  sunlight: "Bright light to full sun after gradual acclimation",
  watering:
    "Water deeply, then allow the soil to begin drying before watering again",
  soil: "Fast-draining soil with strong aeration",
  temperature: "Warm growing conditions preferred",
  container: "Large container with a sturdy trellis or support",
  difficulty: "Moderate",
};

const dragonfruitCareSections = [
  {
    id: "sunlight",
    title: "Sunlight",
    symbol: "☀",
    content:
      "Gradually acclimate the plant to stronger sunlight instead of moving it directly from shade into intense full sun. A transition period can help reduce the risk of sunburn.",
  },
  {
    id: "watering",
    title: "Watering",
    symbol: "◉",
    content:
      "Water deeply, then allow the soil to begin drying before watering again. Heat, wind, container size, soil mix, and plant maturity all affect how quickly moisture is used.",
  },
  {
    id: "soil",
    title: "Soil and drainage",
    symbol: "●",
    content:
      "Use a loose, fast-draining growing mix. Dragonfruit roots need moisture, but they should not remain trapped in dense or consistently waterlogged soil.",
  },
  {
    id: "container",
    title: "Container and support",
    symbol: "□",
    content:
      "Use a sufficiently large container and provide a strong trellis. Mature dragonfruit branches become heavy, especially once they begin producing flowers and fruit.",
  },
  {
    id: "feeding",
    title: "Feeding",
    symbol: "♡",
    content:
      "Feed according to the season and the plant’s growth stage. Avoid relying too heavily on nitrogen when flowering and fruit production are the main goals.",
  },
  {
    id: "pruning",
    title: "Training and pruning",
    symbol: "✂",
    content:
      "Train selected branches upward toward the top of the support. Once established, allow productive branches to hang downward while removing damaged, crowded, or poorly placed growth when necessary.",
  },
];

const dragonfruitBeginnerTips = [
  "Do not move the plant into intense sunlight all at once.",
  "Always confirm that the container drains freely.",
  "Give the plant strong support before it becomes heavy.",
  "Adjust watering according to conditions instead of following a rigid schedule.",
  "Keep notes about flowering, pollination, fruiting, and seasonal growth.",
];

const dragonfruitPlants = [
  {
    id: "ecuador-palora",
    slug: "ecuador-palora",

    commonName: "Ecuador Palora Dragonfruit",
    shortName: "Ecuador Palora",
    scientificName: "Selenicereus megalanthus",

    category: "Dragonfruit",
    difficulty: "Moderate",
    status: "Guide available",

    summary:
      "A yellow-skinned dragonfruit variety known for its sweet white flesh, distinctive flavor, and thorny fruit exterior.",

    description:
      "Ecuador Palora is a yellow dragonfruit variety that benefits from warm conditions, excellent drainage, structural support, and gradual acclimation to stronger sunlight.",

    accent: "lime",
    symbol: "○",

    featured: true,

    quickCare: dragonfruitQuickCare,
    careSections: dragonfruitCareSections,
    beginnerTips: dragonfruitBeginnerTips,

    tags: [
      "dragonfruit",
      "yellow dragonfruit",
      "palora",
      "container growing",
      "fruiting cactus",
    ],

    guidePath: "/plants/ecuador-palora",
    pdfPath: "/guides/ecuador-palora-care-guide.pdf",
    image: null,
  },

  {
    id: "dark-star",
    slug: "dark-star",

    commonName: "Dark Star Dragonfruit",
    shortName: "Dark Star",
    scientificName: "Selenicereus hybrid",

    category: "Dragonfruit",
    difficulty: "Moderate",
    status: "Guide available",

    summary:
      "A dragonfruit cultivar known for its dramatic appearance, colorful flesh, and sweet flavor.",

    description:
      "Dark Star is a vigorous dragonfruit cultivar that performs best with warm weather, well-draining soil, sturdy support, and consistent seasonal care.",

    accent: "purple",
    symbol: "●",

    featured: false,

    quickCare: dragonfruitQuickCare,
    careSections: dragonfruitCareSections,
    beginnerTips: dragonfruitBeginnerTips,

    tags: [
      "dragonfruit",
      "dark star",
      "purple flesh",
      "container growing",
      "fruiting cactus",
    ],

    guidePath: "/plants/dark-star",
    pdfPath: "/guides/dark-star-care-guide.pdf",
    image: null,
  },

  {
    id: "delight",
    slug: "delight",

    commonName: "Delight Dragonfruit",
    shortName: "Delight",
    scientificName: "Selenicereus hybrid",

    category: "Dragonfruit",
    difficulty: "Moderate",
    status: "Guide available",

    summary:
      "A productive dragonfruit cultivar grown for its attractive fruit, pleasant flavor, and ornamental climbing growth.",

    description:
      "Delight benefits from strong structural support, careful watering, good drainage, and enough warmth and sunlight to support flowering and fruit development.",

    accent: "coral",
    symbol: "♡",

    featured: false,

    quickCare: dragonfruitQuickCare,
    careSections: dragonfruitCareSections,
    beginnerTips: dragonfruitBeginnerTips,

    tags: [
      "dragonfruit",
      "delight",
      "fruiting cactus",
      "trellis growing",
      "container growing",
    ],

    guidePath: "/plants/delight",
    pdfPath: "/guides/delight-care-guide.pdf",
    image: null,
  },

  {
    id: "isis-gold",
    slug: "isis-gold",

    commonName: "Isis Gold Dragonfruit",
    shortName: "Isis Gold",
    scientificName: "Selenicereus hybrid",

    category: "Dragonfruit",
    difficulty: "Moderate",
    status: "Guide available",

    summary:
      "A yellow-fruited dragonfruit cultivar valued for its bright exterior, sweet flesh, and distinctive tropical appearance.",

    description:
      "Isis Gold should be grown in a warm, well-draining location with a durable trellis and gradual exposure to stronger sunlight.",

    accent: "lime",
    symbol: "○",

    featured: false,

    quickCare: dragonfruitQuickCare,
    careSections: dragonfruitCareSections,
    beginnerTips: dragonfruitBeginnerTips,

    tags: [
      "dragonfruit",
      "isis gold",
      "yellow dragonfruit",
      "container growing",
      "fruiting cactus",
    ],

    guidePath: "/plants/isis-gold",
    pdfPath: "/guides/isis-gold-care-guide.pdf",
    image: null,
  },

  {
    id: "physical-graffiti",
    slug: "physical-graffiti",

    commonName: "Physical Graffiti Dragonfruit",
    shortName: "Physical Graffiti",
    scientificName: "Selenicereus hybrid",

    category: "Dragonfruit",
    difficulty: "Moderate",
    status: "Guide available",

    summary:
      "A widely grown dragonfruit cultivar known for colorful flesh, vigorous growth, and strong ornamental appeal.",

    description:
      "Physical Graffiti grows as a climbing cactus and benefits from a large container, sturdy trellis, well-draining soil, and seasonal pruning.",

    accent: "aqua",
    symbol: "●",

    featured: false,

    quickCare: dragonfruitQuickCare,
    careSections: dragonfruitCareSections,
    beginnerTips: dragonfruitBeginnerTips,

    tags: [
      "dragonfruit",
      "physical graffiti",
      "colored flesh",
      "trellis growing",
      "fruiting cactus",
    ],

    guidePath: "/plants/physical-graffiti",
    pdfPath: "/guides/physical-graffiti-care-guide.pdf",
    image: null,
  },

  {
    id: "sugar-dragon",
    slug: "sugar-dragon",

    commonName: "Sugar Dragon Dragonfruit",
    shortName: "Sugar Dragon",
    scientificName: "Selenicereus hybrid",

    category: "Dragonfruit",
    difficulty: "Moderate",
    status: "Guide available",

    summary:
      "A dragonfruit cultivar known for producing smaller fruit with richly colored flesh and notably sweet flavor.",

    description:
      "Sugar Dragon is a vigorous climbing cactus that responds well to warm temperatures, strong support, thoughtful pruning, and good drainage.",

    accent: "purple",
    symbol: "♡",

    featured: false,

    quickCare: dragonfruitQuickCare,
    careSections: dragonfruitCareSections,
    beginnerTips: dragonfruitBeginnerTips,

    tags: [
      "dragonfruit",
      "sugar dragon",
      "sweet dragonfruit",
      "small fruit",
      "fruiting cactus",
    ],

    guidePath: "/plants/sugar-dragon",
    pdfPath: "/guides/sugar-dragon-care-guide.pdf",
    image: null,
  },
];

export const plants = [
  ...dragonfruitPlants,
  ...seedPlants,
];

export const featuredPlants = plants.filter((plant) => plant.featured);

export const plantCategories = [
  "All",
  "Dragonfruit",
  "Fruit Trees",
  "Citrus",
  "Herbs",
  "Vegetables",
  "Flowers",
];

export function getPlantBySlug(slug) {
  return plants.find((plant) => plant.slug === slug);
}