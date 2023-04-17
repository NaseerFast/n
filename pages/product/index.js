
import { useContext } from 'react';
import { toast } from 'react-toastify';
import Layout from '../../components/product/layout/index';
import Product from '../../models/Product,js';
import db from '../../utils/db';
import { Store } from '../../utils/Store';
import NextLink from 'next/link';
import BrowseByCategory from '../../components/BrowsebyCategory';
import Featured from '../../components/Carousel';
import Popular from '../../components/Popularproducts';
import Image from 'next/image';
import axios from 'axios';
import KeepShopping from '../../components/KeepShopping';
// import Popularproducts from '../../components/Popularproducts';
import YPAd from '../../components/directory/ads/ypad';
import ProductCategories from '../../components/product/layout/productcategories';
import Popularproducts from '../../components/Popular';
import BestOffer from '../../components/Popular';
import ProductGrid from '../../components/Productgridcarousel';
import BestSeller from '../../components/Bestsellers';
import ServicesFeature from '../../components/OurServices';
import OurserviesFeature from '../../components/OurServices-2';
import Banner from '../../components/banner/banner';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon, ChevronUpIcon, FilterIcon, MinusSmIcon, PlusSmIcon, ViewGridIcon } from '@heroicons/react/solid'


var formatter = new Intl.NumberFormat({
    style: 'currency',
    currency: 'NGN',

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

const navigation = {
    categories: [
      {
        id: 'women',
        name: 'Women',
        featured: [
          {
            name: 'New Arrivals',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Basic Tees',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Tops', href: '#' },
              { name: 'Dresses', href: '#' },
              { name: 'Pants', href: '#' },
              { name: 'Denim', href: '#' },
              { name: 'Sweaters', href: '#' },
              { name: 'T-Shirts', href: '#' },
              { name: 'Jackets', href: '#' },
              { name: 'Activewear', href: '#' },
              { name: 'Browse All', href: '#' },
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { name: 'Watches', href: '#' },
              { name: 'Wallets', href: '#' },
              { name: 'Bags', href: '#' },
              { name: 'Sunglasses', href: '#' },
              { name: 'Hats', href: '#' },
              { name: 'Belts', href: '#' },
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Full Nelson', href: '#' },
              { name: 'My Way', href: '#' },
              { name: 'Re-Arranged', href: '#' },
              { name: 'Counterfeit', href: '#' },
              { name: 'Significant Other', href: '#' },
            ],
          },
        ],
      },
      {
        id: 'men',
        name: 'Men',
        featured: [
          {
            name: 'New Arrivals',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork Tees',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Tops', href: '#' },
              { name: 'Pants', href: '#' },
              { name: 'Sweaters', href: '#' },
              { name: 'T-Shirts', href: '#' },
              { name: 'Jackets', href: '#' },
              { name: 'Activewear', href: '#' },
              { name: 'Browse All', href: '#' },
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { name: 'Watches', href: '#' },
              { name: 'Wallets', href: '#' },
              { name: 'Bags', href: '#' },
              { name: 'Sunglasses', href: '#' },
              { name: 'Hats', href: '#' },
              { name: 'Belts', href: '#' },
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Re-Arranged', href: '#' },
              { name: 'Counterfeit', href: '#' },
              { name: 'Full Nelson', href: '#' },
              { name: 'My Way', href: '#' },
            ],
          },
        ],
      },
    ],
    pages: [
      { name: 'Company', href: '#' },
      { name: 'Stores', href: '#' },
    ],
  }


  const subCats = [
    { name: 'Watches', href: '#' },
    { name: 'Wallets', href: '#' },
    { name: 'Bags', href: '#' },
    { name: 'Sunglasses', href: '#' },
    { name: 'Hats', href: '#' },
    { name: 'Belts', href: '#' },
    { name: 'Tops', href: '#' },
    { name: 'Pants', href: '#' },
    { name: 'Jackets', href: '#' },
    
          
             
  ]
  
