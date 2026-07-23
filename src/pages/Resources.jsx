import { Link } from "react-router";

import {
  featuredResources,
  resources,
  resourceCategories,
} from "../data/resources";

function formatStatus(status) {
  const statuses = {
    available: "Available",
    planned: "Planned",
    "coming-soon": "Coming Soon",
  };

  return statuses[status] ?? status;
}

const freePrintables = [
  {
    title: "Plant Type & Date Sticker",
    description:
      "A printable 1 × 1 plant label with space to record the planting date and plant type.",
    image: "/printables/plant-type-date-sticker.jpg",
    download: "/printables/plant-type-date-sticker.jpg",
    format: "JPG",
    category: "Plant Label",
  },
  {
    title: "Green Plant Zone Bookmark",
    description:
      "A colorful retro game-inspired bookmark featuring The Fruitbat and a tropical growing landscape.",
    image: "/printables/green-plant-zone-bookmark.jpg",
    download: "/printables/green-plant-zone-bookmark.jpg",
    format: "JPG",
    category: "Bookmark",
  },
  {
    title: "Original Fruitbat Bookmark",
    description:
      "The original Fruitbat bookmark featuring falling fruit and the San Fernando Valley seed-shop artwork.",
    image: "/printables/original-fruitbat-bookmark.jpg",
    download: "/printables/original-fruitbat-bookmark.jpg",
    format: "JPG",
    category: "Bookmark",
  },
  {
    title: "Streets of Fruit Bookmark",
    description:
      "An arcade-inspired city bookmark starring The Fruitbat and an assortment of pixel-art characters.",
    image: "/printables/streets-of-fruit-bookmark.jpg",
    download: "/printables/streets-of-fruit-bookmark.jpg",
    format: "JPG",
    category: "Bookmark",
  },
  {
    title: "Super Brick Fruit Bookmark",
    description:
      "A block-game-inspired Fruitbat bookmark with falling fruit and colorful retro artwork.",
    image: "/printables/super-brick-fruit-bookmark.jpg",
    download: "/printables/super-brick-fruit-bookmark.jpg",
    format: "JPG",
    category: "Bookmark",
  },
];

function getResourcesByCategory(category) {
  if (category === "All") {
    return resources;
  }

  return resources.filter(
    (resource) => resource.category === category
  );
}


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

              {resource.path ? (
                <Link
                  to={resource.path}
                  className="featured-resource-link"
                >
                  View resource →
                </Link>
              ) : (
                <span className="featured-resource-link">
                  {formatStatus(resource.status)}
                </span>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="resource-library-section" id="resource-library">
        <div className="resource-library-heading">
          <p className="eyebrow">Resource library</p>

          <h2>Explore by category.</h2>

          <p>
            Browse growing guides, plant pages, free downloads, printable
            tools, and interactive resources. New additions will continue
            to appear as the library grows.
          </p>
        </div>

        <div className="resource-category-sections">
          {resourceCategories
            .filter((category) => category !== "All")
            .map((category) => {
              const categoryResources = getResourcesByCategory(category);

              return (
                <section
                  className="resource-data-category"
                  key={category}
                >
                  <div className="resource-data-category-heading">
                    <h3>{category}</h3>

                    <span>
                      {categoryResources.length}{" "}
                      {categoryResources.length === 1
                        ? "resource"
                        : "resources"}
                    </span>
                  </div>

                  {categoryResources.length > 0 ? (
                    <div className="resource-data-grid">
                      {categoryResources.map((resource) => (
                        <article
                          className={`resource-data-card category-accent-${resource.accent}`}
                          key={resource.id}
                        >
                          <div className="resource-data-card-top">
                            <span className="resource-category-dot" />

                            <span className="resource-data-type">
                              {resource.type}
                            </span>
                          </div>

                          <h4>{resource.title}</h4>
                          <p>{resource.description}</p>

                          <div className="resource-data-tags">
                            {resource.tags.slice(0, 3).map((tag) => (
                              <span key={tag}>{tag}</span>
                            ))}
                          </div>

                          <div className="resource-data-footer">
                            <span>
                              {formatStatus(resource.status)}
                            </span>

                            {resource.path && (
                              <Link to={resource.path}>
                                Open →
                              </Link>
                            )}
                          </div>
                        </article>
                      ))}
                    </div>
                  ) : (
                    <div className="resource-empty-state">
                      <span>♡</span>

                      <p>
                        This section is growing. New resources will be
                        added here.
                      </p>
                    </div>
                  )}
                </section>
              );
            })}
        </div>
      </section>

      <section
        className="printables-library-section"
        id="free-printables"
      >
        <div className="printables-library-heading">
          <p className="eyebrow">Free community printables</p>

          <h2>Download, print, and put them to use.</h2>

          <p>
            These free Fruitbat resources include plant labels and
            playful bookmarks inspired by fruit, gardening, and
            classic video games.
          </p>
        </div>

        <div className="printables-library-grid">
          {freePrintables.map((printable) => (
            <article
              className="printable-card"
              key={printable.title}
            >
              <a
                href={printable.image}
                target="_blank"
                rel="noopener noreferrer"
                className="printable-preview"
                aria-label={`Preview ${printable.title}`}
              >
                <img
                  src={printable.image}
                  alt={`Preview of ${printable.title}`}
                  loading="lazy"
                />
              </a>

              <div className="printable-card-content">
                <div className="printable-card-meta">
                  <span>{printable.category}</span>
                  <span>{printable.format}</span>
                </div>

                <h3>{printable.title}</h3>

                <p>{printable.description}</p>

                <div className="printable-card-actions">
                  <a
                    href={printable.download}
                    download
                    className="button button-primary"
                  >
                    Download {printable.format}
                  </a>

                  <a
                    href={printable.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link"
                  >
                    Open preview →
                  </a>
                </div>
              </div>
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