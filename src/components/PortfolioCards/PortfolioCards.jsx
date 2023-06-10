import "./PortfolioCards.css";
import { Link } from "react-router-dom";
import cardData from "../../assets/portfolioData";

const PortfolioCards = () => {
  return (
    <div className="portfolio-cards">
        {
            cardData.map(card => {
                return (
                    <Link className="portfolio-card" key={card.id} to={card.id}>
                        <img src={card.cardImg} alt={card.cardName} />
                        {/* <h3 className="ff-gillroy-m fs-m sec-color">{card.cardName}</h3> */}
                        <img src={card.cardTitle} alt={card.cardName + " title"} className="card-title" />
                    </Link>
                )
            })
        }
    </div>
  )
}

export default PortfolioCards