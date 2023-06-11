/* eslint-disable react/prop-types */
import { ScrollButton } from "../";
import "./TransformSection.css";

const TransformSection = ({scrollTo, style}) => {
  return (
      <div className="transform" id="transform">
          <div className="transform-text-container transform-1">
              <h3 className="ff-gillroy-l sec-color fs-2m">Dont be <span className="blk-color ff-gillroy-b">ordinary</span>...</h3>
          </div>
          <div className="transform-text-container transform-2">
              <h1 className="ff-almeria-r sec-color">Transform your <br /> <span className="blk-color"> brand</span>, inspire <br /> your fans.</h1>
          </div>
          <div className="transform-text-container transform-3">
              <h3 className="ff-gillroy-l sec-color fs-l">Make a statement with <br /> <span className="blk-color">visuals branding</span> production</h3>
              <ScrollButton scrollTo={scrollTo} style={style} className="transform-scroll" />
          </div>
      </div>
  )
}

export default TransformSection