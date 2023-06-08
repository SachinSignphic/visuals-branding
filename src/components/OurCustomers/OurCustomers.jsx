/* eslint-disable react/prop-types */
import "./OurCustomers.css";
import CarsouselCards from "../CarouselCards/CarsouselCards";
import ScrollButton from "../ScrollButton/ScrollButton";

const OurCustomers = ({scrollTo}) => {
    return (
        <div className="creators" id="creators">
            <div className="creators-header">
                <h1 className="ff-almeria-r sec-color" style={{fontWeight: "bold", fontSize: "4.5rem"}}>Trusted by <span className="blk-color">World&rsquo;s Largest Creators </span>!</h1>
                <ScrollButton scrollTo={scrollTo} style={{marginRight: "5.3rem"}}/>
            </div>
            <CarsouselCards />
        </div>
    )
}

export default OurCustomers;