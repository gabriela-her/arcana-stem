import { useState } from 'react';
import { getCards } from '../services/tarotServices.js';
import TarotCard from '../components/TarotCard.jsx';

export default function Reading() {
  const [selectedCards, setSelectedCards] = useState({
    past: null,
    present: null,
    future: null,
  });

  const [allCards, setAllCards] = useState([]);
  const [error, setError] = useState(null);

  // Cargar todas las cartas
  useState(() => {
    getCards()
      .then((data) => setAllCards(data))
      .catch((err) => setError(err.message));
  }, []);

  // Handler para seleccionar cartas
  const handleSelect = (card) => {
    // Evitar que se seleccione más de 3 cartas
    const alreadySelected = Object.values(selectedCards).filter(Boolean).length;

    if (alreadySelected >= 3) return;

    if (!selectedCards.past) {
      setSelectedCards({ ...selectedCards, past: card });
    } else if (!selectedCards.present) {
      setSelectedCards({ ...selectedCards, present: card });
    } else if (!selectedCards.future) {
      setSelectedCards({ ...selectedCards, future: card });
    }
  };

  const resetReading = () => {
    setSelectedCards({ past: null, present: null, future: null });
  };

  return (
    <section>
      <h1>Tarot Reading</h1>
      {error && <p>Error: {error}</p>}

      <div className="reading-slots">
        <div>
          <h2>Past</h2>
          {selectedCards.past ? (
            <TarotCard card={selectedCards.past} />
          ) : (
            <p>Pick a card</p>
          )}
        </div>
        <div>
          <h2>Present</h2>
          {selectedCards.present ? (
            <TarotCard card={selectedCards.present} />
          ) : (
            <p>Pick a card</p>
          )}
        </div>
        <div>
          <h2>Future</h2>
          {selectedCards.future ? (
            <TarotCard card={selectedCards.future} />
          ) : (
            <p>Pick a card</p>
          )}
        </div>
      </div>

      <button onClick={resetReading}>Reset Reading</button>

      <h2>All cards</h2>
      <div className="cards-grid">
        {allCards.map((card) => (
          <TarotCard
            key={card.id}
            card={card}
            onClick={() => handleSelect(card)}
          />
        ))}
      </div>
    </section>
  );
}
