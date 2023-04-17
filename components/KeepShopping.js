import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Navigation, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import NextLink from 'next/link'
import Image from 'next/image'
// import required modules
import { Pagination } from "swiper";



var formatter = new Intl.NumberFormat({
  style: 'currency',
  currency: 'NGN',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});





export default function KeepShopping({moreproducts}) {

     


const popularproducts = [
  {
      name: 'Classic Pants',
      slug: 'classic-pants',
      category: 'Pants',
      image: '/images/1636.jpg',
      price: 75,
      brand: 'Casely',
      rating: 2.4,
      numReviews: 14,
      countInStock: 20,
      description: 'A popular pants',
      
  },{
    name: 'Classic Pants',
      slug: 'classic-pants',
      category: 'Pants',
      image: '/images/1637.jpg',
      price: 75,
      brand: 'Casely',
      rating: 2.4,
      numReviews: 14,
      countInStock: 20,
      description: 'A popular pants',
  },{
    name: 'Classic Pants',
      slug: 'classic-pants',
      category: 'Pants',
      image: '/images/1831.jpg',
      price: 75,
      brand: 'Casely',
      rating: 2.4,
      numReviews: 14,
      countInStock: 20,
      description: 'A popular pants',
  },{
    name: 'Classic Pants',
      slug: 'classic-pants',
      category: 'Pants',
      image: '/images/2218.jpg',
      price: 75,
      brand: 'Casely',
      rating: 2.4,
      numReviews: 14,
      countInStock: 20,
      description: 'A popular pants',
  },{
    name: 'Classic Pants',
      slug: 'classic-pants',
      category: 'Pants',
      image: '/images/2220.jpg',
      price: 75,
      brand: 'Casely',
      rating: 2.4,
      numReviews: 14,
      countInStock: 20,
      description: 'A popular pants',
  },
  {
    name: 'Classic Pants',
      slug: 'classic-pants',
      category: 'Pants',
      image: '/images/2227.jpg',
      price: 75,
      brand: 'Casely',
      rating: 2.4,
      numReviews: 14,
      countInStock: 20,
      description: 'A popular pants',
  }
]

    
  return (
    <div className="px-4 " >

<div className="mb-4 flex items-center justify-between pt-6" >
        <h2 className="text-xl md:text-2xl font-bold text-white"> Keep Shopping</h2>
        
      </div>

      <Swiper
      
        slidesPerView={2}
        spaceBetween={8}
       breakpoints={{
            "475": {
              slidesPerView: 2,
            },
            "640": {
              slidesPerView: 4,
            },
            "1024": {
              slidesPerView: 5,
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


        {moreproducts.map((item, i) => (
          <div className="" key={i}>
        <SwiperSlide key={i}>
        <NextLink href={`/product/${item.slug}`} passHref> 
<a href="#" className="flex flex-col   shadow-md flex-row md:max-w-xl ">
    <img className="xl:object-cover xl:h-96  md:h-auto  lg:w-full md:rounded-none md:rounded-t-lg" src={item.image} alt=""/>
    <div className="flex flex-col justify-between p-2 leading-normal rounded-b-md">
        <h5 className=" text-sm font-semibold  text-gray-100 truncate">{item.name}</h5>
        <p className=" text-sm  font-medium text-gray-100 ">N {formatter.format(`${item.price}`)}</p>
    </div>
</a>

          
</NextLink>

</SwiperSlide>
</div>

 ))}
      </Swiper>
    </div>
  );
}
