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
      400: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      800:{
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1000:{
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200:{
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1300: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
      1500: {
        slidesPerView: 7,
        spaceBetween: 30,
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
