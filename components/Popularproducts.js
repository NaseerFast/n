import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Navigation, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import NextLink from 'next/link'
import Image from 'next/image';
// import required modules
import { Pagination } from "swiper";
var formatter = new Intl.NumberFormat( {
  style: 'currency',
  currency: 'NGN',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});


export default function Popular({popularproducts}) {

     


// const popularproducts = [
//   {
//       name: 'Classic Pants',
//       slug: 'classic-pants',
//       category: 'Pants',
//       image: '/images/10003.jpg',
//       price: 75,
//       brand: 'Casely',
//       rating: 2.4,
//       numReviews: 14,
//       countInStock: 20,
//       description: 'A popular pants',
      
//   },{
//     name: 'Classic Pants',
//       slug: 'classic-pants',
//       category: 'Pants',
//       image: '/images/10002.jpg',
//       price: 75,
//       brand: 'Casely',
//       rating: 2.4,
//       numReviews: 14,
//       countInStock: 20,
//       description: 'A popular pants',
//   },{
//     name: 'Classic Pants',
//       slug: 'classic-pants',
//       category: 'Pants',
//       image: '/images/10001.jpg',
//       price: 75,
//       brand: 'Casely',
//       rating: 2.4,
//       numReviews: 14,
//       countInStock: 20,
//       description: 'A popular pants',
//   },{
//     name: 'Classic Pants',
//       slug: 'classic-pants',
//       category: 'Pants',
//       image: '/images/10005.jpg',
//       price: 75,
//       brand: 'Casely',
//       rating: 2.4,
//       numReviews: 14,
//       countInStock: 20,
//       description: 'A popular pants',
//   },{
//     name: 'Classic Pants',
//       slug: 'classic-pants',
//       category: 'Pants',
//       image: '/images/10003.jpg',
//       price: 75,
//       brand: 'Casely',
//       rating: 2.4,
//       numReviews: 14,
//       countInStock: 20,
//       description: 'A popular pants',
//   },
//   {
//     name: 'Classic Pants',
//       slug: 'classic-pants',
//       category: 'Pants',
//       image: '/images/10006.jpg',
//       price: 75,
//       brand: 'Casely',
//       rating: 2.4,
//       numReviews: 14,
//       countInStock: 20,
//       description: 'A popular pants',
//   }
// ]

    
  return (
    <div className=" " >

<div className="mb-4 flex items-center justify-between pt-6" >
        <h2 className="text-xl md:text-2xl font-bold text-white"> Popular Products</h2>
        <span
    className="px-4 py-1 rounded-full border border-gray-300 text-gray-500 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
    Show All
  </span>
      </div>

      <Swiper
      
        slidesPerView={2}
        spaceBetween={8}
       breakpoints={{
            "475": {
              slidesPerView: 3,
            },
            "640": {
              slidesPerView: 3,
            },
            "1024": {
              slidesPerView: 4,
            },
          }}
        scrollbar={{ draggable: true, hide: true }}
        freeMode={true}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        className="mySwiper"
      >


        {popularproducts.map((item, i) => (
          <div className="" key={i}>
        <SwiperSlide key={i}>
        <a href={`/product/${item.slug}`} passHref> 
          <div className="  text-xs border border-gray-200  bg-white" >
      
      <div className="w-full  aspect-w-1 aspect-h-1  overflow-hidden group-hover:opacity-75 lg:h-40 max-h-70 lg:aspect-none  "  >
            <img src={item.image}
            alt="Front of men&#039;s Basic Tee in black." className="w-full h-full object-center object-cover "/>
          </div>
          <div className="p-2 opacity-100 " >
             <p className=" text-neutral-800 text-xs font-semibold md:text-sm truncate">{item.name}</p>
             <p className="text-black text-xs md:text-sm">N {formatter.format(`${item.price}`)}</p>
             </div>
          </div>  
          
</a>

</SwiperSlide>
</div>

 ))}
      </Swiper>
    </div>
  );
}
