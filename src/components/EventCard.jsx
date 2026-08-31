import { Link } from "react-router";

export default function EventCard({ event }) {
  return (
    <article className="event-card">
      <div className="event-card-top">
        <span className="event-card-category">
          {event.category}
        </span>

        <span className="event-card-status">
          {event.status}
        </span>
      </div>

      <div className="event-card-date">
        <span>{event.date}</span>

        {event.time && (
          <>
            <span>•</span>
            <span>{event.time}</span>
          </>
        )}
      </div>

      <h3>{event.title}</h3>

      <p>{event.summary}</p>

      <div className="event-card-location">
        <span>Location</span>
        <p>{event.location}</p>
      </div>

      <Link
        to={`/events/${event.slug}`}
        className="event-card-link"
      >
        View event →
      </Link>
    </article>
  );
}