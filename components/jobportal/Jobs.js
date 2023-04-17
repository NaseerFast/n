import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Navigation, Scrollbar } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import NextLink from 'next/link'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Pagination } from "swiper";

export default function NewJobs({latestjobs}) {

  const router = useRouter();

  const clickHandler = () => {
    router.push(`/jobs/search`);
  
  }
     
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




     const latestJobsItems = [
          {
            companyName: "Rempel and Sons",
            jobTitle: "Computer Systems Analyst I",
            image: "/images/08.jpg",
            slug: "rampel-sons"
          },
          {
            companyName: "Dietrich, Beahan and Connelly",
            jobTitle: "VP Quality Control",
            image: "/images/09.jpg",
            slug: "dietrich-beahan-and-connely"
          },
        
          {
            companyName: "Hahn LLC",
            jobTitle: "Environmental Specialist",
            image: "/images/12.jpg",
            slug: "hahn-llc"
          },
          {
            companyName: "Ziemann, Nicolas and Grady",
            jobTitle: "Web Designer IV",
            image: "/images/04.jpg",
            slug: "ziemann-nicolas-grady"
          },
          {
            companyName: "Bernhard and Sons",
            jobTitle: "Teacher",
            image: "/images/05.jpg",
            slug: "bernard-and-sons"
          },
        ];
        
  return (
    <div className="my-8">

<div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl md:text-2xl font-bold text-white">Latest Jobs</h2>
        {/* <span
    className="px-4 py-1 rounded-full border border-gray-300 text-gray-500 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
    Show All
  </span> */}
      </div>
      {/* <div  >
      <Swiper
          modules={[FreeMode, Scrollbar, Mousewheel]}
          direction="horizontal"
          freeMode={true}
          mousewheel={true}
          scrollbar={{ draggable: true, hide: true }}
          slidesPerView="auto"
          spaceBetween={8}
          id="latest-jobs__categories__slider"
          className="!py-4"
        >
          <SwiperSlide className="!w-auto">
          <span
   className="px-4 py-1 rounded-full border border-gray-300 text-gray-500 font-semibold text-xs md:text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
   All
  </span>
          </SwiperSlide>
          {latestJobsCategories.map((item, i) => (
            <SwiperSlide key={i} className="!w-auto">
            <div class="flex flex-wrap justify-center space-x-2">
  <span
    className="px-4 py-1  rounded-full border border-gray-300 text-gray-500 font-semibold text-xs md:text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
    {item}
  </span>
  </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}
      <Swiper
      
        slidesPerView={1}
        spaceBetween={20}
       breakpoints={{
            "475": {
              slidesPerView: 1,
            },
            "640": {
              slidesPerView: 2,
            },
            "1024": {
              slidesPerView: 3,
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


        {latestjobs.map((item, i) => (
          
        <SwiperSlide key={i}>
   <a href={`/jobs//${item.slug}`}>         
  <div className="  mb-7 bg-neutral-800 p-4 shadow rounded mx-auto md:border border-neutral-800 md:bg-neutral-900 cursor-pointer">

<div 

className="flex border-b border-neutral-800 pb-6">
      <img src="https://cdn.tuk.dev/assets/components/misc/doge-coin.png" alt className="w-10 h-10 rounded-full" />
      <div className="flex items-start justify-between w-full">
       <div className="pl-1 w-full">
       <p className="text-sm md:text-sm font-medium leading-5 text-gray-400 text-left">{item.title}</p>
       <p className="text-sm md:text-xs leading-normal pt- text-gray-500 text-left">{item.employer}</p>
       <p className="text-sm md:text-xs leading-normal pt- text-gray-500 text-left">{item.location}</p>
      </div>
       <svg width={28} height={28} viewBox="0 0 28 28" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z" stroke="#2C3E50" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
                        </div>
                    </div>
                    <div className="px-2">
                        <p className="text-sm leading-5 pb-4 text-gray-600 text-left">A group of people interested in dogecoin, the currency and a bit of side for the meme and dof that we all know and love. These cases are perfectly simple and easy to distinguish.</p>
                        <div className="flex">
                            <div className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#Ngo</div>
                            <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#Technology</div>
                        </div>
                    </div>
</div>

</a>
</SwiperSlide>

 ))}
      </Swiper>
      <div className='flex items-center justify-center my-16'>

  <p onClick={clickHandler} className="text-yellow-300 font-semibold hover:text-neutral-900 font-medium hover:bg-yellow-300 py-2 px-4 border border-yellow-300   rounded-sm ">Search All Jobs</p>
</div>

    </div>
  );
}
