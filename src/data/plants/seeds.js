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
        ].filter((tag, index, tags) => tags.indexOf(tag) === index),
    };
}

export const seedPlants =
    generatedSeedGuideIndex.map(buildSeedPlant);