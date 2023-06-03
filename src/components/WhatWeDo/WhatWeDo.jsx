import { ScrollButton } from "../";
import "./WhatWeDo.css";

const WhatWeDo = () => {
  return (
    <div className="what-we-do">
        <h1 className="ff-almeria-r sec-color fs-3l">What we <span className="blk-color">do</span>.</h1>
        <div className="what-widget">
            <div className="scroll-button-container">
                <ScrollButton />
            </div>
            <div className="widget-tab"></div>
        </div>
    </div>
  )
}

export default WhatWeDo