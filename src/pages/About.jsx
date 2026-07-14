import { Link } from "react-router";
import fruitbatMascot from "../assets/images/fruitbat-mascot.jpg";

const storyTimeline = [
  {
    year: "01",
    title: "It started with plants",
    description:
      "The Fruitbat began as a simple way to share seeds, plants, growing information, and free gardening resources.",
  },
  {
    year: "02",
    title: "The guides became part of the experience",
    description:
      "Plant labels and QR codes connected people to care information, helping each plant come with a useful next step.",
  },
  {
    year: "03",
    title: "The idea grew beyond individual plants",
    description:
      "The larger opportunity became clearer: help people grow food, share what they learn, and connect neighborhood resources.",
  },
  {
    year: "04",
    title: "The Fruitbat became a community project",
    description:
      "The project is now evolving into a platform for education, sharing, local tools, community projects, and playful learning.",
  },
];

const creatorValues = [
  {
    title: "Make it approachable",
    description:
      "Useful information should not feel intimidating, overly formal, or reserved for experienced gardeners.",
  },
  {
    title: "Make it practical",
    description:
      "A resource should help someone make a decision, solve a problem, or take a realistic next step.",
  },
  {
    title: "Make it human",
    description:
      "Gardening is full of mistakes, surprises, personalities, and shared experiences. The project should feel that way too.",
  },
  {
    title: "Make it worth sharing",
    description:
      "The strongest tools are the ones people feel comfortable passing to a neighbor, teacher, friend, or family member.",
  },
];

const projectTraits = [
  "Community-first",
  "Beginner-friendly",
  "Free to explore",
  "Built with care",
  "Playful when possible",
  "Designed to grow",
];

