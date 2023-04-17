import Image from "next/image";
// import NextLink from 'next/link';
import axios from 'axios';
import Footer from "../components/Footer";
import { useRouter } from 'next/router';
import { useContext, useState, Fragment } from 'react';
import { Store } from '../utils/Store';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon, ChevronUpIcon, FilterIcon, ViewGridIcon } from '@heroicons/react/solid'
import {Rating, Select, MenuItem} from '@mui/material'



import Layout from "../components/layout/index";
import db from '../utils/db';
// import Filter from "../components/Filter";
import DropDown from "../components/Dropdown";
// import FilterDropDown from "../components/filterDropdown";
import Product from "../models/Product,js";



var formatter = new Intl.NumberFormat( {
    style: 'currency',
    currency: 'NGN',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });


// const navigation = [
//   { name: 'Store', href: '#' },
//   { name: 'Directory', href: '#' },
//   { name: 'Tender', href: '#' },
//   { name: 'Advertisement', href: '#' },
// ]


const sortOptions = [
  { name: 'Featured', value:"featured",  current: true },
  { name: 'Newest', value:"newest", current: false },
  { name: 'Top rated', value:"toprated",  current: false },
  { name: 'Price: Low to High', value:"lowest" , current: false },
  { name: 'Price: High to Low', value:"highest", current: false },
]

// const subCategories = [
//   { name: 'Recent Jobs', href: '#' },
//   { name: 'Trending', href: '#' },
//   { name: 'Ngo', href: '#' },
//   { name: 'Freelance', href: '#' },
//   { name: 'Security', href: '#' },
// ]
// const filters = [
//   {
//     id: 'color',
//     name: 'State',
//     options: [
//       { value: 'white', label: 'Borno', checked: false },
//       { value: 'beige', label: 'Abia', checked: false },
//       { value: 'blue', label: 'Lagos', checked: true },
//       { value: 'brown', label: 'Portharcourt', checked: false },
//       { value: 'green', label: 'Kano', checked: false },
//       { value: 'purple', label: 'Imo', checked: false },
//     ],
//   },
  // {
  //   id: 'category',
  //   name: 'Category',
  //   options: [
  //     { value: 'new-arrivals', label: 'Ngo', checked: false },
  //     { value: 'sale', label: 'Technical', checked: false },
  //     { value: 'travel', label: 'Teaching', checked: true },
  //     { value: 'organization', label: 'Health', checked: false },
  //     { value: 'accessories', label: 'Food', checked: false },
  //   ],
  // },
//   {
//     id: 'size',
//     name: 'City',
//     options: [
//       { value: '2l', label: 'Abuja', checked: false },
//       { value: '6l', label: 'Kano', checked: false },
//       { value: '12l', label: 'FreIkejaelance', checked: false },
//       { value: '12l', label: 'Part-time', checked: false },
      
//     ],
//   },
// ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// const PAGE_SIZE = 3;

const prices = [
    {
      name: 'N1 to N50',
      value: '1-50',
    },
    {
      name: 'N51 to N200',
      value: '51-200',
    },
    {
      name: 'N201 to N1000',
      value: '201-1000',
    },
  ];
  
  const ratings = [1, 2, 3, 4, 5];




