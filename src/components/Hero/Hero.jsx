import ScrollButton from "../ScrollButton/ScrollButton";
import "./Hero.css";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {

    useEffect(() => {
        AOS.init({
            duration: 500
        });
    }, []);

    return(
        <div className="hero" id="hero" >
            <h2 className="ff-geliat-l sec-color" data-aos="zoom-in-up">{/*<span>“</span>*/ }A <span className="ff-geliat-b">creative</span> edge for the <span className="ff-geliat-b">gaming</span> industry {/*<span>”</span>*/}</h2>
            <ScrollButton scrollTo="#transform" dataAos="zoom-in-up" />
        </div>
    );
}

export default Hero; 