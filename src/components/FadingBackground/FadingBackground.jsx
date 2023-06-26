import "./FadingBackground.css";
import { useEffect } from 'react'

const FadingBackground = () => {
    const windowHeight = window.innerHeight;
    const scale = (number, inMin, inMax, outMin, outMax) => (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    
    useEffect(() => {
      const rootElem = document.getElementById("bg");
      const handleScroll = () => {
        var opValue = 0.6 - scale(window.scrollY, 0, windowHeight, 0, 0.6)*1.5
        rootElem.style.setProperty("--bg-opacity", (opValue>0)? opValue : 0);
        if (opValue <= 0) return; 
        // console.log(window.scrollY, opValue);
      }
      window.addEventListener("scroll", handleScroll);
      return () => { window.removeEventListener("scroll", handleScroll); }
    },[windowHeight]);   

    return (
        <div id="bg">
          <img src="/wave-haikei.svg" alt="" />
        </div>
    );
}

export default FadingBackground