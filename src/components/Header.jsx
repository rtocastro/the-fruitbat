import { NavLink } from "react-router";
import fruitbatMascot from "../assets/images/fruitbat-mascot.jpg";

const navigationItems = [
  { label: "Mission", path: "/mission" },
  { label: "Start Growing", path: "/start-growing" },
  { label: "Resources", path: "/resources" },
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/about" },
];

export default function Header() {
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
            <span className="brand-tagline">Growing together.</span>
          </div>
        </NavLink>

        <nav className="desktop-navigation" aria-label="Primary navigation">
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
      </div>
    </header>
  );
}