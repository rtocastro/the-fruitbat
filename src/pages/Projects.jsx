import { Link } from "react-router";

const featuredProjects = [
  {
    number: "01",
    title: "Neighborhood Plant Registry",
    description:
      "A simple way for neighbors to document what they are growing, when it may be ready, and whether they are interested in sharing.",
    stage: "Planning",
    accent: "mint",
    symbol: "○",
    outcomes: [
      "Discover what is growing nearby",
      "Reduce duplicate planting",
      "Make sharing easier",
    ],
  },
  {
    number: "02",
    title: "Harvest Swap",
    description:
      "A community system for exchanging extra fruit, vegetables, herbs, seedlings, seeds, and growing materials.",
    stage: "Early Concept",
    accent: "purple",
    symbol: "♡",
    outcomes: [
      "Prevent edible food from going to waste",
      "Help neighbors meet naturally",
      "Make local harvests more useful",
    ],
  },
  {
    number: "03",
    title: "Edible Neighborhoods",
    description:
      "An initiative encouraging more fruit trees, herbs, vegetables, and edible landscaping in shared and residential spaces.",
    stage: "Long-Term",
    accent: "lime",
    symbol: "●",
    outcomes: [
      "Increase access to fresh food",
      "Replace underused ornamental spaces",
      "Create greener neighborhoods",
    ],
  },
];

const supportingProjects = [
  {
    title: "Captain Crop",
    description:
      "A digital community map concept for finding available produce, garden resources, and neighborhood growing activity.",
    category: "Civic Technology",
    accent: "aqua",
  },
  {
    title: "Plant Care QR Guides",
    description:
      "Mobile-friendly plant pages connected to physical labels, providing current care information and downloadable guides.",
    category: "Education",
    accent: "coral",
  },
  {
    title: "Community Growing Events",
    description:
      "Small neighborhood events centered around planting, sharing, learning, harvesting, and meeting nearby growers.",
    category: "Community",
    accent: "mint",
  },
  {
    title: "Kids Growing Activities",
    description:
      "Games, observation sheets, growing challenges, and playful resources that make gardening approachable for children.",
    category: "Families",
    accent: "purple",
  },
  {
    title: "Feed Me Fruit",
    description:
      "A simple Fruitbat game where players catch falling fruit, feed the bat, and try to beat their high score.",
    category: "Play",
    accent: "lime",
  },
  {
    title: "Free Community Printables",
    description:
      "Plant tags, harvest logs, neighborhood registries, garden worksheets, and other downloadable tools.",
    category: "Resources",
    accent: "dark",
  },
];

const projectProcess = [
  {
    number: "01",
    title: "Listen",
    description:
      "Understand what growers, beginners, families, and neighbors actually need before designing a solution.",
  },
  {
    number: "02",
    title: "Start small",
    description:
      "Test one useful version before turning an idea into a complicated system.",
  },
  {
    number: "03",
    title: "Learn",
    description:
      "Use real feedback to improve the resource, project, or community experience.",
  },
  {
    number: "04",
    title: "Grow carefully",
    description:
      "Expand only when the project remains useful, welcoming, and manageable.",
  },
];

const futureIdeas = [
  "Public community garden map",
  "Local harvest notifications",
  "Neighborhood growing profiles",
  "Seasonal planting reminders",
  "Volunteer opportunities",
  "School and classroom resources",
  "Fruit-tree planting campaigns",
  "Community contribution stories",
];

