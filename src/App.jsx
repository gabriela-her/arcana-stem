import { Link, Outlet, NavLink } from 'react-router-dom';

export default function App() {
  return (
    <div className="container">
      <header className="appHeader">
        <Link to="/" className="brand">Tarot STEM</Link>
        <nav className="nav">
          <NavLink to="/" end>Cards</NavLink>
          <NavLink to="/reading">Reading</NavLink>
        </nav>
      </header>

      <main className="appMain">
        <Outlet />
      </main>

      <footer className="appFooter">
        <small>Made for learning React · API by FactoriaF5</small>
      </footer>
    </div>
  );
}
