import { generatedSeedGuideIndex } from "./generatedSeedGuideIndex";
import { seedPlantOverrides } from "./seedPlantOverrides";
import { seedPlantEnrichment } from "./seedPlantEnrichment";

const seedCategorySymbols = {
    Beans: "●",
    Corn: "○",
    Cucumbers: "♡",
    Herbs: "○",
    "Leafy Greens": "♡",
    Melons: "●",
    Peas: "○",
    Peppers: "●",
    "Root Vegetables": "○",
    Tomatoes: "♡",
    Vegetables: "●",
};

const seedCategoryAccents = {
    Beans: "purple",
    Corn: "lime",
    Cucumbers: "mint",
    Herbs: "aqua",
    "Leafy Greens": "mint",
    Melons: "coral",
    Peas: "lime",
    Peppers: "purple",
    "Root Vegetables": "coral",
    Tomatoes: "coral",
    Vegetables: "aqua",
};

/*
 * General Zone 10a seasonal starting points.
 *
 * These are intentionally broad category-level defaults.
 * Individual plants can override them later through
 * seedPlantEnrichment or seedPlantOverrides.
 *
 * Month numbers:
 * 1 = January
 * 12 = December
 */
const seedSeasonalGrowingByCategory = {
    Beans: {
        "10a": {
            months: [3, 4, 5, 6, 7, 8, 9, 10],
            status: "good",
            note:
                "Beans generally perform best through the warmer part of the year in Zone 10a.",
        },
    },

    Corn: {
        "10a": {
            months: [3, 4, 5, 6, 7, 8],
            status: "good",
            note:
                "Corn is a warm-season crop and is generally best started during the warmer months in Zone 10a.",
        },
    },

    Cucumbers: {
        "10a": {
            months: [3, 4, 5, 6, 7, 8, 9],
            status: "good",
            note:
                "Cucumbers prefer warm growing conditions and are generally suited to spring through early fall in Zone 10a.",
        },
    },

    Herbs: {
        "10a": {
            months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            status: "varies",
            note:
                "Herb growing seasons vary considerably by species. Many herbs can be grown during part or all of the year in Zone 10a.",
        },
    },

    "Leafy Greens": {
        "10a": {
            months: [1, 2, 3, 4, 9, 10, 11, 12],
            status: "good",
            note:
                "Many leafy greens prefer the cooler part of the year in Zone 10a.",
        },
    },

    Melons: {
        "10a": {
            months: [3, 4, 5, 6, 7, 8],
            status: "good",
            note:
                "Melons prefer warm soil and warm weather and are generally grown through the warmer months in Zone 10a.",
        },
    },

    Peas: {
        "10a": {
            months: [1, 2, 3, 10, 11, 12],
            status: "good",
            note:
                "Peas prefer cooler weather and are generally better suited to fall, winter, and early spring in Zone 10a.",
        },
    },

    Peppers: {
        "10a": {
            months: [3, 4, 5, 6, 7, 8, 9, 10],
            status: "good",
            note:
                "Peppers prefer warm conditions and can have a long growing season in Zone 10a.",
        },
    },

    "Root Vegetables": {
        "10a": {
            months: [1, 2, 3, 4, 9, 10, 11, 12],
            status: "good",
            note:
                "Many common root vegetables perform well during the cooler growing season in Zone 10a.",
        },
    },

    Tomatoes: {
        "10a": {
            months: [3, 4, 5, 6, 7, 8, 9, 10],
            status: "good",
            note:
                "Tomatoes prefer warm growing conditions and can have a long productive season in Zone 10a.",
        },
    },

    Vegetables: {
        "10a": {
            months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            status: "varies",
            note:
                "This category includes crops with different seasonal needs. Check the individual plant guide for more specific timing.",
        },
    },
};

const seedQuickCare = {
    sunlight:
        "Follow the variety guide for full-sun or partial-sun requirements",
    watering:
        "Keep evenly moist during germination, then adjust as the plant matures",
    soil:
        "Use fertile, well-draining soil appropriate for the crop",
    temperature:
        "Plant during the variety’s recommended seasonal temperature range",
    container:
        "Use a garden bed or container large enough for the mature plant",
    difficulty: "Beginner friendly",
};

