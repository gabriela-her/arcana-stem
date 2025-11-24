import { useEffect, useState } from 'react';
import { getCards } from '../../services/tarotServices';
import DeckPreview from "../../components/DeckPreview/DeckPreview.jsx";
import './home.css';

export default function Home() {
  const [cards, setCards] = useState([]);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState(null);


  useEffect(() => {
    getCards()
      .then((data) => {
        setCards(data);
        setStatus('success');
      })
      .catch((err) => {
        setError(err.message);
        setStatus('error');
      });
  }, []);

  if (status === 'loading') return <p>Loading cards…</p>;
  if (status === 'error') return <p>Error: {error}</p>;

  return (
    <section className="home-section">
      <div className="home-wrapper">
        <h1 className="home-title">EL TAROT DE LAS DIOSAS CONTEMPORÁNEAS</h1>
        <p className="home-subtitle">Un viaje simbólico que conecta los arcanos del tarot<br />
          con mujeres que transformaron la ciencia y la tecnología.</p>
        <p className="home-description">
          Cada carta revela un arquetipo…<br />
          y también la historia de una pionera cuyo impacto sigue iluminando nuestro mundo.</p>
        <p className="home-cta">
          Explora el mazo y comienza tu viaje.</p>

        <div>{cards.length > 0 && <DeckPreview cards={cards} />}</div>

      </div>
    </section>
  );
}
