import { ScrollButton } from "../";
import "./TransformSection.css";

const TransformSection = () => {
  return (
      <div className="transform">
          <div className="transform-text-container transform-1">
              <h3 className="ff-gillroy-l sec-color fs-3s">Dont be <span className="blk-color ff-gillroy-b">ordinary</span>...</h3>
          </div>
          <div className="transform-text-container transform-2">
              <h1 className="ff-almeria-r sec-color">Transform your <span className="blk-color"> brand</span>, inspire your fans.</h1>
          </div>
          <div className="transform-text-container transform-3">
              <h3 className="ff-gillroy-l sec-color fs-3s">Make a statement with <span className="blk-color">visuals branding</span> production</h3>
          </div>
        <ScrollButton />
      </div>
  )
}

export default TransformSection