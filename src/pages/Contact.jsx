import { useState } from "react";
import { Link } from "react-router";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(
      formData.reason
        ? `The Fruitbat: ${formData.reason}`
        : "The Fruitbat website message"
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nReason: ${
        formData.reason || "Not selected"
      }\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:thefruitbatla@gmail.com?subject=${subject}&body=${body}`;

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
            Reach out with a growing question, resource suggestion,
            collaboration idea, neighborhood project, or something you
            believe could help the community.
          </p>

          <a href="#contact-form" className="button button-primary">
            Send a Message
          </a>
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

      <section className="contact-intro">
        <p className="section-kicker">A welcoming place to begin</p>

        <h2>You do not need a formal proposal to share a useful idea.</h2>

        <p>
          A short message is enough. Tell us what you noticed, what you
          are trying to grow, what your neighborhood may need, or how you
          would like to participate.
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
          <p className="eyebrow">Send a message</p>

          <h2>Tell us what is growing.</h2>

          <p>
            The first version uses your device’s email application. We
            can connect the form to a hosted form service or backend
            after the main website is complete.
          </p>

          <div className="contact-direct-card">
            <p className="contact-direct-label">Direct email</p>

            <a href="mailto:thefruitbatla@gmail.com">
              thefruitbatla@gmail.com
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
              <option value="Growing question">Growing question</option>
              <option value="Resource suggestion">
                Resource suggestion
              </option>
              <option value="Community project">
                Community project
              </option>
              <option value="Collaboration">Collaboration</option>
              <option value="Website feedback">Website feedback</option>
              <option value="Something else">Something else</option>
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

          <button type="submit" className="button button-primary">
            Prepare Email
          </button>

          {status && (
            <p className="contact-form-status" role="status">
              {status}
            </p>
          )}
        </form>
      </section>

      <section className="contact-expectations-section">
        <div className="contact-expectations-copy">
          <p className="eyebrow">A small community standard</p>

          <h2>Thoughtful conversations help good projects grow.</h2>

          <p>
            The Fruitbat is designed to be welcoming, practical, and
            respectful. Messages that follow the same spirit are always
            appreciated.
          </p>
        </div>

        <div className="contact-principles-list">
          {contactPrinciples.map((principle) => (
            <span key={principle}>{principle}</span>
          ))}
        </div>
      </section>

      <section className="contact-social-section">
        <div>
          <p className="eyebrow">Follow along</p>

          <h2>See what The Fruitbat is growing and building.</h2>

          <p>
            Plant updates, educational posts, project progress, and
            community ideas can also be shared through social media.
          </p>
        </div>

        <a
          href="https://www.instagram.com/thefruitbatla/"
          target="_blank"
          rel="noreferrer"
          className="button button-secondary"
        >
          Visit Instagram
        </a>
      </section>

      <section className="contact-cta">
        <p className="eyebrow">Not ready to write?</p>

        <h2>Start by exploring one useful part of the project.</h2>

        <div className="contact-cta-actions">
          <Link to="/resources" className="button button-light">
            Browse Resources
          </Link>

          <Link to="/projects" className="contact-cta-link">
            Explore projects →
          </Link>
        </div>
      </section>
    </main>
  );
}