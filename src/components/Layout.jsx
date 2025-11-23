import { Link, NavLink, Outlet } from 'react-router-dom';
import './layout.css';

export default function Layout() {
  return (
    <div className="appContainer">
      {/* Estrellas de fondo */}
      <Stars />

      <header className="appHeader" role="banner">
        <Link to="/" className="brand">Home</Link>
        <nav className="nav" role="navigation" aria-label="Main Navigation">
          {/* <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Cards</NavLink> */}
          <NavLink to="/reading" className={({ isActive }) => isActive ? 'active' : ''}>LECTURA</NavLink>
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

function Constellations() {
  // Posiciones fijas (en vw y vh)
  const points = [
    { x: 10, y: 20 },
    { x: 15, y: 30 },
    { x: 25, y: 25 },
    { x: 40, y: 50 },
  ];

  // Líneas entre puntos: [index1, index2]
  const lines = [
    [0, 1],
    [1, 2],
    [2, 3],
  ];

  return (
    <svg
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
      }}
    >
      {/* Dibuja líneas */}
      {lines.map(([start, end], i) => (
        <line
          key={i}
          x1={`${points[start].x}vw`}
          y1={`${points[start].y}vh`}
          x2={`${points[end].x}vw`}
          y2={`${points[end].y}vh`}
          stroke="rgba(255, 255, 255, 0.3)"
          strokeWidth="1"
        />
      ))}

      {/* Dibuja estrellas */}
      {points.map(({ x, y }, i) => (
        <circle
          key={i}
          cx={`${x}vw`}
          cy={`${y}vh`}
          r="2"
          fill="white"
          opacity="0.8"
        />
      ))}
    </svg>
  );
}
