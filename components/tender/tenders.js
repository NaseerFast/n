import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Navigation, Scrollbar } from "swiper";
import Image from 'next/image';
import "swiper/css";
import "swiper/css/pagination";
import NextLink from 'next/link'
import { useRouter } from 'next/router';
// import required modules
import { Pagination } from "swiper";

export default function NewJobs({latestjobs}) {

  const router = useRouter();

  const clickHandler = () => {
    router.push(`/jobsearch`);
  
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


        {latestJobsItems.map((item, i) => (
          
        <SwiperSlide key={i}>
      <NextLink href={`/job/${item.slug.current}`} passHref  >       
       <div  className="p-2 md:p-3 py- max-w-sm    border border-neutral-800 space-y-3 cursor-pointer bg-neutral-900  ">
       <img  className=" " src="/images/logo-3.jpg" alt="Default avatar"  style={{width:50}}/>
      <div className="flex justify-between ">
      <h5 className=" text-base font-medium tracking-tight truncate  text-white ">{item.title}</h5>
        <p className="text-gray-400 text-xs pt-1">3 days ago</p>
        </div>
    <p className="text-left text-white font-medium text-xs">{item.employer}</p>
     <p className="text-left font-normal text-xs text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
     <p className="text-left text-white font-medium text-xs">Closing 28th of July</p>
  <p className="text-left text-white font-medium text-xs">{item.location} |  Internship</p>


{/* 
   <div className="text-left inline-flex justify-between space-x-3 text-xs font-medium">
       <p className=" py-2  px-3 bg-yellow-500 rounded-md ">Apply</p>
       <p className=" py-2  px-3 bg-gray-100 rounded-md">Details</p>
       </div> */}
   

  </div>
  </NextLink>

</SwiperSlide>

 ))}
      </Swiper>
      <div className='flex items-center justify-center mt-10'>

  <button onClick={clickHandler} className="bg-transparent hover:bg-yellow-500 text-yellow-300 font-semibold hover:text-white py-2 px-4 border border-yellow-300 hover:border-transparent rounded ">Search All Jobs</button>
</div>

    </div>
  );
}
