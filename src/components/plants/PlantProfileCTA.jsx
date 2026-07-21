import { Link } from "react-router";

export default function PlantProfileCTA({ plant }) {
  const contactPath = `/contact?reason=${encodeURIComponent(
    "Growing question"
  )}&plant=${encodeURIComponent(plant.commonName)}`;

  return (
    <section className="profile-cta">
      <p className="eyebrow">Keep growing</p>

      <h2>One plant can become years of practical knowledge.</h2>

      <div className="profile-cta-actions">
        <Link to="/plants" className="button button-light">
          Browse Plant Library
        </Link>

        <Link to={contactPath} className="profile-cta-link">
          Ask a growing question →
        </Link>
      </div>
    </section>
  );
}