export default function TarotCard({
  faceDown = true,
  imageSrc,
  title = 'Card',
  onClick,
}) {
  return (
    <button
      className={`card ${faceDown ? 'card--back' : ''}`}
      onClick={onClick}
      aria-label={faceDown ? 'Hidden card' : `Card: ${title}`}
    >
      {faceDown ? (
        <span className="cardBack">🔮</span>
      ) : (
        <img className="cardImg" src={imageSrc} alt={title} loading="lazy" />
      )}
    </button>
  );
}
