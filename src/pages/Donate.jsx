import { Link } from "react-router";

const involvementOptions = [
  {
    number: "01",
    title: "Share knowledge",
    description:
      "Contribute a growing tip, local experience, useful correction, or resource topic that may help someone else.",
    action: "Suggest a resource",
    path: "/contact",
    accent: "mint",
    symbol: "♡",
  },
  {
    number: "02",
    title: "Share the project",
    description:
      "Send The Fruitbat to a neighbor, teacher, gardener, family member, or community group who may find it useful.",
    action: "Explore resources",
    path: "/resources",
    accent: "purple",
    symbol: "○",
  },
  {
    number: "03",
    title: "Participate locally",
    description:
      "Help with a future planting event, harvest swap, neighborhood registry, or community growing initiative.",
    action: "View projects",
    path: "/projects",
    accent: "lime",
    symbol: "●",
  },
  {
    number: "04",
    title: "Support the work",
    description:
      "Financial support can help cover hosting, printed materials, community resources, labels, events, and project development.",
    action: "Donation options coming soon",
    path: null,
    accent: "coral",
    symbol: "♡",
  },
];

const supportUses = [
  {
    title: "Free resources",
    description:
      "Designing and maintaining guides, printable tools, activity sheets, and educational materials.",
  },
  {
    title: "Community materials",
    description:
      "Plant labels, QR stickers, signs, handouts, growing supplies, and event materials.",
  },
  {
    title: "Website infrastructure",
    description:
      "Domain, hosting, accessibility improvements, storage, forms, maps, and future community tools.",
  },
  {
    title: "Local projects",
    description:
      "Small growing initiatives, neighborhood events, harvest sharing, and edible-plant outreach.",
  },
];

const nonFinancialWays = [
  "Share an extra seedling",
  "Teach someone one useful skill",
  "Donate unused containers",
  "Help a neighbor identify sunlight",
  "Share excess fruit",
  "Translate a resource",
  "Test an early tool",
  "Tell us what your community needs",
];

export default function Donate() {
  return (
    <main>
      <section className="involved-hero">
        <div className="involved-hero-copy">
          <p className="eyebrow">Get involved</p>

          <h1>
            Support can take
            <span> many forms.</span>
          </h1>

          <p className="involved-hero-description">
            The Fruitbat can grow through shared knowledge, local
            participation, collaboration, encouragement, and eventually
            financial contributions.
          </p>

          <a href="#ways-to-help" className="button button-primary">
            Find a Way to Help
          </a>
        </div>

        <div className="involved-hero-art" aria-hidden="true">
          <div className="involved-center-heart">♡</div>

          <span className="involved-hand involved-hand-one">
            Share
          </span>

          <span className="involved-hand involved-hand-two">
            Grow
          </span>

          <span className="involved-hand involved-hand-three">
            Help
          </span>
        </div>
      </section>

      <section className="involved-intro">
        <p className="section-kicker">Participation before perfection</p>

        <h2>
          You do not need money, a large garden, or expert knowledge to
          contribute.
        </h2>

        <p>
          Sometimes support means sharing a resource. Sometimes it means
          donating an extra plant, teaching a neighbor, testing a new
          tool, or simply helping the right person discover the project.
        </p>
      </section>

      <section className="involvement-options-section" id="ways-to-help">
        <div className="involvement-options-heading">
          <p className="eyebrow">Ways to participate</p>

          <h2>Choose the kind of support that fits you.</h2>

          <p>
            Every contribution does not need to look the same. Healthy
            communities grow from many small forms of participation.
          </p>
        </div>

        <div className="involvement-options-grid">
          {involvementOptions.map((option) => (
            <article
              className={`involvement-option-card involved-accent-${option.accent}`}
              key={option.number}
            >
              <div className="involvement-option-top">
                <span>{option.number}</span>

                <span className="involvement-option-symbol">
                  {option.symbol}
                </span>
              </div>

              <h3>{option.title}</h3>
              <p>{option.description}</p>

              {option.path ? (
                <Link to={option.path} className="involvement-option-link">
                  {option.action} →
                </Link>
              ) : (
                <span className="involvement-option-status">
                  {option.action}
                </span>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="support-use-section">
        <div className="support-use-copy">
          <p className="eyebrow">Where support can go</p>

          <h2>
            Contributions should create something useful and visible.
          </h2>

          <p>
            When direct donations are introduced, The Fruitbat should be
            clear about what support helps fund and how those resources
            serve the larger mission.
          </p>
        </div>

        <div className="support-use-list">
          {supportUses.map((use, index) => (
            <article className="support-use-item" key={use.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>

              <div>
                <h3>{use.title}</h3>
                <p>{use.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="nonfinancial-section">
        <div className="nonfinancial-heading">
          <p className="eyebrow">Support without spending</p>

          <h2>Generosity is not limited to money.</h2>
        </div>

        <div className="nonfinancial-list">
          {nonFinancialWays.map((way) => (
            <span key={way}>{way}</span>
          ))}
        </div>
      </section>

      <section className="involved-transparency-section">
        <div className="involved-transparency-card">
          <span>♡</span>

          <div>
            <p className="involved-transparency-label">
              A future commitment
            </p>

            <h2>Keep support transparent and mission-focused.</h2>

            <p>
              Before accepting direct donations through the new website,
              The Fruitbat will establish clear payment methods, project
              priorities, basic recordkeeping, and language explaining
              whether contributions are tax-deductible.
            </p>
          </div>
        </div>
      </section>

      <section className="involved-community-section">
        <div>
          <p className="eyebrow">Community participation</p>

          <h2>
            The most valuable support may be helping shape what comes
            next.
          </h2>

          <p>
            Future volunteers and collaborators may help review guides,
            test community tools, translate resources, contribute local
            knowledge, assist with events, or identify unmet needs.
          </p>
        </div>

        <Link to="/contact" className="button button-secondary">
          Introduce Yourself
        </Link>
      </section>

      <section className="involved-cta">
        <p className="eyebrow">Begin with one action</p>

        <h2>
          Share one resource, one plant, one skill, or one idea.
        </h2>

        <div className="involved-cta-actions">
          <Link to="/contact" className="button button-light">
            Get in Touch
          </Link>

          <Link to="/projects" className="involved-cta-link">
            See what we are building →
          </Link>
        </div>
      </section>
    </main>
  );
}