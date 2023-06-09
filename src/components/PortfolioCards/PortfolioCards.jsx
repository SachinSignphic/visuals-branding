import "./PortfolioCards.css";
import { Link } from "react-router-dom";
import cardData from "../../assets/cardData";

const PortfolioCards = () => {
  return (
    <div className="portfolio-cards">
        {
            cardData.map(card => {
                return (
                    <Link className="portfolio-card" key={crypto.randomUUID()}>
                        <img src={card.cardImg} alt={card.cardName} />
                    </Link>
                )
            })
        }
    </div>
  )
}

export default PortfolioCards