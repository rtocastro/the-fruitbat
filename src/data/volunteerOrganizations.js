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

    needs: [
      "Gardening",
      "Planting",
      "Watering & maintenance",
      "Events",
      "General volunteer help",
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