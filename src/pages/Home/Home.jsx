import { useNavigate } from "react-router-dom";
import DeckTeaser from '../../components/DeckTeaser/DeckTeaser';
import './home.css';

export default function Home() {

  return (
    <section className="home-section">
      <div className="home-wrapper">
        <h1 className="home-title">EL TAROT DE LAS DIOSAS CONTEMPORÁNEAS</h1>
        <p className="home-subtitle">Un viaje simbólico que conecta los arcanos del tarot<br />
          con mujeres que transformaron la ciencia y la tecnología.</p>
        
        <p className="home-cta">
          Explora el mazo y comienza tu viaje.</p>

        <DeckTeaser />

      </div>
    </section>
  );
}
