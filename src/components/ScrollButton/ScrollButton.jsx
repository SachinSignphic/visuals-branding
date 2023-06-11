import chevronDown from "/chevrons-down.svg";
import "./ScrollButton.css";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
// eslint-disable-next-line react/prop-types
const ScrollButton = ({scrollTo, style, dataAos="fade-in"}) => {
    useEffect(( ) => {
        AOS.init({
            offset: 50
        });
    }, []);
    return (
        <a className="scroll-button" data-aos={dataAos} href={scrollTo} style={style}>
            <img src={chevronDown} alt="Scroll down" />
        </a>
    );
}

export default ScrollButton;