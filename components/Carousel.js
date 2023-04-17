
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import Image from 'next/image';
// import styles from '../styles/customslider.module.css';
// // import "./styles.css";

// // import required modules
// import { Autoplay, Pagination, Navigation } from "swiper";

// export default function Carousel() {
//   const images = [
//   {
//     text:'Visit',
//     image: '/images/featured.png',
//     href: "#"


//   },  {
//     text:'Visit 2',
//     image: '/images/featured.png',
//     href: "#"

//   },
//   {
//     text:'Visit',
//     image: '/images/featured.png',
//     href: "#"

//   }
  
//   ];
//   return (
//     <>
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="mySwiper"
//       >
//        {images.map((item, i) => (
//         <div className={styles.imgContainer}  key={i}> 
// <SwiperSlide style={{background:'#fde047'}} >  

// <div className="relative">
// <img src={item.image} alt="" layout="fill" objectFit="contain" />
// <h1 className="absolute text-xs md:text-xl text-white top-1/2  left-1/4 -translate-x-1/2  mt-20 sm:mt-36 lg:mt-56 bg-black  px-4 py-1 rounded-md cursor-pointer hover:opacity-70 ">
//            Shop Now</h1>
//        {/* <h2 class="absolute text-3xl text-amber-400 bottom-5 left-1/2 -translate-x-1/2">Bottom Center</h2>
//         <h3 class="absolute text-2xl text-blue-300 top-5 left-5">Top Left</h3>
//         <h3 class="absolute text-2xl text-green-300 bottom-5 right-5">Bottom Right</h3>  */}
// </div>

// </SwiperSlide>
        
//         </div>
//       ))}
//       </Swiper>
//     </>
//   );
// }


import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";
import styles from '../styles/customslider.module.css';
// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Fetaured() {

    const images = [
  
        "/images/featured.png",
        "/images/adbanner.png",
        "/images/featured.png",
        "/images/featured.png",
    
    
      ];
      const [index, setIndex] = useState(0);
    
      const handleArrow = (direction) =>{
        if(direction==="l"){
            setIndex(index !== 0 ? index-1 : 2)
        }
        if(direction==="r"){
            setIndex(index !== 2 ? index+1 : 0)
        }
    }
  return (
    <div className={styles.swiper}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        //  style: className='swiper-pagination-bullet-active'
        // }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
          <div className={styles.wapper} >
          {images.map((img, i) => (
        <div className={styles.imgContainer}  key={i}> 
<SwiperSlide style={{background:'#fde047'}} >  <img src={img} alt="" layout="fill" objectFit="contain" /></SwiperSlide>
        
        </div>
      ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
        <img src="/images/arrowr.png"  alt=""/>
      </div>
        
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
  );
}
