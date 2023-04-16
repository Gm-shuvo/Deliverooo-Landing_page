import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import sliderItems from "../components/sliderItems";
import { testimonialsData } from "../data";

SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

const slider = () => {
  return (
    <Swiper
      loop
      // freeMode
      spaceBetween={20}
      slidesPerView={"auto"}
      speed={900}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
        waitForTransition: true,
        // reverseDirection: autoplay
      }}
      // navigation
      scrollbar={{ draggable: true }}
      pagination={{ clickable: "true" }}
      centeredSlides={"true"}
      // onSwiper={(swiper) => (swiperRef.current = swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      {testimonialsData?.map((item, index) => {
        const { image, delay, name, message, web } = item;
        return (
          <SwiperSlide
            key={index}
            className="bg-white rounded-[20px] broder xl:max-w-[450px] max-h-[300px] pt-[30px] px-[35px] xl:px[70px] pb-[50px]  shadow-xl"
          >
            <div className="flex items-center space-x-8">
              <img src={image} alt="" className="flex-grow-0 items-center"/>
              <div className="text">
                <h4>{name}</h4>
                <h5>{web}</h5>
                <p>{message}</p>
              </div>
          </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default slider;
