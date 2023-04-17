


import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import Footer from '../../components/Footer';
import { Store } from '../../utils/Store';
import { Fragment } from 'react';
import db from '../../utils/db';
import TenderModel from '../../models/Tender';
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


export default function TenderScreen(props) {
  const { tenderlistings } = props;
  // const { state, dispatch } = useContext(Store);
  // const router = useRouter();
  if (!tenderlistings) {
    return <Layout title="Produt Not Found">Tender Not Found</Layout>;
  }
  return (
    <Layout>
    <div className="bg-neutral-900 pt-8">







    <div className="container mx-auto flex flex-wrap  text-gray-700  " >

        {/* <!-- Posts Section --> */}
        <section className="w-full md:w-2/3 flex flex-col items-center px-3 ">

            <article className="flex flex-col shadow my-4">
                {/* <!-- Article Image --> */}
                {/* <a href="#" class="hover:opacity-75">
                    <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"/>
                </a> */}
                <div className=" flex flex-col justify-start p-6 border border-gray-700">

                  <div className="md:inline-flex md:space-x-3">
                {/* <img className=" " src="/images/logo-3.jpg" alt="Default avatar"  style={{width:80}}/> */}

                <div>
                <p className="font-bold  mt-4 uppercase text-xl text-white" href="#">
               {tenderlistings.title} in <span className=" normal-case font-medium text-white">({tenderlistings.location})</span>
            </p>
            <p className="text-lg text-white">
             {tenderlistings.employer}
            </p>
            </div>
            </div>
                    {/* <p href="#" class="text-sm pb-3">
                        By <a href="#" class="font-semibold hover:text-gray-800">David Grzyb</a>, Published on April 25th, 2020
                    </p> */}
                    <div className="py-4">
                     <h3 className="text-lg font-medium text-white ">Details</h3>

                    <p href="#" className="mt-4 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</p>
                    {/* <a href="#" class="uppercase text-gray-800 hover:text-black">Continue Reading <i class="fas fa-arrow-right"></i></a> */}
                    </div>

                    <div className="mt-10">
                          <h3 className="text-sm font-medium text-white">Responsibilities</h3>

                          <div className="mt-4">
                              <ul role="list" className="pl-4 list-disc  text-white space-y-2">

                                  {product.highlights.map((item) => (
                                      <li key={item} className="">
                                          <span item="">{item}</span>
                                      </li>
                                  ))}
                              </ul>
                          </div>
                      </div>


                    <div className="mt-10">
                          <h3 className="text-sm font-medium text-white">Requirements</h3>

                          <div className="mt-4">
                              <ul role="list" className="pl-4 list-disc  space-y-2 text-white">
                                  {product.highlights.map((highlight) => (
                                      <li key={highlight} className="">
                                          <span className="">{highlight}</span>
                                      </li>
                                  ))}
                              </ul>
                          </div>
                      </div>

                         <div className="mt-6 inline-flex   justify-between px-2 py-2">
                           <p className="hover:bg-yellow-300 px-2 py-2 text-yellow-300 hover:text-neutral-900 font-medium  inline-block cursor-pointer rounded-sm">Download document</p>
                          <p className=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLineCap="round" strokeLineJoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
</svg>
</p>
                       </div>
                </div>

            </article>




            {/* <!-- Pagination --> */}
            {/* <div class="flex items-center py-8">
                <a href="#" class="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center">1</a>
                <a href="#" class="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center">2</a>
                <a href="#" class="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">Next <i class="fas fa-arrow-right ml-2"></i></a>
            </div> */}




        </section>


        {/* <!-- Sidebar Section --> */}
        <div className="w-full md:w-1/3 flex flex-col items-center px-3">

            <div className="w-full bg-neutral-800 shadow flex flex-col my-4 p-6">
                <p className="text-xl font-semibold pb-5 text-white">About Us</p>
                <p className="pb-2 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis est eu odio sagittis tristique. Vestibulum ut finibus leo. In hac habitasse platea dictumst.</p>
                <a href="#" className="w-full bg-yellow-500 text-white font-bold text-sm uppercase rounded hover:bg-yellow-600 flex items-center justify-center px-2 py-3 mt-4">
                    Get to know us
                </a>
            </div>

            <div className="w-full  shadow flex flex-col my-4 p-6 bg-neutral-800">
                <p className="text-xl font-semibold pb-5 text-white">Instagram</p>
                <div className="grid grid-cols-3 gap-3">
                    <img alt="image"  className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=1" />
                    <img alt="image"  className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=2"/>
                    <img alt="image"  className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=3"/>
                    <img alt="image"  className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=4"/>
                    <img alt="image"  className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=5"/>
                    <img alt="image"  className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=6"/>
                    <img alt="image"  className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=7"/>
                    <img alt="image"  className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=8"/>
                    <img alt="image"  className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=9"/>
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
  const tenderlistings = await TenderModel.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: {
      tenderlistings: tenderlistings ? db.convertDocToObj(tenderlistings) : null,
    },
  };
}
