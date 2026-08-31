import EventCard from "../components/EventCard";
import {
  events,
  featuredEvents,
  getUpcomingEvents,
} from "../data/events";

export default function Events() {
  const upcomingEvents = getUpcomingEvents();

  return (
    <main>
      <section className="events-hero">
        <div className="events-hero-copy">
          <p className="eyebrow">Fruitbat Events</p>

          <h1>
            Learn something.
            <span> Grow something.</span>
          </h1>

          <p className="events-hero-description">
            Workshops, community growing projects, plant
            conversations, and other opportunities to learn together.
          </p>

          <a
            href="#upcoming-events"
            className="button button-primary"
          >
            See Upcoming Events
          </a>
        </div>

        <div className="events-hero-art" aria-hidden="true">
          <div className="events-calendar-art">
            <span className="events-calendar-heart">♡</span>

            <div className="events-calendar-page">
              <span>GROW</span>
              <strong>♡</strong>
              <small>TOGETHER</small>
            </div>
          </div>
        </div>
      </section>

      <section className="events-intro">
        <p className="section-kicker">
          Growing communities naturally
        </p>

        <h2>
          Some things are easier to learn when we learn them
          together.
        </h2>

        <p>
          Fruitbat events turn practical growing information into
          approachable, hands-on experiences that can continue long
          after the event ends.
        </p>
      </section>

      <section
        className="upcoming-events-section"
        id="upcoming-events"
      >
        <div className="events-section-heading">
          <p className="eyebrow">Coming up</p>

          <h2>Upcoming events.</h2>
        </div>

        {upcomingEvents.length > 0 ? (
          <div className="event-card-grid">
            {upcomingEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
              />
            ))}
          </div>
        ) : (
          <div className="events-empty-state">
            <span>♡</span>

            <h3>Nothing scheduled right now.</h3>

            <p>
              More workshops and community growing events are
              taking root.
            </p>
          </div>
        )}
      </section>

      <section className="events-philosophy-section">
        <div>
          <p className="eyebrow">More than an event</p>

          <h2>
            Take what you learn home with you.
          </h2>
        </div>

        <p>
          Event pages can continue growing after a workshop with
          downloadable resources, plant guides, community updates,
          videos, and follow-along projects.
        </p>
      </section>
    </main>
  );
}