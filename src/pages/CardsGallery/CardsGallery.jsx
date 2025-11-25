import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCards } from "../../services/tarotServices";
import TarotCard from "../../components/TarotCard.jsx";
import "./cards-gallery.css";

export default function CardsGallery() {
    const [cards, setCards] = useState([]);
    const [expanded] = useState(true);

    useEffect(() => {
        getCards().then(setCards);
    }, []);

    return (
        <section className="cards-gallery">
            <h1 className="gallery-title">El Arquetipo Revelado</h1>
            <p className="card-intro">Cada arcano revela un arquetipo simbólico y, a su lado, la historia de una mujer cuyo trabajo transforma nuestro mundo. En esta seccion se entrelazan mito y realidad</p>

            {expanded && (
                <div className="cards-grid-expanded">
                    {cards.map((card) => (
                        <Link key={card.id} to={`/card/${card.id}`}>
                            <div className="expanded-card-wrapper">

                                <div className="card-overlay-info">
                                    <span className="overlay-arcane">{card.arcaneName}</span>
                                    <span className="overlay-goddess">{card.goddessName}</span>
                                </div>

                                <TarotCard
                                    card={card}
                                    faceDown={true}
                                    className="expanded-card"
                                />                                
                            </div>                            
                        </Link>                                                
                    ))}
                </div>
            )}

        </section>
    );
}
