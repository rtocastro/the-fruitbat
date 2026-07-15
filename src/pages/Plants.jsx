import { Link } from "react-router";
import { plantCategories, plants } from "../data/plants";

const categoryDescriptions = {
  Dragonfruit:
    "Fruiting cactus varieties, trellising guidance, pollination, pruning, and seasonal care.",
  "Fruit Trees":
    "Long-term edible trees for yards, patios, shared spaces, and neighborhood projects.",
  Citrus:
    "Lemons, limes, mandarins, oranges, and other productive warm-climate plants.",
  Herbs:
    "Useful, approachable plants for containers, balconies, gardens, and windowsills.",
  Vegetables:
    "Annual edible plants that can provide relatively fast and practical growing experience.",
  Flowers:
    "Pollinator-friendly plants, edible flowers, and colorful additions to growing spaces.",
};

export default function Plants() {
  return (
    <main>
      <section className="plants-hero">
        <div className="plants-hero-copy">
          <p className="eyebrow">Plant library</p>

          <h1>
            Meet the plants.
            <span> Learn how they grow.</span>
          </h1>

          <p className="plants-hero-description">
            Explore approachable plant profiles with quick-care
            information, practical growing guidance, printable resources,
            and future community knowledge.
          </p>

          <a href="#plant-library" className="button button-primary">
            Browse Plant Profiles
          </a>
        </div>

        <div className="plants-hero-art" aria-hidden="true">
          <div className="plant-library-pot">
            <span className="plant-library-stem stem-left" />
            <span className="plant-library-stem stem-center" />
            <span className="plant-library-stem stem-right" />

            <span className="plant-library-leaf plant-leaf-one">♡</span>
            <span className="plant-library-leaf plant-leaf-two">○</span>
            <span className="plant-library-leaf plant-leaf-three">♡</span>
          </div>

          <span className="plant-library-dot plant-dot-one">●</span>
          <span className="plant-library-dot plant-dot-two">●</span>
        </div>
      </section>

      <section className="plants-intro">
        <p className="section-kicker">A library designed to grow</p>

        <h2>
          Plant information should be easy to find while your hands are
          already in the soil.
        </h2>

        <p>
          Each profile is designed for phones first, making it useful for
          QR-code plant labels, quick garden checks, and people learning
          as they grow.
        </p>
      </section>

      <section className="plant-library-section" id="plant-library">
        <div className="plant-library-heading">
          <p className="eyebrow">Available profiles</p>

          <h2>Start with what is growing now.</h2>

          <p>
            The current library is small by design. New profiles can be
            added without rebuilding the page.
          </p>
        </div>

<div className="plant-profile-grid">
  {plants.map((plant) => (
    <article
      className={`plant-profile-card plant-accent-${plant.accent}`}
      key={plant.id}
    >
      <div className="plant-profile-card-top">
        <div className="plant-profile-identity">
          <span className="plant-profile-symbol">
            {plant.symbol}
          </span>

          <div>
            <p className="plant-profile-category">
              {plant.category}
            </p>

            <p className="plant-profile-scientific">
              {plant.scientificName}
            </p>
          </div>
        </div>

        <span className="plant-profile-journal-number">
          No. {String(plants.indexOf(plant) + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="plant-profile-card-content">
        <h3>{plant.commonName}</h3>

        <p>{plant.summary}</p>
      </div>

      <div className="plant-profile-notes">
        <div>
          <span>Difficulty</span>
          <p>{plant.difficulty}</p>
        </div>

        <div>
          <span>Category</span>
          <p>{plant.category}</p>
        </div>

        <div>
          <span>Status</span>
          <p>{plant.status}</p>
        </div>
      </div>

      <div className="plant-profile-tags-preview">
        {plant.tags.slice(0, 3).map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <Link
        to={`/plants/${plant.slug}`}
        className="plant-profile-link"
      >
        Open field guide →
      </Link>
    </article>
  ))}
</div>
      </section>

      <section className="plant-category-section">
        <div className="plant-category-heading">
          <p className="eyebrow">The future library</p>
          <h2>More categories can grow from the same system.</h2>
        </div>

        <div className="plant-category-grid">
          {plantCategories
            .filter((category) => category !== "All")
            .map((category, index) => (
              <article className="plant-category-card" key={category}>
                <span className="plant-category-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{category}</h3>

                <p>
                  {categoryDescriptions[category] ??
                    "More plant profiles and growing information will be added here."}
                </p>

                <span className="plant-category-status">
                  {plants.some((plant) => plant.category === category)
                    ? "Profiles available"
                    : "Library growing"}
                </span>
              </article>
            ))}
        </div>
      </section>

      <section className="plant-qr-explanation">
        <div className="plant-qr-explanation-copy">
          <p className="eyebrow">Built for QR labels</p>

          <h2>
            A physical plant label can lead to information that keeps
            improving.
          </h2>

<p>
Every QR code attached to a plant points to a permanent web page.
As guides improve over time, every existing QR code automatically
shows the newest information without needing to replace stickers.
</p>
        </div>

        <div className="plant-url-example">
          <span className="plant-url-heart">♡</span>

          <p className="plant-url-label">Permanent plant address</p>

          <code>thefruitbat.org/plants/ecuador-palora</code>

          <p>
            Quick care, complete guidance, videos, downloads, and future
            community tips can all live behind one link.
          </p>
        </div>
      </section>

      <section className="plants-contribution-section">
        <div>
          <p className="eyebrow">Knowledge that improves over time</p>

          <h2>
            A useful plant guide is never truly finished.
          </h2>

          <p>
            Guides can be refined through observation, seasonal experience,
            trusted references, and feedback from local growers.
          </p>
        </div>

        <Link to="/contact" className="button button-secondary">
          Suggest a Plant
        </Link>
      </section>

      <section className="plants-cta">
        <p className="eyebrow">Not sure what to grow?</p>

        <h2>Start with your space, sunlight, and experience level.</h2>

        <div className="plants-cta-actions">
          <Link to="/start-growing" className="button button-light">
            Find Your Starting Point
          </Link>

          <Link to="/resources" className="plants-cta-link">
            Browse resources →
          </Link>
        </div>
      </section>
    </main>
  );
}