import Image from 'next/image';
import NextLink from 'next/link';
import React,{useState} from 'react';
import { useRouter } from 'next/router';
import Footer from '../../components/Footer';

import db from '../../utils/db';
// import axios from 'axios';
import Listing from '../../models/Listing';
import Layout from '../../components/layout/index.js';
import { Fragment } from 'react';
 import {  Transition, Menu } from '@headlessui/react'
 import { ChevronDownIcon } from '@heroicons/react/solid'

// import SimilarCompanies from '../../components/RelatedCompanies';
import Gallery from '../../components/directory/Gallery';
import DetailsTabs from '../../components/directory/Tabs';
// import {urlForThumbnail}




const product = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    breadcrumbs: [
      { id: 1, name: 'Company', href: '#' },
      { id: 2, name: 'Company', href: '#' },
    ],
    images: [
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
        alt: 'Two each of gray, white, and black shirts laying flat.',
      },
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
        alt: 'Model wearing plain black basic tee.',
      },
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
        alt: 'Model wearing plain gray basic tee.',
      },
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
        alt: 'Model wearing plain white basic tee.',
      },
    ],
  
    description:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
      'Hand cut and sewn locally',
      'Dyed with our proprietary colors',
      'Pre-washed & pre-shrunk',
      'Ultra-soft 100% cotton',
    ],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  }



  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  

export default function CompanyScreen(props) {
  // const { state, dispatch } = useContext(Store);
   const { listings } = props;
  // const { state, dispatch } = useContext(Store);
  // const router = useRouter();
  const router = useRouter();
  const [query, setQuery] = useState('');
  const queryChangeHandler = (e) => {
    setQuery(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/directorysearch?query=${query}`);
  };
  
  if (!listings) {
    return <Layout title="Produt Not Found">Produt Not Found</Layout>;
  }

  return (
    <Layout>
   




          {/* <!-- Text Header --> */}
  <main className="bg-neutral-900">
    <header className="w-full  mx-auto ">
        <div className="flex flex-col items-center py-12">
            <a className="font-bold text-white uppercase hover:text-gray-700 text-2xl md:text-5xl" href="#">
               {listings.name}
            </a>
            <p className="text-lg text-gray-600">
              
<div className="flex items-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
</div>

            </p>
        </div>
    </header>

      {/* <!-- Topic Nav --> */}
     <nav className="w-full py-4 border-t border-b border-neutral-800 px-8" x-data="{ open: false } ">
          <div className="block sm:hidden">
            <a
                href="#"
                className="block md:hidden text-base font-bold uppercase text-center flex justify-center items-center text-white"
            
            >
                Contact Details <i ></i>
            </a>
        </div>
          <div >
            <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-xs font-bold uppercase mt-0 px-6 ">
                <a href="#" className="hover:bg-neutral-800 hover:text-white rounded py-2 px-4 mx-2 inline-flex justify-center text-white"><span className="mx-2 "><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLineCap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg></span>07012674001</a>
                <a href="#" className="hover:bg-neutral-800 hover:text-white rounded py-2 px-4 mx-2 inline-flex text-white"><span  className="mx-2" ><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
   </svg></span>jaafar.nasir71@gmail.com</a>
                {/* <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">@Naseerjae</a> */}
                <a href="#" className="hover:bg-neutral-800 hover:text-white  rounded py-2 px-4 mx-2 inline-flex text-white"><span  className="mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
</svg></span>gadgetscrib.com.ng</a>
                <a href="#" className="hover:bg-neutral-800 hover:text-white rounded py-2 px-4 mx-2 inline-flex text-white"><span className='mx-2'><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
   </svg></span>Share</a>
                {/* <a href="#" className="hover:bg-gray-400 rounded  px-4 mx-2 text-white">Sports</a> */}
            </div>
        </div>
    </nav>

    <div className="container mx-auto flex flex-wrap py-6">

        {/* <!-- Posts Section --> */}
        <section className="w-full md:w-2/3 flex flex-col items-center md:px-3">
          <DetailsTabs listings={listings}/>

        

            {/* <article className="flex flex-col shadow my-4">
                {/* <!-- Article Image --> *
                <a href="#" className="hover:opacity-75">
                    <img layout="fill" src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" alt="image" passHref/>
                </a>
                <div className=" flex flex-col justify-start py-2 text-gray-400">
                    {/* <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">07012674001</a> *
                    <p href="#" className="text-2xl font-bold text-white hover:text-gray-700 pb-4">Details</p>
                    {/* <p href="#" className="text-sm pb-3">
                        By <a href="#" className="font-semibold hover:text-gray-800">David Grzyb</a>, Published on April 25th, 2020
                    </p> 
                    <p href="#" className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</p>
                    {/* <a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a> 
                
                    <div className="mt-10">
                          <h3 className="text-sm font-medium ">Highlights</h3>

                          <div className="mt-4">
                              <ul role="list" className="pl-4 list-disc  space-y-2">
                                  {product.highlights.map((highlight) => (
                                      <li key={highlight} className="">
                                          <span className="">{highlight}</span>
                                      </li>
                                  ))}
                              </ul>
                          </div>
                      </div>

                        
                </div>
               
            </article> */}

          


            {/* <!-- Pagination --> */}
            {/* <div className="flex items-center py-8">
                <a href="#" className="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center">1</a>
                <a href="#" className="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center">2</a>
                <a href="#" className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">Next <i className="fas fa-arrow-right ml-2"></i></a>
            </div> */}




        </section>

        
        {/* <!-- Sidebar Section --> */}
        <div className="w-full md:w-1/3 flex flex-col items-center px-3">

            <div className="w-full bg-neutral-800 shadow flex flex-col my-4 p-6 text-white rounded-md">
                <p className="text-xl font-semibold pb-5">Ad</p>
                <p className="pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis est eu odio sagittis tristique. Vestibulum ut finibus leo. In hac habitasse platea dictumst.</p>
                {/* <p className="w-full bg-yellow-300 text-white font-bold text-sm uppercase rounded  flex items-center justify-center px-2 py-3 mt-4">
                   <NextLink href="#" passHref>Get to know us</NextLink> 
                </p> */}
            </div>

            <div className="w-full bg-neutral-800 shadow flex flex-col my-4 p-6 text-white rounded-md">
                <p className="text-xl font-semibold pb-5">Instagram</p>
                <div className="grid grid-cols-3 gap-3">
                    <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=1" alt="image" passHref/>
                    <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=2" alt="image" passHref/>
                    <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=3" alt="image" passHref/>
                    <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=4" alt="image" passHref/>
                    <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=5" alt="image" passHref/>
                    <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=6"alt="image" passHref />
                    <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=7" alt="image" passHref/>
                    <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=8" alt="image" passHref/>
                    <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=9" alt="image" passHref/>
                </div>
                <a href="#" className="w-full bg-yellow-300 text-white font-bold text-sm uppercase rounded hover:bg-yellow-600 flex items-center justify-center px-2 py-3 mt-6">
                    <i className="fab fa-instagram mr-2"></i> Follow @dgrzyb
                </a>
            </div>

        </div>

        </div>
         <div className="px-10 pb-10">
          {/* <Gallery /> */}
         {/* <SimilarCompanies similarCompanies={similarCompanies}/> */}
         
         </div>          
       
  </main>
      
      
    
      
      </Layout>
    
  );
}
export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const listings = await Listing.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: {
      listings: listings ? db.convertDocToObj(listings) : null,
    },
  };
}