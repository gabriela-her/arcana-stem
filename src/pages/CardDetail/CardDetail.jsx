import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCardById } from '../../services/tarotServices';
import ExpandableText from '../../components/ExpandableText/ExpandableText';
import './cardDetail.css';

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
      <Link to="/" className="back-button">
        ← Volver
      </Link>
      <div className="card-columns">

        <div className="card-box">
          <img src={card.arcaneImage?.imageSrc} alt={card.arcaneName} loading="lazy" />
          <h1 className="card-title"> {card.arcaneName}</h1>
          <p className="arcane-subtitle">Arcano Mayor Nº {card.arcaneNumber}</p>


          <ExpandableText text={card.arcaneDescription} maxLines={5} />
        </div>

        <div className="card-box">

          <img src={card.goddessImage.imageSrc} alt={card.goddessName} loading="lazy" />

          <h2 className="card-title">{card.goddessName}</h2>
          <p className="goddess-subtitle">Diosa Contemporánea</p>


          <ExpandableText text={card.goddessDescription} maxLines={5} />
        </div>
      </div>
    </article>
  );
}
