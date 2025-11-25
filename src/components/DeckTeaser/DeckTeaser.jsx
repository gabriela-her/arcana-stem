import { useNavigate } from "react-router-dom";
import "./deck-teaser.css";
import cardBack from "../../assets/images/card-back.png";

export default function DeckTeaser() {
  const navigate = useNavigate();

  return (
    <div className="deck-teaser-container" >

      <div className="deck-stack">
        <img
          src={cardBack}
          alt="Mazo cerrado"
          className="deck-teaser-img"
          onClick={() => navigate("/cards")}
        />
      </div>

      <p className="deck-teaser-text">
        Haz click para desplegar el mazo
      </p>
    </div>
  );
}
