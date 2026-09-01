import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";

const FRUITBAT_PHONE_DISPLAY = "(818) 921-6617";
const FRUITBAT_PHONE_LINK = "+18189216617";

const contactReasons = [
  {
    title: "Suggest a resource",
    description:
      "Share a guide, printable, plant-care topic, or educational idea that could help other growers.",
    accent: "mint",
    symbol: "♡",
  },
  {
    title: "Share a project idea",
    description:
      "Tell us about a neighborhood need, community garden opportunity, event, or local collaboration.",
    accent: "purple",
    symbol: "○",
  },
  {
    title: "Ask a growing question",
    description:
      "Questions can help identify where future guides and resources are needed most.",
    accent: "lime",
    symbol: "?",
  },
  {
    title: "Collaborate",
    description:
      "Schools, gardens, community groups, designers, developers, and growers are welcome to reach out.",
    accent: "coral",
    symbol: "●",
  },
];

const contactPrinciples = [
  "Be kind",
  "Be specific",
  "Share context",
  "Allow time for a response",
];

export default function Contact() {
  const [searchParams] = useSearchParams();

  const requestedReason = searchParams.get("reason") ?? "";
  const requestedPlant = searchParams.get("plant") ?? "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: requestedReason,
    message: requestedPlant
      ? `I have a question about ${requestedPlant}.\n\n`
      : "",
  });

  const [status, setStatus] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  useEffect(() => {
    setFormData((current) => ({
      ...current,
      reason: requestedReason || current.reason,
      message:
        requestedPlant && !current.message
          ? `I have a question about ${requestedPlant}.\n\n`
          : current.message,
    }));
  }, [requestedReason, requestedPlant]);

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(
      formData.reason
        ? `The Fruitbat: ${formData.reason}`
        : "The Fruitbat website message"
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}
Reason: ${formData.reason || "Not selected"}

