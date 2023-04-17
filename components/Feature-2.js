import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
// import ImageNewLeg from '../public/images/YPImage.jpg'




export default function Feature2() {
  return (
    <div
    className="relative overflow-hidden  bg-cover bg-no-repeat p-12 text-center"
    style={{backgroundImage: "url('/images/YPImage.jpg')", height: '400px'}}>
    <div
      className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
      style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
      <div className="flex h-full items-center justify-center">
        <div className="text-white">
          <h2 className="mb-8 text-4xl font-semibold">Fuel your business growth with Yellow Pages</h2>
          {/* <h4 className="mb-6 text-xl font-semibold ">Subheading</h4> */}
          <button
            type="button"
            className="mx-auto rounded   px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-gray-800 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 bg-yellow-400 hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-te-ripple-init
            data-te-ripple-color="light">
            Directory
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

