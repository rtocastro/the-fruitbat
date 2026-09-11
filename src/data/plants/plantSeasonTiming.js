/*
 * Fruitbat National Plant Season Timing
 *
 * This file powers the "Grow Now" system.
 *
 * IMPORTANT:
 * USDA Hardiness Zones describe average annual extreme
 * minimum winter temperatures. They are NOT planting calendars.
 *
 * Fruitbat uses USDA zones here as a practical approximation
 * for broad climate timing.
 *
 * Future improvement:
 * ZIP/location → frost dates + regional heat patterns.
 */

// =========================================================
// USDA ZONES
// =========================================================

export const growingZones = [
  "1a",
  "1b",
  "2a",
  "2b",
  "3a",
  "3b",
  "4a",
  "4b",
  "5a",
  "5b",
  "6a",
  "6b",
  "7a",
  "7b",
  "8a",
  "8b",
  "9a",
  "9b",
  "10a",
  "10b",
  "11a",
  "11b",
  "12a",
  "12b",
  "13a",
  "13b",
];

// =========================================================
// BROAD CLIMATE BANDS
// =========================================================

export const climateBandZones = {
  cold: [
    "1a",
    "1b",
    "2a",
    "2b",
    "3a",
    "3b",
    "4a",
    "4b",
  ],

  cool: [
    "5a",
    "5b",
    "6a",
    "6b",
  ],

  temperate: [
    "7a",
    "7b",
    "8a",
    "8b",
  ],

  warm: [
    "9a",
    "9b",
    "10a",
    "10b",
  ],

  hot: [
    "11a",
    "11b",
    "12a",
    "12b",
    "13a",
    "13b",
  ],
};

export const zoneToClimateBand = Object.fromEntries(
  Object.entries(climateBandZones).flatMap(
    ([band, zones]) =>
      zones.map((zone) => [zone, band])
  )
);

// =========================================================
// SHARED NOTES
// =========================================================

const notes = {
  coolSeason:
    "Best planting timing is usually during the cooler portion of the local growing season.",

  warmSeason:
    "Best planted once frost danger has passed and growing conditions are consistently warm.",

  heatSensitive:
    "This crop prefers cool to mild conditions and may struggle, bolt, or decline during sustained heat.",

  heatLoving:
    "This crop performs best during reliably warm or hot weather and is sensitive to frost.",

  perennialHerb:
    "Established plants may remain productive beyond the main planting window where local temperatures allow.",

  tropicalPerennial:
    "Warm-climate perennial. Cold protection or container growing may be necessary outside mild climates.",
};

// =========================================================
// TIMING PROFILES
// =========================================================
//
// These are broad planting/start windows.
//
// "great" = especially favorable planting period
// "good" = generally suitable planting period
// "established" = existing plants can grow, but this is
//                 not necessarily the ideal time to start
// "varies" = timing depends heavily on local conditions,
//            cultivar, or propagation method
//

