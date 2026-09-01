import { Link } from "react-router";
import fruitbatMascot from "../assets/images/fruitbat-mascot.jpg";

const FRUITBAT_PHONE_DISPLAY = "(818) 921-6617";
const FRUITBAT_PHONE_LINK = "+18189216617";

const exploreLinks = [
  { label: "Our Mission", path: "/mission" },
  { label: "Start Growing", path: "/start-growing" },
  { label: "Events", path: "/events" },
  { label: "Plant Library", path: "/plants" },
  { label: "Resources", path: "/resources" },
  { label: "Community Projects", path: "/projects" },
];

const organizationLinks = [
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Get Involved", path: "/donate" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-column">
          <Link
            to="/"
            className="footer-brand-lockup"
            aria-label="The Fruitbat homepage"
          >
            <img
              src={fruitbatMascot}
              alt=""
              className="footer-mascot"
            />

            <div>
              <p className="footer-brand-name">
                The Fruitbat
              </p>

              <p className="footer-brand-tagline">
                Growing communities naturally.
              </p>
            </div>
          </Link>

          <p className="footer-message">
            Helping people grow food, share knowledge, and
            strengthen neighborhoods through welcoming resources,
            events, and useful community projects.
          </p>

          <div className="footer-social-links">
            <a
              href="https://www.instagram.com/thefruitbatla/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>

            <a href={`sms:${FRUITBAT_PHONE_LINK}`}>
              Text Us
            </a>
          </div>

          <div className="footer-phone">
            <a href={`tel:${FRUITBAT_PHONE_LINK}`}>
              {FRUITBAT_PHONE_DISPLAY}
            </a>

            <span>
              Text anytime · Calls 12–5 PM PT
            </span>
          </div>
        </div>

        <div className="footer-navigation">
          <div className="footer-link-group">
            <p className="footer-link-heading">
              Explore
            </p>

            {exploreLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="footer-link-group">
            <p className="footer-link-heading">
              The Project
            </p>

            {organizationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <aside className="footer-callout">
          <span className="footer-callout-heart">
            ♡
          </span>

          <p>Every garden starts somewhere.</p>

          <Link to="/start-growing">
            Find your starting point →
          </Link>

          <Link to="/events">
            See upcoming events →
          </Link>
        </aside>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} The Fruitbat
        </p>

        <p>
          Grown with care in Los Angeles.
        </p>
      </div>
    </footer>
  );
}