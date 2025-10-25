import "./swiperShow.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow } from "swiper/modules";
function SwiperShow({ movies, sendId }) {
  const modules = [Autoplay, EffectCoverflow];
  return (
    <div className="swiperBox">
      <Swiper

        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView= {6}
        slidesPerGroup= {2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        modules={modules}
      >
        {movies.map((img) => (
          <SwiperSlide id="mySwiper" key={img._id}>
            <img src={img.previewImg} onClick={() => sendId(img._id)} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperShow;
