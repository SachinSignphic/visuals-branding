import "./SlideContent.css";
import SlideNextButton from "../PortfolioMain/SwiperNavButtons";

// eslint-disable-next-line react/prop-types
const SlideContent = ({ featured, brandTitle, carouselPic }) => {
  return (
    <div className="slide-content">
      <div className="slide-text">
        <h2 className="ff-gillroy-m blk-color fs-l">
          {/* obtain from [object Object] */}
          {featured}
        </h2>
        <br />
        <h1 className="ff-almeria-r sec-color brand-title">
          {/* Obtain from data */} 
          {brandTitle}
        </h1>
        <br />
        <SlideNextButton />
      </div>
      <div className="slide-image">
        <img src={carouselPic} alt={brandTitle} />
      </div>
    </div>
  )
}

export default SlideContent