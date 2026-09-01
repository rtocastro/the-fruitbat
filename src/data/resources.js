export const resources = [
  {
    id: "dragonfruit-care-guides",
    slug: "dragonfruit-care-guides",

    title: "Dragonfruit Care Guides",
    category: "Plant Care",
    type: "Guide Collection",

    description:
      "Browse growing guidance and available care guides for the dragonfruit varieties currently growing in The Fruitbat library.",

    accent: "mint",
    symbol: "○",

    status: "available",
    featured: true,

    tags: [
      "dragonfruit",
      "plant care",
      "growing guide",
    ],

    path: "/plants#plant-library",
    externalUrl: null,
    actionLabel: "Browse dragonfruit guides →",
  },

  {
    id: "printable-plant-tags",
    slug: "printable-plant-tags",

    title: "Printable Plant Tags",
    category: "Printables",
    type: "Free Download",

    description:
      "Free printable plant labels, bookmarks, and other useful Fruitbat resources for gardens, classrooms, and everyday growing.",

    accent: "purple",
    symbol: "♡",

    status: "available",
    featured: true,

    tags: [
      "printable",
      "plant tags",
      "garden organization",
    ],

    path: "/resources#free-printables",
    externalUrl: null,
    actionLabel: "Browse free printables →",
  },

  {
    id: "neighborhood-plant-registry",
    slug: "neighborhood-plant-registry",

    title: "Neighborhood Plant Registry",
    category: "Community",
    type: "Future Project",

    description:
      "A future community tool for documenting and discovering edible plants growing around the neighborhood, with opportunities to make plant discovery playful and interactive.",

    accent: "lime",
    symbol: "●",

    status: "future-project",
    featured: true,

    tags: [
      "community",
      "plant discovery",
      "neighborhood growing",
    ],

    path: null,
    externalUrl: null,
    actionLabel: null,
  },

  {
    id: "beginner-container-guide",
    slug: "beginner-container-guide",

    title: "Beginner Container Guide",
    category: "Beginner Guides",
    type: "Growing Guide",

    description:
      "A simple introduction to choosing containers, drainage, sunlight, soil, and beginner-friendly plants for patios, balconies, and other small spaces.",

    accent: "aqua",
    symbol: "○",

    status: "planned",
    featured: false,

    tags: [
      "beginner",
      "containers",
      "small spaces",
    ],

    path: "/start-growing#small-spaces",
    externalUrl: null,
    actionLabel: "Explore small-space growing →",
  },

  {
    id: "harvest-swap-log",
    slug: "harvest-swap-log",

    title: "Neighborhood Harvest Sharing",
    category: "Neighborhood Sharing",
    type: "Community Tool",

    description:
      "Explore how Captain Crop is testing ways for neighbors to discover and share produce, plants, garden resources, and local growing activity.",

    accent: "coral",
    symbol: "♡",

    status: "prototype",
    featured: false,

    tags: [
      "harvest",
      "sharing",
      "Captain Crop",
    ],

    path: "/projects#captain-crop",
    externalUrl: null,
    actionLabel: "Explore Captain Crop →",
  },

  {
    id: "plant-observation-sheet",
    slug: "plant-observation-sheet",

    title: "Plant Observation Sheet",
    category: "Kids & Families",
    type: "Activity Sheet",

    description:
      "A planned kid-friendly worksheet for drawing plants, recording changes, tracking growth, and turning everyday observation into a growing activity.",

    accent: "lime",
    symbol: "●",

    status: "planned",
    featured: false,

    tags: [
      "kids",
      "education",
      "worksheet",
    ],

    path: null,
    externalUrl: null,
    actionLabel: null,
  },

  {
    id: "fruitbat-facts",
    slug: "fruitbat-facts",

    title: "Fruitbat Facts",
    category: "Fruitbat Facts",
    type: "Weekly Series",

    description:
      "Discover bite-sized fruit facts, growing curiosities, plant history, and other useful things worth knowing every Friday on The Fruitbat Instagram.",

    accent: "dark",
    symbol: "♡",

    status: "available",
    featured: false,

    tags: [
      "facts",
      "education",
      "fruit",
    ],

    path: null,
    externalUrl:
      "https://www.instagram.com/thefruitbatla/",
    actionLabel: "Discover Fruitbat Facts →",
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