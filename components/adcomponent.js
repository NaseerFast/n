import React from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
// import ImageNewLeg from '../public/images/YPImage.jpg'




export default function AdComponent() {
  return (
    <div className="mb-5 py-10 md:mx-10 ">
    <div className="grid grid-cols-1  sm:grid-cols-2 divide-x">
    <div className=" px-5 py-10 bg-white ">
    <div className="p-6 max-w-sm mx-auto   flex items-justify  space-x-4">
  {/* <div className="shrink-0">
    <img className="h-9 w-9  rounded-full " src="https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_960_720.jpg" alt="ChitChat Logo"/>
  </div> */}
  <div className="space-y-5">
    <div className="text-2xl font-extrabold tracking-tight text-grsy-800 uppercase "> Store</div>
    <p className="text-gray-600 text-xl pb-5">Bring your store online to reach more prospective customers plus a dashboard to track all your statistics.</p>
    <NextLink href="/" className=" bg-gray-800 hover:opacity-75 px-5 py-1 text-sm font-semibold text-gray-200 rounded-full" passHref>Visit</NextLink>
  </div>
</div>
    </div>
    

    <div className="px-5 py-10 ">
    <div className="p-6 max-w-sm mx-auto   flex items-justify  space-x-4">
  {/* <div className="shrink-0">
    <img className="h-9 w-9  rounded-full " src="https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_960_720.jpg" alt="ChitChat Logo"/>
  </div> */}
  <div className="space-y-5">
    <div className="text-2xl font-extrabold tracking-tight text-gray-800 uppercase">Job Portal</div>
    <p className="text-gray-600 text-xl pb-5">Visit our YellowPages job portal to find job listings to get a better shot at getting a job. </p>
    <NextLink href="#" className=" bg-gray-800 hover:opacity-75 px-5 py-1 text-sm font-semibold text-gray-200 rounded-full" passHref>Visit</NextLink>
  </div>
</div>
    </div>
    </div>

  

    </div>
  )
}

