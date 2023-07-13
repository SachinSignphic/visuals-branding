import "./FadingBackground.css";
import { useEffect, useState } from 'react'

// const FadingBackground = () => {
//     const windowHeight = window.innerHeight;
//     const scale = (number, inMin, inMax, outMin, outMax) => (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    
//     useEffect(() => {
//       const rootElem = document.getElementById("bg");
//       const handleScroll = () => {
//         var opValue = 0.9 - scale(window.scrollY, 0, windowHeight, 0, 0.9)*1.8
//         rootElem.style.setProperty("--bg-opacity", (opValue>0)? opValue : 0);
//         if (opValue <= 0) return; 
//         // console.log(window.scrollY);
//       }
//       console.log(window.scrollY);
//       window.addEventListener("scroll", handleScroll);
//       return () => { window.removeEventListener("scroll", handleScroll); }
//     },[]);   

//     return (
//         <div id="bg">
//         </div>
//     );
// }
const FadingBackground = () => {
  const windowHeight = window.innerHeight;
  const [bgOpacity, setBgOpacity] = useState(0.9);

  const scale = (number, inMin, inMax, outMin, outMax) =>
    ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

  const handleScroll = () => {
    const opValue = 0.9 - scale(window.scrollY, 0, windowHeight, 0, 0.9) * 1.8;
    setBgOpacity(opValue > 0 ? opValue : 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div id="bg" style={{ "--bg-opacity": bgOpacity }} />;
};

export default FadingBackground