export default function SearchScreen( props ) {

// const testcategories = ["hotel", "supermarket", "Cameras", "gadgets", "Books", "Fiction Books", "Exam Books", "Tshirt"];
// const testcities =     ["yola", "maiduguri", "Kano", "Kaduna", "Jere", "potiskum", "damaturu", "Lagos"];
// const teststates =     ["Adamawa", "Borno", "Kano", "Kaduna", "Lagos", "Katsina", "Bauchi", "Lagos"];
const [checked, setChecked] = useState([]);



  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  // const [selected, setSelected] = useState([])
  const router = useRouter();

   const {
      category = 'all',
   
      query = 'all',
      price = 'all',
      rating = 'all',
      sort = 'default',
    } = router.query;
  

    const { products, countProducts, categories } = props;
  
//   const [productfilters, setProductFilters] = useState([]);
//   const [pricesfilters, setPricesfilters] = useState([]);
  
//   useEffect(() => {
//     const fetchFilters = async () => {
//       try {
//         const { data } = await axios.get(`/api/products/filter`);
//         setProducFilters(data);
//         setPricesfilters(data)
//       } catch (err) {
//         console.log(err.message);
//       }
//     };
//     fetchFilters();

    

    
    
    



const filterSearch = ({

    category,
    sort,
    min,
    max,
    searchQuery,
    price,
    rating,
  }) => {
    const path = router.pathname;
    const { query } = router;
    // if (page) query.page = page;
    if (searchQuery) query.searchQuery = searchQuery;
    if (sort) query.sort = sort;
    if (category) query.category = category;
    if (price) query.price = price;
    if (rating) query.rating = rating;
    if (min) query.min ? query.min : query.min === 0 ? 0 : min;
    if (max) query.max ? query.max : query.max === 0 ? 0 : max;

    router.push({
      pathname: path,
      query: query,
    });
  };
  const categoryHandler = (e) => {
    filterSearch({ category: e.target.value });
  };
//   const pageHandler = (e, page) => {
//     filterSearch({ page });
//   };
  const sortHandler = (e) => {
    filterSearch({ sort: e.target.value });
  };
  const priceHandler = (e) => {
    filterSearch({ price: e.target.value });
  };
  const ratingHandler = (e) => {
    filterSearch({ rating: e.target.value });
  };

  const handleCategoryCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
    categoryHandler(event)
  
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };


  const handlePriceCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
    priceHandler(event)
  
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };


  const handleRatingCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
    ratingHandler(event)
  
    } else {
      updatedList.splice(checked.indexOf(event.target.value));
    }
    setChecked(updatedList);
  };


  const handleSort = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
        sortHandler(event)
  
    } else {
      updatedList.splice(checked.indexOf(event.target.value));
    }
    setChecked(updatedList);
    
  }

  const { state, dispatch } = useContext(Store);
  const addToCartHandler = async (product) => {
    const existItem = state.cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
    router.push('/cart');
  };


// console.log(categories)

  return (
    <>


        
   <Layout>    
        <div >
   

          {/* Mobile filter dialog */}
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>
  
              <div className="fixed inset-0 flex z-40 ">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                    <div className="px-4 flex items-center justify-between">
                      <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                      <button
                        type="button"
                        className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
  
                    {/* Filters */}
                    <form className="mt-4 border-t border-gray-200">
                      {/* <h3 className="sr-only">Categories</h3>
                      <ul role="list" className="font-medium text-gray-900 px-2 py-3">
                        {subCategories.map((category) => (
                          <li key={category.name}>
                            <a href={category.href} className="block px-2 py-3 ">
                              {category.name}
                            </a>
                          </li>
                        ))}
                      </ul> */}
                      <Disclosure as="div"  className="border-b border-gray-200 py-6">
  {({ open }) => (
            <>
           <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-2 text-left text-sm font-medium text-neutral-900   focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span> Category </span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-gray-300`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
    {categories && categories.map((item, index) => (
         <div className="mt-3" key={index}>
        <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-neutral-800 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox"  value={item} id="topping" onChange={handleCategoryCheck}
         />
         <label className="form-check-label inline-block text-neutral-800" htmlFor="" key={index}>
          {item}
         </label>
       </div>

    ))}
   </Disclosure.Panel>
   </>
  )}
  
    </Disclosure>
  
    <Disclosure as="div"  className="border-b border-gray-200 py-6">
  {({ open }) => (
            <>
             <Disclosure.Button className="flex w-full justify-between rounded-lg text-neutral-800  px-4 py-2 text-left text-sm font-medium   focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Prices </span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-gray-300`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
    {prices && prices.map((item, index) => (
         <div className="mt-3" key={index}>
        <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-neutral-800 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox"  value={item.value} id="topping" onChange={priceHandler}
         />
         <label className="form-check-label inline-block text-neutral-800" htmlFor="" key={index}>
          {item.name}
         </label>
       </div>

    ))}
   </Disclosure.Panel>
   </>
  )}
  
    </Disclosure>
    <Disclosure as="div"  className="border-b border-gray-200 py-6">
  {({ open }) => (
            <>
             <Disclosure.Button className="flex w-full justify-between rounded-lg text-neutral-800  px-4 py-2 text-left text-sm font-medium   focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Ratings </span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-gray-300`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              {ratings.map((rating, index) => (
         <div className="mt-3" key={index}>
            
         <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-neutral-800 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value={rating} id="flexCheckDefault" onChange={handleRatingCheck}/>
         <label className="form-check-label inline-block text-gray-300" htmlFor="flexCheckDefault">
         <Rating value={rating} readOnly />
         </label>
       </div>

    ))}
   </Disclosure.Panel>
   </>
  )}
  
    </Disclosure>

                      {/* {filters.map((section) => (
                        <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6 ">
                          {({ open }) => (
                            <>
                              <h3 className="-mx-2 -my-3 flow-root text-black">
                                <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                                  <span className="font-medium text-gray-900">{section.name}</span>
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
                                  {testcategories.map((option, optionIdx) => (
                                    <div key={option.value} className="flex items-center">
                                      <input
                                        id={`filter-mobile-${section.id}-${optionIdx}`}
                                        name={`${section.id}[]`}
                                        defaultValue={option.value}
                                        type="checkbox"
                                        value={option} 
                                        onChange={handleCategoryCheck}
                                        defaultChecked={option.checked}
                                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                      />
                                      <label
                                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                        className="ml-3 min-w-0 flex-1 text-gray-500"
                                      >
                                        {option}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </Disclosure.Panel>

                              
                            </>
                          )}
                        </Disclosure>
                        
                      ))} */}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>
  
            <div>
              {/* <Fetaured /> */}
              
       <main className=" mx-auto px-4 sm:px-6 lg:px-8 bg-neutral-900">
       
            <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
              <h1 className="hidden lg:text-2xl font-extrabold tracking-tight text-gray-900">YellowPages</h1>
                
              <div className="flex justify-center">
  {/* <div className="mb-3 w-fit">
    <input
      type="search"
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-yellow-500 focus:outline-none
      "
      id="exampleSearch"
      placeholder="Search all businesses "
    />
  </div> */}
