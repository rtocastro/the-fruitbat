import { Link } from "react-router";

const featuredResources = [
  {
    category: "Plant Care",
    title: "Dragonfruit Care Guides",
    description:
      "Simple growing guidance for sunlight, watering, containers, trellising, pruning, pollination, and seasonal care.",
    type: "Guide Collection",
    accent: "mint",
    symbol: "○",
  },
  {
    category: "Printables",
    title: "Printable Plant Tags",
    description:
      "Easy-to-print labels for tracking plant type, planting date, and other useful garden details.",
    type: "Free Download",
    accent: "purple",
    symbol: "♡",
  },
  {
    category: "Community",
    title: "Neighborhood Plant Registry",
    description:
      "A future tool for documenting what neighbors grow, when crops are ready, and what may be available to share.",
    type: "Coming Soon",
    accent: "lime",
    symbol: "●",
  },
];

const resourceCategories = [
  {
    title: "Beginner Guides",
    description:
      "Clear starting points for people growing food for the first time.",
    items: [
      "Choosing your first plant",
      "Understanding sunlight",
      "Container basics",
      "Simple watering habits",
    ],
    accent: "mint",
    symbol: "01",
  },
  {
    title: "Plant Care",
    description:
      "Specific care information for plants shared through The Fruitbat.",
    items: [
      "Dragonfruit care",
      "Seasonal growing notes",
      "Pruning guidance",
      "Pollination resources",
    ],
    accent: "aqua",
    symbol: "02",
  },
  {
    title: "Printable Tools",
    description:
      "Useful pages designed for gardens, classrooms, homes, and events.",
    items: [
      "Plant tags",
      "Growing logs",
      "Harvest trackers",
      "Garden planning sheets",
    ],
    accent: "purple",
    symbol: "03",
  },
  {
    title: "Kids & Families",
    description:
      "Playful resources that help children participate in growing food.",
    items: [
      "Plant observation sheets",
      "Coloring activities",
      "Growth journals",
      "Simple garden challenges",
    ],
    accent: "coral",
    symbol: "04",
  },
  {
    title: "Neighborhood Sharing",
    description:
      "Tools for helping people exchange knowledge, plants, and harvests.",
    items: [
      "Plant registry forms",
      "Harvest swap logs",
      "Community event sheets",
      "Sharing guidelines",
    ],
    accent: "lime",
    symbol: "05",
  },
  {
    title: "Fruitbat Facts",
    description:
      "Short, approachable educational cards made for quick learning and sharing.",
    items: [
      "Fruit facts",
      "Plant facts",
      "Growing tips",
      "Community reminders",
    ],
    accent: "dark",
    symbol: "06",
  },
];

const resourcePrinciples = [
  {
    number: "01",
    title: "Useful before decorative",
    description:
      "Every resource should help someone take a real action, understand a plant, or feel more confident.",
  },
  {
    number: "02",
    title: "Easy to understand",
    description:
      "Instructions should feel welcoming to beginners without talking down to them.",
  },
  {
    number: "03",
    title: "Made to be shared",
    description:
      "Resources should work in homes, classrooms, gardens, community events, and neighborhood projects.",
  },
];

