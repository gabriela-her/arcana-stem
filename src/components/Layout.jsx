import { Link, NavLink, Outlet } from 'react-router-dom';
import './layout.css';
import Constellations from './Constellations.jsx';

export default function Layout() {
  return (
    <div className="appContainer">
      {/* Estrellas de fondo */}
      <Stars />
      <Constellations />

      <header className="appHeader" role="banner">
        <Link to="/" className="brand">Home</Link>
        <nav className="nav" role="navigation" aria-label="Main Navigation">
          {/* <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Cards</NavLink> */}
          <NavLink to="/reading" className={({ isActive }) => isActive ? 'active' : ''}>Lectura</NavLink>
        </nav>
      </header>

      <main className="appMain" role="main">
        <div className="layout-wrapper"></div>
        <Outlet />
      </main>

      <footer className="appFooter">
        <div>
          <h2 className="footer-title">Tarot de las Diosas Contemporáneas</h2>
          <p className="footer-desc">Un proyecto educativo que conecta simbolismo, historia y tecnología.</p>
        </div>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/reading">Lectura</a>
          <a href="https://github.com//gabriela-her/arcana-stem" target="_blank">GitHub</a>
          <a href="https://factoriaf5.org" target="_blank" rel="noreferrer"
            className="factoria-link"> Factoría F5</a>
        </div>

        <div className="footer-credits">
          <p>Desarrollado por <span className="highlight">
            <a
              href="https://www.linkedin.com/in/TU_USUARIO/"
              target="_blank"
              rel="noreferrer"
              className="footer-author"
            >Arianna Gabriela H.B</a></span> · Bootcamp FemCoders
            <br />
            <a href="https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot" target="_blank"    rel="noreferrer" className="footer-apiLink"
            >
              API creada por el equipo de Factoría F5 Barcelona.
            </a>
          </p>
          <small>© 2025 · Todos los derechos reservados</small>
        </div>
      </footer>
    </div>
  );
}

function Stars() {
  const stars = Array.from({ length: 100 });

  return (
    <div className="starsContainer">
      {stars.map((_, i) => {
        const style = {
          top: `${Math.random() * 100}vh`,
          left: `${Math.random() * 100}vw`,
          animationDuration: `${Math.random() * 3 + 2}s`,
          width: `${Math.random() * 2 + 1}px`,
          height: `${Math.random() * 2 + 1}px`,
          position: 'fixed',
          backgroundColor: 'white',
          borderRadius: '50%',
          opacity: 0.8,
          animationName: 'twinkle',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'ease-in-out',
          pointerEvents: 'none', // para que no interfiera con clicks
        };
        return <div key={i} className="star" style={style}></div>;
      })}
    </div>
  );
}


