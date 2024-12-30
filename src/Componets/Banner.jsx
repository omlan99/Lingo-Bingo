import React from "react";
import BannerImg from "../assets/busuu-header-hello.png"

const Banner = () => {
  return (
  <div className="flex bg-[#2D5AEC] text-white">
    <div className="w-4/5 p-16 ">
        <h1 className="text-4xl mb-4 font-extrabold text-left">New language, new <br /> opportunities, new  <br /> you</h1>
         <p className="text-xl max-w-md mb-8">Get access to compact lessons from the experts and connect with a community of native speakers to help you master words faster.</p>
    </div>
    <div>
      <img src={BannerImg} alt="" />
    </div>

  </div>
);
};

export default Banner;
