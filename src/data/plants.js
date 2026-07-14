export const plants = [
  {
    id: "ecuador-palora",
    slug: "ecuador-palora",

    commonName: "Ecuador Palora Dragonfruit",
    shortName: "Ecuador Palora",
    scientificName: "Selenicereus megalanthus",

    category: "Dragonfruit",
    difficulty: "Moderate",
    status: "Guide in progress",

    summary:
      "A yellow-skinned dragonfruit variety known for its sweet white flesh, distinctive flavor, and thorny fruit exterior.",

    description:
      "Ecuador Palora is a yellow dragonfruit variety that benefits from warm conditions, excellent drainage, structural support, and gradual acclimation to stronger sunlight.",

    accent: "lime",
    symbol: "○",

    featured: true,

    quickCare: {
      sunlight: "Bright light to full sun after gradual acclimation",
      watering:
        "Water according to temperature, season, container size, and soil moisture",
      soil: "Fast-draining soil with strong aeration",
      temperature: "Warm growing conditions preferred",
      container: "Large container with a sturdy trellis or support",
      difficulty: "Moderate",
    },

    careSections: [
      {
        id: "sunlight",
        title: "Sunlight",
        symbol: "☀",
        content:
          "Gradually acclimate the plant to stronger sunlight instead of moving it directly from shade into intense full sun. A transition period of approximately two to three weeks can help reduce sunburn risk.",
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
          "Feed according to the season and the plant’s growth stage. Avoid relying heavily on nitrogen if the goal is flowering, but do not remove necessary nutrition from an actively growing plant.",
      },
      {
        id: "pruning",
        title: "Training and pruning",
        symbol: "✂",
        content:
          "Train selected branches upward toward the top of the support. Once established, allow productive branches to hang downward while removing damaged, crowded, or poorly placed growth when necessary.",
      },
    ],

    beginnerTips: [
      "Do not move it into intense sunlight all at once.",
      "Always confirm that the container drains freely.",
      "Give the plant strong support before it becomes heavy.",
      "Adjust watering based on conditions instead of following a rigid schedule.",
      "Expect the guide to evolve as more local growing experience is documented.",
    ],

    tags: [
      "dragonfruit",
      "yellow dragonfruit",
      "palora",
      "container growing",
      "fruiting cactus",
    ],

    guidePath: null,
    pdfPath: null,
    image: null,
  },
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