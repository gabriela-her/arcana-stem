// src/components/Layout.jsx
import { Link, NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="appContainer">
      <header className="appHeader" role="banner">
        <Link to="/" className="brand">Arcana STEM</Link>
        <nav className="nav" role="navigation" aria-label="Main Navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'active' : ''
            }
          >
            Cards
          </NavLink>
          <NavLink
            to="/reading"
            className={({ isActive }) =>
              isActive ? 'active' : ''
            }
          >
            Reading
          </NavLink>
        </nav>
      </header>

      <main className="appMain" role="main">
        <Outlet />
      </main>

      <footer className="appFooter" role="contentinfo">
        <small>Made for learning React · API by FactoriaF5</small>
      </footer>
    </div>
  );
}
