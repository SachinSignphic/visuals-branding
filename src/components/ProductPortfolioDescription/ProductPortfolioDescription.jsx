import "./ProductPortfolioDescription.css"

// eslint-disable-next-line react/prop-types
const ProductPortfolioDescription = ({ whiteText, purpleText, desc, typographyImage }) => {
  return (
    <div className="product-portfolio-description">
        <div className="product-description">
            <h1 className="ff-almeria-r sec-color prod-title">{whiteText} <span className="blk-color">{purpleText}</span> </h1>
            <p className="ff-gillroy-l sec-color prod-desc">{desc}</p>
        </div>
        <div className="product-image">
            <img src={typographyImage} alt="" />
        </div>
    </div>
  )
}

export default ProductPortfolioDescription