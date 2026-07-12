import { Link } from "react-router";
import fruitbatMascot from "../assets/images/fruitbat-mascot.jpg";

const communityActions = [
  {
    symbol: "○",
    title: "Grow",
    description:
      "Learn how to grow food using the space, experience, and resources you already have.",
  },
  {
    symbol: "♡",
    title: "Share",
    description:
      "Exchange knowledge, seeds, harvests, and encouragement with the people around you.",
  },
  {
    symbol: "●",
    title: "Connect",
    description:
      "Take part in projects that make neighborhoods greener, healthier, and more connected.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Growing communities naturally</p>

          <h1>
            Grow food.
            <br />
            Share knowledge.
            <br />
            Strengthen neighborhoods.
          </h1>

          <p className="hero-description">
            The Fruitbat is a community project helping people grow food,
            share what they learn, and create healthier local communities.
          </p>

          <div className="hero-actions">
            <Link to="/start-growing" className="button button-primary">
              Start Growing
            </Link>

            <Link to="/resources" className="button button-secondary">
              Explore Resources
            </Link>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="hero-circle hero-circle-large" />
          <div className="hero-circle hero-circle-small" />
          <div className="hero-heart">♡</div>

          <img
            src={fruitbatMascot}
            alt=""
            className="hero-mascot"
          />
        </div>
      </section>

      <section className="intro-section">
        <p className="section-kicker">Everyone can begin somewhere.</p>

        <h2>
          A garden can start in a backyard, on a balcony, or in one
          recycled container.
        </h2>

        <p>
          You do not need perfect soil, expensive equipment, or years of
          experience. You only need a place to begin.
        </p>
      </section>

      <section className="action-section">
        <div className="section-heading">
          <p className="eyebrow">What we do</p>
          <h2>Growing food is only the beginning.</h2>
        </div>

        <div className="action-grid">
          {communityActions.map((action) => (
            <article className="action-card" key={action.title}>
              <span className="action-symbol">{action.symbol}</span>
              <h3>{action.title}</h3>
              <p>{action.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="resource-preview">
        <div>
          <p className="eyebrow">Free community resources</p>
          <h2>Practical tools for real gardens.</h2>

          <p>
            Explore printable plant tags, beginner guides, growing
            resources, and future neighborhood-sharing tools.
          </p>

          <Link to="/resources" className="text-link">
            Browse free resources →
          </Link>
        </div>

        <aside className="bat-message">
          <span className="bat-message-heart">♡</span>
          <p>
            Every garden starts somewhere. It is okay to start small.
          </p>
        </aside>
      </section>

      <section className="closing-section">
        <p className="eyebrow">The bigger idea</p>

        <h2>
          Imagine what could happen if every neighborhood grew a little
          more food.
        </h2>

        <Link to="/mission" className="button button-light">
          Read Our Mission
        </Link>
      </section>
    </main>
  );
}