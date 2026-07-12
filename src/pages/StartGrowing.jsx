import { Link } from "react-router";

const growingPaths = [
  {
    icon: "○",
    label: "Backyard",
    title: "I have a yard",
    description:
      "Start with an edible corner, raised bed, fruit tree, or a few containers without redesigning your entire outdoor space.",
    recommendations: [
      "Choose one sunny growing area",
      "Start with two or three plants",
      "Consider a long-term fruit tree",
    ],
    accent: "mint",
  },
  {
    icon: "♡",
    label: "Small Space",
    title: "I have a balcony or patio",
    description:
      "Containers can grow herbs, greens, peppers, tomatoes, strawberries, and even compact fruiting plants.",
    recommendations: [
      "Track how much sunlight you receive",
      "Use containers with drainage",
      "Begin with plants you already eat",
    ],
    accent: "purple",
  },
  {
    icon: "●",
    label: "Indoors",
    title: "I have a sunny window",
    description:
      "A windowsill can still support herbs, green onions, microgreens, seedlings, and small educational growing projects.",
    recommendations: [
      "Choose your brightest window",
      "Keep the first setup very small",
      "Rotate plants for even light",
    ],
    accent: "lime",
  },
  {
    icon: "♡",
    label: "Families",
    title: "I want to grow with kids",
    description:
      "Use fast, visible, and forgiving plants to make growing feel exciting instead of turning it into another chore.",
    recommendations: [
      "Try radishes or green beans",
      "Let children label their plants",
      "Celebrate every small change",
    ],
    accent: "coral",
  },
  {
    icon: "○",
    label: "Community",
    title: "I want to help my neighborhood",
    description:
      "You can contribute without owning a garden by sharing skills, organizing resources, helping a neighbor, or supporting local projects.",
    recommendations: [
      "Ask what people already grow",
      "Share extra containers or seeds",
      "Start with one useful project",
    ],
    accent: "aqua",
  },
  {
    icon: "?",
    label: "Beginner",
    title: "I have no idea where to begin",
    description:
      "Perfect. You do not need a full plan. We will help you choose one realistic first step and learn from there.",
    recommendations: [
      "Find one sunny location",
      "Choose one forgiving plant",
      "Focus on learning, not perfection",
    ],
    accent: "dark",
  },
];

const beginnerSteps = [
  {
    number: "01",
    title: "Observe your space",
    description:
      "Before buying anything, notice where sunlight lands and how long it stays there.",
  },
  {
    number: "02",
    title: "Choose something useful",
    description:
      "Start with a plant you genuinely enjoy eating, smelling, seeing, or sharing.",
  },
  {
    number: "03",
    title: "Keep the first attempt small",
    description:
      "One successful container teaches more than ten neglected plants.",
  },
  {
    number: "04",
    title: "Expect to learn",
    description:
      "Yellow leaves, pests, and mistakes are information—not proof that you cannot garden.",
  },
];

const beginnerPlants = [
  {
    name: "Green onions",
    note: "Easy to regrow and useful in small spaces.",
    difficulty: "Very easy",
  },
  {
    name: "Mint",
    note: "Fast-growing and best kept inside its own container.",
    difficulty: "Easy",
  },
  {
    name: "Basil",
    note: "Great for warm, sunny spaces and frequent harvesting.",
    difficulty: "Easy",
  },
  {
    name: "Radishes",
    note: "Quick results make them satisfying for beginners and children.",
    difficulty: "Easy",
  },
  {
    name: "Cherry tomatoes",
    note: "A little more involved, but highly rewarding in strong sunlight.",
    difficulty: "Moderate",
  },
  {
    name: "Strawberries",
    note: "Compact, familiar, and suitable for many container setups.",
    difficulty: "Moderate",
  },
];

