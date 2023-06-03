import chevronDown from "/chevrons-down.svg";
import "./ScrollButton.css";

const ScrollButton = () => {
    return (
        <button className="scroll-button">
            <img src={chevronDown} alt="Scroll down" />
        </button>
    );
}

export default ScrollButton;