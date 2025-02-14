import React from "react";
import "./moviesComingSoon.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";
function MoviesComingSoon({ data }) {
  return (
    <Swiper
    breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      400: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      700: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
      1500: {
        slidesPerView: 8,
        spaceBetween: 20,
      },
    }}
      spaceBetween={30}
      freeMode={true}
      modules={FreeMode}
      loop={true}
      className="mySwiper"
    >
      {data.map((data, index) => (
        <SwiperSlide key={index}>
          {" "}
          <div className="container">
            <img src={data.bgImg} alt="" />
            <div className="title">{data.title}</div>
          </div>
        </SwiperSlide>
      ))}
      </Swiper>
  )
}

export default MoviesComingSoon;