const timingProfiles = {
  // -------------------------------------------------------
  // COOL-SEASON ROOT CROPS
  // beet, carrot, radish
  // -------------------------------------------------------

  coolRoot: {
    cold: {
      months: [4, 5, 6, 7],
      status: "good",
      note:
        "Plant during spring and early summer while temperatures are mild.",
    },

    cool: {
      months: [3, 4, 5, 6, 8, 9],
      status: "good",
      note:
        "Spring and late-summer sowings can provide cool-weather root development.",
    },

    temperate: {
      months: [2, 3, 4, 5, 8, 9, 10],
      status: "good",
      note:
        "Best during spring and fall when temperatures are moderate.",
    },

    warm: {
      months: [1, 2, 3, 4, 9, 10, 11, 12],
      status: "great",
      note:
        "Cool-season root crops generally perform especially well from fall through spring.",
    },

    hot: {
      months: [1, 2, 3, 10, 11, 12],
      status: "good",
      note:
        "Focus planting during the coolest months and avoid peak tropical heat.",
    },
  },

  // -------------------------------------------------------
  // COOL LEAFY GREENS
  // spinach, lettuce, mizuna
  // -------------------------------------------------------

  coolLeafy: {
    cold: {
      months: [4, 5, 6, 7, 8],
      status: "good",
      note:
        "Plant once soil is workable and temperatures remain cool to mild.",
    },

    cool: {
      months: [3, 4, 5, 6, 8, 9],
      status: "good",
      note:
        "Spring and late-summer planting help avoid the hottest part of the year.",
    },

    temperate: {
      months: [2, 3, 4, 5, 9, 10, 11],
      status: "great",
      note:
        "Spring and fall are generally excellent leafy-green seasons.",
    },

    warm: {
      months: [1, 2, 3, 4, 9, 10, 11, 12],
      status: "great",
      note:
        "Cool-season greens often thrive from fall through early spring.",
    },

    hot: {
      months: [1, 2, 3, 11, 12],
      status: "good",
      note:
        "Grow during the coolest portion of the year to reduce heat stress and bolting.",
    },
  },

  // -------------------------------------------------------
  // COOL BRASSICAS
  // broccoli, kale
  // -------------------------------------------------------

  brassica: {
    cold: {
      months: [4, 5, 6, 7],
      status: "good",
      note:
        "Start during spring once severe cold has passed.",
    },

    cool: {
      months: [3, 4, 5, 7, 8, 9],
      status: "good",
      note:
        "Spring and late-summer starts can mature during cooler weather.",
    },

    temperate: {
      months: [2, 3, 4, 8, 9, 10],
      status: "great",
      note:
        "Spring and fall are generally strong brassica planting periods.",
    },

    warm: {
      months: [1, 2, 3, 8, 9, 10, 11, 12],
      status: "great",
      note:
        "Fall through early spring usually provides the most favorable brassica conditions.",
    },

    hot: {
      months: [1, 2, 10, 11, 12],
      status: "good",
      note:
        "Grow primarily during the coolest months to reduce heat stress.",
    },
  },

  // -------------------------------------------------------
  // COOL-SEASON PEAS
  // -------------------------------------------------------

  pea: {
    cold: {
      months: [4, 5, 6],
      status: "good",
      note:
        "Plant in spring as soon as soil can be worked.",
    },

    cool: {
      months: [3, 4, 5, 8, 9],
      status: "good",
      note:
        "Spring is the primary season, with fall planting possible where frost timing allows.",
    },

    temperate: {
      months: [2, 3, 4, 9, 10, 11],
      status: "great",
      note:
        "Peas perform best in the cooler spring and fall portions of the year.",
    },

    warm: {
      months: [1, 2, 3, 10, 11, 12],
      status: "great",
      note:
        "Fall, winter, and early spring usually provide excellent pea-growing weather.",
    },

    hot: {
      months: [1, 2, 11, 12],
      status: "good",
      note:
        "Grow during the coolest months and avoid sustained tropical heat.",
    },
  },

  // -------------------------------------------------------
  // CILANTRO
  // -------------------------------------------------------

  cilantro: {
    cold: {
      months: [4, 5, 6, 7],
      status: "good",
      note:
        "Plant during the mild portion of the short growing season.",
    },

    cool: {
      months: [3, 4, 5, 6, 8, 9],
      status: "good",
      note:
        "Spring and late-summer succession sowings can extend harvests.",
    },

    temperate: {
      months: [2, 3, 4, 5, 9, 10, 11],
      status: "great",
      note:
        "Cool spring and fall weather helps delay bolting.",
    },

    warm: {
      months: [1, 2, 3, 4, 10, 11, 12],
      status: "great",
      note:
        "Cilantro generally performs best from fall through spring before sustained heat arrives.",
    },

    hot: {
      months: [1, 2, 11, 12],
      status: "good",
      note:
        "Plant during the coolest months because sustained heat can cause rapid bolting.",
    },
  },

  // -------------------------------------------------------
  // CELERY
  // -------------------------------------------------------

  celery: {
    cold: {
      months: [4, 5],
      status: "good",
      note:
        "Start early enough to provide a long mild growing period.",
    },

    cool: {
      months: [3, 4, 5, 6],
      status: "good",
      note:
        "Celery benefits from a long stretch of cool to mild weather.",
    },

    temperate: {
      months: [2, 3, 4, 8, 9],
      status: "good",
      note:
        "Spring or late-summer starts can avoid temperature extremes.",
    },

    warm: {
      months: [1, 2, 3, 9, 10, 11, 12],
      status: "great",
      note:
        "Fall through spring generally provides the long mild season celery prefers.",
    },

    hot: {
      months: [1, 2, 11, 12],
      status: "good",
      note:
        "Grow during the coolest available months and maintain steady moisture.",
    },
  },

  // -------------------------------------------------------
  // WARM-SEASON BEANS
  // -------------------------------------------------------

  bean: {
    cold: {
      months: [5, 6, 7],
      status: "good",
      note: notes.warmSeason,
    },

    cool: {
      months: [5, 6, 7, 8],
      status: "good",
      note: notes.warmSeason,
    },

    temperate: {
      months: [4, 5, 6, 7, 8],
      status: "good",
      note:
        "Plant after frost danger once soil has warmed.",
    },

    warm: {
      months: [3, 4, 5, 6, 7, 8, 9, 10],
      status: "great",
      note:
        "Beans generally have a long warm-season planting window in mild climates.",
    },

    hot: {
      months: [1, 2, 3, 4, 9, 10, 11, 12],
      status: "good",
      note:
        "Plant outside periods of extreme heat where possible.",
    },
  },

  // -------------------------------------------------------
  // CORN
  // -------------------------------------------------------

  corn: {
    cold: {
      months: [5, 6],
      status: "good",
      note:
        "Plant after frost once soil is reliably warm.",
    },

    cool: {
      months: [5, 6, 7],
      status: "good",
      note:
        "Direct sow after the soil warms sufficiently.",
    },

    temperate: {
      months: [4, 5, 6, 7],
      status: "great",
      note:
        "Spring through early summer generally provides strong corn-growing conditions.",
    },

    warm: {
      months: [3, 4, 5, 6, 7, 8],
      status: "great",
      note:
        "Corn performs well during the warm portion of the year.",
    },

    hot: {
      months: [1, 2, 3, 4, 9, 10, 11],
      status: "good",
      note:
        "Plant outside the most extreme heat where possible and maintain consistent moisture.",
    },
  },

  // -------------------------------------------------------
  // CUCUMBERS
  // -------------------------------------------------------

  cucumber: {
    cold: {
      months: [5, 6, 7],
      status: "good",
      note: notes.heatLoving,
    },

    cool: {
      months: [5, 6, 7, 8],
      status: "good",
      note: notes.heatLoving,
    },

    temperate: {
      months: [4, 5, 6, 7, 8],
      status: "great",
      note:
        "Plant once soil and nights are consistently warm.",
    },

    warm: {
      months: [3, 4, 5, 6, 7, 8, 9],
      status: "great",
      note:
        "Cucumbers generally enjoy a long warm-season planting window.",
    },

    hot: {
      months: [1, 2, 3, 4, 9, 10, 11, 12],
      status: "good",
      note:
        "Plant during warm periods while avoiding the most punishing heat where possible.",
    },
  },

  // -------------------------------------------------------
  // TOMATOES
  // -------------------------------------------------------

  tomato: {
    cold: {
      months: [5, 6],
      status: "good",
      note:
        "Transplant outdoors after frost danger once nights have warmed.",
    },

    cool: {
      months: [4, 5, 6],
      status: "good",
      note:
        "Start indoors earlier and transplant once frost danger has passed.",
    },

    temperate: {
      months: [3, 4, 5, 6],
      status: "great",
      note:
        "Spring is generally the strongest tomato planting window.",
    },

    warm: {
      months: [2, 3, 4, 5, 6, 7, 8, 9],
      status: "great",
      note:
        "Tomatoes have a long planting season in mild climates, though extreme summer heat can reduce fruit set.",
    },

    hot: {
      months: [1, 2, 3, 8, 9, 10, 11],
      status: "good",
      note:
        "Plant early enough to fruit before extreme heat or later for a warm-season fall crop.",
    },
  },

  // -------------------------------------------------------
  // PEPPERS
  // -------------------------------------------------------

  pepper: {
    cold: {
      months: [5, 6],
      status: "good",
      note:
        "Transplant after frost danger once nights become reliably warm.",
    },

    cool: {
      months: [5, 6],
      status: "good",
      note:
        "Peppers benefit from indoor seed starting before the outdoor warm season.",
    },

    temperate: {
      months: [4, 5, 6],
      status: "great",
      note:
        "Transplant during spring once temperatures are consistently warm.",
    },

    warm: {
      months: [3, 4, 5, 6, 7, 8, 9],
      status: "great",
      note:
        "Peppers generally enjoy a long warm growing season in mild climates.",
    },

    hot: {
      months: [1, 2, 3, 4, 8, 9, 10, 11],
      status: "good",
      note:
        "Warm conditions suit peppers, though extreme heat can temporarily reduce flowering and fruit set.",
    },
  },

  // -------------------------------------------------------
  // WATERMELON
  // -------------------------------------------------------

  melon: {
    cold: {
      months: [5, 6],
      status: "good",
      note: notes.heatLoving,
    },

    cool: {
      months: [5, 6, 7],
      status: "good",
      note:
        "Plant once both soil and air temperatures are thoroughly warm.",
    },

    temperate: {
      months: [4, 5, 6, 7],
      status: "great",
      note:
        "Late spring through early summer generally provides the heat needed for strong vine growth.",
    },

    warm: {
      months: [3, 4, 5, 6, 7, 8],
      status: "great",
      note:
        "Warm climates provide a long watermelon-growing window.",
    },

    hot: {
      months: [1, 2, 3, 4, 8, 9, 10, 11],
      status: "good",
      note:
        "Heat is beneficial, though planting outside the harshest part of the year can reduce stress.",
    },
  },

  // -------------------------------------------------------
  // CHAMOMILE
  // -------------------------------------------------------

  chamomile: {
    cold: {
      months: [4, 5, 6],
      status: "good",
      note:
        "Plant during spring as temperatures become mild.",
    },

    cool: {
      months: [3, 4, 5, 6],
      status: "good",
      note:
        "Spring provides a favorable establishment period.",
    },

    temperate: {
      months: [2, 3, 4, 9, 10],
      status: "good",
      note:
        "Mild spring and fall conditions are generally favorable.",
    },

    warm: {
      months: [1, 2, 3, 4, 10, 11, 12],
      status: "great",
      note:
        "Chamomile can be particularly comfortable during the cooler half of the year in warm climates.",
    },

    hot: {
      months: [1, 2, 11, 12],
      status: "good",
      note:
        "Grow during the coolest available months.",
    },
  },

  // -------------------------------------------------------
  // MEDITERRANEAN PERENNIAL HERBS
  // oregano, sage, lavender
  // -------------------------------------------------------

  mediterraneanHerb: {
    cold: {
      months: [5, 6, 7],
      status: "good",
      note:
        "Establish plants during the frost-free growing season. Winter survival varies by species.",
    },

    cool: {
      months: [4, 5, 6, 7, 8],
      status: "good",
      note:
        "Spring through summer provides a favorable establishment period.",
    },

    temperate: {
      months: [3, 4, 5, 6, 9, 10],
      status: "good",
      note:
        "Spring and early fall are generally good establishment periods.",
    },

    warm: {
      months: [2, 3, 4, 5, 9, 10, 11],
      status: "great",
      note:
        "Mild spring and fall weather is excellent for establishing many Mediterranean herbs.",
    },

    hot: {
      months: [1, 2, 3, 10, 11, 12],
      status: "good",
      note:
        "Establish during milder months rather than during extreme tropical heat.",
    },
  },

  // -------------------------------------------------------
  // MINT
  // -------------------------------------------------------

  mint: {
    cold: {
      months: [4, 5, 6, 7],
      status: "good",
      note: notes.perennialHerb,
    },

    cool: {
      months: [3, 4, 5, 6, 7, 8, 9],
      status: "good",
      note: notes.perennialHerb,
    },

    temperate: {
      months: [2, 3, 4, 5, 6, 7, 8, 9, 10],
      status: "good",
      note: notes.perennialHerb,
    },

    warm: {
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      status: "established",
      note:
        "Mint can remain active for much of the year in mild climates. Spring and fall are especially comfortable establishment periods.",
    },

    hot: {
      months: [1, 2, 3, 4, 9, 10, 11, 12],
      status: "good",
      note:
        "Establish during milder months and provide adequate moisture and protection from severe heat.",
    },
  },
};

