import { Link } from "react-router";
import {
  featuredVolunteerOrganizations,
  getActiveVolunteerOrganizations,
} from "../data/volunteerOrganizations";

const volunteerWays = [
  {
    number: "01",
    title: "Lend a hand",
    description:
      "Help with planting, watering, garden maintenance, events, cleanup, or whatever a community growing space needs that day.",
  },
  {
    number: "02",
    title: "Share a skill",
    description:
      "Gardening experience can help, but so can organizing, building, teaching, translating, designing, repairing, or simply being willing to learn.",
  },
  {
    number: "03",
    title: "Meet your community",
    description:
      "Volunteering can be an easy way to meet people nearby while helping maintain spaces and projects that benefit the neighborhood.",
  },
];

export default function Volunteer() {
  const activeOrganizations =
    getActiveVolunteerOrganizations();

  return (
    <main>
      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="volunteer-hero">
        <div className="volunteer-hero-copy">
          <p className="eyebrow">Volunteer locally</p>

          <h1>
            Put an extra pair of hands
            <span> to good use.</span>
          </h1>

          <p className="volunteer-hero-description">
            Find gardens, homesteads, growing projects, and
            community organizations where your time can make a
            real difference.
          </p>

          <a
            href="#volunteer-opportunities"
            className="button button-primary"
          >
            Find a Place to Help
          </a>
        </div>

        <div
          className="volunteer-hero-art"
          aria-hidden="true"
        >
          <div className="volunteer-heart">♡</div>

          <span>GROW</span>
          <span>HELP</span>
          <span>SHARE</span>
        </div>
      </section>

      {/* =====================================================
          INTRO
          ===================================================== */}

      <section className="volunteer-intro">
        <p className="section-kicker">
          You don't need to be an expert
        </p>

        <h2>
          Sometimes helping really does mean showing up.
        </h2>

        <p>
          Community growing spaces need many kinds of people.
          You may know exactly what you're doing, or you may be
          touching a garden tool for the first time. Either way,
          there can be a place to start.
        </p>
      </section>

      {/* =====================================================
          WAYS TO HELP
          ===================================================== */}

      <section className="volunteer-ways-section">
        <div className="volunteer-section-heading">
          <p className="eyebrow">Ways to contribute</p>

          <h2>Time and effort count too.</h2>
        </div>

        <div className="volunteer-ways-grid">
          {volunteerWays.map((way) => (
            <article
              className="volunteer-way-card"
              key={way.number}
            >
              <span>{way.number}</span>

              <h3>{way.title}</h3>

              <p>{way.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          OPPORTUNITIES
          ===================================================== */}

      <section
        className="volunteer-opportunities-section"
        id="volunteer-opportunities"
      >
        <div className="volunteer-section-heading">
          <p className="eyebrow">Places to help</p>

          <h2>Find a community growing space.</h2>

          <p>
            These organizations and projects are looking for
            people willing to contribute time, skills, or an
            extra pair of hands.
          </p>
        </div>

        {activeOrganizations.length > 0 ? (
          <div className="volunteer-organization-grid">
            {activeOrganizations.map((organization) => (
              <article
                className="volunteer-organization-card"
                key={organization.id}
              >
                <div className="volunteer-organization-top">
                  <span>{organization.type}</span>

                  <span className="volunteer-status">
                    Accepting volunteers
                  </span>
                </div>

                <h3>{organization.name}</h3>

                <p className="volunteer-location">
                  {organization.city}, {organization.state}
                </p>

                <p>{organization.description}</p>

                {organization.needs?.length > 0 && (
                  <div className="volunteer-needs">
                    <span className="volunteer-needs-label">
                      Ways you may be able to help
                    </span>

                    <div className="volunteer-needs-list">
                      {organization.needs.map((need) => (
                        <span key={need}>{need}</span>
                      ))}
                    </div>
                  </div>
                )}

                {!organization.experienceRequired && (
                  <p className="volunteer-experience-note">
                    ♡ No gardening experience required.
                  </p>
                )}

                <Link
                  to={`/volunteer/${organization.slug}`}
                  className="button button-primary"
                >
                  I'd Like to Help
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="volunteer-empty-state">
            <span>♡</span>

            <h3>No opportunities listed right now.</h3>

            <p>
              Check back as more community organizations and
              growing projects join the network.
            </p>
          </div>
        )}
      </section>

      {/* =====================================================
          ORGANIZATIONS
          ===================================================== */}

      <section className="volunteer-partner-section">
        <div>
          <p className="eyebrow">
            Gardens & community organizations
          </p>

          <h2>
            Need some extra hands?
          </h2>

          <p>
            The Fruitbat is building a simple way for community
            gardens, homesteads, and neighborhood projects to
            connect with people who want to volunteer.
          </p>

          <p>
            Participating organizations can eventually receive
            volunteer interest specific to their project without
            needing to build their own signup system.
          </p>
        </div>

        <Link
          to="/contact?reason=Volunteer%20organization"
          className="button button-secondary"
        >
          Add Your Organization
        </Link>
      </section>

      {/* =====================================================
          PRIVACY / EXPECTATIONS
          ===================================================== */}

      <section className="volunteer-trust-section">
        <div className="volunteer-trust-card">
          <span>♡</span>

          <div>
            <p className="eyebrow">Simple and respectful</p>

            <h2>
              Your information should only go where you expect
              it to go.
            </h2>

            <p>
              When you submit volunteer information, The
              Fruitbat will explain which organization you're
              contacting and how your information may be shared
              with them for volunteer coordination.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
          ===================================================== */}

      <section className="volunteer-cta">
        <p className="eyebrow">
          Grow something together
        </p>

        <h2>
          One afternoon can still make a difference.
        </h2>

        <div className="volunteer-cta-actions">
          <a
            href="#volunteer-opportunities"
            className="button button-light"
          >
            Find a Place to Help
          </a>

          <Link
            to="/events"
            className="volunteer-cta-link"
          >
            Explore community events →
          </Link>
        </div>
      </section>
    </main>
  );
}