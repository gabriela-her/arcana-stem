export default function TarotCard({ card, faceDown = true, onClick }) {
  return (
    <button
      className={`card ${faceDown ? 'card--back' : ''}`}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
      aria-label={faceDown ? 'Hidden card' : `Card: ${card?.arcaneName}`}
    >
      {faceDown || !card ? (
        <span className="cardBack">🔮</span>
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
