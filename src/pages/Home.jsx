import { Link } from "react-router";
import { motion, useReducedMotion } from "framer-motion";

import fruitbatMascot from "../assets/images/fruitbat-mascot.jpg";
import { featuredPlants } from "../data/plants";
import FeedMeFruitEmbed from "../components/FeedMeFruitEmbed";

const communityActions = [
  {
    number: "01",
    symbol: "○",
    title: "Grow",
    description:
      "Start with the space, sunlight, experience, and resources you already have.",
    path: "/start-growing",
    linkLabel: "Find your starting point",
    accent: "mint",
  },
  {
    number: "02",
    symbol: "♡",
    title: "Learn",
    description:
      "Explore plant profiles, printable guides, growing tools, and approachable resources.",
    path: "/resources",
    linkLabel: "Explore free resources",
    accent: "purple",
  },
  {
    number: "03",
    symbol: "●",
    title: "Connect",
    description:
      "Discover projects designed to help neighborhoods share food, knowledge, and support.",
    path: "/projects",
    linkLabel: "See community projects",
    accent: "lime",
  },
];

const firstSteps = [
  {
    label: "I am completely new",
    path: "/start-growing",
  },
  {
    label: "I want plant-care information",
    path: "/plants",
  },
  {
    label: "I want free printables",
    path: "/resources",
  },
  {
    label: "I want to help my neighborhood",
    path: "/projects",
  },
];

