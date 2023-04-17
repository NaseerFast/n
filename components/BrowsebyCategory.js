
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Scrollbar } from "swiper";
// import { urlForThumbnail } from "../utils/image";
import "swiper/css";
import "swiper/css/pagination";
import NextLink from 'next/link'
import Image from 'next/image';
// import required modules
// import { Pagination } from "swiper";

export default function BrowseByCategory() {


  

  


     
// const latestJobsCategories = [

//      "IT - Software Development",
//      "Customer Service",
//      "Human Resources",
//      "Other",
//      "Accounting & Finance",
//      "Marketing - Digital",
//      "Creative Writing",
//      "Sales (Corporate, Real Estate, Telesales, etc.)",
//      "Project Management",
//    ];


// const ffeaturedproducts = [
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

     const categories = [
        {
            name:  "Electronics",
            image: "/images/books.jpg",
            value: "Pants" ,
            checked: false,
           },
        { 
            name:"Cameras",
            image: "/images/category-2.jpg",
            value: "Cameras",
            checked: false,
        }, 
       {
            name:"Bags",
            image: "/images/bags.jpg",
            value: "Televisions",
            checked: false,
       },
          
       {
            name:"Books",
            image:"/images/books.jpg",
            value: "Books",
            checked: false,
       },
       {
            name:"Fiction Books",
            image:"/images/category-3.jpg",
            value:"Fiction Books",
            checked: false,
       },  
        {
      
            name:"Exam Books",
            image:"/images/category-3.jpg",
            value:"Exam Books",
            checked: false,
        },
        {
            name:  "Electronics",
            image: "/images/category-3.jpg",
            value: "Electronics" ,
            checked: false,
           },
        { 
            name:"Cameras",
            image: "/images/category-2.jpg",
            value: "Cameras",
            checked: false,
        }, 
       {
            name:"Televisions",
            image: "/images/category-3.jpg",
            value: "Televisions",
            checked: false,
       },
          
       {
            name:"Books",
            image:"/images/category-2.jpg",
            value: "Books",
            checked: false,
       },
       {
            name:"Fiction Books",
            image:"/images/category-3.jpg",
            value:"Fiction Books",
       },  
        {
      
            name:"Exam Books",
            image:"/images/category-3.jpg",
            value:"Exam Books",
        },
         
        ];
        
  return (
    <div className=" " >

<div className="mb-4 flex items-center justify-between pt-6" >
        <h2 className="text-xl md:text-2xl font-bold text-white"> Shop by Category</h2>
        <span
    className="px-4 py-1 rounded-full border border-gray-300 text-gray-500 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
    Show All
  </span>
      </div>
      {/* <div className="" >
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
            <div className="flex flex-wrap justify-center space-x-2">
  <span
    className="px-4 py-1   rounded-full border border-gray-300 text-gray-500 font-semibold text-xs md:text-sm  align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
    {item}
  </span>
  </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}
      <Swiper
      
        slidesPerView={2}
        spaceBetween={8}
       breakpoints={{
            "475": {
              slidesPerView: 3,
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


        {categories.map((item, i) => (
          <div className="" key={i}>
        <SwiperSlide key={i}>
        <NextLink  href={`/search?category=${item.value}`} passHref> 
       <div className="bg-white w-full min-h-70 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75  lg:aspect-none "  >
        <img alt="image" src={item.image}/>
        {/* <p class="absolute text-sm text-black ">
            {item.name}</p> */}
        
       
    </div>
          
</NextLink>

</SwiperSlide>
</div>

 ))}
      </Swiper>
    </div>
  );
}