const seedCareSections = [
    {
        id: "starting-seeds",
        title: "Starting seeds",
        symbol: "○",
        content:
            "Follow the planting depth, germination temperature, and indoor or direct-sowing instructions included in the printable guide.",
    },
    {
        id: "sunlight",
        title: "Sunlight",
        symbol: "☀",
        content:
            "Most edible crops need substantial sunlight, but exact requirements vary. Use the printable guide as the starting point for this variety.",
    },
    {
        id: "watering",
        title: "Watering",
        symbol: "◉",
        content:
            "Keep the growing medium consistently moist during germination without leaving it waterlogged. Adjust watering as roots and foliage develop.",
    },
    {
        id: "soil",
        title: "Soil and drainage",
        symbol: "●",
        content:
            "Use loose, fertile soil that drains well. Containers should always have working drainage holes.",
    },
    {
        id: "spacing",
        title: "Spacing",
        symbol: "↔",
        content:
            "Follow the spacing recommendations in the printable guide. Proper spacing improves airflow, root development, and access to sunlight.",
    },
    {
        id: "harvest",
        title: "Harvest",
        symbol: "♡",
        content:
            "Harvest timing depends on the crop and variety. Record planting dates and observe the plant’s size, color, texture, and maturity.",
    },
];

const seedBeginnerTips = [
    "Read the printable guide before planting.",
    "Label the container or garden row with the variety and planting date.",
    "Keep newly planted seeds evenly moist, but not waterlogged.",
    "Do not bury seeds more deeply than recommended.",
    "Record germination and harvest observations for future seasons.",
];

function buildSeedPlant(guide) {
    const enrichment = seedPlantEnrichment[guide.slug] ?? {};
    const override = seedPlantOverrides[guide.slug] ?? {};

    const category =
        override.category ??
        enrichment.category ??
        guide.category;

    /*
     * Priority:
     *
     * 1. seedPlantOverrides
     * 2. seedPlantEnrichment
     * 3. category-level Zone 10a default
     *
     * This means we can make individual plants more accurate
     * later without changing the filtering system.
     */
    const seasonalGrowing =
        override.seasonalGrowing ??
        enrichment.seasonalGrowing ??
        seedSeasonalGrowingByCategory[category] ??
        null;

    return {
        id: guide.id,
        slug: guide.slug,

        commonName: guide.commonName,
        shortName: guide.commonName,
        scientificName: "Scientific name coming soon",

        category,
        difficulty: "Beginner friendly",
        status: "Guide available",

        summary:
            `A printable growing guide for ${guide.commonName}, including seed-starting and basic care instructions.`,

        description:
            `Use this Fruitbat profile and its original printable guide as a starting point for growing ${guide.commonName}. More variety-specific information can be added as the library develops.`,

        accent: seedCategoryAccents[category] ?? "mint",
        symbol: seedCategorySymbols[category] ?? "○",

        featured: false,

        careSections: seedCareSections,
        beginnerTips: seedBeginnerTips,

        guidePath: `/plants/${guide.slug}`,
        pdfPath: guide.pdfPath,
        image: null,

        enrichment: {
            status: "pending",
            source: null,
            lastReviewed: null,
        },

        ...enrichment,
        ...override,

        /*
         * Keep this after the spreads so our priority logic above
         * determines the final seasonal data.
         */
        seasonalGrowing,

        quickCare: {
            ...seedQuickCare,
            ...(enrichment.quickCare ?? {}),
            ...(override.quickCare ?? {}),
        },

        tags: [
            guide.commonName.toLowerCase(),
            category.toLowerCase(),
            "seeds",
            "growing guide",
            "printable guide",
            ...(enrichment.tags ?? []),
            ...(override.tags ?? []),
        ].filter(
            (tag, index, tags) =>
                tags.indexOf(tag) === index
        ),
    };
}

export const seedPlants =
    generatedSeedGuideIndex.map(buildSeedPlant);