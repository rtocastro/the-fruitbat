import { Link, useParams } from "react-router";
import { getPlantBySlug } from "../data/plants";

const careLabels = {
  sunlight: "Sunlight",
  watering: "Watering",
  soil: "Soil",
  temperature: "Temperature",
  container: "Container",
  difficulty: "Difficulty",
};

export default function PlantProfile() {
  const { slug } = useParams();
  const plant = getPlantBySlug(slug);

  if (!plant) {
    return (
      <main className="plant-profile-not-found">
        <section>
          <p className="eyebrow">Plant not found</p>

          <h1>This plant has not taken root in the library yet.</h1>

          <p>
            The address may be incorrect, or the plant profile may still
            be growing.
          </p>

          <Link to="/plants" className="button button-primary">
            Return to Plant Library
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="profile-hero">
        <div className="profile-hero-copy">
          <div className="profile-breadcrumbs">
            <Link to="/plants">Plant Library</Link>
            <span>→</span>
            <span>{plant.shortName}</span>
          </div>

          <p className="eyebrow">{plant.category}</p>

          <h1>{plant.commonName}</h1>

          <p className="profile-scientific-name">
            {plant.scientificName}
          </p>

          <p className="profile-hero-description">
            {plant.description}
          </p>

          <div className="profile-hero-actions">
            <a href="#quick-care" className="button button-primary">
              View Quick Care
            </a>

            {plant.pdfPath ? (
              <a
                href={plant.pdfPath}
                target="_blank"
                rel="noreferrer"
                className="button button-secondary"
              >
                Download Guide
              </a>
            ) : (
              <span className="profile-guide-status">
                Printable guide coming later
              </span>
            )}
          </div>
        </div>

        <div className="profile-hero-art" aria-hidden="true">
          <div className={`profile-plant-circle plant-accent-${plant.accent}`}>
            <span className="profile-plant-symbol">
              {plant.symbol}
            </span>

            <span className="profile-plant-name">
              {plant.shortName}
            </span>
          </div>

          <span className="profile-floating-heart profile-heart-one">
            ♡
          </span>

          <span className="profile-floating-heart profile-heart-two">
            ○
          </span>
        </div>
      </section>

      <section className="profile-summary">
        <p className="section-kicker">At a glance</p>

        <h2>{plant.summary}</h2>
      </section>

      <section className="quick-care-section" id="quick-care">
        <div className="quick-care-heading">
          <p className="eyebrow">Quick care</p>

          <h2>The information you are most likely checking outside.</h2>

          <p>
            Use this as a quick reference rather than a rigid schedule.
            Conditions around the plant still matter.
          </p>
        </div>

        <div className="quick-care-grid">
          {Object.entries(plant.quickCare).map(([key, value]) => (
            <article className="quick-care-card" key={key}>
              <span className="quick-care-label">
                {careLabels[key] ?? key}
              </span>

              <p>{value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="profile-care-section">
        <div className="profile-care-intro">
          <p className="eyebrow">Complete care</p>

          <h2>Learn the plant one part at a time.</h2>

          <p>
            This guide will continue expanding as printable materials,
            videos, photos, and updated local experience are added.
          </p>
        </div>

        <div className="profile-care-list">
          {plant.careSections.map((section, index) => (
            <article className="profile-care-item" key={section.id}>
              <div className="profile-care-item-top">
                <span className="profile-care-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="profile-care-symbol">
                  {section.symbol}
                </span>
              </div>

              <h3>{section.title}</h3>
              <p>{section.content}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="profile-beginner-section">
        <div className="profile-beginner-copy">
          <p className="eyebrow">Before you begin</p>

          <h2>A few things worth remembering.</h2>
        </div>

        <div className="profile-beginner-list">
          {plant.beginnerTips.map((tip, index) => (
            <article key={tip}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{tip}</p>
            </article>
          ))}
        </div>
      </section>

<section className="profile-download-section">
  <div className="profile-download-copy">
    <p className="eyebrow">Printable guide</p>

    <h2>Take the complete care guide with you.</h2>

    <p>
      The original Ecuador Palora guide includes information about
      sunlight acclimation, watering, containers, nutrients,
      trellising, pruning, pollination, and additional growing
      resources.
    </p>

    <p>
      This original edition will remain available while a refreshed,
      more accessible Fruitbat edition is developed.
    </p>
  </div>

  {plant.pdfPath ? (
    <div className="profile-download-actions">
      <a
        href={plant.pdfPath}
        target="_blank"
        rel="noreferrer"
        className="button button-secondary"
      >
        Open Printable Guide
      </a>

      <a
        href={plant.pdfPath}
        download
        className="profile-download-direct"
      >
        Download PDF →
      </a>
    </div>
  ) : (
    <span className="profile-download-status">
      Printable guide in development
    </span>
  )}
</section>

      <section className="profile-tags-section">
        <p className="eyebrow">Related topics</p>

        <div className="profile-tags-list">
          {plant.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </section>

      <section className="profile-cta">
        <p className="eyebrow">Keep growing</p>

        <h2>One plant can become years of practical knowledge.</h2>

        <div className="profile-cta-actions">
          <Link to="/plants" className="button button-light">
            Browse Plant Library
          </Link>

<Link
  to={`/contact?reason=Growing%20question&plant=${encodeURIComponent(
    plant.commonName
  )}`}
  className="profile-cta-link"
>
  Ask a growing question →
</Link>
        </div>
      </section>
    </main>
  );
}