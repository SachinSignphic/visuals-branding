import "./PromptSection.css";
import {ScrollButton} from "../";
import arrowRight from "/arrow-right.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
// eslint-disable-next-line react/prop-types
const PromptSection = ({scrollTo, style}) => {
  useEffect(( ) => {
        AOS.init();
    }, []);  
  return (
    <div className="prompt-section" id="prompt-section">
        <div className="prompt-header" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="ff-almeria-r sec-color">Ready to transform your <span className="blk-color">brand </span>?</h1>
            <ScrollButton scrollTo={scrollTo} style={style} className="scroll-button" />
        </div>
        <hr />
        <div className="prompt-links">
            <Link className="prompt-link" to='/free-consultation' data-aos="fade-right" data-aos-duration="500">
                <div>
                    <h2 className="ff-gillroy-b blk-color">Ready to make a statement?</h2>
                    <h1 className="ff-almeria-r fs-3l sec-color">Free Consultation.</h1>
                </div>
                <button className="circle-right">
                    <img src={arrowRight} alt="Free consultation" />
                </button>
            </Link>
            <Link className="prompt-link" to='/custom-service' data-aos="fade-right" data-aos-duration="500" data-aos-delay="500">
                <div>
                    <h2 className="ff-gillroy-b blk-color">Make something in your style.</h2>
                    <h1 className="ff-almeria-r fs-3l sec-color">Custom Service.</h1>
                </div>
                <button className="circle-right">
                    <img src={arrowRight} alt="Free consultation" />
                </button>
            </Link>
            <div className="prompt-link"></div>
        </div>
    </div>
  )
}

export default PromptSection