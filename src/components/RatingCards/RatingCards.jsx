import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

import { Swiper } from "swiper/react";

// import required modules
import { FreeMode, Pagination } from "swiper";

const RatingCards = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      <Swiper
        breakpoints={{
          slidesPerView: 2,
          spaceBetween: 10,
          320: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 10,
            spaceBetween: 10,
          },
        }}
        spaceBetween={14}
        freeMode={false}
        pagination={false}
        modules={[FreeMode, Pagination]}
        className="mySwiper "
        style={{}}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default RatingCards;
