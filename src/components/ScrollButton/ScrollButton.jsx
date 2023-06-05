import chevronDown from "/chevrons-down.svg";
import "./ScrollButton.css";

// eslint-disable-next-line react/prop-types
const ScrollButton = ({scrollTo, style}) => {
    return (
        <a className="scroll-button" href={scrollTo} style={style}>
            <img src={chevronDown} alt="Scroll down" />
        </a>
    );
}

export default ScrollButton;