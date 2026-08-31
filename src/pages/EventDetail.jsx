import { Link, useParams } from "react-router";
import { getEventBySlug } from "../data/events";

export default function EventDetail() {
  const { slug } = useParams();
  const event = getEventBySlug(slug);

  if (!event) {
    return (
      <main className="event-not-found">
        <section>
          <p className="eyebrow">Event not found</p>

          <h1>This event isn't on the calendar.</h1>

          <p>
            The event may have ended, moved, or the address may be
            incorrect.
          </p>

          <Link to="/events" className="button button-primary">
            Browse Events
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main>
      {/* EVENT HERO */}
      <section className="event-detail-hero">
        <div className="event-detail-hero-copy">
          <div className="event-breadcrumbs">
            <Link to="/events">Events</Link>
            <span>→</span>
            <span>{event.shortTitle}</span>
          </div>

          <div className="event-detail-labels">
            <span>{event.category}</span>
            <span>{event.status}</span>
          </div>

          <h1>{event.title}</h1>

          <p className="event-detail-description">
            {event.description}
          </p>

          <div className="event-detail-actions">
            <a
              href="#event-details"
              className="button button-primary"
            >
              Event Details
            </a>

            {event.registrationUrl && (
              <a
                href={event.registrationUrl}
                target="_blank"
                rel="noreferrer"
                className="button button-secondary"
              >
                Register
              </a>
            )}
          </div>
        </div>

        <div className="event-detail-date-card">
          <span className="event-date-card-label">
            Save the date
          </span>

          <strong>{event.date}</strong>

          {event.time && <p>{event.time}</p>}

          <span className="event-date-card-heart">♡</span>
        </div>
      </section>

      {/* BASIC EVENT INFO */}
      <section
        className="event-info-section"
        id="event-details"
      >
        <div className="event-info-card">
          <span>Date</span>
          <p>{event.date}</p>
        </div>

        {event.time && (
          <div className="event-info-card">
            <span>Time</span>
            <p>{event.time}</p>
          </div>
        )}

        <div className="event-info-card">
          <span>Location</span>
          <p>{event.location}</p>

          {event.locationDetails && (
            <small>{event.locationDetails}</small>
          )}
        </div>

        <div className="event-info-card">
          <span>Event type</span>
          <p>{event.category}</p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="event-about-section">
        <div className="event-about-heading">
          <p className="eyebrow">About the workshop</p>

          <h2>
            Start small. Learn by doing. Keep growing.
          </h2>
        </div>

        <div className="event-about-copy">
          <p>{event.summary}</p>

          <p>
            This workshop is designed to make growing food feel
            approachable rather than overwhelming. We'll focus on
            practical ideas that can work in real homes and real
            small spaces.
          </p>
        </div>
      </section>

      {/* TOPICS */}
      {event.topics?.length > 0 && (
        <section className="event-topics-section">
          <div className="event-section-heading">
            <p className="eyebrow">What we'll cover</p>

            <h2>
              A practical introduction to growing in small spaces.
            </h2>
          </div>

          <div className="event-topics-grid">
            {event.topics.map((topic, index) => (
              <article
                className="event-topic-card"
                key={topic}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p>{topic}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* TAKEAWAYS */}
      {event.takeaways?.length > 0 && (
        <section className="event-takeaways-section">
          <div className="event-section-heading">
            <p className="eyebrow">What you'll take home</p>

            <h2>
              Leave with something you can actually use.
            </h2>
          </div>

          <div className="event-takeaways-list">
            {event.takeaways.map((takeaway) => (
              <div key={takeaway}>
                <span>♡</span>
                <p>{takeaway}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* GROW-ALONG */}
      {event.growAlong?.enabled && (
        <section className="event-grow-along-section">
          <div className="event-grow-along-copy">
            <p className="eyebrow">
              Community grow-along
            </p>

            <h2>{event.growAlong.title}</h2>

            <p>{event.growAlong.description}</p>

            {event.growAlong.plant && (
              <div className="event-grow-along-plant">
                <span>We'll be growing</span>
                <strong>{event.growAlong.plant}</strong>
              </div>
            )}
          </div>

          <div
            className="event-grow-along-art"
            aria-hidden="true"
          >
            <span>♡</span>
            <strong>+</strong>
            <span>♡</span>
            <strong>+</strong>
            <span>♡</span>
          </div>
        </section>
      )}

      {/* DIGITAL COMPANION */}
      {event.companion?.enabled && (
        <section className="event-companion-section">
          <div className="event-companion-copy">
            <p className="eyebrow">
              Your digital companion
            </p>

            <h2>{event.companion.title}</h2>

            <p>{event.companion.description}</p>
          </div>

          <div className="event-companion-card">
            <span className="event-companion-symbol">
              □
            </span>

            <p>Scan. Learn. Grow.</p>

            <small>
              Workshop resources will live right here on
              The Fruitbat.
            </small>
          </div>
        </section>
      )}

      {/* EVENT CTA */}
      <section className="event-detail-cta">
        <p className="eyebrow">Keep growing</p>

        <h2>
          The workshop is just the starting point.
        </h2>

        <div className="event-detail-cta-actions">
          {event.registrationUrl ? (
            <a
              href={event.registrationUrl}
              target="_blank"
              rel="noreferrer"
              className="button button-light"
            >
              Register for the Workshop
            </a>
          ) : (
            <Link
              to="/resources"
              className="button button-light"
            >
              Explore Growing Resources
            </Link>
          )}

          <Link
            to="/events"
            className="event-detail-cta-link"
          >
            Browse all events →
          </Link>
        </div>
      </section>
    </main>
  );
}