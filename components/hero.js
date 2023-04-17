import React from "react";
import Image from "next/image";
import NextLink from 'next/link';
import ButtonPrimary from "./ButtonPrimary";
const Hero = ({
  listUser = [
    {
      name: "Users",
      number: "390",
      icon: "/images/heroicons_sm-user.svg",
    },
    {
      name: "Locations",
      number: "20",
      icon: "/images/gridicons_location.svg",
    },
    {
      name: "Server",
      number: "50",
      icon: "/images/bx_bxs-server.svg",
    },
  ],
}) => {
  return (
    <div className="  overflow-hidden bg-cover bg-center" >
    <div className="max-w-screen-xl md:mt-24 px-8 xl:px-16 mx-auto" id="about">
      <div className="grid grid-flow-row sm:grid-flow-col md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16 ">
        <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
           Scale up your existing busniess with  <strong>YellowPages</strong>.
          </h1>
          <p className="text-black-500 mt-4 mb-6">
            Provide a network for all your needs with ease and fun using
            LaslesVPN discover interesting features from us.
          </p>
          {/* <div className="inline-flex space-x-2 ">
          <NextLink href="/directorysearch">
            <p className="py-3 lg:py-4 px-8 cursor-pointer text-black font-semibold rounded-lg bg-white hover:bg-black hover:text-white hover:bg-gray-200 transition-all outline-none text-xs sm:text-base">Explore directories</p>
            </NextLink >

            <NextLink href="/product">
            <p className="py-3 lg:py-4 px-8 cursor-pointer text-black font-semibold rounded-lg bg-white hover:bg-black hover:text-white transition-all outline-none text-xs sm:text-base">Store</p>
         
            </NextLink>    
                  </div>
          */}
          <ButtonPrimary>Get Started</ButtonPrimary>
        </div>
        <div className="flex w-full">
         <div className="h-full w-full">
            <Image
              src="/images/illustration-intro.svg"
              alt="BYP Illustrasi"
              quality={100}
              width={612}
              height={500}
              layout="responsive"
            />
          </div> 
        </div>
      </div>
      <div className="relative w-full flex">
        <div className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {/* {listUser.map((listUsers, index) => ( */}
            <div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
            
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-yellow-300 w-12 h-12 mr-6 rounded-full">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    390+
                  </p>
                  <p className="text-lg text-black-500">Users</p>
                </div>
              </div>
            </div>

            <div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
           
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-yellow-300 w-12 h-12 mr-6 rounded-full">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                   200+
                  </p>
                  <p className="text-lg text-black-500">Locations</p>
                </div>
              </div>
            </div>

            <div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
            
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-yellow-300 w-12 h-12 mr-6 rounded-full">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd"></path></svg>     
                           </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    150+
                  </p>
                  <p className="text-lg text-black-500">Server</p>
                </div>
              </div>
            </div>
          {/* ))} */}
        </div>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