export default function About() {
  return (
    <main>
      <section className="about-hero">
        <div className="about-hero-copy">
          <p className="eyebrow">About The Fruitbat</p>

          <h1>
            A small plant idea that
            <span> kept growing.</span>
          </h1>

          <p className="about-hero-description">
            The Fruitbat began with seeds, plants, care guides, and a
            desire to make growing food feel more approachable. Over
            time, it became clear that the larger mission was not simply
            helping individual plants grow. It was helping people grow
            together.
          </p>

          <Link to="/mission" className="button button-primary">
            Read the Mission
          </Link>
        </div>

        <div className="about-hero-art">
          <div className="about-mascot-circle">
            <img
              src={fruitbatMascot}
              alt="The Fruitbat mascot"
              className="about-mascot"
            />
          </div>

          <span className="about-shape about-shape-one">♡</span>
          <span className="about-shape about-shape-two">○</span>
          <span className="about-shape about-shape-three">●</span>
        </div>
      </section>

      <section className="about-intro">
        <p className="section-kicker">The heart of the project</p>

        <h2>
          The Fruitbat was never only about selling seeds or plants.
        </h2>

        <p>
          The plants were the beginning. The deeper purpose was always
          education, encouragement, accessibility, and sharing useful
          things with other people.
        </p>
      </section>

      <section className="about-origin-section">
        <div className="about-origin-copy">
          <p className="eyebrow">How it began</p>

          <h2>
            Every plant deserved to come with a little more support.
          </h2>

          <p>
            One of the earliest ideas behind The Fruitbat was simple:
            when someone received a plant, they should also receive
            clear information about how to care for it.
          </p>

          <p>
            QR-code labels connected plants to care guides covering
            sunlight, watering, containers, pruning, nutrients, and
            other practical details.
          </p>

          <p>
            That idea still matters. The new version of The Fruitbat
            simply expands it into something larger, more accessible,
            and easier to keep updated.
          </p>
        </div>

        <aside className="about-origin-card">
          <span className="about-origin-heart">♡</span>

          <p className="about-origin-label">Original idea</p>

          <h3>
            Give people a plant and give them the confidence to care for
            it.
          </h3>
        </aside>
      </section>

      <section className="about-timeline-section">
        <div className="about-timeline-heading">
          <p className="eyebrow">The evolution</p>

          <h2>How the idea became something bigger.</h2>
        </div>

        <div className="about-timeline-list">
          {storyTimeline.map((item) => (
            <article className="about-timeline-item" key={item.year}>
              <span className="about-timeline-number">
                {item.year}
              </span>

              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-logo-section">
        <div className="about-logo-art">
          <div className="about-logo-ring">
            <img
              src={fruitbatMascot}
              alt="The Fruitbat logo formed from circles and hearts"
            />
          </div>

          <span className="about-logo-heart heart-top">♡</span>
          <span className="about-logo-circle circle-right">○</span>
          <span className="about-logo-heart heart-bottom">♡</span>
        </div>

        <div className="about-logo-copy">
          <p className="eyebrow">The mascot</p>

          <h2>Simple shapes. A larger meaning.</h2>

          <p>
            The Fruitbat mascot is built from circles and hearts. The
            design was intentionally kept simple, friendly, and easy to
            recognize.
          </p>

          <p>
            Circles can represent fruit, seeds, people, connection, and
            inclusion. Hearts represent care, generosity, kindness, and
            the community-centered purpose behind the project.
          </p>

          <p>
            Those shapes are now part of the larger visual language of
            the website, appearing in illustrations, cards, icons, map
            markers, and community tools.
          </p>
        </div>
      </section>

      <section className="about-creator-section">
        <div className="about-creator-copy">
          <p className="eyebrow">The person behind the project</p>

          <h2>
            Built by someone who likes making useful things.
          </h2>

          <p>
            The Fruitbat was created by Rick Torres, a designer,
            developer, gardener, and longtime creative problem-solver
            based in Los Angeles.
          </p>

          <p>
            The project brings together several interests: growing food,
            visual design, community systems, educational resources,
            technology, and playful ideas that make useful information
            easier to engage with.
          </p>

          <p>
            The goal is not to position one person as the center of the
            project. The goal is to build a welcoming foundation that
            other people can eventually participate in, contribute to,
            and help shape.
          </p>
        </div>

        <div className="about-creator-values">
          {creatorValues.map((value) => (
            <article className="about-creator-value" key={value.title}>
              <span>♡</span>

              <div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-play-section">
        <div className="about-play-copy">
          <p className="eyebrow">A playful side</p>

          <h2>Learning does not always need to feel like homework.</h2>

          <p>
            The Fruitbat has also inspired playful experiments, including
            Feed Me Fruit, a simple game where fruit falls from the sky
            and players guide the bat to catch it and beat the high
            score.
          </p>

          <p>
            Games, illustrations, printable activities, mascot moments,
            and humor can all make gardening education feel more
            welcoming—especially for children and first-time growers.
          </p>
        </div>

        <div className="about-play-card">
          <div className="about-game-sky">
            <span className="falling-fruit fruit-one">●</span>
            <span className="falling-fruit fruit-two">●</span>
            <span className="falling-fruit fruit-three">●</span>

            <img
              src={fruitbatMascot}
              alt=""
              className="about-game-bat"
            />
          </div>

          <div className="about-game-copy">
            <p>Feed Me Fruit</p>
            <span>Catch fruit. Feed the bat. Beat the score.</span>
          </div>
        </div>
      </section>

      <section className="about-traits-section">
        <div className="about-traits-heading">
          <p className="eyebrow">What The Fruitbat should always feel like</p>

          <h2>The personality matters as much as the features.</h2>
        </div>

        <div className="about-traits-list">
          {projectTraits.map((trait) => (
            <span key={trait}>{trait}</span>
          ))}
        </div>
      </section>

      <section className="about-future-section">
        <div>
          <p className="eyebrow">Still growing</p>

          <h2>
            The current website is a foundation, not a finished endpoint.
          </h2>

          <p>
            Future versions may include plant-care pages, printable
            resources, neighborhood registries, harvest-sharing tools,
            community maps, games, events, and ways for local growers to
            contribute their experience.
          </p>
        </div>

        <Link to="/projects" className="button button-secondary">
          Explore the Projects
        </Link>
      </section>

      <section className="about-cta">
        <p className="eyebrow">The simplest version of the idea</p>

        <h2>
          Grow something. Learn something. Share something.
        </h2>

        <div className="about-cta-actions">
          <Link to="/start-growing" className="button button-light">
            Start Growing
          </Link>

          <Link to="/contact" className="about-cta-link">
            Get in touch →
          </Link>
        </div>
      </section>
    </main>
  );
}