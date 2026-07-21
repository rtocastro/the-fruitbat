import { Link } from "react-router";
import fruitbatMascot from "../assets/images/fruitbat-mascot.jpg";

const exploreLinks = [
    { label: "Our Mission", path: "/mission" },
    { label: "Start Growing", path: "/start-growing" },
    { label: "Plant Library", path: "/plants"},
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
                            <p className="footer-brand-name">The Fruitbat</p>
                            <p className="footer-brand-tagline">
                                Growing communities naturally.
                            </p>
                        </div>
                    </Link>

                    <p className="footer-message">
                        Helping people grow food, share knowledge, and strengthen
                        neighborhoods through welcoming resources and useful
                        community projects.
                    </p>

                    <div className="footer-social-links">
                        <a
                            href="https://www.instagram.com/thefruitbatla/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Instagram
                        </a>

                        <a href="mailto:thefruitbatla@gmail.com">
                            Email
                        </a>
                    </div>
                </div>

                <div className="footer-navigation">
                    <div className="footer-link-group">
                        <p className="footer-link-heading">Explore</p>

                        {exploreLinks.map((link) => (
                            <Link key={link.path} to={link.path}>
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="footer-link-group">
                        <p className="footer-link-heading">The Project</p>

                        {organizationLinks.map((link) => (
                            <Link key={link.path} to={link.path}>
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>

                <aside className="footer-callout">
                    <span className="footer-callout-heart">♡</span>

                    <p>Every garden starts somewhere.</p>

                    <Link to="/start-growing">
                        Find your starting point →
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