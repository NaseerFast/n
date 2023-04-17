import React,{useState} from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import Layout from '../../components/layout/';
import Featured from '../../components/Carousel';
import db from '../../utils/db';
import Listing from '../../models/Listing';
import Categories from '../../components/directory/categories';
import Image from 'next/image'
import Pricing from '../../components/directory/Pricing';
import { TopCompanies } from '../../components/TopCompanies';
import Feature from '../../components/Feature';
import Hero from '../../components/directory/directoryHero';
import Header from '../../components/Header';
export default function DirectoryHome({ listings }) {

  // const { state, dispatch } = useContext(Store);
  const router = useRouter();

  const [query, setQuery] = useState('');
const queryChangeHandler = (e) => {
  setQuery(e.target.value);
};
const submitHandler = (e) => {
  e.preventDefault();
  router.push(`/directorysearch?query=${query}`);
};


  return (
    <Layout>

  <Header />
  

        <header>
        <div className=" mx-auto bg-neutral-900 pb-8 px-2">
            <div className="flex items-center justify-between  pt-6">
             
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
                    <a className="mt- text-gray-600 hover:underline hover:text-yellow-300 sm:mx- sm:mt-0" href="#">Plumber</a>
                    <a className="mt- text-gray-600 hover:underline hover:text-yellow-300 sm:mx- sm:mt-0" href="#">Car Mechanic</a>
                    <a className="mt- text-gray-600 hover:underline hover:text-yellow-300 sm:mx- sm:mt-0" href="#">Filling Station</a>
                    <a className="mt- text-gray-600 hover:underline hover:text-yellow-300 sm:mx- sm:mt-0" href="#">Dentist</a>
                    <a className="mt- text-gray-600 hover:underline hover:text-yellow-300 sm:mx- sm:mt-0" href="#">Eatery</a>
                </div>
            </nav>
        </div>
    </header>

        <div className="bg-neutral-900 ">
        
        {/* <Feature /> */}
            <div className="w-full text-slate-500 text-center space-y-2 pt-4 pb-8 ">
              <p className='text-2xl font-bold'>#BornoYellowPages</p>
              <p className="text-lg font-serif ">Browse 10,000+ listings  </p>  
            </div>
            <Categories /> 

          {/* <TopCompanies /> */}

          <div className="p-4  mt-8">
          <p className='text-2xl font-bold text-center mb-6 text-slate-500'>Featured Businesses</p>
         
            <div
        id="top-companies__items"
        className="grid grid-cols-1 gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3 px-2 md:px-6 pb-4"
      >
        
         {listings.map((item, i) => (
              <NextLink key={i} href= {`/directory/${item.slug}`} passHref  >
                <a className="group block overflow-hidden     transition-all duration-150 hover:-translate-y-1  ">
              <div className="relative block overflow-hidden  pt-[70%]">
                <Image
                  src={item.image}
                  alt="item.name" 
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-200 group-hover:scale-[102%]"
                />
              </div>

              <div className="bg-neutral-800">
                                <div className="flex items-center justify-between px-4 pt-4">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bookmark" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                                        </svg>
                                    </div>
                                    <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                                        <p className="text-xs text-yellow-500">Featured</p>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="flex justify-between text-white">
                                        <h2 className="text-lg font-semibold">{item.name}</h2>
                                        
<div className="flex items-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
</div>

                                    </div>
                                    <p className="text-xs text-gray-600 mt-2">The eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
                                    <div className="flex mt-4">
                                        <div>
                                            <p className="text-xs font-medium text-gray-900 rounded-sm px-2 bg-yellow-300 py-1 ">Get directions</p>
                                        </div>
                                        <div className="pl-2">
                                            <p className="text-xs font-medium text-gray-600 px-2 text-gray-900 rounded-sm bg-yellow-300 py-1">Contact</p>
                                        </div>
                                    </div>
                                   
                                </div>
                                </div>
            </a></NextLink>
            


         ))}

         </div>
      

         
            
        {/* ))} */}
      </div>
       
        </div>
        <div className=" ">
         <Pricing /> 
        </div>

       
           {/* <Footer/> */}
    
      
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  
  const listings = await Listing.find().lean();
  return {
    props: {
      listings: listings.map(db.convertDocToObj),
    },
  };
}