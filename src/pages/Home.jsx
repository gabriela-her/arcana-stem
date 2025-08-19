import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCards } from '../services/tarotServices';
import TarotCard from '../components/TarotCard';

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
        <section>
            <h1>Los secretos del Tarot</h1>
            <p>Desvela cada carta y revela el misterio de lo desconocido</p>
            <div className="cards-grid">
                {cards.map((card) => (
                    <TarotCard
                        key={card.id}
                        faceDown={true}
                        onClick={() => navigate(`/card/${card.id}`)}
                    />
                ))}

            </div>
        </section>
    );
}
