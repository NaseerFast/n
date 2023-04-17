


import Image from 'next/image';
// import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
// import Footer from '../../components/Footer';
import { Store } from '../../utils/Store';
// import { Fragment } from 'react';
import db from '../../utils/db';
import JobListing from '../../models/Jobs';
import Layout from '../../components/layout/';

// const navigation = [
//     { name: 'Store', href: '#' },
//     { name: 'Directory', href: '#' },
//     { name: 'Tender', href: '#' },
//     { name: 'Advertisement', href: '#' },
//   ]



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



  // function classNames(...classes) {
  //   return classes.filter(Boolean).join(' ')
  // }
  

export default function JobScreen(props) {
  const { joblistings } = props;
  // const { state, dispatch } = useContext(Store);
  // const router = useRouter();
  if (!joblistings) {
    return <Layout title="Produt Not Found">Job Not Found</Layout>;
  }
  return (
    <Layout>
    <div className="bg-neutral-900">

          
{/* <div>
        <div className=" mx-auto bg-yellow-300 pb-8">
            <div className="flex items-center justify-between  pt-6">
                <div className="hidden w-full text-gray-600 md:flex md:items-center px-4 sm:px-6 lg:px-8">
                <img
                          alt="Workflow"
                          className="h-8 w-auto sm:h-10"
                          src="/images/logo.png"
                        />
                </div>
                <div className="w-full text-gray-700 md:text-center text-2xl font-semibold">
                    #BornoYellowPages
                </div>
                <div className="flex items-center justify-end w-full px-4 sm:px-6 lg:px-8">
   
                </div>
            </div>
            <nav  className="sm:flex sm:justify-center sm:items-center mt-4">
                <div className="flex flex-col sm:flex-row">
                    <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Home</a>
                    <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Shop</a>
                    <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Categories</a>
                    <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Contact</a>
                    <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">About</a>
                </div>
            </nav>
            <div className="relative mt-6 max-w-lg mx-auto">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </span>

        <form onSubmit={submitHandler}>
                <input className="w-full border rounded-md pl-10 pr-4 py-2 bg-neutral-800 focus:border-white focus:outline-none focus:shadow-outline text-white" type="text" placeholder="Search" name="name" onChange={queryChangeHandler} />
                </form>
            </div>
        </div>
    </div> */}

 

 

    <div className="container mx-auto flex flex-wrap  text-gray-400  " >

        {/* <!-- Posts Section --> */}
        <section className="w-full md:w-2/3 flex flex-col items-center px-3 ">

            <article className="flex flex-col shadow my-4 bg-neutral-800">
                {/* <!-- Article Image --> */}
                {/* <a href="#" className="hover:opacity-75">
                    <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"/>
                </a> */}
                <div className=" flex flex-col justify-start border border-neutral-800 ">
                  
                  <div className="md:inline-flex md:space-x-3 bg-neutral-900 p-4">
                <img  className=" " src="/images/logo-3.jpg" alt="Default avatar"  style={{width:80}}/>
               
                <div className="bg-neutral-900">
                <p className="font-bold  mt-4 uppercase text-lg text-white" href="#">
               {joblistings.title} <span className="text-xl capitalize font-medium text-white">({joblistings.location})</span>
            </p>
            <p className="text-lg text-white">
             {joblistings.employer}
            </p>
            </div>
            </div>
                    {/* <p href="#" className="text-sm pb-3">
                        By <a href="#" className="font-semibold hover:text-gray-800">David Grzyb</a>, Published on April 25th, 2020
                    </p> */}
                    <div className="p-4 bg-neutral-900">   
                     
                     <ul>
                    <li><span className="font-bold">Oranization:</span> {joblistings.employer} </li>
                    <li><span className="font-bold">Locaton:</span> {joblistings.location} </li>
                    <li><span className="font-bold">Grade:</span> Mid Level </li>
                    <li><span className="font-bold">Closing Date:</span> 2022-10-12 </li>
                     </ul>
                    
                    </div>

                 

                    <div className="mt-1 bg-neutral-900 p-4">
                    <h3 className="text-sm md:text-lg font-medium  ">Details</h3>
                    <p href="#" className="mt-4 text-xs md:text-sm ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</p>
                    
                    <h3 className="text-sm md:text-lg font-medium  mt-4">Responsibilities</h3>
                          
                    <div className="mt-4">
                      <ul role="list" className=" pl-4 list-disc  space-y-2">

                        {product.highlights.map((item) => (
                        <li key={item} className="text-xs md:text-sm">
                           <span item="">{item}</span>
                     </li>
                                  ))}
                              </ul>
                          </div>
                      </div>

                      
                    <div className="bg-neutral-900 p-4">
                          <h3 className="text-sm md:text-lg font-medium ">Requirements</h3>

                          <div className="mt-4">
                              <ul role="list" className="pl-4 list-disc  space-y-2 ">
                                  {product.highlights.map((highlight) => (
                                      <li key={highlight} className="">
                                          <span className="">{highlight}</span>
                                      </li>
                                  ))}
                              </ul>
                          </div>
                      </div>

                         <div className="p-2">
                         <h3 className="text-sm md:text-lg font-medium ">How to apply</h3>
                         <p className="text-sm text-gray-400">
 Interested and qualified candidates should:
 Click here to apply online
 Or
 Send their Cover Letter and CV to “The Human Resources Officer (CBI)” via: <span className="text-yellow-300 hover:underline">recruitment.carebestinitiative@gmail.com </span> specifying the Job Title as the subject of the mail.</p>
                       </div>
                </div>
               
            </article>

          


            {/* <!-- Pagination --> */}
            {/* <div className="flex items-center py-8">
                <a href="#" className="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center">1</a>
                <a href="#" className="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center">2</a>
                <a href="#" className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">Next <i className="fas fa-arrow-right ml-2"></i></a>
            </div> */}




        </section>

        
        {/* <!-- Sidebar Section --> */}
        <div className="w-full md:w-1/3 flex flex-col items-center px-3">

            <div className="w-full bg-neutral-800 shadow flex flex-col my-4 p-6">
                {/* <p className="text-xl font-semibold pb-5 text-white">Recruiting?</p>
                <p className="pb-2 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis est eu odio sagittis tristique. Vestibulum ut finibus leo. In hac habitasse platea dictumst.</p>
                */}
                <a href="#" className="w-full bg-white text-neutral-900 font-bold text-sm uppercase rounded hover:bg-neutral-900 hover:text-white flex items-center justify-center px-2 py-2 mt-4">
                   I&lsquo;m interested
                </a>

                <a href="#" className="w-full bg-white text-neutral-900 font-bold text-sm uppercase rounded hover:bg-neutral-900 hover:text-white flex items-center justify-center px-2 py-2 mt-4">
                   Refer a friend
                </a>

                <div className=" mt-4 space-y-2">
                  <p>Share this job</p>
                <div className="inline-flex space-x-3 ">
                <li><svg className="w-6 h-6 text-neutral-700 hover:text-neutral-900 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/> </svg></li>
                <li><svg className="w-6 h-6 text-neutral-700 hover:text-neutral-900 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/> </svg></li>
                <li><svg className="w-6 h-6 text-neutral-700 hover:text-neutral-900 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg></li>
                <li><svg className="w-6 h-6 text-neutral-700 hover:text-neutral-900 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path> </svg></li>
  


                </div>
                </div>
                
            </div>

            <div className="w-full  shadow flex flex-col my-4 p-6 bg-neutral-800">
                <p className="text-xl font-semibold pb-5 text-white">Ad</p>
                <div className="grid grid-cols-3 gap-3">
                    <img alt="img-1" className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=1" />
                    <img alt="img-1" className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=2"/>
                    <img alt="img-1" className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=3"/>
                    <img alt="img-1" className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=4"/>
                    <img alt="img-1" className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=5"/>
                    <img alt="img-1" className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=6"/>
                    <img alt="img-1" className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=7"/>
                    <img alt="img-1"className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=8"/>
                    <img alt="img-1" className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=9"/>
                </div>
                <a href="#" className="w-full bg-yellow-500 text-white font-bold text-sm uppercase rounded hover:bg-yellow-600 flex items-center justify-center px-2 py-3 mt-6">
                    <i className="fab fa-instagram mr-2"></i> Follow @dgrzyb
                </a>
            </div>

        </div>

        </div>
         {/* <div className="px-10">
         <SimilarCompanies similarCompanies={similarCompanies}/>
         </div>           */}
      
      </div>
      
      
      
      
      </Layout>
    
  );
}
export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const joblistings = await JobListing.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: {
      joblistings: joblistings ? db.convertDocToObj(joblistings) : null,
    },
  };
}