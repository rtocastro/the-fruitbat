import { Link } from "react-router";

export default function PlantProfileHero({ plant }) {
  return (
    <>
      <section className="profile-hero">
        <div className="profile-hero-copy">
          <div className="profile-breadcrumbs">
            <Link to="/plants">Plant Library</Link>
            <span aria-hidden="true">→</span>
            <span>{plant.shortName ?? plant.commonName}</span>
          </div>

          <p className="eyebrow">{plant.category}</p>

          <h1>{plant.commonName}</h1>

          {plant.scientificName && (
            <p className="profile-scientific-name">
              {plant.scientificName}
            </p>
          )}

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
                Open Printable Guide
              </a>
            ) : (
              <span className="profile-guide-status">
                Printable guide coming later
              </span>
            )}
          </div>
        </div>

        <div className="profile-hero-art" aria-hidden="true">
          <div
            className={`profile-plant-circle plant-accent-${
              plant.accent ?? "mint"
            }`}
          >
            <span className="profile-plant-symbol">
              {plant.symbol ?? "○"}
            </span>

            <span className="profile-plant-name">
              {plant.shortName ?? plant.commonName}
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
    </>
  );
}