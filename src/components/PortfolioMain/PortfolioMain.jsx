import "./PortfolioMain.css";
import { SlideContent } from "../";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"

import carouselData from "../../assets/portfolioData";

const PortfolioMain = () => {

  return (
    <div className="carousel-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView="auto"
          loop = {true}
          autoplay = {{
            delay: 2000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          className="swiper-slider"
        >
          {
            carouselData.map((slide,i) => {
              return(
                <SwiperSlide className="carousel-slide" key={i}>
                  <SlideContent featured={slide.featured} brandTitle={slide.brandTitle} carouselPic={slide.carouselPic} link={slide.id}/>
                </SwiperSlide>
              );
            })
          }
        </Swiper>
    </div>
  )
}

export default PortfolioMain;