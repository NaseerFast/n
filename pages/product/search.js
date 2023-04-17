import React, { useContext, useState, Fragment } from 'react'
import Layout from '../../components/product/layout/index';
import Image from "next/image";
// import NextLink from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon, ChevronUpIcon, FilterIcon, ViewGridIcon } from '@heroicons/react/solid'
import {Rating, Select, MenuItem} from '@mui/material'
import { Store } from '../../utils/Store';

import db from '../../utils/db';
import Product from "../../models/Product.js";

// import FilterDropDown from "../components/filterDropdown";



var formatter = new Intl.NumberFormat( {
    style: 'currency',
    currency: 'NGN',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  const sortOptions = [
    { name: 'Featured', value:"featured",  current: true },
    { name: 'Newest', value:"newest", current: false },
    { name: 'Top rated', value:"toprated",  current: false },
    { name: 'Price: Low to High', value:"lowest" , current: false },
    { name: 'Price: High to Low', value:"highest", current: false },]


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

export default function Search( props ) {

    
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


  return (

    <Layout>
    <div>
       <section>
  <div className="px-4 py-12 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
    <div
      className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start"
    >
    <div className="lg:sticky lg:top-4">
      <details
        open
        className="overflow-hidden border border-gray-200 rounded"
      >
        <summary className="flex items-center justify-between px-5 py-3 bg-gray-100 lg:hidden">
          <span className="text-sm font-medium">
            Toggle Filters
          </span>

          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </summary>

        <form
          action=""
          className="border-t border-gray-200 lg:border-t-0"
        >
          <fieldset>
            <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
              Categories
            </legend>

            <div className="px-5 py-6 space-y-2">
            {categories && categories.map((item, index) => (
              <div className="flex items-center" key={index}>
                <input
                  id="category"
                  type="checkbox"
                  name="type[category]"
                  className="w-5 h-5 border-gray-300 rounded"
                  value={item} onChange={handleCategoryCheck}
                />

                <label
                  htmlFor="toy"
                  className="ml-3 text-sm font-medium"
                >
                  {item}
                </label>
              </div>
            ))}

           

             
              <div className="pt-2">
                <button
                  type="button"
                  className="text-xs text-gray-500 underline"
                >
                  Reset Type
                </button>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
              Rating
            </legend>

            <div className="px-5 py-6 space-y-2">
            {ratings && ratings.map((rating, index) => (
              <div className="flex items-center" key={index}>
                <input
                  id="rating"
                  type="checkbox"
                  name="type[rating]"
                  className="w-5 h-5 border-gray-300 rounded"
                  value={rating} onChange={ratingHandler}
                />

                <label
                  htmlFor="toy"
                  className="ml-3 text-sm font-medium"
                >
                  {rating} +
                </label>
              </div>
            ))}

           

             
              <div className="pt-2">
                <button
                  type="button"
                  className="text-xs text-gray-500 underline"
                >
                  Reset Type
                </button>
              </div>
            </div>
          </fieldset>

          <div>
            <fieldset>
              <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
                Prices
              </legend>

              <div className="px-5 py-6 space-y-2">
              {prices && prices.map((item, index) => (
                <div className="flex items-center" key={index}>
                  <input
                    id="3+"
                    type="checkbox"
                    name="age[3+]"
                    className="w-5 h-5 border-gray-300 rounded"
                    value={item.value} onChange={priceHandler}
                  />

                  <label
                    htmlFor="3+"
                    className="ml-3 text-sm font-medium"
                  >
                   {item.name}
                  </label>
                </div>
  ))}
              

                <div className="pt-2">
                  <button
                    type="button"
                    className="text-xs text-gray-500 underline"
                  >
                    Reset Age
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
              className="px-5 py-3 text-xs font-medium text-white bg-green-600 rounded"
            >
              Apply Filters
            </button>
          </div>
        </form>
      </details>
    </div>

      <div className="lg:col-span-3">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            <span className="hidden sm:inline">
              Showing
            </span>
           showing {products.length} Products
          </p>

          <div className="ml-4">
            <label
              htmlFor="SortBy"
              className="sr-only"
            >
              Sort
            </label>

            <select
             
              className="text-sm border-gray-100 rounded"
              value={sort}
              onChange={sortHandler}
            >
              <option readOnly>Sort</option>
              {sortOptions.map((item, i) => (
                <option value={item.value} key={i} >{item.name}</option>
            )  )}
              {/* <option value="title-asc">Title, A-Z</option>
              <option value="title-desc">Title, Z-A</option>
              <option value="price-asc">Price, Low-High</option>
              <option value="price-desc">Price, High-Low</option> */}
            </select>
          </div>
        </div>

        <div className="mt-4 bg-gray-200 border border-gray-200 grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3">
        {products.map((item, i) => (
          <a
          href={`/product/${item.slug}`}
            className="relative block bg-white"
            key={i}
          >
            <button
              type="button"
              name="wishlist"
              className="absolute p-2 text-white bg-black rounded-full right-4 top-4"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </button>

            <img
              loading="lazy"
              alt="Build Your Own Drone"
              className="object-contain w-full h-56 lg:h-72"
              src={item.image}
            />

            <div className="p-6">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-yellow-400 text-neutral-900">
                {item.category}
              </span>

              <h5 className="mt-4 text-sm font-bold text-neutral-900 truncate">
                {item.name}
              </h5>

              <p className="mt-2 text-sm font-medium text-gray-600">
              N {formatter.format(`${item.price}`)}
              </p>

              <button
                name="add"
                type="button"
                className="  flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-300 rounded-sm"
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
  </div>
</section>

{/* <script>
  window.addEventListener('resize', () => {
    const desktopScreen = window.innerWidth < 768

    document.querySelector('details').open = !desktopScreen
  })
</script> */}
 
    </div>
    </Layout>
  )
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