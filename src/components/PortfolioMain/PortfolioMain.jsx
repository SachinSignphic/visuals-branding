import "./PortfolioMain.css";
import { SlideContent } from "../";
import { FreeMode, Navigation, Pagination} from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

const PortfolioMain = () => {
  const swiper = useSwiper();

  return (
    <div className="carousel-container">
        <Swiper
          modules={[Navigation, Pagination, FreeMode]}
          spaceBetween={30}
          slidesPerView="auto"
        >
          <SwiperSlide className="res-slide">
            <SlideContent />
          </SwiperSlide>
          <SwiperSlide className="res-slide">
            <h1 className="sec-color">Hii</h1>
          </SwiperSlide>
          <SwiperSlide className="res-slide">
            <h1 className="sec-color">Hii</h1>
          </SwiperSlide>
          <SwiperSlide className="res-slide">
            <h1 className="sec-color">Hoooii</h1> 
          </SwiperSlide>
          <div className="navigation-btns">
            <button className="navigation-btn" onClick={() => swiper.slideNext()}>
              Next
            </button>
            <button className="navigation-btn" onClick={() => swiper.slidePrev()}>
              Prev
            </button>
          </div>
        </Swiper>
    </div>
  )
}

export default PortfolioMain