export default function Projects() {
  return (
    <main>
      <section className="projects-hero">
        <div className="projects-hero-copy">
          <p className="eyebrow">Community projects</p>

          <h1>
            Small ideas can grow into
            <span> useful local systems.</span>
          </h1>

          <p className="projects-hero-description">
            The Fruitbat develops practical projects that help people
            grow food, share resources, learn together, and strengthen
            neighborhood connections.
          </p>

          <a href="#featured-projects" className="button button-primary">
            Explore the Projects
          </a>
        </div>

        <div className="projects-hero-art" aria-hidden="true">
          <div className="project-orbit project-orbit-large" />
          <div className="project-orbit project-orbit-small" />

          <div className="project-center">
            <span>♡</span>
          </div>

          <div className="project-node project-node-one">Grow</div>
          <div className="project-node project-node-two">Share</div>
          <div className="project-node project-node-three">Connect</div>
        </div>
      </section>

      <section className="projects-intro">
        <p className="section-kicker">More than a website</p>

        <h2>
          The goal is not to build features for the sake of building
          features.
        </h2>

        <p>
          Every project should solve a real problem, remove a barrier, or
          make it easier for people to participate in local growing and
          sharing.
        </p>
      </section>

      <section
        className="featured-projects-section"
        id="featured-projects"
      >
        <div className="featured-projects-heading">
          <p className="eyebrow">Core initiatives</p>

          <h2>The projects at the center of the vision.</h2>

          <p>
            These initiatives are still evolving, but together they show
            how The Fruitbat can move from information into real
            community participation.
          </p>
        </div>

        <div className="featured-projects-list">
          {featuredProjects.map((project) => (
            <article
              className={`featured-project project-accent-${project.accent}`}
              key={project.title}
            >
              <div className="featured-project-top">
                <span className="featured-project-number">
                  {project.number}
                </span>

                <span className="featured-project-stage">
                  {project.stage}
                </span>
              </div>

              <div className="featured-project-content">
                <div className="featured-project-title">
                  <span className="featured-project-symbol">
                    {project.symbol}
                  </span>

                  <h3>{project.title}</h3>
                </div>

                <div className="featured-project-details">
                  <p>{project.description}</p>

                  <ul>
                    {project.outcomes.map((outcome) => (
                      <li key={outcome}>{outcome}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="supporting-projects-section">
        <div className="supporting-projects-heading">
          <p className="eyebrow">Growing ecosystem</p>

          <h2>Projects that support the larger mission.</h2>
        </div>

        <div className="supporting-projects-grid">
          {supportingProjects.map((project) => (
            <article
              className={`supporting-project-card supporting-accent-${project.accent}`}
              key={project.title}
            >
              <div className="supporting-project-top">
                <span className="supporting-project-dot" />

                <span className="supporting-project-category">
                  {project.category}
                </span>
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <span className="supporting-project-status">
                In development
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="project-map-section">
        <div className="project-map-copy">
          <p className="eyebrow">Future community map</p>

          <h2>
            See what is growing, happening, and available nearby.
          </h2>

          <p>
            A future map could help people find community gardens,
            edible plants, harvest swaps, events, available resources,
            and local growing activity.
          </p>

          <p>
            Privacy and safety will remain central. Public information
            should help people connect without exposing precise private
            locations unnecessarily.
          </p>
        </div>

        <div className="project-map-visual" aria-hidden="true">
          <div className="map-road road-horizontal" />
          <div className="map-road road-vertical" />

          <span className="map-block block-one" />
          <span className="map-block block-two" />
          <span className="map-block block-three" />
          <span className="map-block block-four" />

          <span className="map-pin pin-one">♡</span>
          <span className="map-pin pin-two">●</span>
          <span className="map-pin pin-three">○</span>
        </div>
      </section>

      <section className="project-process-section">
        <div className="project-process-intro">
          <p className="eyebrow">How projects grow</p>

          <h2>Build carefully. Learn publicly. Improve honestly.</h2>

          <p>
            The Fruitbat does not need to launch everything at once.
            Strong community tools begin with clear, manageable steps.
          </p>
        </div>

        <div className="project-process-list">
          {projectProcess.map((step) => (
            <article className="project-process-step" key={step.number}>
              <span>{step.number}</span>

              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="future-projects-section">
        <div className="future-projects-heading">
          <p className="eyebrow">What could come next</p>

          <h2>The platform can grow alongside the community.</h2>
        </div>

        <div className="future-projects-list">
          {futureIdeas.map((idea) => (
            <span key={idea}>{idea}</span>
          ))}
        </div>
      </section>

      <section className="projects-participation-section">
        <div>
          <p className="eyebrow">Community-led by design</p>

          <h2>
            The best project ideas may come from the people using them.
          </h2>

          <p>
            The Fruitbat will eventually invite neighbors, gardeners,
            teachers, families, and community organizations to suggest
            needs, test early tools, and help guide future projects.
          </p>
        </div>

        <Link to="/contact" className="button button-secondary">
          Share an Idea
        </Link>
      </section>

      <section className="projects-cta">
        <p className="eyebrow">Grow the idea</p>

        <h2>
          A connected neighborhood begins with one useful connection.
        </h2>

        <div className="projects-cta-actions">
          <Link to="/start-growing" className="button button-light">
            Start Growing
          </Link>

          <Link to="/mission" className="projects-cta-link">
            Read our mission →
          </Link>
        </div>
      </section>
    </main>
  );
}