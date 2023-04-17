
import NextLink from 'next/link'

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
import Image from 'next/image';





export default function TendersToday({tenderlistings}){



  const router = useRouter();


  const isDesktop = useMediaQuery('(min-width:600px)');

    return(



<div className="p-2 bg-neutral-900">
  <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-8">
  {tenderlistings.map((item, i) => (


<NextLink key={i} href= {`/tender/${item.slug}`} passHref  >
<div className="  px-2 text-gray-300 ">
<div  className="p-4 md:p-4 max-w-sm cursor-pointer mb-4 rounded-md  bg-neutral-800" >
<img className="" src="/images/logo-3.jpg" alt="Default avatar"  style={{width:50}}/>


<p className="text-left font-bold text-lg py-2">{item.title}</p>
<p className="text-left  font-medium text-xs">Maiduguri, Bo </p>
<p className=" font-normal text-xs   py-2 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

<p className="text-left  font-medium text-xs pt-2"> Fulltime</p>
<p className="text-left  font-medium text-xs pt-2"> posted 2 days ago</p>


         </div>
 </div>

 </NextLink>
  ))}


</div>
</div>


)}
