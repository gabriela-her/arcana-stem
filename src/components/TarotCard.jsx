import cardBack from '../assets/card-back.png'
export default function TarotCard({ card, faceDown = true, onClick }) {
    //validacion 
    if (!card && !faceDown) {
        console.warn('TarotCard: No card data provided for face-up card');
    }

    return (
        <button
            className={`card ${faceDown ? 'card--back' : ''}`}
            onClick={onClick}
            style={{ cursor: onClick ? 'pointer' : 'default' }}
            aria-label={faceDown ? 'Hidden card' : `Card: ${card?.arcaneName}`}
        >
            {faceDown || !card ? (
                <img
                    className="cardBack"
                    src={cardBack} 
                    alt="Dorso de la carta"
                    loading="lazy"
                />
            ) : (
                <img
                    className="cardImg"
                    src={card.arcaneImage.imageSrc}
                    alt={card.arcaneName}
                    loading="lazy"
                />
            )}
        </button>
    );
}
