import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DetailsTabs({listings}) {
  let [categories] = useState({
    Overview: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Products: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Reviews: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  })

  return (
    <div className="w-full  px-2 pt-4 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-neutral-800 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-neutral-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-neutral-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
      
            <Tab.Panel
             
              className={classNames(
                'rounded-xl bg-neutral-900 p-3',
                ' focus:outline-none '
              )}
            >
             <div className="flex flex-col  my-4 text-gray-400">
            
                <a href="#" className="hover:opacity-75 mb-4">
                    <img layout="fill" src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" alt="image" passHref/>
                </a>
                <div className=" flex flex-col justify-start py-2 text-gray-400">
                    <div className="mb-4">
                    <p  className="text-white text-sm font-semibold uppercase">Company Name</p>
                    <p href="#" className="text-xl font-bold hover:text-gray-700 ">{listings.name}</p>
                    </div>
                   
                    <div className="mb-4">
                    <p  className="text-white text-sm font-semibold uppercase pb-">Company Description</p>
                    <p href="#" className="  pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</p>
                    </div>
                     {/* <a href="#" className="uppercase text-white hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a> */}
                     <div className="mb-4">
                  <p  className="text-white text-sm font-semibold uppercase pb-">Address </p>
                  <p href="#" className="text-sm font-medium   hover:text-gray-700 pb-4">3555 Shehu laminu way maiduguri, Borno, NE, 68131-3302 Nigeria  </p>
                  </div> 

                  <div className="mb-4">  
                  <p  className="text-white text-sm font-semibold uppercase pb-2">CONTACT Number </p>
                  <p className="text-sm font-medium  hover:text-gray-700 ">07012674001 (MTN)</p>
                  <p className="text-sm font-medium  hover:text-gray-700">08064366739 (ZAIN)</p>
                  </div>
                  <div className="mb-4">
                  <p  className="text-white text-sm font-semibold uppercase pb-2">Website </p>
                  <p className="text-sm font-medium  hover:text-gray-700 "> https://www.newbusiness.com</p>
                            
                    </div> 

                    <div className="mt-4">
                    <p  className="text-white text-sm font-semibold uppercase pb-2">Opening Hours </p>     
                    
<div className="overflow-x-auto relative">
    <table className="w-50 text-sm text-left border border-neutral-800 ">
        <thead className="text-xs text-gray-700 uppercase bg-neutral-800  ">
            <tr>
                <th scope="col" className="py-3 px-6">
                    Day
                </th>
                <th scope="col" className="py-3 px-6">
                    Opening
                </th>
                <th scope="col" className="py-3 px-6">
                    Closing
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr className="border-b bg-neutral-900 border-neutral-800">
                <th scope="row" className="py-2 px-6 font-medium text-gray-400 whitespace-nowrap ">
                    Week Days
                </th>
                <td className="py-2 px-6">
                    9:00 AM
                </td>
                <td className="py-2 px-6">
                    10:00 PM
                </td>
                
            </tr>
            <tr className="border-b bg-neutral-900 border-neutral-800">
                <th scope="row" className="py-2 px-6 font-medium whitespace-nowrap ">
                    Weekend
                </th>
                <td className="py-2 px-6">
                    11:00 AM
                </td>
                <td className="py-2 px-6">
                    8:00 PM
                </td>
                
            </tr>
         

                
            
            
           
        </tbody>
    </table>
</div>

                    </div>     
                </div>
               
            </div> 
            </Tab.Panel>

            <Tab.Panel
             
             className={classNames(
               'rounded-xl bg-neutral-900 p-3',
               'focus:outline-none '
             )}
           >
            <p>Hellow</p>

            </Tab.Panel>

 <Tab.Panel
             
             className={classNames(
               'rounded-xl bg-neutral-900 p-3',
               'focus:outline-none '
             )}
           >
           
<article className="bg-neutral-800 p-6">
    <div className="flex items-center mb-4 space-x-4">
        <img className="w-10 h-10 rounded-full" src="https://i.ibb.co/znYKsbc/vincent-wachowiak-z-P316-KSOX0-E-unsplash-1.png" alt=""/>
        <div className="space-y-1 font-medium dark:text-white">
            <p>Jese Leos <time dateTime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2021</time></p>
        </div>
    </div>
    <div className="flex items-center mb-1">
        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <h3 className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking of visiting  again!</h3>
    </div>
    <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in maiduguri on <time dateTime="2022-03-03 19:00">March 3, 2022</time></p></footer>
    <p className="mb-2 font-light text-gray-500 dark:text-gray-400">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
    <p className="mb-3 font-light text-gray-500 dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
    {/* <a href="#" className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a> */}
    <aside>
    
        <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
            <a href="#" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</a>
            <a href="#" className="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Report abuse</a>
        </div>
    </aside>
</article>


            </Tab.Panel>



       
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