</div>

              <div className="flex items-center">
                {/* <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                      Sort
                      <ChevronDownIcon
                        className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>
  
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                 

                  </Transition>
                  
                </Menu> */}
              <Menu as="div" className="relative inline-block text-left">
      <div>
     
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-800 shadow-sm px-4 py-2 bg-neutral-900 text-sm font-medium text-gray-700 hover:bg-neutral-800 focus:outline-none   ">
          Sort by
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>
                
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-neutral-900 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {sortOptions.map((item, i) => (
                <Menu.Item key={i}>
                  
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-neutral-800 text-red-100 hover:text-gray-200' : 'text-gray-200',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                  {item.name}
                  </a>
                )}
              </Menu.Item>
            )
            )}
          
 
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  
                <button type="button" className="p-2 -m-2 ml-5 sm:ml-7 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">View grid</span>
                  <ViewGridIcon className="w-5 h-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="sr-only">Filters</span>
                  <FilterIcon className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>
  
            <section aria-labelledby="products-heading" className="pt-6 pb-24">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>
  
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                {/* Filters */}
                <form className="hidden lg:block">
                  <h3 className="sr-only">Filters</h3>
                  <div className=" justify-center">
  <div>
  <Disclosure as="div"  className="border-b border-gray-200 py-6">
  {({ open }) => (
            <>
           <Disclosure.Button className="flex w-full justify-between rounded-lg bg-neutral-800  px-4 py-2 text-left text-sm font-medium text-gray-300  hover:bg-neutral-600 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span> Category </span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-gray-300`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
    {categories && categories.map((item, index) => (
         <div className="mt-3" key={index}>
        <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-neutral-800 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox"  value={item} id="topping" onChange={handleCategoryCheck}
         />
         <label className="form-check-label inline-block text-gray-300" htmlFor="" key={index}>
          {item}
         </label>
       </div>

    ))}
   </Disclosure.Panel>
   </>
  )}
  
    </Disclosure>
    <Disclosure as="div"  className="border-b border-gray-200 py-6">
  {({ open }) => (
            <>
           <Disclosure.Button className="flex w-full justify-between rounded-lg bg-neutral-800  px-4 py-2 text-left text-sm font-medium text-gray-300  hover:bg-neutral-600 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span> Prices </span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-gray-300`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
    {prices && prices.map((item, index) => (
         <div className="mt-3" key={index}>
        <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-neutral-800 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox"  value={item.value} id="topping" onChange={priceHandler}
         />
         <label className="form-check-label inline-block text-gray-300" htmlFor="" key={index}>
          {item.name}
         </label>
       </div>

    ))}
   </Disclosure.Panel>
   </>
  )}
  
    </Disclosure>


    <Disclosure as="div"  className="border-b border-gray-200 py-6">
  {({ open }) => (
            <>
             <Disclosure.Button className="flex w-full justify-between rounded-lg bg-neutral-800  px-4 py-2 text-left text-sm font-medium text-gray-300  hover:bg-neutral-600 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Ratings </span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-gray-300`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              {ratings.map((rating, index) => (
         <div className="mt-3" key={index}>
            
         <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-neutral-800 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value={rating} id="flexCheckDefault" onChange={handleRatingCheck}/>
         <label className="form-check-label inline-block text-gray-300" htmlFor="flexCheckDefault">
         <Rating value={rating} readOnly />
         </label>
       </div>

    ))}
   </Disclosure.Panel>
   </>
  )}
  
    </Disclosure>

 
    {/* <Select value={sort} onChange={sortHandler}>
                <MenuItem value="featured">Featureddd</MenuItem>
                <MenuItem value="lowest">Price: Low to High</MenuItem>
                <MenuItem value="highest">Price: High to Low</MenuItem>
                <MenuItem value="toprated">Customer Reviews</MenuItem>
                <MenuItem value="newest">Newest Arrivals</MenuItem>
              </Select> */}
  </div>
