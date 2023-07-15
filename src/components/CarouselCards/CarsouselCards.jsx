import "./CarouselCards.css";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import customerData from "../../assets/customerData";

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const CarsouselCards = () => {
  useEffect(( ) => {
        AOS.init();
    }, []);  
  return (
    <div className="carousel-cards" data-aos="zoom-out" data-aos-duration="700" data-aos-delay="1000">
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
                            <h2 className="creator-name ff-geliat-l sec-color">{creator.name}</h2>
                        </div>
                    </SwiperSlide>)
                })
            }
            
        </Swiper>
    </div>
  )
}

export default CarsouselCards;