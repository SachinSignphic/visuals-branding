import "./PortfolioProductTitle.css"

// eslint-disable-next-line react/prop-types
const PortfolioProductTitle = ({ featured, title }) => {
  return (
    <div className="portfolio-product-title">
        <h1 className="ff-gillroy-m blk-color product-featured">{featured}</h1>
        <h1 className="ff-almeria-b sec-color product-title">{title}</h1>
    </div>
  )
}

export default PortfolioProductTitle