import "./CarouselCards.css";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import customerData from "../../assets/customerData";

const CarsouselCards = () => {
  return (
    <div className="carousel-cards">
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={"auto"}
            navigation
            loop={true}
            centeredSlides={true}
            autoplay = {{
              delay: 2000,
              pauseOnMouseEnter: true,
              disableOnInteraction: true,
            }}
            className="creator-carousel"
        >
            {
                customerData.map( (creator, i) => {
                    return(
                    <SwiperSlide key={i} className="creator-slide">
                        <img src={creator.pic} loading="lazy" alt={creator.name} />
                        <div className="text-gradient">
                            <h2 className="creator-name ff-gillroy-m sec-color">{creator.name}</h2>
                        </div>
                    </SwiperSlide>)
                })
            }
            
        </Swiper>
    </div>
  )
}

export default CarsouselCards;