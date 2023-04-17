import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import NextLink from 'next/link';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from '../styles/slider.module.css';

// import required modules
import { Navigation, Pagination } from "swiper";

export default function Featured() {

  
  return (
    
    <div className={styles.container}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={true}
        history={{
          key: "slide",
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper h-full "
      >
        <SwiperSlide  className={styles.content_bg}>
         
       
          </SwiperSlide>
        <SwiperSlide >Slide 2</SwiperSlide>
        <SwiperSlide >Slide 3</SwiperSlide>
        
      </Swiper>
      </div>
    
  );
}