export default function StartGrowing() {
  return (
    <main>
      <section className="growing-hero">
        <div className="growing-hero-copy">
          <p className="eyebrow">Start growing</p>

          <h1>
            Begin with the space
            <span> you already have.</span>
          </h1>

          <p className="growing-hero-description">
            You do not need a farm, perfect soil, expensive equipment, or
            years of experience. Choose the path that feels closest to
            your life right now.
          </p>

          <a href="#choose-your-path" className="button button-primary">
            Find Your Starting Point
          </a>
        </div>

        <div className="growing-hero-art" aria-hidden="true">
          <div className="growing-pot">
            <span className="growing-stem stem-one" />
            <span className="growing-stem stem-two" />
            <span className="growing-leaf leaf-one">♡</span>
            <span className="growing-leaf leaf-two">♡</span>
            <span className="growing-leaf leaf-three">♡</span>
          </div>

          <span className="growing-seed seed-one">●</span>
          <span className="growing-seed seed-two">●</span>
          <span className="growing-seed seed-three">●</span>
        </div>
      </section>

      <section className="growing-reassurance">
        <p className="section-kicker">A quick reminder</p>

        <h2>You are allowed to begin before you feel ready.</h2>

        <p>
          Gardening is not something you completely understand first and
          then begin. Most of the learning happens after you put
          something in the soil.
        </p>
      </section>

      <section
        className="growing-paths-section"
        id="choose-your-path"
      >
        <div className="growing-section-heading">
          <p className="eyebrow">Choose your path</p>

          <h2>What does your growing space look like?</h2>

          <p>
            Pick the closest option. You can always explore another path
            later.
          </p>
        </div>

        <div className="growing-path-grid">
          {growingPaths.map((path) => (
            <article
              className={`growing-path-card accent-${path.accent}`}
              key={path.title}
            >
              <div className="growing-path-card-top">
                <span className="growing-path-icon">{path.icon}</span>
                <span className="growing-path-label">{path.label}</span>
              </div>

              <h3>{path.title}</h3>
              <p>{path.description}</p>

              <ul>
                {path.recommendations.map((recommendation) => (
                  <li key={recommendation}>{recommendation}</li>
                ))}
              </ul>

              <Link to="/resources" className="growing-card-link">
                Explore beginner resources →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="first-steps-section">
        <div className="first-steps-intro">
          <p className="eyebrow">Your first four steps</p>

          <h2>Slow down before buying everything.</h2>

          <p>
            A little observation and planning can prevent wasted money,
            overwhelmed plants, and an overwhelmed gardener.
          </p>
        </div>

        <div className="first-steps-list">
          {beginnerSteps.map((step) => (
            <article className="first-step" key={step.number}>
              <span>{step.number}</span>

              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="beginner-plants-section">
        <div className="beginner-plants-heading">
          <p className="eyebrow">Beginner-friendly ideas</p>
          <h2>A few practical places to start.</h2>

          <p>
            These are not the only beginner plants, but they provide
            useful, approachable options for many small growing spaces.
          </p>
        </div>

        <div className="beginner-plants-grid">
          {beginnerPlants.map((plant) => (
            <article className="beginner-plant-card" key={plant.name}>
              <span className="beginner-plant-dot" />

              <div>
                <p className="beginner-plant-level">
                  {plant.difficulty}
                </p>

                <h3>{plant.name}</h3>
                <p>{plant.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="growing-mistakes-section">
        <div className="growing-mistakes-copy">
          <p className="eyebrow">Permission to be imperfect</p>

          <h2>You will probably lose a plant eventually.</h2>

          <p>
            Every gardener has overwatered, underwatered, planted at the
            wrong time, trusted the wrong advice, or discovered a pest
            several days too late.
          </p>

          <p>
            That is not failure. That is how practical knowledge is
            built.
          </p>
        </div>

        <aside className="growing-mistakes-note">
          <span>♡</span>

          <p>
            The goal is not to become perfect before you begin. The goal
            is to keep learning after you begin.
          </p>
        </aside>
      </section>

      <section className="growing-community-section">
        <div>
          <p className="eyebrow">Grow beyond your own space</p>

          <h2>
            Not everyone needs to grow everything.
          </h2>

          <p>
            One person may grow citrus. Another may grow herbs. Someone
            else may have tools, knowledge, compost, containers, or time
            to share. Community begins when those resources connect.
          </p>
        </div>

        <Link to="/projects" className="button button-secondary">
          Explore Community Projects
        </Link>
      </section>

      <section className="growing-cta">
        <p className="eyebrow">One small action</p>

        <h2>Choose one plant. Choose one place. Begin there.</h2>

        <div className="growing-cta-actions">
          <Link to="/resources" className="button button-light">
            Browse Free Resources
          </Link>

          <Link to="/mission" className="growing-cta-link">
            Read the mission →
          </Link>
        </div>
      </section>
    </main>
  );
}