export default function Home({ products, popularproducts, moreproducts }) {
    const { state, dispatch } = useContext(Store);
    const { cart } = state;


   

    const addToCartHandler = async (product) => {
      const existItem = cart.cartItems.find((x) => x.slug === product.slug);
      const quantity = existItem ? existItem.quantity + 1 : 1;
      const { data } = await axios.get(`/api/products/${product._id}`);

      if (data.countInStock < quantity) {
        return toast.error('Sorry. Product is out of stock');
      }
      dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });

      toast.success('Product added to the cart');
    };

    console.log(moreproducts)

    return (
                <Layout title="Home Page">
                    <main className=" bg-neutral-900 space-y-2 ">
        
                        <div className="grid grid-cols-4   px-6 py-6">
        
                            <div className="hidden md:block  border border-neutral-800 rounded-lg" style={{height: '95%'}}>
                               

                            {subCats && subCats.map((category, i) => (

                            <Disclosure as="div"  className=" px-4 py-5 " key={i}>
                          {({ open }) => (
                            <>
                              <h3 className="-mx-2 -my-3 flow-root">
                                <Disclosure.Button className="px-2  bg-neutral-900 w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                                  <span className="font-medium text-gray-400">{category.name}</span>
                                  <span className="ml-6 flex items-center">
                                    {open ? (
                                      <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                                    ) : (
                                      <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                                    )}
                                  </span>
                                </Disclosure.Button>
                              </h3>
                              <Disclosure.Panel className="pt-6">
                                <div className="space-y-6">
                                 
                                    <div  className="flex ">
                                      <ul className="w-full text-xs md:text-sm font-medium text-gray-400 bg-neutral-900     ">
    
    <li className="py-1 w-full  hover:text-yellow-300 hover:underline hover:border border-neutral-800 inline-flex justify-between">
      <p>
      Supermarket
      </p>

      <p>
200      </p>
      </li>
       
    <li className="py-1 w-full  hover:text-yellow-300 hover:underline hover:border border-neutral-800 inline-flex justify-between">
      <p>
      Health and Beauty
      </p>

      <p>
200      </p>
      </li>
      <li className="py-1 w-full  hover:text-yellow-300 hover:underline hover:border border-neutral-800 inline-flex justify-between">
      <p>
      Phones and Tablets
      </p>

      <p>
200      </p>
      </li>

      <li className="py-1 w-full  hover:text-yellow-300 hover:underline hover:border border-neutral-800 inline-flex justify-between">
      <p>
      Computing
      </p>

      <p>
200      </p>
      </li>
    
    {/* <li className="py-1 px-4 w-full  hover:text-yellow-300 hover:underline hover:border border-neutral-800">Electronics</li>
    <li className="py-1 px-4 w-full  hover:text-yellow-300 hover:underline hover:border border-neutral-800">Fashion</li>
    <li className="py-1 px-4 w-full  hover:text-yellow-300 hover:underline hover:border border-neutral-800">Baby Products</li>
    <li className="py-1 px-4 w-full  hover:text-yellow-300 hover:underline hover:border border-neutral-800">Gaming</li>
    <li className="py-1 px-4 w-full  hover:text-yellow-300 hover:underline hover:border border-neutral-800">Automobile</li>
    <li className="py-1 px-4 w-full  hover:text-yellow-300 hover:underline hover:border border-neutral-800">Furniture</li>
    <li className="py-1 px-4 w-full  hover:text-yellow-300 hover:underline hover:border border-neutral-800">Baby Products</li>
    <li className="py-1 px-4 w-full  hover:text-yellow-300 hover:underline hover:border border-neutral-800">Gaming</li>
    <li className="py-1 px-4 w-full  hover:text-yellow-300 hover:underline hover:border border-neutral-800">Automobile</li>
    <li className="py-1 px-4 w-full  hover:text-yellow-300 hover:underline hover:border border-neutral-800">Furniture</li>
    <li className="py-1 px-4 w-full  hover:text-yellow-300 hover:underline hover:border border-neutral-800">All</li>
    
    <li className="py-1 px-4 w-full  hover:text-yellow-300 hover:underline hover:border border-neutral-800">All</li> */}

</ul>
                                    </div>
                                 
                                </div>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>     
                            ))}
                        
                        {/* <ul className="w-50 text-xs font-medium text-white bg-neutral-900 mx-3 border border-neutral-800  rounded-sm   ">
    
                                    <li className="py-1 px-4 w-full  hover:text-yellow-300 hover:underline hover:border border-neutral-800">Supermarket</li>
                                    <li className="py-1 px-4 w-full  hover:text-yellow-300 hover:underline hover:border border-neutral-800">Health & Beauty</li>
                                    <li className="py-1 px-4 w-full  hover:text-yellow-300 hover:underline hover:border border-neutral-800">Home & Office</li>
                                    <li className="py-1 px-4 w-full  hover:text-yellow-300 hover:underline hover:border border-neutral-800">Phones & Tablets</li>
                                    <li className="py-1 px-4 w-full  hover:text-yellow-300 hover:underline hover:border border-neutral-800">Computing</li>
                                    <li className="py-1 px-4 w-full  hover:text-yellow-300 hover:underline hover:border border-neutral-800">Electronics</li>
                                    <li className="py-1 px-4 w-full  hover:text-yellow-300 hover:underline hover:border border-neutral-800">Fashion</li>
                                    <li className="py-1 px-4 w-full  hover:text-yellow-300 hover:underline hover:border border-neutral-800">Baby Products</li>
                                    <li className="py-1 px-4 w-full  hover:text-yellow-300 hover:underline hover:border border-neutral-800">Gaming</li>
                                    <li className="py-1 px-4 w-full  hover:text-yellow-300 hover:underline hover:border border-neutral-800">Automobile</li>
                                    <li className="py-1 px-4 w-full  hover:text-yellow-300 hover:underline hover:border border-neutral-800">Furniture</li>
                                    <li className="py-1 px-4 w-full  hover:text-yellow-300 hover:underline hover:border border-neutral-800">Baby Products</li>
                                    <li className="py-1 px-4 w-full  hover:text-yellow-300 hover:underline hover:border border-neutral-800">Gaming</li>
                                    <li className="py-1 px-4 w-full  hover:text-yellow-300 hover:underline hover:border border-neutral-800">Automobile</li>
                                    <li className="py-1 px-4 w-full  hover:text-yellow-300 hover:underline hover:border border-neutral-800">Furniture</li>
                                    <li className="py-1 px-4 w-full  hover:text-yellow-300 hover:underline hover:border border-neutral-800">All</li>
                                    
                                    <li className="py-1 px-4 w-full  hover:text-yellow-300 hover:underline hover:border border-neutral-800">All</li>
        
                                </ul> */}

                            </div>
                            <div className="col-span-4 md:col-span-3 relative">
                                <Banner />
                            </div>
        
                        </div>
                        
                        <div className="px-2 md:px-10">
                        {/* <BrowseByCategory /> */}
                            <BestOffer  />
                        </div>
                        <div className="px-2 md:px-10">
        
                        {/* <ProductCategories /> */}
        
        
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-4"> Popular Categories</h2>
                            <div className="h-64 rounded-md overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')` }}>
                              
                                <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                                    <div className="px-10 max-w-xl">
                                        <h2 className="text-xl md:text-2xl text-white font-semibold">Tshirts </h2>
                                        <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                                <NextLink href={`/search?category=Shirts`} passHref  >
                                <button className="flex items-center mt-4 px-3 py-2 text-white hover:bg-white hover:text-neutral-900  text-xs uppercase font-medium rounded  focus:outline-none ">
                                    <span>Shop Now</span>
                                    <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLineJoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </button>
                                </NextLink>
                                    </div>
                                </div>
                            </div>
        
        
        
        
                            <div className="md:flex mt-8 md:-mx-4">
                                <div className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2" style={{backgroundImage: `url('https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')`}}>
                                    <div className="bg-gray-900 bg-opacity-20 flex items-center h-full">
                                        <div className="px-10 max-w-xl">
                                            <h2 className="text-xl md:text-2xl text-white font-semibold">Bags</h2>
                                            <p className="mt-2 text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                                            <NextLink href={`/search?category=Bags`} passHref  >
                                            <button className="flex items-center mt-4 px-3 py-2 text-white hover:bg-white hover:text-neutral-900  text-xs uppercase font-medium rounded  focus:outline-none ">
                                                    <span>Shop Now</span>
                                                    <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLineJoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                                </button>
                                            </NextLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2" style={{backgroundImage: `url('https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')`}}>
                                    <div className="bg-gray-900 bg-opacity-20 flex items-center h-full">
                                        <div className="px-10 max-w-xl">
                                            <h2 className="text-xl md:text-2xl text-white font-semibold">Games</h2>
                                            <p className="mt-2 text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                                            <NextLink href={`/search?category=Games`} passHref  >
                                            <button className="flex items-center mt-4 px-3 py-2 text-white hover:bg-white hover:text-neutral-900  text-xs uppercase font-medium rounded  focus:outline-none ">
                                                    <span>Shop Now</span>
                                                    <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLineJoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                                </button>
                                            </NextLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            <section className="py-8 px-4 bg-neutral-900 ">
        
                          
                                {/* <BestSeller /> */}
                                {/* <Popular popularproducts={popularproducts} /> */}
                            </section>
        
                            <section className="pt-4 pb-8  rounded-sm">
                <KeepShopping moreproducts={moreproducts}/>

               
             

                      </section>
                            <section className="pt-4 px-4 pb-8   rounded-sm">
                                <h2 className="text-xl md:text-2xl font-bold text-white mb-4"> You may also like </h2>
                                <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-2">
                                    {products.map((item, i) => (
                                        <NextLink key={i} href={`/product/${item.slug}`} passHref>
                                            <div className="md:w-5/6   " >
        
                                            <div className="showcase">
                
                <a href="#" className="showcase-img-box">
                  <img src={item.image} alt="mens winter leathers jackets" className="showcase-img"
                    />
                </a>
            
                <div className="showcase-content">
            
                  <a href="#">
                    <h4 className="showcase-title text-neutral-400">{item.name}</h4>
                  </a>
            
                  <a href="#" className="showcase-category text-neutral-400 hover:text-neutral-800">{item.category}</a>
            
                  <div className="price-box">
                    <p className="price text-neutral-400">N {formatter.format(`${item.price}`)}</p>
                    {/* <del>$20.00</del> */}
                  </div>
            
                </div>
            
              </div>
        
                                            </div>
                                        </NextLink>
                                    ))}
                                </div>

                                {/* <div className="flex flex-wrap  -mb-8 ">
               
        
                    {products.map((item, i) => (
                       
                       <NextLink href={`/product/${item.slug}`} passHref> 
                  <div className="md:w-1/6 px-2  ">
                     
                      <img className=" shadow-sm " src={item.image} alt={item.name}/>
                      <div className="p-2 opacity-100 " >
                      <p className=" text-neutral-800 text-xs font-semibold md:text-sm truncate">{item.name}</p>
                      <p className="text-black text-xs md:text-sm">N {formatter.format(`${item.price}`)}</p>
                      </div>
                      
                      </div>
                 </NextLink>
                    ))}

               </div> */}
               
               {/* <YPAd /> */}
               <ServicesFeature />
               {/* <OurserviesFeature /> */}

              
                            </section>
        
                        </div>
        
                    </main>
                </Layout>
            );
        }
        
        export async function getServerSideProps() {
            await db.connect();
            const products = await Product.find().lean();
            const popularproducts = await Product.find({ rating: { $gt: 4 } }).lean();
            const moreproducts = await Product.find({ producttype: "Tops"}).lean();
        
            return {
                props: {
                    products: products.map(db.convertDocToObj),
                    popularproducts: popularproducts.map(db.convertDocToObj),
                    moreproducts: moreproducts.map(db.convertDocToObj)
        
                },
            };
        }
        