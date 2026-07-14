import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import fruitbatMascot from "../assets/images/fruitbat-mascot.jpg";

const navigationItems = [
  { label: "Mission", path: "/mission" },
  { label: "Start Growing", path: "/start-growing" },
  { label: "Plants", path: "/plants" },
  { label: "Resources", path: "/resources" },
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/about" },
  
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink
          to="/"
          className="brand"
          aria-label="The Fruitbat homepage"
        >
          <img
            src={fruitbatMascot}
            alt=""
            className="brand-mascot"
          />

          <div className="brand-copy">
            <span className="brand-name">The Fruitbat</span>
            <span className="brand-tagline">
              Growing communities naturally.
            </span>
          </div>
        </NavLink>

        <nav
          className="desktop-navigation"
          aria-label="Primary navigation"
        >
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <NavLink to="/donate" className="header-cta">
          Get Involved
        </NavLink>

        <button
          type="button"
          className={`mobile-menu-button ${
            menuOpen ? "mobile-menu-button-open" : ""
          }`}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`mobile-menu-overlay ${
          menuOpen ? "mobile-menu-overlay-visible" : ""
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <nav
        id="mobile-navigation"
        className={`mobile-navigation ${
          menuOpen ? "mobile-navigation-open" : ""
        }`}
        aria-label="Mobile navigation"
      >
        <div className="mobile-navigation-top">
          <p>Explore The Fruitbat</p>

          <span aria-hidden="true">♡</span>
        </div>

        <div className="mobile-navigation-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "mobile-nav-link active"
                : "mobile-nav-link"
            }
          >
            <span>Home</span>
            <span>01</span>
          </NavLink>

          {navigationItems.map((item, index) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "mobile-nav-link active"
                  : "mobile-nav-link"
              }
            >
              <span>{item.label}</span>
              <span>{String(index + 2).padStart(2, "0")}</span>
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "mobile-nav-link active"
                : "mobile-nav-link"
            }
          >
            <span>Contact</span>
            <span>07</span>
          </NavLink>
        </div>

        <NavLink to="/donate" className="mobile-navigation-cta">
          Get Involved
          <span>♡</span>
        </NavLink>
      </nav>
    </header>
  );
}