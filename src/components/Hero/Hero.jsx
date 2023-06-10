import ScrollButton from "../ScrollButton/ScrollButton";
import "./Hero.css";

const Hero = () => {
    return(
        <div className="hero" id="hero">
            <h2 className="ff-almeria-r fs-l sec-color"><span>“</span> A <span>creative</span> edge for the <span>gaming</span> industry <span>”</span></h2>
            <ScrollButton scrollTo="#transform" />
        </div>
    );
}

export default Hero; 