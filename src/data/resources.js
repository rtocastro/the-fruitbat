export const resources = [
  {
    id: "dragonfruit-care-guides",
    slug: "dragonfruit-care-guides",
    title: "Dragonfruit Care Guides",
    category: "Plant Care",
    type: "Guide Collection",
    description:
      "Growing guidance for sunlight, watering, containers, trellising, pruning, pollination, and seasonal dragonfruit care.",
    accent: "mint",
    symbol: "○",
    status: "available",
    featured: true,
    tags: ["dragonfruit", "plant care", "growing guide"],
    path: null,
  },

  {
    id: "printable-plant-tags",
    slug: "printable-plant-tags",
    title: "Printable Plant Tags",
    category: "Printables",
    type: "Free Download",
    description:
      "Printable labels for recording plant type, planting date, and other useful garden details.",
    accent: "purple",
    symbol: "♡",
    status: "available",
    featured: true,
    tags: ["printable", "plant tags", "garden organization"],
    path: null,
  },

  {
    id: "neighborhood-plant-registry",
    slug: "neighborhood-plant-registry",
    title: "Neighborhood Plant Registry",
    category: "Community",
    type: "Coming Soon",
    description:
      "A future tool for documenting what neighbors grow, when crops may be ready, and what may be available to share.",
    accent: "lime",
    symbol: "●",
    status: "coming-soon",
    featured: true,
    tags: ["community", "registry", "harvest sharing"],
    path: null,
  },

  {
    id: "beginner-container-guide",
    slug: "beginner-container-guide",
    title: "Beginner Container Guide",
    category: "Beginner Guides",
    type: "Growing Guide",
    description:
      "A simple introduction to choosing containers, drainage, sunlight, soil, and beginner-friendly plants.",
    accent: "aqua",
    symbol: "○",
    status: "planned",
    featured: false,
    tags: ["beginner", "containers", "small spaces"],
    path: null,
  },

  {
    id: "harvest-swap-log",
    slug: "harvest-swap-log",
    title: "Harvest Swap Log",
    category: "Neighborhood Sharing",
    type: "Printable",
    description:
      "A printable record for documenting available harvests, exchanges, dates, and participating neighbors.",
    accent: "coral",
    symbol: "♡",
    status: "planned",
    featured: false,
    tags: ["harvest", "sharing", "printable"],
    path: null,
  },

  {
    id: "plant-observation-sheet",
    slug: "plant-observation-sheet",
    title: "Plant Observation Sheet",
    category: "Kids & Families",
    type: "Activity Sheet",
    description:
      "A simple observation worksheet for recording plant growth, changes, drawings, and questions.",
    accent: "lime",
    symbol: "●",
    status: "planned",
    featured: false,
    tags: ["kids", "education", "worksheet"],
    path: null,
  },

  {
    id: "fruitbat-facts",
    slug: "fruitbat-facts",
    title: "Fruitbat Facts",
    category: "Fruitbat Facts",
    type: "Educational Cards",
    description:
      "Short, approachable facts about fruit, plants, growing, and community.",
    accent: "dark",
    symbol: "♡",
    status: "planned",
    featured: false,
    tags: ["facts", "education", "fruit"],
    path: null,
  },
];

export const featuredResources = resources.filter(
  (resource) => resource.featured
);

export const resourceCategories = [
  "All",
  "Beginner Guides",
  "Plant Care",
  "Printables",
  "Kids & Families",
  "Neighborhood Sharing",
  "Community",
  "Fruitbat Facts",
];