export const volunteerOrganizations = [
  {
    id: "sunbrewed-homestead",
    slug: "sunbrewed-homestead",

    name: "Sunbrewed Homestead",
    shortName: "Sunbrewed",

    type: "Community Homestead",

    city: "Van Nuys",
    state: "CA",

    description:
      "A community growing space in Van Nuys where neighbors can connect through gardening, food, learning, and hands-on participation.",

    volunteerIntro:
      "Interested in lending a hand at Sunbrewed Homestead? Send over a little information about yourself and how you'd like to help. You don't need to be an experienced gardener to get involved.",

    needs: [
      "Gardening",
      "Planting",
      "Watering & maintenance",
      "Events",
      "General volunteer help",
    ],

    interestOptions: [
      "Gardening",
      "Planting",
      "Watering & maintenance",
      "Events",
      "Building & repairs",
      "Education & workshops",
      "Wherever I'm needed",
    ],

    experienceRequired: false,

    acceptingVolunteers: true,
    featured: true,

    website: null,
    image: null,

    notes:
      "Volunteer opportunities may change depending on current projects, events, weather, and what needs attention at the homestead.",
  },
];

export const featuredVolunteerOrganizations =
  volunteerOrganizations.filter(
    (organization) =>
      organization.featured &&
      organization.acceptingVolunteers
  );

export function getVolunteerOrganizationBySlug(slug) {
  return volunteerOrganizations.find(
    (organization) => organization.slug === slug
  );
}

export function getActiveVolunteerOrganizations() {
  return volunteerOrganizations.filter(
    (organization) => organization.acceptingVolunteers
  );
}