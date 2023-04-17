import React, { useRef, useState } from "react";
import Image from  'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Navigation, Scrollbar } from "swiper";
// import { urlForThumbnail } from "../utils/image";
import "swiper/css";
import "swiper/css/pagination";
import NextLink from 'next/link';

// import required modules
import { Pagination } from "swiper";

var formatter = new Intl.NumberFormat({
  style: 'currency',
  currency: 'NGN',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});


export default function FeaturedProducts({products}) {

     
const latestJobsCategories = [

     "IT - Software Development",
     "Customer Service",
     "Human Resources",
     "Other",
     "Accounting & Finance",
     "Marketing - Digital",
     "Creative Writing",
     "Sales (Corporate, Real Estate, Telesales, etc.)",
     "Project Management",
   ];


const ffeaturedproducts = [
  {
      name: 'Classic Pants',
      slug: 'classic-pants',
      category: 'Pants',
      image: '/images/10003.jpg',
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
      image: '/images/10002.jpg',
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
      image: '/images/10001.jpg',
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
      image: '/images/10005.jpg',
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
      image: '/images/10003.jpg',
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
      image: '/images/10006.jpg',
      price: 75,
      brand: 'Casely',
      rating: 2.4,
      numReviews: 14,
      countInStock: 20,
      description: 'A popular pants',
  }
]

     const latestJobsItems = [
          {
            companyName: "Rempel and Sons",
            jobTitle: "Computer Systems Analyst I",
            image: "/images/10001.jpg",
          },
          {
            companyName: "Dietrich, Beahan and Connelly",
            jobTitle: "VP Quality Control",
            image: "/images/10002.jpg",
          },
        
          {
            companyName: "Hahn LLC",
            jobTitle: "Environmental Specialist",
            image: "/images/10003.jpg",
          },
          {
            companyName: "Ziemann, Nicolas and Grady",
            jobTitle: "Web Designer IV",
            image: "/images/10004.jpg",
          },
          {
            companyName: "Bernhard and Sons",
            jobTitle: "Teacher",
            image: "/images/10005.jpg",
          },
        ];
        
  return (
    <div className=" " >

<div className="mb-4 flex items-center justify-between pt-6" >
        <h2 className="text-xl md:text-2xl font-bold text-white"> Feaured Products</h2>
      <NextLink href="/product" passHref>
        <span
    className="px-4 py-1 rounded-full border border-gray-300 text-gray-500 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
    Show All
  </span>
  </NextLink>
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


        {products.map((item, i) => (
          <div className="" key={i}>
        <SwiperSlide key={i}>
        <NextLink  href={`/product/${item.slug}`} passHref> 
          <div className="  text-xs md:border border-neutral-800 " >
      
      <div className="w-full min-h-70 aspect-w-1 aspect-h-1 rounded-t-md overflow-hidden group-hover:opacity-75  lg:aspect-none px- "  >
            <img 
            src={item.image}
            alt={item.imageName}
        />
          </div>
          <div className="mt-2  font-medium p-1 rounded-b-md">
            <div className="showcase">
            <div className="showcase-content">
            
            <a href="#">
              <h4 className="showcase-title text-neutral-400 truncate">{item.name}</h4>
            </a>
      </div>
              {/* <p className="mt-1  text-gray-500">{item.category}</p> */}
            </div>
            <p className=" text-gray-300 font-medium">N {formatter.format(`${item.price}`)}</p>
            
          </div>
          </div>  
          
</NextLink>

</SwiperSlide>
</div>

 ))}
      </Swiper>
    </div>
  );
}
