import {useSwiper} from 'swiper/react';
import arrowRight from "/arrow-right.svg"

export default function SlideNextButton() {
    const swiper = useSwiper();
  
    return (
        <button 
            className="navigation-btn" 
            onClick={() => swiper.slideNext()}
            style={{
                borderRadius: "50%",
                border: "1px solid var(--sec-color)",
                background: "var(--prm-color)",
                padding: "1rem"
            }}>
            <img src={arrowRight} alt="" style={{
              filter: "invert(1)",
              display: "grid",
              placeItems: "center" 
            }}/>
        </button>
    );
  }