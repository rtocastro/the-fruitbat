/*
 * Fruitbat Seed Plant Enrichment
 *
 * Variety-specific growing information lives here.
 *
 * IMPORTANT:
 * - generatedSeedGuideIndex.js remains auto-generated.
 * - seedPlantOverrides.js handles corrections.
 * - This file handles researched growing information.
 *
 * Exact values are only included when we have reasonable
 * confidence in the variety-specific information.
 */

const reviewedOn = "2026-09-09";

function buildEntry({
  commonName,
  shortName,
  scientificName,

  summary,
  description,

  sunlight = "Full sun",

  watering =
    "Keep evenly moist while establishing, then water deeply as plants mature",

  soil =
    "Fertile, well-draining soil with organic matter",

  temperature,

  container =
    "Container suitability depends on mature plant size",

  difficulty = "Beginner friendly",

  growingType = "annual",
  growthHabit,

  containerFriendly = false,
  supportRecommended = false,
  pollinatorFriendly = true,

  startMethod,

  germinationDays = null,
  germinationTemperatureF = null,

  seedDepth = null,
  spacing = null,

  daysToMaturity = null,
  harvestNotes = null,

  tags = [],

  source = "Fruitbat editorial data",
}) {
  return {
    commonName,
    shortName,
    scientificName,

    difficulty,
    status: "Enriched guide",

    summary,
    description,

    quickCare: {
      sunlight,
      watering,
      soil,
      temperature,
      container,
      difficulty,
    },

    growingType,

    planting: {
      startMethod,
      seedDepth,
      spacing,
    },

    germination: {
      days: germinationDays,
      temperatureF: germinationTemperatureF,
    },

    harvest: {
      daysToMaturity,
      notes: harvestNotes,
    },

    profileDetails: {
      growthHabit,
      containerFriendly,
      supportRecommended,
      pollinatorFriendly,
    },

    tags,

    enrichment: {
      status: "reviewed",
      source,
      lastReviewed: reviewedOn,
    },
  };
}

