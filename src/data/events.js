export const events = [
  {
    id: "small-space-gardening-101",
    slug: "small-space-gardening-101",

    title: "Small Space Gardening 101",
    shortTitle: "Small Space Gardening 101",

    date: "September 19, 2026",
    dateISO: "2026-09-19",

    time: null,

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

    registrationUrl: null,
    image: null,
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