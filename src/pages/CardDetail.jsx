import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCardById } from '../services/tarotServices';

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
    <article>
      <Link to="/">← Back</Link>
      <h1>{card.arcaneNumber} · {card.arcaneName}</h1>
      <img src={card.arcaneImage?.imageSrc} alt={card.arcaneName} />
      <p>{card.arcaneDescription}</p>
      <h2>{card.goddessName}</h2>
      <p>{card.goddessDescription}</p>
      {card.goddessImage?.imageSrc && (
        <img src={card.goddessImage.imageSrc} alt={card.goddessName} />
      )}
    </article>
  );
}
