import "./ServiceSection.css";
import arrowRight from "/arrow-right.svg";
import serviceSectionPlaceholder from "/service-section-placeholder.png";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const ServiceSectionLTR = ({ heading, purpleText, whiteText, pMarkup }) => {
  useEffect(( ) => {
        AOS.init();
    }, []);
  return (
    <div className="service-section-ltr" data-aos="fade-left" data-aos-duration="1000">
        <div className="service-section-header">
            <h1 className="ff-almeria-r sec-color">{heading}</h1>
            <hr />
            <Link to='https://form.jotform.com/231688064314457' about="_blank">
            <button className="circle-right">
                  <img src={arrowRight} alt="Free consultation" />
            </button>
            </Link>
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