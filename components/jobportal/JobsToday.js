
import NextLink from 'next/link'
import Image from 'next/image';
import { useContext, useEffect, useState, Fragment } from 'react';
import { Dialog, Popover, Disclosure, Menu, Transition } from '@headlessui/react'
import { XIcon, MenuIcon } from '@heroicons/react/outline'
import { ChevronDownIcon, FilterIcon, MinusSmIcon, PlusSmIcon, ViewGridIcon } from '@heroicons/react/solid'
import React from 'react'
import {useRouter} from 'next/router'
import Featured from '../../components/Carousel';
import Head from 'next/head';
import MyTabs from '../../components/jobportal/tabs';
import {useMediaQuery,Box} from  '@mui/material';
import classes from '../../utils/classes';
import NewJobs from '../../components/jobportal/Jobs';





export default function JobsToday({joblistings}){
 


  const router = useRouter();


  const isDesktop = useMediaQuery('(min-width:600px)');

    return(
      
   

<div className="p-2 bg-neutral-900">
  <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-8">
  {joblistings.map((item, i) => (


<NextLink key={i} href= {`/jobs/${item.slug}`} passHref  >
<div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-neutral-800 p-6 shadow rounded">
                    <div className="flex items-center border-b border-gray-200 pb-6">
                        <img src="https://cdn.tuk.dev/assets/components/misc/doge-coin.png" alt className="w-12 h-12 rounded-full" />
                        <div className="flex items-start justify-between w-full">
                            <div className="pl-3 w-full">
                                <p className="text-xl font-medium leading-5 text-gray-400">{item.title}</p>
                                <p className="text-sm leading-normal pt-2 text-gray-500">{item.employer + ", " + (`${item.location}`)}</p>
                            </div>
                            <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z" stroke="#2C3E50" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className="px-2">
                        <p className="text-sm leading-5 py-4 text-gray-600">A group of people interested in dogecoin, the currency and a bit of side for the meme and dof that we all know and love. These cases are perfectly simple and easy to distinguish.</p>
                        <div className="flex">
                            <div className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#nonprofit</div>
                            <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#ngo</div>
                        </div>
                    </div>
                </div>


 </NextLink>
  ))}


</div>


</div>
    

)}
     
