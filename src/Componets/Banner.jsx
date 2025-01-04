import React from "react";
import img1 from "../assets/home-bg-4-1.jpg";
import img2 from "../assets/home-bg-6.jpg";
import img3 from "../assets/home-bg-7.jpg";
import img4 from "../assets/home-bg-1-1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const Banner = () => {
  return (
    <div className="">
      <Swiper
      
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation={{clickable : true}}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper"
      >
        <SwiperSlide >
          <img src={img1} alt="" className="mx-auto" />{" "}
         
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" className="mx-auto" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" className="mx-auto"/>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" className="mx-auto"/>{" "}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
