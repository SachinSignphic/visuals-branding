import "./FadingBackground.css";
import { useEffect } from 'react'

const FadingBackground = () => {
    const windowHeight = window.innerHeight;
    const scale = (number, inMin, inMax, outMin, outMax) => (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    
    useEffect(() => {
      const rootElem = document.getElementById("bg");
      const handleScroll = () => {
        var opValue = 0.9 - scale(window.scrollY, 0, windowHeight, 0, 0.9)*1.8
        rootElem.style.setProperty("--bg-opacity", (opValue>0)? opValue : 0);
        if (opValue <= 0) return; 
        // console.log(window.scrollY);
      }
      // console.log(window.scrollY);
      window.addEventListener("scroll", handleScroll);
      return () => { window.removeEventListener("scroll", handleScroll); }
    },[windowHeight]);   

    return (
        <div id="bg">
        </div>
    );
}

export default FadingBackground