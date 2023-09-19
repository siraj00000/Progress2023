import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./swiper.css";

// import required modules
import { Pagination } from "swiper";

type ComponentSwiperProps = {
  data: Array<any>;
  Component: React.ElementType;
  itemPerSlide: number;
  spacer?: boolean;
};

const ComponentSwiper: React.FC<ComponentSwiperProps> = ({
  data,
  Component,
  itemPerSlide = 1,
  spacer = false,
}) => {
  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        observeParents={true}
        observer={true}
        slidesPerView={itemPerSlide}
        className={spacer ? "myslider" : ""}
      >
        {data.map((data, index) => (
          <SwiperSlide className="relative" key={index}>
            <Component {...data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default ComponentSwiper;
