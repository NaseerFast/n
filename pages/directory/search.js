// import NextLink from 'next/link';
import axios from 'axios';
import Footer from '../../components/Footer';
import { useRouter } from 'next/router';
import { useContext,  useState, Fragment } from 'react';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon, ChevronUpIcon, FilterIcon, MinusSmIcon, PlusSmIcon, ViewGridIcon } from '@heroicons/react/solid'
import {Rating} from '@mui/material'
import Image from 'next/image';
import Layout from '../../components/layout/';

// import Layout from "../components/Layout";
import db from '../../utils/db';
import Listing from '../../models/Listing';




const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
  { name: 'Recent Jobs', href: '#' },
  { name: 'Trending', href: '#' },
  { name: 'Ngo', href: '#' },
  { name: 'Freelance', href: '#' },
  { name: 'Security', href: '#' },
]
const filters = [
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
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'Ngo', checked: false },
      { value: 'sale', label: 'Technical', checked: false },
      { value: 'travel', label: 'Teaching', checked: true },
      { value: 'organization', label: 'Health', checked: false },
      { value: 'accessories', label: 'Food', checked: false },
    ],
  },
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
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// const PAGE_SIZE = 3;

// const prices = [
//     {
//       name: '$1 to $50',
//       value: '1-50',
//     },
//     {
//       name: '$51 to $200',
//       value: '51-200',
//     },
//     {
//       name: '$201 to $1000',
//       value: '201-1000',
//     },
//   ];
  
  const ratings = [1, 2, 3, 4, 5];




