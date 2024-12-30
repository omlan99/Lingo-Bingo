import React from "react";
import img1 from "../assets/blackboard.jpg";
import img2 from "../assets/learing in lamp.jpg";
import img3 from "../assets/Pencil & eraser.jpg";
import img4 from "../assets/represent.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import { Navigation, Pagination } from "swiper/modules";
const Banner = () => {
  return (
    <div className="">
      <Swiper
      
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      navigation={{clickable : true}}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
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