export const seedPlantEnrichment = {

  // =========================================================
  // BEANS
  // =========================================================

  "black-turtle-beans": buildEntry({
    commonName: "Black Turtle Beans",
    shortName: "Black Turtle",

    scientificName: "Phaseolus vulgaris",

    summary:
      "A classic black dry bean valued for compact plants and richly colored beans that store well after harvest.",

    description:
      "Black Turtle beans are grown as a warm-season crop. Give plants full sun, warm soil, and even moisture while they establish. For dry beans, allow the pods to mature and dry before shelling.",

    temperature:
      "Warm-season crop; sow after frost danger has passed and soil has warmed",

    container:
      "Can be grown in medium to large containers, especially when using a compact bush strain",

    growthHabit:
      "Bush or compact bean, depending on strain",

    containerFriendly: true,

    startMethod:
      "Direct sow preferred",

    tags: [
      "bean",
      "black bean",
      "black turtle bean",
      "dry bean",
      "warm season",
      "direct sow",
      "seeds",
    ],
  }),

  "joshs-cattle-beans": buildEntry({
    commonName: "Josh's Cattle Beans",
    shortName: "Josh's Cattle",

    scientificName: "Phaseolus vulgaris",

    summary:
      "A dry bean variety grown for distinctive patterned beans that can be harvested after the pods fully mature and dry.",

    description:
      "Grow Josh's Cattle beans as a warm-season bean crop in full sun. If growing them for dry beans or seed saving, allow the pods to mature fully and dry before shelling.",

    temperature:
      "Warm-season crop; sow after frost danger once soil has warmed",

    container:
      "Possible in large containers when the seed strain has a compact growth habit",

    growthHabit:
      "Bean plant; exact habit may vary by seed strain",

    containerFriendly: true,

    startMethod:
      "Direct sow preferred",

    tags: [
      "bean",
      "cattle bean",
      "dry bean",
      "warm season",
      "seed saving",
      "direct sow",
      "seeds",
    ],
  }),

  // =========================================================
  // CORN
  // =========================================================

  "blood-butcher-corn": buildEntry({
    commonName: "Blood Butcher Corn",
    shortName: "Blood Butcher",

    scientificName: "Zea mays",

    summary:
      "A historic red-kernel field corn grown for its richly colored ears and traditional use as meal, flour, decoration, or saved seed.",

    description:
      "Blood Butcher is a tall, warm-season corn. Corn should be planted in blocks rather than a single long row because it relies heavily on wind pollination. Give plants full sun, fertile soil, consistent moisture, and adequate space.",

    temperature:
      "Warm-season crop; direct sow after frost danger when the soil has warmed",

    container:
      "Best grown in the ground or a large raised bed because corn needs root space and group pollination",

    growthHabit:
      "Tall upright corn",

    containerFriendly: false,

    supportRecommended: false,

    startMethod:
      "Direct sow",

    seedDepth:
      "About 3/4–1 inch",

    spacing:
      "About 6–9 inches between plants; plant in blocks for pollination",

    tags: [
      "corn",
      "blood butcher",
      "heirloom corn",
      "field corn",
      "red corn",
      "warm season",
      "direct sow",
      "seeds",
    ],
  }),

  "early-sunglow-corn": buildEntry({
    commonName: "Early Sunglow Corn",
    shortName: "Early Sunglow",

    scientificName: "Zea mays",

    summary:
      "An early sweet corn variety bred to mature relatively quickly, making it useful where the warm growing season is shorter.",

    description:
      "Early Sunglow should be direct sown into warming soil and planted in blocks to improve pollination. Consistent moisture becomes especially important while plants are tasseling and developing ears.",

    temperature:
      "Warm-season crop; sow after frost danger once soil has warmed",

    container:
      "Best grown in the ground or a large raised bed planted in a block",

    growthHabit:
      "Upright sweet corn",

    containerFriendly: false,

    supportRecommended: false,

    startMethod:
      "Direct sow",

    tags: [
      "corn",
      "early sunglow",
      "sweet corn",
      "early corn",
      "warm season",
      "direct sow",
      "seeds",
    ],
  }),

  // =========================================================
  // BROCCOLI
  // =========================================================

  "broccoli-de-cicco": buildEntry({
    commonName: "Broccoli de Cicco",
    shortName: "De Cicco",

    scientificName:
      "Brassica oleracea var. italica",

    summary:
      "An old Italian broccoli variety known for producing a main head followed by numerous smaller side shoots.",

    description:
      "De Cicco performs best as a cool-season brassica. Consistent moisture and steady growth help produce tender heads, and harvesting the central head encourages continued production from side shoots.",

    sunlight:
      "Full sun to partial sun",

    temperature:
      "Cool-season crop that performs best during mild weather",

    container:
      "Container friendly when given a large pot with adequate root space",

    growthHabit:
      "Upright branching brassica",

    containerFriendly: true,

    startMethod:
      "Start indoors or direct sow during cool weather",

    tags: [
      "broccoli",
      "de cicco",
      "brassica",
      "cool season",
      "side shoots",
      "container friendly",
      "seeds",
    ],
  }),

  // =========================================================
  // KALE
  // =========================================================

  "dino-kale": buildEntry({
    commonName: "Dino Kale",
    shortName: "Dino Kale",

    scientificName:
      "Brassica oleracea var. palmifolia",

    summary:
      "A dark blue-green lacinato-type kale with long textured leaves and strong cool-season performance.",

    description:
      "Dino kale can be direct sown or transplanted and is especially useful for fall, winter, and spring gardens. Harvest the outer leaves while allowing the growing center to continue producing.",

    sunlight:
      "Full sun to partial sun",

    temperature:
      "Cool-season crop with good cold tolerance",

    container:
      "Container friendly when given enough room for a mature plant",

    growthHabit:
      "Upright leafy plant",

    containerFriendly: true,

    startMethod:
      "Direct sow or transplant",

    germinationDays:
      "About 5–10 days",

    seedDepth:
      "About 1/2 inch",

    spacing:
      "About 18 inches for full-size plants",

    daysToMaturity:
      "About 60–65 days for mature leaves",

    harvestNotes:
      "Harvest outer leaves repeatedly while leaving the center growing point intact.",

    tags: [
      "kale",
      "dino kale",
      "lacinato kale",
      "leafy green",
      "cool season",
      "container friendly",
      "seeds",
    ],
  }),

  // =========================================================
  // BEETS
  // =========================================================

  "early-wonder-beet": buildEntry({
    commonName: "Early Wonder Beet",
    shortName: "Early Wonder",

    scientificName:
      "Beta vulgaris",

    summary:
      "A fast-growing beet valued for both tender leafy tops and deep red roots.",

    description:
      "Early Wonder is well suited to cool-season planting. Direct sowing avoids disturbing the developing root, and the young leaves can also be harvested as edible greens.",

    sunlight:
      "Full sun to partial sun",

    temperature:
      "Cool-season crop that tolerates cool soil and light frost",

    container:
      "Container friendly when grown in a pot deep enough for root development",

    growthHabit:
      "Leafy rosette with swollen edible root",

    containerFriendly: true,

    startMethod:
      "Direct sow preferred",

    germinationDays:
      "About 5–21 days depending on soil temperature",

    germinationTemperatureF:
      "Can germinate in cool soil; approximately 60–85°F encourages faster germination",

    seedDepth:
      "About 1/2 inch",

    spacing:
      "Thin seedlings to roughly 4 inches apart",

    daysToMaturity:
      "About 48 days",

    harvestNotes:
      "Young leaves may be harvested selectively. Harvest roots while they are still tender rather than allowing them to become oversized.",

    tags: [
      "beet",
      "early wonder",
      "root vegetable",
      "beet greens",
      "cool season",
      "frost tolerant",
      "container friendly",
      "seeds",
    ],
  }),

    // =========================================================
  // CHAMOMILE
  // =========================================================

  "german-chamomile": buildEntry({
    commonName: "German Chamomile",
    shortName: "Chamomile",

    scientificName:
      "Matricaria chamomilla",

    summary:
      "A fragrant annual herb grown for small daisy-like flowers commonly harvested for tea and pollinator gardens.",

    description:
      "German chamomile grows readily from very small seed. Sow shallowly because light can help germination, keep the surface evenly moist, and harvest flowers regularly once blooming begins.",

    sunlight:
      "Full sun to partial sun",

    temperature:
      "Best in mild to warm conditions; can be grown as a cool-season annual in hotter climates",

    container:
      "Container friendly",

    growingType:
      "annual",

    growthHabit:
      "Branching annual herb",

    containerFriendly: true,

    startMethod:
      "Surface sow or barely cover; direct sow or transplant",

    germinationDays:
      "Often about 10–21 days",

    seedDepth:
      "Surface sow or cover very lightly",

    harvestNotes:
      "Harvest flower heads when petals are open and centers are fully developed.",

    tags: [
      "chamomile",
      "german chamomile",
      "herb",
      "tea herb",
      "flowers",
      "pollinator friendly",
      "container friendly",
      "seeds",
    ],
  }),

  // =========================================================
  // OREGANO
  // =========================================================

  "greek-oregano": buildEntry({
    commonName: "Greek Oregano",
    shortName: "Greek Oregano",

    scientificName:
      "Origanum vulgare subsp. hirtum",

    summary:
      "A strongly flavored perennial oregano prized for culinary leaves and clusters of flowers attractive to pollinators.",

    description:
      "Greek oregano prefers strong sun and excellent drainage. Once established, it performs best when the soil is allowed to dry somewhat between waterings rather than remaining constantly wet.",

    watering:
      "Water regularly while establishing; allow the upper soil to dry somewhat between waterings once mature",

    soil:
      "Well-draining soil; avoid persistently wet conditions",

    temperature:
      "Perennial herb with good cold tolerance once established",

    container:
      "Excellent container herb",

    growingType:
      "perennial",

    growthHabit:
      "Low, spreading woody-based herb",

    containerFriendly: true,

    startMethod:
      "Start indoors or direct sow during mild weather",

    tags: [
      "oregano",
      "greek oregano",
      "perennial herb",
      "culinary herb",
      "pollinator friendly",
      "container friendly",
      "seeds",
    ],
  }),

  // =========================================================
  // LAVENDER
  // =========================================================

  "lavendar": buildEntry({
    commonName: "Lavender",
    shortName: "Lavender",

    scientificName:
      "Lavandula spp.",

    summary:
      "A fragrant Mediterranean herb grown for aromatic foliage, flowers, pollinator value, and ornamental use.",

    description:
      "Lavender needs strong light and excellent drainage. Because the current seed record does not identify the exact lavender species or cultivar, species-specific hardiness, mature size, and germination details should be confirmed from the original packet.",

    watering:
      "Water regularly while establishing, then allow the soil to dry somewhat between waterings",

    soil:
      "Lean to moderately fertile, sharply draining soil",

    temperature:
      "Hardiness and heat tolerance vary by lavender species",

    container:
      "Excellent for containers with very good drainage",

    difficulty:
      "Moderate",

    growingType:
      "perennial",

    growthHabit:
      "Woody perennial herb",

    containerFriendly: true,

    startMethod:
      "Usually started indoors; exact germination needs depend on species",

    tags: [
      "lavender",
      "lavandula",
      "herb",
      "perennial",
      "pollinator friendly",
      "container friendly",
      "fragrant plant",
      "seeds",
    ],
  }),

  // =========================================================
  // SAGE
  // =========================================================

  "sage": buildEntry({
    commonName: "Sage",
    shortName: "Sage",

    scientificName:
      "Salvia officinalis",

    summary:
      "A woody perennial culinary herb with aromatic gray-green foliage and flowers that attract pollinators.",

    description:
      "Sage prefers full sun and well-draining soil. Once established, it tolerates somewhat drier conditions and generally performs better when its roots are not kept constantly wet.",

    watering:
      "Water while establishing; allow the soil to dry somewhat between waterings once mature",

    soil:
      "Well-draining soil; avoid waterlogged conditions",

    temperature:
      "Perennial herb with good cold tolerance once established",

    container:
      "Excellent container herb",

    growingType:
      "perennial",

    growthHabit:
      "Woody perennial herb",

    containerFriendly: true,

    startMethod:
      "Start indoors or direct sow in mild conditions",

    tags: [
      "sage",
      "salvia officinalis",
      "perennial herb",
      "culinary herb",
      "pollinator friendly",
      "container friendly",
      "seeds",
    ],
  }),

  // =========================================================
  // CILANTRO
  // =========================================================

  "santo-cilantro": buildEntry({
    commonName: "Santo Cilantro",
    shortName: "Santo Cilantro",

    scientificName:
      "Coriandrum sativum",

    summary:
      "A cilantro variety selected for leafy production and relatively slow bolting compared with many standard strains.",

    description:
      "Santo cilantro performs best in cool to mild weather. Direct sowing is preferred, and repeated succession sowings can extend the harvest. Sustained heat encourages plants to bolt and produce flowers and coriander seed.",

    sunlight:
      "Full sun in cool weather; partial afternoon shade can help in warmer conditions",

    temperature:
      "Cool-season herb that bolts more quickly during sustained heat",

    container:
      "Excellent container herb",

    growingType:
      "annual",

    growthHabit:
      "Upright annual herb",

    containerFriendly: true,

    startMethod:
      "Direct sow preferred",

    harvestNotes:
      "Harvest outer leaves or cut stems regularly before the plant bolts. Flowers and mature seed can also be allowed to develop.",

    tags: [
      "cilantro",
      "santo cilantro",
      "coriander",
      "cool season",
      "slow bolt",
      "container friendly",
      "herb",
      "seeds",
    ],
  }),

  // =========================================================
  // PEPPERMINT
  // =========================================================

  "peppermint": buildEntry({
    commonName: "Peppermint",
    shortName: "Peppermint",

    scientificName:
      "Mentha × piperita",

    summary:
      "A strongly aromatic mint traditionally identified as the hybrid Mentha × piperita.",

    description:
      "Peppermint grows vigorously and is usually best kept in a container because mint can spread aggressively. True peppermint is a hybrid commonly propagated vegetatively, so seed-grown plants may show variation. Keep the original packet information associated with this profile.",

    sunlight:
      "Full sun to partial shade",

    watering:
      "Keep evenly moist; mint generally performs poorly if allowed to dry out completely for long periods",

    soil:
      "Moist, fertile, well-draining soil",

    temperature:
      "Cool to warm growing conditions; perennial where winter temperatures allow",

    container:
      "Highly recommended for containers to control spreading",

    growingType:
      "perennial",

    growthHabit:
      "Spreading rhizomatous herb",

    containerFriendly: true,

    startMethod:
      "Seed or vegetative propagation; seed-grown peppermint may vary",

    tags: [
      "peppermint",
      "mint",
      "mentha",
      "perennial herb",
      "container recommended",
      "spreading herb",
      "seeds",
    ],
  }),

    // =========================================================
  // PEAS
  // =========================================================

  "little-purple-snow-pea": buildEntry({
    commonName: "Little Purple Snow Pea",
    shortName: "Little Purple Snow Pea",

    scientificName:
      "Pisum sativum var. macrocarpon",

    summary:
      "A cool-season snow pea grown for colorful edible pods and tender young shoots.",

    description:
      "Little Purple Snow Pea performs best during cool weather. Give the vines support, keep the soil evenly moist, and harvest pods frequently while they are still young and tender.",

    sunlight:
      "Full sun to partial sun",

    temperature:
      "Cool-season crop that performs best before sustained hot weather",

    container:
      "Container friendly when provided with a trellis or other vertical support",

    growthHabit:
      "Climbing pea vine",

    containerFriendly: true,

    supportRecommended: true,

    startMethod:
      "Direct sow preferred",

    harvestNotes:
      "Harvest snow pea pods while they are young and relatively flat for the most tender texture.",

    tags: [
      "pea",
      "snow pea",
      "purple pea",
      "cool season",
      "climbing plant",
      "trellis",
      "container friendly",
      "seeds",
    ],
  }),

  // =========================================================
  // CUCUMBERS
  // =========================================================

  "marketmore-76-cucumber": buildEntry({
    commonName: "Marketmore 76 Cucumber",
    shortName: "Marketmore 76",

    scientificName:
      "Cucumis sativus",

    summary:
      "A dependable slicing cucumber known for vigorous vines and dark green fruit.",

    description:
      "Marketmore 76 is a warm-season vining cucumber. Direct sow after the soil has warmed or transplant carefully after frost danger. A trellis can save space, improve airflow, and keep fruit off the ground.",

    temperature:
      "Warm-season crop; plant after frost danger once soil has warmed",

    container:
      "Can grow in a large container when provided with sturdy vertical support",

    growthHabit:
      "Vining cucumber",

    containerFriendly: true,

    supportRecommended: true,

    startMethod:
      "Direct sow or carefully transplant",

    germinationDays:
      "About 3–10 days in warm soil",

    germinationTemperatureF:
      "Approximately 70–85°F",

    seedDepth:
      "About 1/2 inch",

    daysToMaturity:
      "Approximately 58–68 days, depending on growing conditions",

    harvestNotes:
      "Harvest regularly once fruit reaches usable slicing size to encourage continued production.",

    tags: [
      "cucumber",
      "marketmore 76",
      "slicing cucumber",
      "warm season",
      "vine",
      "trellis",
      "container friendly",
      "seeds",
    ],
  }),

  "patio-snacker-cucumber": buildEntry({
    commonName: "Patio Snacker Cucumber",
    shortName: "Patio Snacker",

    scientificName:
      "Cucumis sativus",

    summary:
      "A compact cucumber developed for patios, containers, and other gardens where growing space is limited.",

    description:
      "Patio Snacker combines relatively compact growth with full-size slicing cucumbers. Grow it during warm weather in a sunny location and provide support to keep the plant tidy and make harvesting easier.",

    temperature:
      "Warm-season crop; plant after frost danger once soil has warmed",

    container:
      "Well suited to patio containers and small-space gardens",

    growthHabit:
      "Compact vining cucumber",

    containerFriendly: true,

    supportRecommended: true,

    startMethod:
      "Direct sow or carefully transplant",

    seedDepth:
      "About 1/2 inch",

    spacing:
      "Allow roughly 6–12 inches between plants when supported",

    daysToMaturity:
      "About 50–55 days",

    harvestNotes:
      "Harvest fruit regularly while it is firm and tender to encourage continued production.",

    tags: [
      "cucumber",
      "patio snacker",
      "patio cucumber",
      "container vegetable",
      "small space",
      "warm season",
      "trellis",
      "seeds",
    ],
  }),

  // =========================================================
  // MIZUNA
  // =========================================================

  "mizuna-red-kingdom": buildEntry({
    commonName: "Mizuna Red Kingdom",
    shortName: "Red Kingdom Mizuna",

    scientificName:
      "Brassica rapa",

    summary:
      "A colorful mizuna grown for deeply cut leaves that can be harvested young for salads or allowed to reach full size.",

    description:
      "Red Kingdom Mizuna is best treated as a cool-season leafy green. It grows quickly, works well in containers, and can be harvested repeatedly by taking outer leaves while leaving the center intact.",

    sunlight:
      "Full sun to partial sun",

    temperature:
      "Cool-season leafy green; quality generally declines during sustained heat",

    container:
      "Excellent for containers and small-space gardens",

    growthHabit:
      "Upright leafy rosette",

    containerFriendly: true,

    startMethod:
      "Direct sow or transplant",

    harvestNotes:
      "Harvest individual outer leaves or cut young plants for baby greens.",

    tags: [
      "mizuna",
      "red kingdom",
      "leafy green",
      "mustard green",
      "cool season",
      "container friendly",
      "baby greens",
      "seeds",
    ],
  }),

  // =========================================================
  // SPINACH
  // =========================================================

  "space-spinach": buildEntry({
    commonName: "Space Spinach",
    shortName: "Space Spinach",

    scientificName:
      "Spinacia oleracea",

    summary:
      "A compact spinach variety valued for upright growth, tender leaves, and improved tolerance to bolting compared with many traditional spinach varieties.",

    description:
      "Space Spinach performs best during cool weather. Direct sow into moist soil and harvest outer leaves as needed, or cut whole young plants. Although it has useful bolt tolerance, prolonged heat can still reduce spinach quality.",

    sunlight:
      "Full sun during cool weather; partial shade can help as temperatures rise",

    temperature:
      "Cool-season crop with some improved tolerance to warmer conditions",

    container:
      "Excellent for containers and small-space gardens",

    growthHabit:
      "Compact upright leafy rosette",

    containerFriendly: true,

    startMethod:
      "Direct sow preferred",

    daysToMaturity:
      "Approximately 37–40 days for mature leaves",

    harvestNotes:
      "Harvest outer leaves repeatedly or harvest whole plants while leaves remain tender.",

    tags: [
      "spinach",
      "space spinach",
      "leafy green",
      "cool season",
      "bolt tolerant",
      "container friendly",
      "seeds",
    ],
  }),

  // =========================================================
  // LETTUCE
  // =========================================================

  "tri-color-romaine-lettuce": buildEntry({
    commonName: "Tri Color Romaine Lettuce",
    shortName: "Tri Color Romaine",

    scientificName:
      "Lactuca sativa",

    summary:
      "A colorful romaine lettuce mix grown for crisp leaves and visual variety in salads and small-space gardens.",

    description:
      "Romaine lettuce performs best during cool to mild weather. Keep the soil evenly moist and harvest individual outer leaves or allow plants to develop larger heads. Hot weather can encourage bolting and bitterness.",

    sunlight:
      "Full sun in cool weather; partial afternoon shade can help during warmer conditions",

    watering:
      "Keep evenly moist for tender, consistent leaf growth",

    temperature:
      "Cool-season crop; sustained heat can encourage bolting",

    container:
      "Excellent for containers and raised beds",

    growthHabit:
      "Upright leafy rosette",

    containerFriendly: true,

    startMethod:
      "Direct sow or transplant",

    harvestNotes:
      "Harvest outer leaves as needed or harvest the plant once a usable romaine head develops.",

    tags: [
      "lettuce",
      "romaine",
      "tri color romaine",
      "leafy green",
      "cool season",
      "container friendly",
      "salad garden",
      "seeds",
    ],
  }),

  // =========================================================
  // CELERY
  // =========================================================

  "tall-utah-celery": buildEntry({
    commonName: "Tall Utah Celery",
    shortName: "Tall Utah",

    scientificName:
      "Apium graveolens var. dulce",

    summary:
      "A traditional tall celery variety grown for crisp upright stalks and leafy tops.",

    description:
      "Tall Utah celery prefers a long period of mild weather, rich soil, and very consistent moisture. Celery grows more slowly than many common vegetables and should not be allowed to dry severely during active growth.",

    sunlight:
      "Full sun to partial sun",

    watering:
      "Keep consistently moist; celery is sensitive to prolonged drying",

    soil:
      "Rich, moisture-retentive but well-draining soil with plenty of organic matter",

    temperature:
      "Prefers a long, cool-to-mild growing season",

    container:
      "Possible in a deep, generously sized container with consistent watering",

    difficulty:
      "Moderate",

    growthHabit:
      "Upright stalk-forming plant",

    containerFriendly: true,

    startMethod:
      "Usually started indoors and transplanted",

    harvestNotes:
      "Harvest individual outer stalks as needed or cut the mature plant near soil level.",

    tags: [
      "celery",
      "tall utah",
      "cool season",
      "container vegetable",
      "moisture loving",
      "vegetable",
      "seeds",
    ],
  }),

  // =========================================================
  // CARROTS
  // =========================================================

  "tendersweet-carrot": buildEntry({
    commonName: "Tendersweet Carrot",
    shortName: "Tendersweet",

    scientificName:
      "Daucus carota subsp. sativus",

    summary:
      "A long-rooted carrot variety grown for sweet, tender orange roots.",

    description:
      "Tendersweet carrots are best direct sown into loose, stone-free soil so the long roots can develop without obstruction. Keep the seedbed consistently moist during germination and thin seedlings to reduce crowding.",

    sunlight:
      "Full sun",

    watering:
      "Keep the seedbed evenly moist during germination, then water consistently as roots develop",

    soil:
      "Deep, loose, well-draining soil with minimal stones or compacted material",

    temperature:
      "Cool-season root crop that performs best during mild weather",

    container:
      "Use a deep container that provides adequate room for long roots",

    growthHabit:
      "Leafy top with long edible taproot",

    containerFriendly: true,

    startMethod:
      "Direct sow only",

    harvestNotes:
      "Harvest when roots reach useful size and before they become overly mature or woody.",

    tags: [
      "carrot",
      "tendersweet",
      "root vegetable",
      "cool season",
      "direct sow",
      "deep container",
      "seeds",
    ],
  }),

  // =========================================================
  // RADISH
  // =========================================================

  "pink-beauty-radish": buildEntry({
    commonName: "Pink Beauty Radish",
    shortName: "Pink Beauty",

    scientificName:
      "Raphanus sativus",

    summary:
      "A colorful radish grown for crisp pink roots and fast cool-season harvests.",

    description:
      "Pink Beauty radishes are best direct sown during cool weather. Their relatively quick growth makes them useful for succession planting, containers, and filling temporary gaps between slower-growing crops.",

    sunlight:
      "Full sun to partial sun",

    watering:
      "Keep evenly moist for rapid growth and tender roots",

    temperature:
      "Cool-season crop; hot weather can reduce root quality and encourage bolting",

    container:
      "Excellent for containers with adequate root depth",

    growthHabit:
      "Leafy rosette with edible swollen root",

    containerFriendly: true,

    startMethod:
      "Direct sow preferred",

    harvestNotes:
      "Harvest promptly when roots reach usable size; oversized radishes may become pithy or overly strong.",

    tags: [
      "radish",
      "pink beauty",
      "root vegetable",
      "cool season",
      "fast growing",
      "container friendly",
      "direct sow",
      "seeds",
    ],
  }),

    // =========================================================
  // JALAPEÑO PEPPERS
  // =========================================================

  "early-jalapeno-pepper": buildEntry({
    commonName: "Early Jalapeño Pepper",
    shortName: "Early Jalapeño",

    scientificName:
      "Capsicum annuum",

    summary:
      "An early-producing jalapeño variety grown for medium-hot peppers that can be harvested green or allowed to ripen fully.",

    description:
      "Early Jalapeño is a warm-season pepper that benefits from being started indoors before outdoor temperatures become consistently warm. Give plants full sun, fertile soil, steady moisture, and plenty of warmth for strong growth and fruit production.",

    temperature:
      "Warm-season crop; peppers germinate and grow best with consistently warm conditions",

    container:
      "Well suited to containers with adequate root space",

    growthHabit:
      "Compact upright pepper plant",

    containerFriendly: true,

    startMethod:
      "Start indoors and transplant after frost danger",

    germinationDays:
      "About 7–14 days under warm conditions",

    germinationTemperatureF:
      "Approximately 75–90°F; warm seed-starting conditions improve germination",

    seedDepth:
      "About 1/4 inch",

    spacing:
      "About 18 inches between plants",

    daysToMaturity:
      "Approximately 65–80 days from transplant, depending on growing conditions",

    harvestNotes:
      "Harvest green for the familiar jalapeño flavor or allow peppers to ripen further for mature color and increased sweetness.",

    tags: [
      "pepper",
      "jalapeno",
      "early jalapeno",
      "hot pepper",
      "warm season",
      "container friendly",
      "capsicum annuum",
      "seeds",
    ],
  }),

  "purple-jalapeno-pepper": buildEntry({
    commonName: "Purple Jalapeño Pepper",
    shortName: "Purple Jalapeño",

    scientificName:
      "Capsicum annuum",

    summary:
      "A colorful jalapeño-type pepper grown for purple fruit that provides both ornamental interest and edible hot peppers.",

    description:
      "Purple Jalapeño is grown much like other jalapeños. Start seeds with warmth, transplant after frost danger, and provide full sun. Fruit can be harvested during its purple stage or allowed to continue ripening.",

    temperature:
      "Warm-season crop that prefers consistently warm growing conditions",

    container:
      "Well suited to containers with adequate root space",

    growthHabit:
      "Upright pepper plant",

    containerFriendly: true,

    startMethod:
      "Start indoors and transplant after frost danger",

    seedDepth:
      "About 1/4 inch",

    harvestNotes:
      "Harvest during the purple stage or allow fruit to continue ripening to its mature color.",

    tags: [
      "pepper",
      "jalapeno",
      "purple jalapeno",
      "purple pepper",
      "hot pepper",
      "warm season",
      "container friendly",
      "capsicum annuum",
      "seeds",
    ],
  }),

  // =========================================================
  // BELL PEPPERS
  // =========================================================

  "mexican-yellow-bell-pepper": buildEntry({
    commonName: "Mexican Yellow Bell Pepper",
    shortName: "Mexican Yellow Bell",

    scientificName:
      "Capsicum annuum",

    summary:
      "A yellow bell pepper variety grown for sweet, blocky fruit and warm-season production.",

    description:
      "Grow Mexican Yellow Bell Pepper like other sweet peppers: start with plenty of warmth, transplant after frost danger, and provide full sun with consistent moisture. Because the exact seed strain has not yet been independently confirmed, maturity and mature plant size should be checked against the original packet.",

    temperature:
      "Warm-season crop that prefers consistently warm conditions",

    container:
      "Container friendly when provided with adequate root space",

    growthHabit:
      "Upright sweet pepper plant",

    containerFriendly: true,

    startMethod:
      "Start indoors and transplant after frost danger",

    seedDepth:
      "About 1/4 inch",

    harvestNotes:
      "Fruit may generally be harvested immature or left on the plant to develop its mature yellow color.",

    tags: [
      "pepper",
      "bell pepper",
      "yellow bell pepper",
      "sweet pepper",
      "warm season",
      "container friendly",
      "capsicum annuum",
      "seeds",
    ],
  }),

  "netherlandic-red-bell-pepper": buildEntry({
    commonName: "Netherlandic Red Bell Pepper",
    shortName: "Netherlandic Red Bell",

    scientificName:
      "Capsicum annuum",

    summary:
      "A red bell pepper variety grown for sweet fruit that develops its mature color as it ripens.",

    description:
      "Grow Netherlandic Red Bell Pepper in full sun and warm conditions with consistent moisture. Because the exact seed strain has not yet been independently confirmed, variety-specific maturity, plant size, and fruit dimensions should be checked against the original packet.",

    temperature:
      "Warm-season crop that prefers consistently warm conditions",

    container:
      "Container friendly when provided with adequate root space",

    growthHabit:
      "Upright sweet pepper plant",

    containerFriendly: true,

    startMethod:
      "Start indoors and transplant after frost danger",

    seedDepth:
      "About 1/4 inch",

    harvestNotes:
      "Bell peppers can generally be harvested green or allowed to remain on the plant until fully colored and sweeter.",

    tags: [
      "pepper",
      "bell pepper",
      "red bell pepper",
      "sweet pepper",
      "warm season",
      "container friendly",
      "capsicum annuum",
      "seeds",
    ],
  }),

  "purple-beauty-bell-pepper": buildEntry({
    commonName: "Purple Beauty Bell Pepper",
    shortName: "Purple Beauty",

    scientificName:
      "Capsicum annuum",

    summary:
      "A sweet bell pepper known for attractive purple fruit and compact garden-friendly growth.",

    description:
      "Purple Beauty is a warm-season sweet pepper. Start seeds indoors with warmth, transplant after frost danger, and provide full sun. Its colorful fruit makes it especially useful in edible gardens where ornamental value is also welcome.",

    temperature:
      "Warm-season crop that prefers consistently warm growing conditions",

    container:
      "Well suited to containers and small-space gardens",

    growthHabit:
      "Compact upright sweet pepper plant",

    containerFriendly: true,

    startMethod:
      "Start indoors and transplant after frost danger",

    seedDepth:
      "About 1/4 inch",

    harvestNotes:
      "Harvest during the purple stage for its distinctive color or allow fruit to continue ripening.",

    tags: [
      "pepper",
      "bell pepper",
      "purple beauty",
      "purple pepper",
      "sweet pepper",
      "warm season",
      "container friendly",
      "seeds",
    ],
  }),

  // =========================================================
  // HABANERO PEPPERS
  // =========================================================

  "peach-habanero-pepper": buildEntry({
    commonName: "Peach Habanero Pepper",
    shortName: "Peach Habanero",

    scientificName:
      "Capsicum chinense",

    summary:
      "A very hot habanero-type pepper grown for peach-colored mature fruit with the characteristic fruity aroma associated with Capsicum chinense peppers.",

    description:
      "Peach Habanero needs a long, warm growing season. Start seeds indoors well ahead of outdoor planting, provide warm germination conditions, and transplant only after temperatures are reliably warm.",

    temperature:
      "Heat-loving crop that benefits from a long, consistently warm growing season",

    container:
      "Well suited to containers with adequate root space",

    difficulty:
      "Moderate",

    growthHabit:
      "Branching hot pepper plant",

    containerFriendly: true,

    startMethod:
      "Start indoors well before transplanting outdoors",

    seedDepth:
      "About 1/4 inch",

    harvestNotes:
      "Allow fruit to develop its mature peach color for fully ripe peppers.",

    tags: [
      "pepper",
      "habanero",
      "peach habanero",
      "hot pepper",
      "capsicum chinense",
      "warm season",
      "container friendly",
      "seeds",
    ],
  }),

  "primero-red-habanero-pepper": buildEntry({
    commonName: "Primero Red Habanero Pepper",
    shortName: "Primero Red Habanero",

    scientificName:
      "Capsicum chinense",

    summary:
      "A red habanero-type pepper grown for very hot fruit and warm-season production.",

    description:
      "Primero Red Habanero should be treated as a long-season, heat-loving pepper. Start seeds indoors under warm conditions and transplant outside only once nights and soil temperatures are reliably warm.",

    temperature:
      "Heat-loving crop that performs best during a long warm season",

    container:
      "Container friendly when given adequate root space and consistent care",

    difficulty:
      "Moderate",

    growthHabit:
      "Branching hot pepper plant",

    containerFriendly: true,

    startMethod:
      "Start indoors well before transplanting outdoors",

    seedDepth:
      "About 1/4 inch",

    harvestNotes:
      "Allow peppers to develop their mature red color for fully ripe fruit.",

    tags: [
      "pepper",
      "habanero",
      "red habanero",
      "primero red",
      "hot pepper",
      "capsicum chinense",
      "warm season",
      "container friendly",
      "seeds",
    ],
  }),

    // =========================================================
  // TOMATOES
  // =========================================================

  "red-vine-tomatoes": buildEntry({
    commonName: "Red Vine Tomatoes",
    shortName: "Red Vine",

    scientificName:
      "Solanum lycopersicum",

    summary:
      "A red tomato variety grown for warm-season fruit production on vigorous plants.",

    description:
      "Red Vine Tomatoes should be grown in full sun after temperatures have warmed. Tomatoes benefit from deep, consistent watering and support that keeps foliage and fruit off the ground. Because the exact strain represented by this seed packet has not yet been independently confirmed, its mature size and determinate or indeterminate habit should be verified from the original packet.",

    temperature:
      "Warm-season crop; transplant outdoors after frost danger when nights are reliably mild",

    container:
      "Can be container grown when provided with a large pot and appropriate support",

    growthHabit:
      "Tomato plant; exact determinate or indeterminate habit should be confirmed from the seed packet",

    containerFriendly: true,

    supportRecommended: true,

    startMethod:
      "Start indoors and transplant after frost danger",

    seedDepth:
      "About 1/4 inch",

    harvestNotes:
      "Harvest fruit as it develops full color and begins to soften slightly.",

    tags: [
      "tomato",
      "red vine tomato",
      "red tomato",
      "warm season",
      "container friendly",
      "support recommended",
      "solanum lycopersicum",
      "seeds",
    ],
  }),

  "roma-tomatoes": buildEntry({
    commonName: "Roma Tomatoes",
    shortName: "Roma",

    scientificName:
      "Solanum lycopersicum",

    summary:
      "A plum-style tomato commonly grown for meaty fruit useful for sauces, cooking, preserving, and fresh eating.",

    description:
      "Roma tomatoes prefer full sun, warm weather, fertile soil, and consistent watering. Many Roma strains have relatively concentrated production, but growth habit can vary, so the exact seed packet should be checked before assigning a specific determinate or indeterminate habit.",

    temperature:
      "Warm-season crop; transplant outdoors after frost danger when nights are reliably mild",

    container:
      "Container friendly with a large pot and appropriate support",

    growthHabit:
      "Plum-type tomato; exact growth habit depends on strain",

    containerFriendly: true,

    supportRecommended: true,

    startMethod:
      "Start indoors and transplant after frost danger",

    seedDepth:
      "About 1/4 inch",

    harvestNotes:
      "Harvest when fruit reaches its mature color and feels firm but no longer hard.",

    tags: [
      "tomato",
      "roma tomato",
      "plum tomato",
      "sauce tomato",
      "warm season",
      "container friendly",
      "support recommended",
      "seeds",
    ],
  }),

  "patio-choice-yellow-tomato": buildEntry({
    commonName: "Patio Choice Yellow Tomato",
    shortName: "Patio Choice Yellow",

    scientificName:
      "Solanum lycopersicum",

    summary:
      "A compact yellow cherry tomato developed specifically for containers, patios, and small-space gardens.",

    description:
      "Patio Choice Yellow combines a compact determinate growth habit with clusters of small yellow tomatoes. Its naturally smaller plant size makes it particularly useful for balconies, patios, and other spaces where a large tomato vine would be impractical.",

    temperature:
      "Warm-season crop; transplant outdoors after frost danger when nights are reliably mild",

    container:
      "Excellent container tomato and particularly well suited to patios and small spaces",

    growthHabit:
      "Compact determinate tomato",

    containerFriendly: true,

    supportRecommended: true,

    startMethod:
      "Start indoors and transplant after frost danger",

    seedDepth:
      "About 1/4 inch",

    daysToMaturity:
      "About 45 days from transplant under suitable growing conditions",

    harvestNotes:
      "Harvest when the cherry-size fruit develops its mature yellow color.",

    tags: [
      "tomato",
      "patio choice yellow",
      "yellow tomato",
      "cherry tomato",
      "determinate tomato",
      "patio garden",
      "small space",
      "container friendly",
      "seeds",
    ],
  }),

  "rainbow-beefsteak-tomato": buildEntry({
    commonName: "Rainbow Beefsteak Tomato",
    shortName: "Rainbow Beefsteak",

    scientificName:
      "Solanum lycopersicum",

    summary:
      "A beefsteak-type tomato grown for large, colorful slicing fruit during the warm season.",

    description:
      "Rainbow Beefsteak tomatoes need plenty of sun, warm weather, rich soil, and sturdy support. Large-fruited tomatoes especially benefit from consistent watering because major swings in soil moisture can affect fruit development.",

    temperature:
      "Warm-season crop; transplant outdoors after frost danger when nights are reliably mild",

    container:
      "Possible in a very large container with strong support",

    growthHabit:
      "Vigorous beefsteak-type tomato",

    containerFriendly: true,

    supportRecommended: true,

    startMethod:
      "Start indoors and transplant after frost danger",

    seedDepth:
      "About 1/4 inch",

    harvestNotes:
      "Harvest when fruit develops its mature coloration and gives slightly under gentle pressure.",

    tags: [
      "tomato",
      "rainbow beefsteak",
      "beefsteak tomato",
      "slicing tomato",
      "large tomato",
      "warm season",
      "support recommended",
      "seeds",
    ],
  }),

  "sun-gold-tomato": buildEntry({
    commonName: "Sun Gold Tomato",
    shortName: "Sun Gold",

    scientificName:
      "Solanum lycopersicum",

    summary:
      "A vigorous cherry tomato known for producing abundant clusters of sweet golden-orange fruit.",

    description:
      "Sun Gold is an indeterminate cherry tomato that continues growing and producing throughout favorable warm weather. It benefits from strong support, consistent watering, full sun, and frequent harvesting.",

    temperature:
      "Warm-season crop; transplant outdoors after frost danger when nights are reliably mild",

    container:
      "Container friendly when given a large container and sturdy vertical support",

    growthHabit:
      "Indeterminate vine",

    containerFriendly: true,

    supportRecommended: true,

    startMethod:
      "Start indoors and transplant after frost danger",

    seedDepth:
      "About 1/4 inch",

    harvestNotes:
      "Harvest frequently once fruit develops its characteristic golden-orange color.",

    tags: [
      "sun gold",
      "tomato",
      "cherry tomato",
      "orange tomato",
      "indeterminate tomato",
      "container friendly",
      "full sun",
      "warm season",
      "support recommended",
      "seeds",
    ],
  }),

  "sun-green-tomato": buildEntry({
    commonName: "Sun Green Tomato",
    shortName: "Sun Green",

    scientificName:
      "Solanum lycopersicum",

    summary:
      "A green-fruited tomato variety grown as a warm-season crop.",

    description:
      "Sun Green Tomato should receive full sun, consistent moisture, and appropriate support as it develops. Because the exact strain represented by the current seed packet has not yet been independently confirmed, details such as mature fruit color cues, growth habit, fruit size, and days to maturity should be checked against the original packet.",

    temperature:
      "Warm-season crop; transplant outdoors after frost danger when nights are reliably mild",

    container:
      "Container growing may be possible with a large pot and appropriate support",

    growthHabit:
      "Tomato plant; exact growth habit should be confirmed from the seed packet",

    containerFriendly: true,

    supportRecommended: true,

    startMethod:
      "Start indoors and transplant after frost danger",

    seedDepth:
      "About 1/4 inch",

    harvestNotes:
      "Use the variety's mature color, texture, and original packet guidance to judge ripeness because green-fruited tomatoes may not develop the typical red ripening cue.",

    tags: [
      "tomato",
      "sun green",
      "green tomato",
      "warm season",
      "container friendly",
      "support recommended",
      "seeds",
    ],
  }),

  "suncherry-tomato": buildEntry({
    commonName: "Suncherry Tomato",
    shortName: "Suncherry",

    scientificName:
      "Solanum lycopersicum",

    summary:
      "A cherry-type tomato grown for clusters of small fruit and productive warm-season growth.",

    description:
      "Suncherry tomatoes benefit from full sun, consistent watering, fertile soil, and sturdy support. Regular harvesting helps keep productive plants manageable and encourages you to catch ripe fruit at its best.",

    temperature:
      "Warm-season crop; transplant outdoors after frost danger when nights are reliably mild",

    container:
      "Container friendly when provided with a large pot and sturdy support",

    growthHabit:
      "Vigorous cherry-type tomato",

    containerFriendly: true,

    supportRecommended: true,

    startMethod:
      "Start indoors and transplant after frost danger",

    seedDepth:
      "About 1/4 inch",

    harvestNotes:
      "Harvest cherry tomatoes frequently as they reach their mature color.",

    tags: [
      "tomato",
      "suncherry",
      "cherry tomato",
      "warm season",
      "container friendly",
      "support recommended",
      "seeds",
    ],
  }),

  "sunchocola-tomato": buildEntry({
    commonName: "Sunchocola Tomato",
    shortName: "Sunchocola",

    scientificName:
      "Solanum lycopersicum",

    summary:
      "A cherry tomato known for richly colored fruit and vigorous warm-season production.",

    description:
      "Sunchocola should be grown in full sun with consistent moisture and sturdy support. Like other vigorous cherry tomatoes, regular harvesting and training can help keep the plant manageable throughout a long growing season.",

    temperature:
      "Warm-season crop; transplant outdoors after frost danger when nights are reliably mild",

    container:
      "Container friendly when provided with a large pot and sturdy support",

    growthHabit:
      "Vigorous cherry-type tomato",

    containerFriendly: true,

    supportRecommended: true,

    startMethod:
      "Start indoors and transplant after frost danger",

    seedDepth:
      "About 1/4 inch",

    harvestNotes:
      "Harvest regularly as fruit develops its mature coloration and flavor.",

    tags: [
      "tomato",
      "sunchocola",
      "cherry tomato",
      "dark tomato",
      "warm season",
      "container friendly",
      "support recommended",
      "seeds",
    ],
  }),

  "valley-red-tomato": buildEntry({
    commonName: "Valley Red Tomato",
    shortName: "Valley Red",

    scientificName:
      "Solanum lycopersicum",

    summary:
      "A red tomato variety grown for warm-season fruit production.",

    description:
      "Valley Red Tomato should be grown in full sun with fertile soil, steady moisture, and support as needed. The exact strain represented by the current Fruitbat seed packet should be confirmed before assigning a specific mature size, fruit type, or determinate versus indeterminate growth habit.",

    temperature:
      "Warm-season crop; transplant outdoors after frost danger when nights are reliably mild",

    container:
      "Container growing may be possible with a sufficiently large pot",

    growthHabit:
      "Tomato plant; exact growth habit should be confirmed from the seed packet",

    containerFriendly: true,

    supportRecommended: true,

    startMethod:
      "Start indoors and transplant after frost danger",

    seedDepth:
      "About 1/4 inch",

    harvestNotes:
      "Harvest when fruit reaches its mature red color and appropriate texture.",

    tags: [
      "tomato",
      "valley red",
      "red tomato",
      "warm season",
      "container friendly",
      "support recommended",
      "seeds",
    ],
  }),

    // =========================================================
  // WATERMELON
  // =========================================================

  "yellow-buttercup-watermelon": buildEntry({
    commonName: "Yellow Buttercup Watermelon",
    shortName: "Yellow Buttercup",

    scientificName:
      "Citrullus lanatus",

    summary:
      "A warm-season watermelon grown for sweet yellow-fleshed fruit on vigorous spreading vines.",

    description:
      "Yellow Buttercup Watermelon needs heat, full sun, and plenty of room to grow. Direct sow once the soil is thoroughly warm or transplant carefully because watermelon roots do not appreciate excessive disturbance. Consistent moisture is especially important while vines and fruit are developing.",

    sunlight:
      "Full sun, ideally 8 or more hours daily",

    watering:
      "Water deeply and consistently while vines and fruit are developing; reduce excessive watering as fruit approaches maturity",

    soil:
      "Fertile, loose, well-draining soil enriched with organic matter",

    temperature:
      "Heat-loving warm-season crop; plant only after frost danger when soil and air temperatures are reliably warm",

    container:
      "Best suited to the ground or a large raised bed because vines require significant space",

    growthHabit:
      "Long spreading vine",

    containerFriendly: false,

    supportRecommended: false,

    startMethod:
      "Direct sow preferred, or transplant carefully from young starts",

    harvestNotes:
      "Look for multiple ripeness cues such as a drying tendril near the fruit, a duller rind, and a creamy ground spot rather than relying on fruit size alone.",

    tags: [
      "watermelon",
      "yellow buttercup",
      "yellow watermelon",
      "melon",
      "warm season",
      "heat loving",
      "spreading vine",
      "direct sow",
      "seeds",
    ],
  }),
};