// =========================================================
// PLANT → TIMING PROFILE
// =========================================================
//
// This is where Fruitbat becomes variety-aware.
//
// Multiple varieties can share a crop behavior while still
// keeping their individual enriched plant profiles.
//

const plantTimingProfiles = {
  // Beans
  "black-turtle-beans": "bean",
  "joshs-cattle-beans": "bean",

  // Corn
  "blood-butcher-corn": "corn",
  "early-sunglow-corn": "corn",

  // Brassicas
  "broccoli-de-cicco": "brassica",
  "dino-kale": "brassica",

  // Root vegetables
  "early-wonder-beet": "coolRoot",
  "tendersweet-carrot": "coolRoot",
  "pink-beauty-radish": "coolRoot",

  // Leafy greens
  "mizuna-red-kingdom": "coolLeafy",
  "space-spinach": "coolLeafy",
  "tri-color-romaine-lettuce": "coolLeafy",

  // Peas
  "little-purple-snow-pea": "pea",

  // Cucumbers
  "marketmore-76-cucumber": "cucumber",
  "patio-snacker-cucumber": "cucumber",

  // Herbs
  "german-chamomile": "chamomile",
  "greek-oregano": "mediterraneanHerb",
  "lavendar": "mediterraneanHerb",
  "sage": "mediterraneanHerb",
  "santo-cilantro": "cilantro",
  "peppermint": "mint",

  // Celery
  "tall-utah-celery": "celery",

  // Peppers
  "early-jalapeno-pepper": "pepper",
  "mexican-yellow-bell-pepper": "pepper",
  "netherlandic-red-bell-pepper": "pepper",
  "peach-habanero-pepper": "pepper",
  "primero-red-habanero-pepper": "pepper",
  "purple-beauty-bell-pepper": "pepper",
  "purple-jalapeno-pepper": "pepper",

  // Tomatoes
  "red-vine-tomatoes": "tomato",
  "roma-tomatoes": "tomato",
  "patio-choice-yellow-tomato": "tomato",
  "rainbow-beefsteak-tomato": "tomato",
  "sun-gold-tomato": "tomato",
  "sun-green-tomato": "tomato",
  "suncherry-tomato": "tomato",
  "sunchocola-tomato": "tomato",
  "valley-red-tomato": "tomato",

  // Melons
  "yellow-buttercup-watermelon": "melon",
};

// =========================================================
// CLIMATE BAND → USDA ZONE EXPANSION
// =========================================================

function expandTimingProfile(profile) {
  if (!profile) {
    return null;
  }

  const expanded = {};

  Object.entries(climateBandZones).forEach(
    ([band, zones]) => {
      const timing = profile[band];

      if (!timing) {
        return;
      }

      zones.forEach((zone) => {
        expanded[zone] = {
          months: [...timing.months],
          status: timing.status,
          note: timing.note,
        };
      });
    }
  );

  return expanded;
}

// =========================================================
// PUBLIC HELPER
// =========================================================

export function getSeasonalGrowingForPlant(slug) {
  const profileName =
    plantTimingProfiles[slug];

  if (!profileName) {
    return null;
  }

  const profile =
    timingProfiles[profileName];

  return expandTimingProfile(profile);
}

// =========================================================
// OPTIONAL HELPERS
// =========================================================

export function getClimateBandForZone(zone) {
  return zoneToClimateBand[zone] ?? null;
}

export function getTimingProfileForPlant(slug) {
  return plantTimingProfiles[slug] ?? null;
}