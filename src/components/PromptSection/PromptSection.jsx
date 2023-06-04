import "./PromptSection.css";
import {ScrollButton} from "../";
import arrowRight from "/arrow-right.svg";
import { Link } from "react-router-dom";

const PromptSection = () => {
  return (
    <div className="prompt-section">
        <div className="prompt-header">
            <h1 className="ff-almeria-r sec-color fs-3l" style={{fontWeight: "bold"}}>Ready to transform your <span className="blk-color">brand </span>?</h1>
            <ScrollButton />
        </div>
        <hr />
        <div className="prompt-links">
            <Link className="prompt-link">
                <div>
                    <h2 className="ff-gillroy-m blk-color">Ready to make a statement?</h2>
                    <h1 className="ff-almeria-r fs-3l sec-color">Free Consultation.</h1>
                </div>
                <button className="circle-right">
                    <img src={arrowRight} alt="Free consultation" />
                </button>
            </Link>
            <Link className="prompt-link">
                <div>
                    <h2 className="ff-gillroy-m blk-color">Make something in your style.</h2>
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