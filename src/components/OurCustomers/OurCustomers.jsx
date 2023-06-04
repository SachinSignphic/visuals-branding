import "./OurCustomers.css";
import CarsouselCards from "../CarouselCards/CarsouselCards";
import ScrollButton from "../ScrollButton/ScrollButton";

const OurCustomers = () => {
    return (
        <div className="creators">
            <div className="creators-header">
                <h1 className="ff-almeria-r sec-color fs-3l" style={{fontWeight: "bold"}}>Trusted by <span className="blk-color">World&rsquo;s Largest Creators </span>!</h1>
                <ScrollButton />
            </div>
            <CarsouselCards />
        </div>
    )
}

export default OurCustomers;