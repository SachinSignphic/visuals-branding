import "./SlideContent.css";
import SlideNextButton from "../PortfolioMain/SwiperNavButtons";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SlideContent = ({ featured, brandTitle, carouselPic, link }) => {
  return (
    <div className="slide-content">
      <div className="slide-text">
        <h2 className="ff-gillroy-m blk-color fs-l">
          {/* obtain from [object Object] */}
          {featured}
        </h2>
        <h1 className="ff-almeria-r sec-color brand-title">
          {/* Obtain from data */} 
          {brandTitle}
        </h1>
        <SlideNextButton />
      </div>
      <div className="slide-image">
        <Link to={link}>
        <img src={carouselPic} alt={brandTitle} loading="lazy"/>
        </Link>
      </div>
    </div>
  )
}

export default SlideContent