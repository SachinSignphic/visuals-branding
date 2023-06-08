import "./ServiceSection.css";
import arrowRight from "/arrow-right.svg";
import serviceSectionPlaceholder from "/service-section-placeholder.png";

// eslint-disable-next-line react/prop-types
const ServiceSectionLTR = ({ heading, purpleText, whiteText, pMarkup }) => {
  return (
    <div className="service-section-ltr">
        <div className="service-section-header">
            <h1 className="ff-almeria-r sec-color">{heading}</h1>
            <hr />
            <button className="circle-right">
                    <img src={arrowRight} alt="Free consultation" />
            </button>
        </div>
        <div className="service-section-content">
          <div className="service-section-images">
            <img src={serviceSectionPlaceholder} alt="Placeholder" />
            <img src={serviceSectionPlaceholder} alt="Placeholder" />
          </div>
          <hr className="vr" />
          <div className="service-section-details">
            <h1 className="ff-almeria-r sec-color">{whiteText} <span className="blk-color">{purpleText}</span> !</h1>
            {pMarkup}
          </div>
        </div>        
    </div>
  )
}

export default ServiceSectionLTR