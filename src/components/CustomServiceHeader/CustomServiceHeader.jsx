import "./CustomServiceHeader.css";

// eslint-disable-next-line react/prop-types
const CustomServiceHeader = ({ whiteText, purpleText }) => {
  return (
    <div className="custom-service-header">
        <h1 className="ff-almeria-r sec-color">{whiteText}<span className="blk-color">{purpleText}</span></h1>
        <hr />
    </div>
  )
}

export default CustomServiceHeader