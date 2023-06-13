import "./PortfolioProductImages.css";
import "../../assets/portfolioData";

// eslint-disable-next-line react/prop-types
const PortfolioProductImages = ({ images }) => {
  return (
    <div className="portfolio-product-images">
        {
            // eslint-disable-next-line react/prop-types
            images.map( image => {
                return (
                    <img className="portfolio-product-image" key={crypto.randomUUID()} src={image} alt="" loading="lazy" />
                )
            })
        }
    </div>
  )
}

export default PortfolioProductImages