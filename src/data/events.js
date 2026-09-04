export const events = [
    {
        id: "small-space-gardening-101",
        slug: "small-space-gardening-101",

        title: "Small Space Gardening 101",
        shortTitle: "Small Space Gardening 101",

        date: "September 19, 2026",
        dateISO: "2026-09-19",

        time: "10:00 AM–12:30 PM",

        location: "Sunbrewed Homestead",
        locationDetails: null,

        category: "Workshop",
        status: "Upcoming",

        featured: true,

        summary:
            "A beginner-friendly workshop about growing food in patios, balconies, containers, windowsills, and other small spaces.",

        description:
            "You do not need a large yard to grow something useful. Small Space Gardening 101 explores practical ways to start growing food with the space, sunlight, and resources you already have.",

        topics: [
            "Understanding the space you already have",
            "Choosing containers that work",
            "Reading sunlight in small spaces",
            "Simple soil and drainage basics",
            "Watering container plants",
            "Choosing approachable edible plants",
            "Learning from common beginner mistakes",
            "Growing alongside your community",
        ],

        takeaways: [
            "A simple framework for evaluating your growing space",
            "Practical ideas you can use at home",
            "Access to free Fruitbat growing resources",
            "A plant to begin growing after the workshop",
        ],

        growAlong: {
            enabled: true,
            title: "Let's grow something together.",
            description:
                "Workshop participants can take home mint and grow the same plant together after the event. The Fruitbat website will become a place to follow along, compare progress, and troubleshoot as the plants grow.",
            plant: "Mint",
        },

        companion: {
            enabled: true,
            title: "Your workshop doesn't end when the talk does.",
            description:
                "A permanent Fruitbat companion page will collect workshop notes, growing resources, plant information, downloads, and future updates so attendees can return whenever they need a refresher.",
        },

        resources: [
            {
                label: "Small Space Growing Guide",
                path: "/start-growing#small-spaces",
            },
            {
                label: "Browse Plant Guides",
                path: "/plants",
            },
            {
                label: "Free Printables",
                path: "/resources#free-printables",
            },
        ],

        afterEvent: {
            enabled: false,
            title: "Thanks for growing with us.",
            description:
                "Workshop notes, follow-up resources, grow-along updates, and additional materials will continue to live on this page.",
        },

        qrMessage:
            "Scan this page anytime for workshop resources, updates, and future growing information.",

        registrationUrl: null,
        image: null,

        rsvp: {
            enabled: true,
            title: "Planning to join us?",
            description:
                "Let us know you are coming, add the workshop to your calendar, and keep this page bookmarked for materials and follow-up resources.",
        },

        calendar: {
            enabled: true,
            path: "/events/small-space-gardening-101.ics",
        },

        materials: {
            enabled: true,
            unlocked: false,

            title: "Workshop materials",

            lockedMessage:
                "Workshop handouts will unlock here during the event and remain available afterward.",

            files: [
                {
                    label: "Small Space Gardening 101 Take-Home Guide",
                    path: "/guides/small-space-gardening-101-take-home-guide.pdf",
                    type: "PDF",
                },
            ],
        },
    },

];



export const featuredEvents = events.filter(
    (event) => event.featured
);

export function getEventBySlug(slug) {
    return events.find((event) => event.slug === slug);
}

export function getUpcomingEvents() {
    const today = new Date();

    return events.filter((event) => {
        const eventDate = new Date(`${event.dateISO}T23:59:59`);

        return eventDate >= today;
    });
}

