import { useEffect, useState } from 'react';
import { getCards } from '../services/tarotServices.js';
import TarotCard from '../components/TarotCard.jsx';
import './reading.css';

export default function Reading() {
    // guardar las cartas seleccionadas en las posiciones
    const [selectedCards, setSelectedCards] = useState({
        past: null,
        present: null,
        future: null,
    });

    // almacenar todas las cartas obtenidas de la API
    const [allCards, setAllCards] = useState([]);

    // manejar posibles errores al cargar las cartas
    const [error, setError] = useState(null);

    // si las cartas seleccionadas están reveladas (boca arriba) o boca abajo
    const [revealed, setRevealed] = useState(false);

    // cargar las cartas al montar el componente
    useEffect(() => {
        getCards()
            .then((data) => setAllCards(data)) // Guardamos las cartas en estado
            .catch((err) => setError(err.message)); // Capturamos error si ocurre
    }, []);

    // comprobar si una carta ya está seleccionada en cualquiera de las posiciones
    const isCardAlreadySelected = (card) => {
        return Object.values(selectedCards).some((c) => c?.id === card.id);
    };

    // Seleccionar una carta y asignarla a la primera posición vacía
    const handleSelect = (card) => {
        if (isCardAlreadySelected(card)) return; // No permitimos seleccionar la misma carta dos veces

        const { past, present, future } = selectedCards;
        if (!past) {
            setSelectedCards({ ...selectedCards, past: card });
        } else if (!present) {
            setSelectedCards({ ...selectedCards, present: card });
        } else if (!future) {
            setSelectedCards({ ...selectedCards, future: card });
        }
    };

    // Reiniciar la lectura
    const resetReading = () => {
        setSelectedCards({ past: null, present: null, future: null });
        setRevealed(false);
    };

    // Revelar las cartas (mostrar boca arriba)
    const handleReveal = () => {
        setRevealed(true);
    };

    return (
        <section>
            <h1>Descubre lo que el destino guarda tras el velo de lo desconocido</h1>
            {/* Mostrar error si hay */}
            {error && <p>Error: {error}</p>}

            {/* Slots para las cartas seleccionadas */}
            <div className="reading-slots">
                <div>
                    <h2>Pasado</h2>
                    {selectedCards.past ? (
                        // Mostrar carta seleccionada, boca abajo si aún no se reveló
                        <TarotCard card={selectedCards.past} faceDown={!revealed} />
                    ) : (
                        <p>Pick a card</p>
                    )}
                </div>
                <div>
                    <h2>Presente</h2>
                    {selectedCards.present ? (
                        <TarotCard card={selectedCards.present} faceDown={!revealed} />
                    ) : (
                        <p>Pick a card</p>
                    )}
                </div>
                <div>
                    <h2>Futuro</h2>
                    {selectedCards.future ? (
                        <TarotCard card={selectedCards.future} faceDown={!revealed} />
                    ) : (
                        <p>Pick a card</p>
                    )}
                </div>
            </div>

            {/* Botón para revelar las cartas seleccionadas */}
            <button
                onClick={handleReveal}
                // Deshabilitar si ya están reveladas o no se han seleccionado las 3 cartas
                disabled={
                    revealed || Object.values(selectedCards).some((v) => v === null)
                }
            >
                Desvelar lectura
            </button>

            {/* Botón para reiniciar la lectura */}
            <button onClick={resetReading}>Reset Reading</button>

            {/* Mazo estirado como en una mesa real*/}
            <h2>"Elige tu camino: detrás de cada carta, una visión del destino… y una mente que cambió el mundo."</h2>
            <div className="deck-spread">
                {allCards
                .filter(
                    (card) =>
                        selectedCards.past?.id !== card.id &&
                        selectedCards.present?.id !== card.id &&
                        selectedCards.future?.id !== card.id
                )
                
                .map((card, index) =>  (
                        <TarotCard
                            key={card.id}
                            card={card}
                            faceDown={true}
                            onClick={() => handleSelect(card)}
                            // className={isSelected ? 'selected' : ''}
                            style={{ '--index': index }} // Para rotación opcional
                        />
                    )
                )}
            </div>

        </section>
    );
}