</div>
                  
                </form>
  
                {/* Product grid */}
                <div className="lg:col-span-3  p-2">

                  <p className="mb-4 text-gray-200">Showing {products.length} Results for {query}</p>
                <div className  ="grid grid-cols-2 gap-y-10 sm:grid-cols-4 gap-x-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
                  {products.map((item, i) => (
              <a key={i} href={`/product/${item.slug}`} passHref className="">
              <div className="showcase">
                
                    <div href="#" className="showcase-img-box">
                      <img src={item.image} alt="mens winter leathers jackets" className="showcase-img"
                        />
                    </div>
                
                    <div className="showcase-content">
                
                     
                        <h4 className="showcase-title text-neutral-400">{item.name}</h4>
                      
                
                      <div href="#" className="showcase-category text-neutral-400 hover:text-neutral-800">{item.category}</div>
                
                      <div className="price-box">
                        <p className="price text-neutral-400">N {formatter.format(`${item.price}`)}</p>
                        {/* <del>$20.00</del> */}
                      </div>
                
                    </div>
                    <button
                name="add"
                type="button"
                className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-300 rounded-sm"
              >
                <span className="text-sm font-medium text-neutral-900">
                  Add to Cart
                </span>

                <svg className="w-5 h-5 ml-1.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
                
                  </div>
                
            </a>
          ))}
        </div>

                </div>
              </div>
            </section>
          </main>
          </div>

        </div>
  
 <Footer /> 
      
 </Layout>
      
    </> 
  );
}




  export async function getServerSideProps({ query }) {
    await db.connect();
    // const pageSize = query.pageSize || PAGE_SIZE;
    // const page = query.page || 1;
    const category = query.category || '';
    // const brand = query.brand || '';
    const price = query.price || '';
    const rating = query.rating || '';
    const sort = query.sort || '';
    const searchQuery = query.query || '';
  
    const queryFilter =
      searchQuery && searchQuery !== 'all'
        ? {
            name: {
              $regex: searchQuery,
              $options: 'i',
            },
          }
        : {};
    const categoryFilter = category && category !== 'all' ? { category } : {};
    // const brandFilter = brand && brand !== 'all' ? { brand } : {};
    const ratingFilter =
      rating && rating !== 'all'
        ? {
            rating: {
              $gte: Number(rating),
            },
          }
        : {};
    // 10-50
    const priceFilter =
      price && price !== 'all'
        ? {
            price: {
              $gte: Number(price.split('-')[0]),
              $lte: Number(price.split('-')[1]),
            },
          }
        : {};
  
    const order =
      sort === 'featured'
        ? { featured: -1 }
        : sort === 'lowest'
        ? { price: 1 }
        : sort === 'highest'
        ? { price: -1 }
        : sort === 'toprated'
        ? { rating: -1 }
        : sort === 'newest'
        ? { createdAt: -1 }
        : { _id: -1 };
  
    const categories = await Product.find().distinct('category');
    // const brands = await Product.find().distinct('brand');
    const productDocs = await Product.find(
      {
        ...queryFilter,
        ...categoryFilter,
        ...priceFilter,
        // ...brandFilter,
        ...ratingFilter,
      },
      '-reviews'
    )
      .sort(order)
    //   .skip(pageSize * (page - 1))
    //   .limit(pageSize)
      .lean();
  
    const countProducts = await Product.countDocuments({
      ...queryFilter,
      ...categoryFilter,
      ...priceFilter,
    //   ...brandFilter,
      ...ratingFilter,
    });
    await db.disconnect();
  
    const products = productDocs.map(db.convertDocToObj);
  
    return {
      props: {
        products,
        countProducts,
        // page,
        // pages: Math.ceil(countProducts / pageSize),
        categories,
        // brands,
      },
    };
  }