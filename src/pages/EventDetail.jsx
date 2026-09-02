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

  const eventContactPath =
    `/contact?reason=${encodeURIComponent("Event question")}` +
    `&plant=${encodeURIComponent(event.title)}`;

  const eventRsvpPath =
    `/contact?reason=${encodeURIComponent("Event RSVP")}` +
    `&plant=${encodeURIComponent(event.title)}`;

  return (
    <main>
      {/* =====================================================
          EVENT HERO
          ===================================================== */}

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

            {event.rsvp?.enabled && (
              <a
                href="#event-rsvp"
                className="button button-secondary"
              >
                Planning to Attend?
              </a>
            )}

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

      {/* =====================================================
          BASIC EVENT INFO
          ===================================================== */}

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

      {/* =====================================================
          RSVP / CALENDAR
          ===================================================== */}

      {event.rsvp?.enabled && (
        <section
          className="event-planning-section"
          id="event-rsvp"
        >
          <div className="event-planning-copy">
            <p className="eyebrow">Planning to attend?</p>

            <h2>
              Save the date and come grow with us.
            </h2>

            <p>
              Let us know you're planning to attend and keep this
              event page bookmarked. You'll leave with a small plant
              to continue growing at home.
            </p>

            <div className="event-planning-note">
              <span>♡</span>

              <p>
                Come back to this page during and after the workshop.
                Handouts, growing resources, follow-up information,
                and community grow-along updates will live here.
              </p>
            </div>
          </div>

          <div className="event-planning-card">
            <p className="event-planning-card-label">
              Before the workshop
            </p>

            <h3>Get ready for September 19.</h3>

            <div className="event-planning-checklist">
              <div>
                <span>01</span>
                <p>Let us know you're coming.</p>
              </div>

              <div>
                <span>02</span>
                <p>Add the workshop to your calendar.</p>
              </div>

              <div>
                <span>03</span>
                <p>Be ready to leave with a small plant.</p>
              </div>

              <div>
                <span>04</span>
                <p>Return here afterward for resources.</p>
              </div>
            </div>

            <div className="event-planning-actions">
              <Link
                to={eventRsvpPath}
                className="button button-primary"
              >
                RSVP
              </Link>

              {event.calendar?.enabled &&
              event.calendar?.path ? (
                <a
                  href={event.calendar.path}
                  download
                  className="button button-secondary"
                >
                  Add to Calendar
                </a>
              ) : (
                <span className="event-calendar-status">
                  Calendar reminder coming shortly
                </span>
              )}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          ABOUT
          ===================================================== */}

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

      {/* =====================================================
          TOPICS
          ===================================================== */}

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

      {/* =====================================================
          TAKEAWAYS
          ===================================================== */}

      {event.takeaways?.length > 0 && (
        <section className="event-takeaways-section">
          <div className="event-section-heading">
            <p className="eyebrow">
              What you'll take home
            </p>

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

      {/* =====================================================
          GROW ALONG
          ===================================================== */}

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

      {/* =====================================================
          DIGITAL COMPANION
          ===================================================== */}

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

      {/* =====================================================
          EVENT-SPECIFIC MATERIALS
          ===================================================== */}

      {event.materials?.enabled && (
        <section className="event-materials-section">
          <div className="event-section-heading">
            <p className="eyebrow">
              Workshop materials
            </p>

            <h2>{event.materials.title}</h2>

            {event.materials.unlocked ? (
              <p>
                Download the workshop materials and keep them
                available whenever you need a refresher.
              </p>
            ) : (
              <p>{event.materials.lockedMessage}</p>
            )}
          </div>

          {event.materials.unlocked ? (
            <div className="event-materials-grid">
              {event.materials.files.map((file) => (
                <a
                  key={file.path}
                  href={file.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="event-material-card"
                >
                  <span>♡</span>

                  <div>
                    <p>{file.label}</p>
                    <strong>Open PDF →</strong>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="event-materials-locked">
              <span className="event-materials-lock">
                ♡
              </span>

              <p className="event-materials-lock-label">
                Available during the workshop
              </p>

              <h3>
                Your take-home materials are taking root.
              </h3>

              <p>
                Scan this event page on September 19 to access
                the workshop handouts. They'll remain available
                here after the event.
              </p>
            </div>
          )}
        </section>
      )}

      {/* =====================================================
          GENERAL WORKSHOP RESOURCES
          ===================================================== */}

      {event.resources?.length > 0 && (
        <section className="event-resources-section">
          <div className="event-section-heading">
            <p className="eyebrow">
              Growing resources
            </p>

            <h2>Keep this page handy.</h2>

            <p>
              These resources are available before, during, and
              after the workshop whenever you want to keep
              learning.
            </p>
          </div>

          <div className="event-resources-grid">
            {event.resources.map((resource) => (
              <Link
                key={resource.path}
                to={resource.path}
                className="event-resource-card"
              >
                <span>♡</span>

                <p>{resource.label}</p>

                <strong>Open →</strong>
              </Link>
            ))}
          </div>

          {event.qrMessage && (
            <p className="event-qr-message">
              {event.qrMessage}
            </p>
          )}
        </section>
      )}

      {/* =====================================================
          QUESTIONS
          ===================================================== */}

      <section className="event-question-section">
        <div>
          <p className="eyebrow">
            Questions about the workshop?
          </p>

          <h2>
            Ask before, during, or after the event.
          </h2>

          <p>
            Text The Fruitbat anytime, or call during phone hours.
          </p>
        </div>

        <div className="event-question-actions">
          <a
            href="sms:+18189216617"
            className="button button-primary"
          >
            Text The Fruitbat
          </a>

          <Link
            to={eventContactPath}
            className="text-link"
          >
            Send a longer message →
          </Link>
        </div>
      </section>

      {/* =====================================================
          AFTER EVENT
          ===================================================== */}

      {event.afterEvent?.enabled && (
        <section className="event-after-section">
          <p className="eyebrow">
            After the workshop
          </p>

          <h2>{event.afterEvent.title}</h2>

          <p>{event.afterEvent.description}</p>
        </section>
      )}

      {/* =====================================================
          FINAL CTA
          ===================================================== */}

      <section className="event-detail-cta">
        <p className="eyebrow">Keep growing</p>

        <h2>
          The workshop is just the starting point.
        </h2>

        <div className="event-detail-cta-actions">
          <Link
            to="/resources"
            className="button button-light"
          >
            Explore Growing Resources
          </Link>

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