export default function SearchScreen( props ) {

const testcategories = ["Automotve", "Business Support & Supplies", "Computer & Supplies", "Computer & Contractors", "Education Education", "Entertainment", "Food & Dining ", "Health & Medicine", "Home & Garden","Legal & Financial", "Manufacturing, Wholesale & Distribution", "Merchants(Retail), Miscellaneous", "Personal Care & Services", "Real estate", "Travel & Transportation"];
const testcities =     ["yola", "maiduguri", "Kano", "Kaduna", "Jere", "potiskum", "damaturu", "Lagos"];
// const teststates =     ["Adamawa", "Borno", "Kano", "Kaduna", "Lagos", "Katsina", "Bauchi", "Lagos"];
const [checked, setChecked] = useState([]);


// Add/Remove checked item from list

  // const productss = [
  //   {
  //     id: 1,
  //     name: 'Earthen Bottle',
  //     href: '#',
  //     price: '$48',
  //     imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
  //     imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  //   },
  //   {
  //     id: 2,
  //     name: 'Nomad Tumbler',
  //     href: '#',
  //     price: '$35',
  //     imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
  //     imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  //   },
  //   {
  //     id: 3,
  //     name: 'Focus Paper Refill',
  //     href: '#',
  //     price: '$89',
  //     imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
  //     imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  //   },
  //   {
  //     id: 4,
  //     name: 'Machined Mechanical Pencil',
  //     href: '#',
  //     price: '$35',
  //     imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
  //     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  //   },
  //   // More products...
  // ]


  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  // const [selected, setSelected] = useState([])
  const router = useRouter();

   const {
      // category = 'all',
   
      // query = 'all',
      price = 'all',
      rating = 'all',
      sort = 'default',
    } = router.query;
  

    const { listings, countProducts, categories, locations, cities, allratings, pages } = props;
  


    
    
    



const filterSearch = ({
    page,
    category,
    location,
    city,
    sort,
    min,
    max,
    searchQuery,
    price,
    rating,
  }) => {
    const path = router.pathname;
    const { query } = router;
    if (page) query.page = page;
    if (searchQuery) query.searchQuery = searchQuery;
    if (sort) query.sort = sort;
    if (category) query.category = category;
    if (location) query.location = location;
    if (city) query.city = city;
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
  const pageHandler = (e, page) => {
    filterSearch({ page });
  };
  const locationHandler = (e) => {
    filterSearch({ location: e.target.value });
  };
  const cityHandler = (e) => {
    filterSearch({ city: e.target.value });
  };
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


  const handleLocationCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
    cityHandler(event)
  
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
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };




const [query, setQuery] = useState('');
const queryChangeHandler = (e) => {
  setQuery(e.target.value);
};
const submitHandler = (e) => {
  e.preventDefault();
  router.push(`/directory/search?query=${query}`);
};
 


  return (
    <Layout>


        
       
        <div >
        <header>
        <div className=" mx-auto bg-neutral-900  px-2">
            <div className="flex items-center justify-between  pt-6">
                {/* <div className="hidden w-full text-gray-600 md:flex md:items-center px-4 sm:px-6 lg:px-8">
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
   
                </div> */}
            </div>

            
            
            <div className="relative mt-6 max-w-lg mx-auto">
            {/* <Featured /> */}
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLineCap="round" strokeLinejoin="round"/>
                </svg>
            </span>

            <form onSubmit={submitHandler}>
                <input className="w-full border rounded-md pl-10 pr-4 py-2 bg-neutral-800 border border-gray-600 focus:border-white focus:outline-none focus:shadow-outline text-white" type="text" placeholder="Search" name="name" onChange={queryChangeHandler} />
                </form>
            </div>
            <nav  className="flex justify-center items-center mt-4 ">
                <div className="flex text-xs space-x-2">
                    <a className=" text-gray-600 hover:underline hover:text-yellow-300 sm:mx- sm:mt-0" href="#">Plumber</a>
                    <a className="mt- text-gray-600 hover:underline hover:text-yellow-300 sm:mx- sm:mt-0" href="#">Car Mechanic</a>
                    <a className="mt- text-gray-600 hover:underline hover:text-yellow-300 sm:mx- sm:mt-0" href="#">Filling Station</a>
                    <a className="mt- text-gray-600 hover:underline hover:text-yellow-300 sm:mx- sm:mt-0" href="#">Dentist</a>
                    <a className="mt- text-gray-600 hover:underline hover:text-yellow-300 sm:mx- sm:mt-0" href="#">Eatery</a>
                </div>
            </nav>
        </div>
    </header>
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
                      <h3 className="sr-only">Categories</h3>
                      <ul role="list" className="font-medium text-gray-900 px-2 py-3">
                        {subCategories.map((category) => (
                          <li key={category.name}>
                            <a href={category.href} className="block px-2 py-3 text-red">
                              {category.name}
                            </a>
                          </li>
                        ))}
                      </ul>
  
                    
                        <Disclosure as="div"  className="border-t border-gray-200 px-4 py-6">
                          {({ open }) => (
                            <>
                              <h3 className="-mx-2 -my-3 flow-root">
                                <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                                  <span className="font-medium text-gray-900">Category</span>
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
                                  {categories && categories.map((item, i) => (
                                    <div key={item} className="flex items-center">
                                      <input
                                        onChange={categoryHandler}
                                        name={item}
                                        value={item}
                                        type="checkbox"
                                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                      />
                                      <label
                                        htmlFor={item}
                                        className="ml-3 min-w-0 flex-1 text-gray-500 capitalize"
                                      >
                                        {item}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                        <Disclosure as="div"  className="border-t border-gray-200 px-4 py-6">
                          {({ open }) => (
                            <>
                              <h3 className="-mx-2 -my-3 flow-root">
                                <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                                  <span className="font-medium text-gray-900">Location</span>
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
                                  {locations && locations.map((item, i) => (
                                    <div key={item} className="flex items-center">
                                      <input
                                        onChange={locationHandler}
                                        name={item}
                                        value={item}
                                        type="checkbox"
                                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                      />
                                      <label
                                        htmlFor={item}
                                        className="ml-3 min-w-0 flex-1 text-gray-500 capitalize"
                                      >
                                        {item}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                        
                        <Disclosure as="div"  className="border-t border-gray-200 px-4 py-6">
                          {({ open }) => (
                            <>
                              <h3 className="-mx-2 -my-3 flow-root">
                                <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                                  <span className="font-medium text-gray-900">Rating</span>
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
                                  {ratings && ratings.map((item, i) => (
                                    <div key={item} className="flex items-center">
                                      <input
                                        onChange={ratingHandler}
                                        name={item}
                                        value={item}
                                        type="checkbox"
                                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                      />
                                      <label
                                        htmlFor={item}
                                        className="ml-3 min-w-0 flex-1 text-gray-500 capitalize"
                                      >
                                        {item}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                        
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>
  
            <div>
              {/* <Fetaured /> */}
              
       <main className=" mx-auto px-4 sm:px-6 lg:px-8 bg-neutral-900">
                           
            <div className="relative z-10 flex items-baseline justify-between pt-16 pb-6 border-b border-gray-200">
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
                <Menu as="div" className="relative inline-block text-left">
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
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {sortOptions.map((option) => (
                          <Menu.Item key={option.name}>
                            {({ active }) => (
                              <a
                                href={option.href}
                                className={classNames(
                                  option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                {option.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
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

    {/* <Disclosure as="div"  className="border-b border-gray-200 py-6">
  {({ open }) => (
            <>
             <Disclosure.Button className="flex w-full justify-between rounded-lg bg-neutral-800  px-4 py-2 text-left text-sm font-medium text-gray-300  hover:bg-neutral-600 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Location </span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-gray-300`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
    {testcities && testcities.map((item, index) => (
        <div className="mt-3" key={index}>
        <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-neutral-800 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox"  value={item} id="topping" onChange={handleLocationCheck}
         />
         <label className="form-check-label inline-block text-gray-300" htmlFor="" key={index}>
          {item}
         </label>
       </div>

    ))}
   </Disclosure.Panel>
   </>
  )}
  
    </Disclosure> */}


<details open className="overflow-hidden border border-gray-800 rounded text-white">
<summary className="bg-neutral-800 py-2 px-1 cursor-pointer">Filter</summary>

  <div action="" className="border-t border-gray-200 lg:border-t-0 text-white">
    <fieldset>
      <legend className="block w-full px-5 py-3 text-xs font-medium ">
        Filter by Category
      </legend>

      <div className="px-5 py-4 space-y-2">
      {categories && categories.map((item, index) => (
        <div className="flex items-center" key={index}>
       
          <p htmlFor={item} className=" text-xs font-medium capitalize"> {item} </p>
        </div>
      ))}

      

        

        <div className="pt-2">
          <button type="button" className="text-xs text-gray-500 underline">
            Reset Category
          </button>
        </div>
      </div>
    </fieldset>

    <fieldset>
      <legend className="block w-full px-5 py-3 text-xs font-medium ">
        Location
      </legend>

      <div className="px-5 py-6 space-y-2">
      {locations && locations.map((item, index) => (
        <div className="flex items-center" key={index}>
          <input
          onChange={locationHandler}
            id="toy"
            type="checkbox"
            name="type[toy]"
            className="w-5 h-5 border-gray-300 rounded"
            value={item}
          />

          <label htmlFor={item} className="ml-3 text-xs font-medium capitalize"> {item} </label>
        </div>
      ))}

       

       
        <div className="pt-2">
          <button type="button" className="text-xs text-gray-500 underline">
            Reset Location
          </button>
        </div>
      </div>
    </fieldset>


 
    <div>
      <fieldset>
        <legend className="block w-full px-5 py-3 text-xs font-medium ">
          Rating
        </legend>

        <div className="px-5 py-6 space-y-2">
        {ratings && ratings.map((item, index) => (
            <div className="flex items-center" key={item}>
            <input
              id="3+"
              type="checkbox"
              name="age[3+]"
              value={item}
              className="w-5 h-5 border-gray-300 rounded"
              onChange={ratingHandler}
            />

            <label htmlFor="3+" className="ml-3 text-xs font-medium" > {item}</label>
          </div>

          ))}
          
         


          <div className="pt-2">
            <button type="button" className="text-xs text-gray-500 underline">
              Reset Rating
            </button>
          </div>
        </div>
      </fieldset>
    </div>

    <div className="flex justify-between px-5 py-3 border-t border-gray-200">
      <button
        name="reset"
        type="button"
        className="text-xs font-medium text-gray-600 underline rounded"
      >
        Reset All
      </button>

      <button
        name="commit"
        type="button"
        className="px-5 py-3 text-xs font-medium text-white bg-yellow-600 rounded"
      >
        Apply Filters
      </button>
    </div>
  </div>
</details>

  </div>
</div>
                  {/* <ul role="list" className="text-sm font-medium text-gray-200 space-y-4 pb-6 border-b border-gray-200">
                    {categories.map((category) => (
                      <li key={category.name}>
                        <button href={category.href} className="text-white">{category}</button>
                      </li>
                    ))}
                  </ul> */}
  
                 
                    {/* <Disclosure as="div"  className="border-b border-gray-200 py-6">
                      {({ open }) => (
                        <>
                          <h3 className="-my-3 flow-root">
                            <Disclosure.Button className="py-3 bg-neutral-800  w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-white px-2">Categories</span>
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
                            <div className="space-y-4">
                              {categories.map((option, optionIdx) => (
                                <div key={option.value} className="flex cursor-pointer items-center border-b border-slate-800 ">
                                   <input
                                    id={`filter-${category.id}-${optionIdx}`}
                                    name={`${category.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    // onChange={()=> {
                                    //     alert(option.value)
                                    // }}
                                    className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                  /> 
                                  <label
                                    htmlFor={`filter-${category.id}-${optionIdx}`}
                                    className="ml-3 text-sm text-gray-600 "
                                  >
                                   <div className="text-white "> {option}</div>
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure> */}

                   

                    {/* <Disclosure as="div"  className="border-b border-gray-200 py-6">
                    <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full overflow-hidden cursor-default rounded-lg bg-neutral-800 text-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">City</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className=" mt-1 max-h-60 w-full overflow-auto rounded-md bg-neutral-700  text-base  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ">
              {cities.map((city, i) => (
                <Listbox.Option
                
                  key={i}
                  className={({ active }) =>
                    `relative cursor-default select-none py-1 pl-10 pr-4 ${
                      active ? 'bg-neutral-800 text-white' : 'text-gray-200'
                    }`
                  }
                  value={city}
                >
                  {({ selected }) => (
                    <>
                      <span
                     
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {city}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-yellow-300">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
                    </Disclosure>
                    <Disclosure as="div"  className="border-b border-gray-200 py-6">
                    <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full overflow-hidden cursor-default rounded-lg bg-neutral-800 text-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">city filter</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className=" mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {ratings.map((item, i) => (
                <Listbox.Option
                onChange={categoryHandler}
                  key={i}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {item}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
                    </Disclosure> */}

 
                 
                    {/* <Example /> */}
                 
                </form>
  
                {/* Product grid */}
                <div className="lg:col-span-3">

                <div className  ="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                  
                  {listings.map((item, i) => (
              <a key={i} href={`/directory/${item.slug}`} passHref className="">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-slate-600">{item.name}</h3>
              <p className="mt-1 text-lg font-medium text-white">{item.category}</p>
            </a>
          ))}
        </div>
        
{/*             
                  <div className="mt-6 grid grid-cols-1 gap-y-5 gap-x-2 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-2">
                      
                      {companies.map((company, i)=>(
                        
                        <NextLink href={`/company/${company.slug}`} passHref  key={i}>  
           <a className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-150 hover:-translate-y-1 hover:shadow-lg ">
              <div className="relative block overflow-hidden  ">
                <img
                  src={company.image}
                  alt={company.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-200 group-hover:scale-[102%]"
                />
              </div>

              <div className="relative flex flex-col border-t p-4 ">
            
                <h5 className="block truncate text-xl font-semibold capitalize">
                  {company.companyName}
                </h5>
                <span className="block truncate text-slate-500 ">
                  {company.category}
                </span>
              </div>
            </a>
    </NextLink>
   ))}

                    </div>  */}
                
                </div>
              </div>
            </section>
          </main>
          </div>

        </div>
  
 <Footer /> 
      
       
      
    </Layout> 
  );
}



// export async function getServerSideProps() {
//     await db.connect();
//     const listings = await Listing.find().lean();
//     return {
//       props: {
//         listings: listings.map(db.convertDocToObj),
//       },
//     };
//   }

  export async function getServerSideProps({ query }) {
    await db.connect();
    // const pageSize = query.pageSize || PAGE_SIZE;
    const page = query.page || 1;
    const category = query.category || '';
    const location = query.location || '';
    const city = query.city || '';
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
    const locationFilter = location && location !== 'all' ? { location } : {};
    const cityFilter = city && city !== 'all' ? { city } : {};
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
  
    const categories = await Listing.find().distinct('category');
    const locations = await Listing.find().distinct('location');
    const cities = await Listing.find().distinct('city');
    const allratings = await Listing.find().distinct('rating');
    const listingDocs = await Listing.find(
      {
        ...queryFilter,
        ...categoryFilter,
        ...priceFilter,
        ...locationFilter,
        ...cityFilter,
        ...ratingFilter,
      },
      '-reviews'
    )
      .sort(order)
    //   .skip(pageSize * (page - 1))
    //   .limit(pageSize)
      .lean();
  
    const countProducts = await Listing.countDocuments({
      ...queryFilter,
      ...categoryFilter,
      ...priceFilter,
      ...locationFilter,
      ...cityFilter,
      ...ratingFilter,
    });
    await db.disconnect();
  
    const listings = listingDocs.map(db.convertDocToObj);
  
    return {
      props: {
        listings,
        countProducts,
        // page,
        // pages: Math.ceil(countProducts / pageSize),
        categories,
        locations,
        cities,
        allratings
      },
    };
  }