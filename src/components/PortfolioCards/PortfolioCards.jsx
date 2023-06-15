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
                        <img src={card.cardImg} alt={card.cardName} loading="lazy" className="portfolio-card-img" />
                        {/* <h3 className="ff-gillroy-m fs-m sec-color">{card.cardName}</h3> */}
                        <h3 className="card-title ff-gillroy-m fs-l sec-color">{card.cardName}</h3>
                    </Link>
                )
            })
        }
    </div>
  )
}

export default PortfolioCards