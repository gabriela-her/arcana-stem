import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCards } from '../services/tarotServices';
import TarotCard from '../components/TarotCard';
import './home.css';

export default function Home() {
  const [cards, setCards] = useState([]);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
        <h1  className="home-title">EL TAROT DE LAS DIOSAS CONTEMPORÁNEAS</h1>
        <p className="home-subtitle">Un viaje simbólico que conecta los arcanos del tarot<br />
          con mujeres que transformaron la ciencia y la tecnología.</p>
        <p className="home-description">
          Cada carta revela un arquetipo…<br />
          y también la historia de una pionera cuyo impacto sigue iluminando nuestro mundo.</p>
        <p className="home-cta">
          Toca una carta para comenzar tu viaje.</p>


        <div className="cards-grid">
          {cards.map((card) => (
            <TarotCard
              key={card.id}
              card={card}
              faceDown={true}
              onClick={() => navigate(`/card/${card.id}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
