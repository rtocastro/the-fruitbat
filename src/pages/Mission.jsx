import { Link } from "react-router";
import fruitbatMascot from "../assets/images/fruitbat-mascot.jpg";

const missionPillars = [
  {
    number: "01",
    title: "Make growing approachable",
    description:
      "Gardening should not feel exclusive, overly technical, or expensive. We help people begin with the space, time, and resources they already have.",
  },
  {
    number: "02",
    title: "Share useful knowledge",
    description:
      "We create free guides, printable tools, plant-care resources, and community projects that make growing food easier to understand.",
  },
  {
    number: "03",
    title: "Strengthen neighborhoods",
    description:
      "Food can do more than feed us. It can introduce neighbors, create shared experiences, reduce waste, and make communities more resilient.",
  },
];

const values = [
  "Accessible",
  "Community-led",
  "Practical",
  "Playful",
  "Generous",
  "Local",
];

export default function Mission() {
  return (
    <main>
      <section className="mission-hero">
        <div className="mission-hero-copy">
          <p className="eyebrow">Our mission</p>

          <h1>
            Helping neighborhoods
            <span> grow food together.</span>
          </h1>

          <p className="mission-hero-description">
            The Fruitbat helps people grow food, share useful knowledge,
            and build stronger local communities—one plant, one person,
            and one neighborhood at a time.
          </p>

          <div className="mission-hero-actions">
            <Link to="/start-growing" className="button button-primary">
              Start Growing
            </Link>

            <Link to="/projects" className="button button-secondary">
              Explore Projects
            </Link>
          </div>
        </div>

        <div className="mission-hero-art" aria-hidden="true">
          <div className="mission-heart mission-heart-one">♡</div>
          <div className="mission-heart mission-heart-two">♡</div>

          <div className="mission-mascot-frame">
            <img
              src={fruitbatMascot}
              alt=""
              className="mission-mascot"
            />
          </div>
        </div>
      </section>

      <section className="mission-statement">
        <p className="section-kicker">The bigger idea</p>

        <h2>
          Growing food is not only about what comes out of the soil.
        </h2>

        <p>
          It is also about confidence, knowledge, health, generosity,
          sustainability, and connection. A small garden can become a
          classroom, a gathering place, or the beginning of a stronger
          neighborhood.
        </p>
      </section>

      <section className="mission-problem-section">
        <div className="mission-problem-heading">
          <p className="eyebrow">Why this matters</p>

          <h2>
            Many people want to grow food—but do not know where to begin.
          </h2>
        </div>

        <div className="mission-problem-grid">
          <article className="mission-problem-card">
            <span className="mission-card-symbol">?</span>

            <h3>Gardening can feel confusing.</h3>

            <p>
              Advice is often scattered, overly complicated, or written
              for people who already know the basics.
            </p>
          </article>

          <article className="mission-problem-card featured">
            <span className="mission-card-symbol">♡</span>

            <h3>Neighborhood resources go unused.</h3>

            <p>
              Fruit, seeds, knowledge, growing space, and experience
              frequently exist nearby—but people are not connected.
            </p>
          </article>

          <article className="mission-problem-card">
            <span className="mission-card-symbol">○</span>

            <h3>Small beginnings are underestimated.</h3>

            <p>
              A windowsill herb, a patio container, or one fruit tree can
              still make a meaningful difference.
            </p>
          </article>
        </div>
      </section>

      <section className="mission-pillars-section">
        <div className="mission-pillars-intro">
          <p className="eyebrow">Our approach</p>

          <h2>
            Keep it useful. Keep it welcoming. Help people begin.
          </h2>

          <p>
            The Fruitbat is designed to remove barriers—not create more
            of them.
          </p>
        </div>

        <div className="mission-pillars-list">
          {missionPillars.map((pillar) => (
            <article className="mission-pillar" key={pillar.number}>
              <span className="mission-pillar-number">
                {pillar.number}
              </span>

              <div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="logo-story-section">
        <div className="logo-story-art">
          <div className="logo-story-circle">
            <img
              src={fruitbatMascot}
              alt="The Fruitbat mascot"
              className="logo-story-mascot"
            />
          </div>

          <span className="logo-story-shape shape-one">♡</span>
          <span className="logo-story-shape shape-two">○</span>
          <span className="logo-story-shape shape-three">♡</span>
        </div>

        <div className="logo-story-copy">
          <p className="eyebrow">The meaning behind the bat</p>

          <h2>Built from circles and hearts.</h2>

          <p>
            The Fruitbat mascot was intentionally created using simple
            circles and heart shapes.
          </p>

          <p>
            The circles represent seeds, fruit, people, growth, and the
            idea that everyone belongs. The hearts represent kindness,
            care, generosity, and the community at the center of the
            project.
          </p>

          <p>
            Together, those simple shapes create something memorable,
            approachable, and full of personality.
          </p>
        </div>
      </section>

      <section className="mission-values-section">
        <div className="mission-values-heading">
          <p className="eyebrow">How we work</p>
          <h2>Our values should be visible in everything we create.</h2>
        </div>

        <div className="mission-values-list">
          {values.map((value) => (
            <span className="mission-value" key={value}>
              {value}
            </span>
          ))}
        </div>
      </section>

      <section className="mission-vision-section">
        <div className="mission-vision-copy">
          <p className="eyebrow">The long-term vision</p>

          <h2>
            A future where growing and sharing food feels normal.
          </h2>

          <p>
            We envision neighborhoods where people know what is growing
            around them, excess harvests are shared instead of wasted,
            children learn where food comes from, and beginners always
            have somewhere welcoming to start.
          </p>
        </div>

        <div className="mission-vision-list">
          <div>
            <span>01</span>
            <p>Free growing resources</p>
          </div>

          <div>
            <span>02</span>
            <p>Neighborhood plant registries</p>
          </div>

          <div>
            <span>03</span>
            <p>Harvest-sharing tools</p>
          </div>

          <div>
            <span>04</span>
            <p>Community maps and projects</p>
          </div>

          <div>
            <span>05</span>
            <p>Educational games and activities</p>
          </div>
        </div>
      </section>

      <section className="mission-cta">
        <div>
          <p className="eyebrow">Start where you are</p>

          <h2>
            You do not need a perfect garden to become part of this.
          </h2>

          <p>
            Plant something. Learn something. Share something. Small
            actions grow.
          </p>
        </div>

        <Link to="/start-growing" className="button button-light">
          Find Your Starting Point
        </Link>
      </section>
    </main>
  );
}