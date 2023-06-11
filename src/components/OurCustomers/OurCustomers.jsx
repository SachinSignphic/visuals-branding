/* eslint-disable react/prop-types */
import "./OurCustomers.css";
import CarsouselCards from "../CarouselCards/CarsouselCards";
import ScrollButton from "../ScrollButton/ScrollButton";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const OurCustomers = ({scrollTo}) => {
    useEffect(( ) => {
        AOS.init();
    }, []);
    return (
        <div className="creators" id="creators">
            <div className="creators-header">
                <h1 className="ff-almeria-r sec-color" data-aos="fade-up">Trusted by <span className="blk-color">World&rsquo;s Largest Creators </span>!</h1>
                <ScrollButton scrollTo={scrollTo} className="scroll-button" />
            </div>
            <CarsouselCards />
            <div>
            <ScrollButton scrollTo={scrollTo} className="scroll-button" />
            </div>
        </div>
    )
}

export default OurCustomers;