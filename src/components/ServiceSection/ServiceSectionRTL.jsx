import "./ServiceSection.css";
import arrowRight from "/arrow-right.svg";

// eslint-disable-next-line react/prop-types
const ServiceSectionRTL = ({ heading, subheading, desc}) => {
  return (
    <div className="service-section-rtl">
        <div className="service-section-header">
            <h1 className="ff-almeria-r sec-color">{heading}</h1>
            <hr />
            <button className="circle-right">
                    <img src={arrowRight} alt="Free consultation" />
            </button>
        </div>
    </div>
  )
}

export default ServiceSectionRTL