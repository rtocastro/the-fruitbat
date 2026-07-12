import { Link } from "react-router";
import fruitbatMascot from "../assets/images/fruitbat-mascot.jpg";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <section className="not-found-content">
        <div className="not-found-copy">
          <p className="eyebrow">404 — Lost in the garden</p>

          <h1>
            This page did not
            <span> take root.</span>
          </h1>

          <p>
            The page may have moved, the link may be outdated, or the
            Fruitbat may have eaten it.
          </p>

          <div className="not-found-actions">
            <Link to="/" className="button button-primary">
              Return Home
            </Link>

            <Link to="/resources" className="button button-secondary">
              Browse Resources
            </Link>
          </div>
        </div>

        <div className="not-found-art" aria-hidden="true">
          <div className="not-found-circle">
            <img src={fruitbatMascot} alt="" />
          </div>

          <span className="not-found-fruit fruit-lost-one">●</span>
          <span className="not-found-fruit fruit-lost-two">●</span>
          <span className="not-found-fruit fruit-lost-three">●</span>

          <span className="not-found-question">?</span>
        </div>
      </section>
    </main>
  );
}