export default function Home() {
  const reducedMotion = useReducedMotion();
  const featuredPlant = featuredPlants[0];

  return (
    <main>
      <section className="home-welcome-hero">
        <div className="home-welcome-copy">
          <motion.p
            className="eyebrow"
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.45 }}
          >
            Growing communities naturally
          </motion.p>

          <motion.h1
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reducedMotion ? 0 : 0.55,
              delay: reducedMotion ? 0 : 0.08,
            }}
          >
            Grow food.
            <br />
            Share knowledge.
            <br />
            <span>Grow together.</span>
          </motion.h1>

          <motion.p
            className="home-welcome-description"
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reducedMotion ? 0 : 0.55,
              delay: reducedMotion ? 0 : 0.16,
            }}
          >
            The Fruitbat is a welcoming community project helping people
            grow food, understand their plants, share useful resources,
            and strengthen neighborhoods.
          </motion.p>

          <motion.div
            className="home-welcome-actions"
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reducedMotion ? 0 : 0.55,
              delay: reducedMotion ? 0 : 0.24,
            }}
          >
            <Link to="/start-growing" className="button button-primary">
              Start Growing
            </Link>

            <Link to="/plants" className="button button-secondary">
              Explore Plant Profiles
            </Link>
          </motion.div>

          <motion.div
            className="home-welcome-note"
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: reducedMotion ? 0 : 0.6,
              delay: reducedMotion ? 0 : 0.35,
            }}
          >
            <span>♡</span>
            <p>No yard required. No experience required.</p>
          </motion.div>
        </div>

        <div className="home-welcome-art" aria-hidden="true">
          <motion.div
            className="home-mascot-orbit"
            animate={
              reducedMotion
                ? {}
                : {
                    rotate: [0, 2, 0, -2, 0],
                  }
            }
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="home-mascot-backdrop" />

            <motion.img
              src={fruitbatMascot}
              alt=""
              className="home-welcome-mascot"
              animate={
                reducedMotion
                  ? {}
                  : {
                      y: [0, -10, 0],
                    }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.span
              className="home-orbit-shape orbit-heart-one"
              animate={
                reducedMotion
                  ? {}
                  : {
                      y: [0, -8, 0],
                      rotate: [0, 8, 0],
                    }
              }
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ♡
            </motion.span>

            <motion.span
              className="home-orbit-shape orbit-circle-one"
              animate={
                reducedMotion
                  ? {}
                  : {
                      x: [0, 8, 0],
                      y: [0, 5, 0],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ○
            </motion.span>

            <motion.span
              className="home-orbit-shape orbit-dot-one"
              animate={
                reducedMotion
                  ? {}
                  : {
                      scale: [1, 1.12, 1],
                    }
              }
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ●
            </motion.span>
          </motion.div>
        </div>
      </section>

      <section className="home-soft-intro">
        <p className="section-kicker">A soft place to begin</p>

        <h2>
          You do not need to become an expert before you grow your first
          plant.
        </h2>

        <p>
          Start with one container, one sunny corner, one question, or one
          plant you are curious about. The learning can grow from there.
        </p>
      </section>

      <section className="home-path-section">
        <div className="home-path-heading">
          <p className="eyebrow">Choose your next step</p>

          <h2>What brought you here today?</h2>

          <p>
            There is no single correct way to enter the project. Begin
            with what feels useful right now.
          </p>
        </div>

        <div className="home-path-list">
          {firstSteps.map((step, index) => (
            <Link
              to={step.path}
              className="home-path-link"
              key={step.label}
            >
              <span className="home-path-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span>{step.label}</span>

              <span aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-actions-section">
        <div className="home-actions-heading">
          <p className="eyebrow">Grow. Learn. Connect.</p>

          <h2>Growing food is only the beginning.</h2>
        </div>

        <div className="home-action-grid">
          {communityActions.map((action) => (
            <article
              className={`home-action-card home-action-${action.accent}`}
              key={action.title}
            >
              <div className="home-action-top">
                <span className="home-action-symbol">
                  {action.symbol}
                </span>

                <span className="home-action-number">
                  {action.number}
                </span>
              </div>

              <h3>{action.title}</h3>
              <p>{action.description}</p>

              <Link to={action.path}>
                {action.linkLabel} →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {featuredPlant && (
        <section className="home-featured-plant">
          <div className="home-featured-plant-copy">
            <p className="eyebrow">Featured plant profile</p>

            <p className="home-featured-scientific">
              {featuredPlant.scientificName}
            </p>

            <h2>{featuredPlant.commonName}</h2>

            <p>{featuredPlant.summary}</p>

            <div className="home-featured-meta">
              <span>{featuredPlant.category}</span>
              <span>{featuredPlant.difficulty}</span>

              {featuredPlant.pdfPath && <span>PDF guide available</span>}
            </div>

            <Link
              to={`/plants/${featuredPlant.slug}`}
              className="button button-secondary"
            >
              Open Plant Profile
            </Link>
          </div>

          <div className="home-featured-plant-art" aria-hidden="true">
            <span className="home-featured-ring" />
            <span className="home-featured-symbol">
              {featuredPlant.symbol}
            </span>
            <span className="home-featured-heart">♡</span>
          </div>
        </section>
      )}

      <section className="home-project-preview">
        <div>
          <p className="eyebrow">Beyond individual gardens</p>

          <h2>
            Imagine knowing what your neighborhood already grows.
          </h2>

          <p>
            The Fruitbat is exploring plant registries, harvest-sharing
            tools, community maps, educational games, and local growing
            projects designed to help useful resources connect.
          </p>

          <Link to="/projects" className="text-link">
            Explore community projects →
          </Link>
        </div>

        <aside className="home-project-message">
          <span>♡</span>

          <p>
            One person may grow citrus. Another may grow herbs. Community
            begins when those resources connect.
          </p>
        </aside>
      </section>

      <section className="home-play-preview">
        <div className="home-play-copy">
          <p className="eyebrow">A playful side</p>

          <h2>Take a break. Feed the bat.</h2>

          <p>
            Feed Me Fruit began as a simple Scratch game where fruit falls
            from the sky and players move the Fruitbat to catch it and
            beat the high score.
          </p>

          <a
            href="https://scratch.mit.edu/projects/675089522/"
            target="_blank"
            rel="noreferrer"
            className="button button-primary"
          >
            Play Feed Me Fruit
          </a>
          
        </div>

        <div>
          <FeedMeFruitEmbed />
        </div>
      </section>

      <section className="home-final-message">
        <p className="eyebrow">The bigger idea</p>

        <h2>
          A fruit tree can feed people the person who planted it may never
          meet.
        </h2>

        <p>
          Grow something. Learn something. Share something. Small actions
          become stronger neighborhoods.
        </p>

        <div className="home-final-actions">
          <Link to="/mission" className="button button-light">
            Read Our Mission
          </Link>

          <Link to="/donate" className="home-final-link">
            Get involved →
          </Link>
        </div>
      </section>
    </main>
  );
}