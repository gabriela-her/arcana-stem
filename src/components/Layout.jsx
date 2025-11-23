import { Link, NavLink, Outlet } from 'react-router-dom';
import './layout.css';
import Constellations from './constellations';

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

      <footer className="appFooter" role="contentinfo">
        <small>Proyecto realizado en el bootcamp de desarrollo web FemCoders - FactoriaF5</small>
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


