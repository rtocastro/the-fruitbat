import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <p className="footer-brand">The Fruitbat</p>
          <p className="footer-message">
            Helping people grow food, share knowledge, and strengthen
            neighborhoods.
          </p>
        </div>

        <div className="footer-links">
          <Link to="/resources">Resources</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/donate">Donate</Link>
        </div>
      </div>

      <p className="footer-bottom">
        © {new Date().getFullYear()} The Fruitbat
      </p>
    </footer>
  );
}