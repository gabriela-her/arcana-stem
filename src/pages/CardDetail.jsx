import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCardById } from '../services/tarotServices';
import './cardDetail.css'


export default function CardDetail() {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState(null);

  useEffect(() => {
    getCardById(id)
      .then((data) => {
        setCard(data);
        setStatus('success');
      })
      .catch((err) => {
        setError(err.message);
        setStatus('error');
      });
  }, [id]);

  if (status === 'loading') return <p>Loading card detail…</p>;
  if (status === 'error') return <p>Error: {error}</p>;
  if (!card) return null;

  return (
   <article className="card-detail">
  <Link to="/">← Back</Link>

  <div className="card-columns">
    <div className="card-box">
      <img src={card.arcaneImage?.imageSrc} alt={card.arcaneName} />
      <h1>{card.arcaneNumber} · {card.arcaneName}</h1>
      <p>{card.arcaneDescription}</p>
    </div>

    <div className="card-box">
      {card.goddessImage?.imageSrc && (
        <img src={card.goddessImage.imageSrc} alt={card.goddessName} />
      )}
      <h2>{card.goddessName}</h2>
      <p>{card.goddessDescription}</p>
    </div>
  </div>
</article>

  );
}