Message:
${formData.message}`
    );

    window.location.href =
      `mailto:thefruitbatla@gmail.com?subject=${subject}&body=${body}`;

    setStatus(
      "Your email application should open with the message prepared."
    );
  }

  return (
    <main>
      <section className="contact-hero">
        <div className="contact-hero-copy">
          <p className="eyebrow">Contact The Fruitbat</p>

          <h1>
            Useful ideas grow through
            <span> conversation.</span>
          </h1>

          <p className="contact-hero-description">
            Have a growing question, event idea, collaboration,
            neighborhood project, or something useful to share?
            Text anytime or call during phone hours.
          </p>

          <div className="contact-hero-actions">
            <a
              href={`sms:${FRUITBAT_PHONE_LINK}`}
              className="button button-primary"
            >
              Text The Fruitbat
            </a>

            <a
              href={`tel:${FRUITBAT_PHONE_LINK}`}
              className="button button-secondary"
            >
              Call The Fruitbat
            </a>
          </div>
        </div>

        <div className="contact-hero-art" aria-hidden="true">
          <div className="contact-message-card contact-card-back">
            <span>○</span>
          </div>

          <div className="contact-message-card contact-card-middle">
            <span>♡</span>
          </div>

          <div className="contact-message-card contact-card-front">
            <span className="contact-envelope-line" />
            <span className="contact-envelope-line short" />
            <span className="contact-envelope-heart">♡</span>
          </div>
        </div>
      </section>

      <section className="contact-phone-section">
        <div className="contact-phone-intro">
          <p className="eyebrow">Direct contact</p>

          <h2>Sometimes a quick text is all you need.</h2>

          <p>
            Reach The Fruitbat directly with growing questions,
            workshop questions, project ideas, or community
            collaboration opportunities.
          </p>
        </div>

        <div className="contact-phone-card">
          <span className="contact-phone-heart">♡</span>

          <p className="contact-phone-label">
            The Fruitbat community line
          </p>

          <a
            href={`tel:${FRUITBAT_PHONE_LINK}`}
            className="contact-phone-number"
          >
            {FRUITBAT_PHONE_DISPLAY}
          </a>

          <div className="contact-phone-hours">
            <div>
              <span>Text</span>
              <strong>Anytime</strong>
            </div>

            <div>
              <span>Calls</span>
              <strong>12 PM–5 PM PT</strong>
            </div>
          </div>

          <div className="contact-phone-actions">
            <a
              href={`sms:${FRUITBAT_PHONE_LINK}`}
              className="button button-primary"
            >
              Send a Text
            </a>

            <a
              href={`tel:${FRUITBAT_PHONE_LINK}`}
              className="text-link"
            >
              Call now →
            </a>
          </div>
        </div>
      </section>

      <section className="contact-intro">
        <p className="section-kicker">
          A welcoming place to begin
        </p>

        <h2>
          You do not need a formal proposal to share a useful idea.
        </h2>

        <p>
          A short message is enough. Tell us what you noticed,
          what you are trying to grow, what your neighborhood may
          need, or how you would like to participate.
        </p>
      </section>

      <section className="contact-reasons-section">
        <div className="contact-reasons-heading">
          <p className="eyebrow">Reasons to reach out</p>
          <h2>What would you like to talk about?</h2>
        </div>

        <div className="contact-reasons-grid">
          {contactReasons.map((reason) => (
            <article
              className={`contact-reason-card contact-accent-${reason.accent}`}
              key={reason.title}
            >
              <span className="contact-reason-symbol">
                {reason.symbol}
              </span>

              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-form-section" id="contact-form">
        <div className="contact-form-copy">
          <p className="eyebrow">Longer message</p>

          <h2>Need a little more room?</h2>

          <p>
            For detailed questions, collaborations, or project ideas,
            use the message form below. It prepares an email in your
            device's email application so you have more room to explain.
          </p>

          <div className="contact-form-alternative">
            <span>Prefer something quicker?</span>

            <a href={`sms:${FRUITBAT_PHONE_LINK}`}>
              Text {FRUITBAT_PHONE_DISPLAY} →
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-field-row">
            <label className="contact-field">
              <span>Name</span>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />
            </label>

            <label className="contact-field">
              <span>Email</span>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </label>
          </div>

          <label className="contact-field">
            <span>What is this about?</span>

            <select
              name="reason"
              value={formData.reason}
              onChange={handleChange}
            >
              <option value="">Choose a reason</option>
              <option value="Growing question">
                Growing question
              </option>
              <option value="Resource suggestion">
                Resource suggestion
              </option>
              <option value="Community project">
                Community project
              </option>
              <option value="Collaboration">
                Collaboration
              </option>
              <option value="Event question">
                Event question
              </option>
              <option value="Website feedback">
                Website feedback
              </option>
              <option value="Something else">
                Something else
              </option>
            </select>
          </label>

          <label className="contact-field">
            <span>Message</span>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="8"
              required
            />
          </label>

          <button
            type="submit"
            className="button button-primary"
          >
            Prepare Email
          </button>

          {status && (
            <p
              className="contact-form-status"
              role="status"
            >
              {status}
            </p>
          )}
        </form>
      </section>

      <section className="contact-expectations-section">
        <div className="contact-expectations-copy">
          <p className="eyebrow">
            A small community standard
          </p>

          <h2>
            Thoughtful conversations help good projects grow.
          </h2>

          <p>
            The Fruitbat is designed to be welcoming, practical,
            and respectful. Messages that follow the same spirit
            are always appreciated.
          </p>
        </div>

        <div className="contact-principles-list">
          {contactPrinciples.map((principle) => (
            <span key={principle}>
              {principle}
            </span>
          ))}
        </div>
      </section>

      <section className="contact-social-section">
        <div>
          <p className="eyebrow">Follow along</p>

          <h2>
            See what The Fruitbat is growing and building.
          </h2>

          <p>
            Plant updates, Fruitbat Facts, project progress,
            upcoming events, and community ideas are also shared
            on Instagram.
          </p>
        </div>

        <a
          href="https://www.instagram.com/thefruitbatla/"
          target="_blank"
          rel="noopener noreferrer"
          className="button button-secondary"
        >
          Visit Instagram
        </a>
      </section>

      <section className="contact-cta">
        <p className="eyebrow">Not ready to reach out?</p>

        <h2>
          Start by exploring one useful part of the project.
        </h2>

        <div className="contact-cta-actions">
          <Link
            to="/resources"
            className="button button-light"
          >
            Browse Resources
          </Link>

          <Link
            to="/events"
            className="contact-cta-link"
          >
            Explore upcoming events →
          </Link>
        </div>
      </section>
    </main>
  );
}