export default function Resources() {
  return (
    <main>
      <section className="resources-hero">
        <div className="resources-hero-copy">
          <p className="eyebrow">Free resources</p>

          <h1>
            Useful tools for
            <span> growing and sharing.</span>
          </h1>

          <p className="resources-hero-description">
            The Fruitbat creates practical guides, printables, care
            resources, and community tools designed to make growing food
            feel easier and more approachable.
          </p>

          <a href="#resource-library" className="button button-primary">
            Explore the Library
          </a>
        </div>

        <div className="resources-hero-art" aria-hidden="true">
          <div className="resources-stack">
            <div className="resource-paper resource-paper-back">
              <span>♡</span>
            </div>

            <div className="resource-paper resource-paper-middle">
              <span>○</span>
            </div>

            <div className="resource-paper resource-paper-front">
              <p>Grow</p>
              <p>Learn</p>
              <p>Share</p>
            </div>
          </div>

          <span className="resources-floating-shape resource-shape-one">
            ●
          </span>

          <span className="resources-floating-shape resource-shape-two">
            ♡
          </span>
        </div>
      </section>

      <section className="resources-intro">
        <p className="section-kicker">A growing library</p>

        <h2>
          Information should help people begin—not make them feel behind.
        </h2>

        <p>
          These resources are being built for real people, real gardens,
          and real neighborhoods. Some are ready now, while others will
          grow alongside the community.
        </p>
      </section>

      <section className="featured-resources-section">
        <div className="featured-resources-heading">
          <p className="eyebrow">Featured resources</p>

          <h2>A few useful places to begin.</h2>
        </div>

        <div className="featured-resources-grid">
          {featuredResources.map((resource) => (
            <article
              className={`featured-resource-card resource-accent-${resource.accent}`}
              key={resource.title}
            >
              <div className="featured-resource-top">
                <span className="featured-resource-symbol">
                  {resource.symbol}
                </span>

                <span className="featured-resource-type">
                  {resource.type}
                </span>
              </div>

              <p className="featured-resource-category">
                {resource.category}
              </p>

              <h3>{resource.title}</h3>

              <p>{resource.description}</p>

              <span className="featured-resource-link">
                View resource →
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="resource-library-section" id="resource-library">
        <div className="resource-library-heading">
          <p className="eyebrow">Resource library</p>

          <h2>Explore by category.</h2>

          <p>
            The first version establishes the structure. We will add the
            real downloads, plant pages, videos, and interactive tools
            afterward.
          </p>
        </div>

        <div className="resource-category-grid">
          {resourceCategories.map((category) => (
            <article
              className={`resource-category-card category-accent-${category.accent}`}
              key={category.title}
            >
              <div className="resource-category-top">
                <span className="resource-category-number">
                  {category.symbol}
                </span>

                <span className="resource-category-dot" />
              </div>

              <h3>{category.title}</h3>

              <p>{category.description}</p>

              <ul>
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <span className="resource-category-status">
                Library expanding
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="resource-qr-section">
        <div className="resource-qr-copy">
          <p className="eyebrow">Plant QR guides</p>

          <h2>
            One small sticker can open an entire growing guide.
          </h2>

          <p>
            Plant labels can connect directly to mobile-friendly care
            pages containing quick tips, videos, printable guides, and
            updated recommendations.
          </p>

          <p>
            That means the information can improve over time without
            replacing the plant label itself.
          </p>
        </div>

        <div className="resource-qr-card">
          <div className="fake-qr" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <div>
            <p className="resource-qr-label">Example plant guide</p>
            <h3>Ecuador Palora Dragonfruit</h3>

            <ul>
              <li>Quick care</li>
              <li>Full growing guide</li>
              <li>Helpful videos</li>
              <li>Updated advice</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="resource-principles-section">
        <div className="resource-principles-intro">
          <p className="eyebrow">How resources are designed</p>

          <h2>Clear enough to use. Friendly enough to return to.</h2>
        </div>

        <div className="resource-principles-list">
          {resourcePrinciples.map((principle) => (
            <article
              className="resource-principle"
              key={principle.number}
            >
              <span>{principle.number}</span>

              <div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="resources-contribution-section">
        <div>
          <p className="eyebrow">Help the library grow</p>

          <h2>
            Useful knowledge often begins with one person sharing what
            worked.
          </h2>

          <p>
            Community members will eventually be able to suggest topics,
            contribute local growing experience, and help improve future
            resources.
          </p>
        </div>

        <Link to="/contact" className="button button-secondary">
          Suggest a Resource
        </Link>
      </section>

      <section className="resources-cta">
        <p className="eyebrow">Start small</p>

        <h2>
          Choose one useful resource and take one practical step.
        </h2>

        <div className="resources-cta-actions">
          <Link to="/start-growing" className="button button-light">
            Find Your Starting Point
          </Link>

          <Link to="/projects" className="resources-cta-link">
            Explore community projects →
          </Link>
        </div>
      </section>
    </main>
  );
}