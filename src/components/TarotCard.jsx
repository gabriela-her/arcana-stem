import cardBack from '../assets/images/card-back.png'
export default function TarotCard({ card, faceDown = true, onClick, className = '', style = {} }) 
 {
    //validacion 
    if (!card && !faceDown) {
        console.warn('TarotCard: No card data provided for face-up card');
    }

    return (
       <button
  className={`card ${faceDown ? 'card--back' : ''} ${className}`}
  onClick={onClick}
  style={{ cursor: onClick ? 'pointer' : 'default', ...style }}
  aria-label={faceDown ? 'Hidden card' : `Card: ${card?.arcaneName}`}
>

            {faceDown || !card ? (
                <img
                    className="cardBack"
                    src={cardBack}    // <-- aquí usas la variable
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
