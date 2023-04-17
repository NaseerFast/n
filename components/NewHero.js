import React from "react";
// import { FiSearch } from "react-icons/fi";

// import { images } from "../../../constants";

const NewHero = () => {
  return (
    // <section className="container mx-auto flex flex-col px-5 py-5 lg:flex-row">
    //   <div className="mt-10 lg:w-1/2">
    //     <h1 className="font-roboto text-3xl text-center font-bold text-dark-soft md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]">
    //     Looking for a way to get your business noticed?
    //     </h1>
    //     <p className="text-dark-light mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left">
    //     Welcome to our business listing and directory startup! We are dedicated to helping businesses of all sizes thrive by providing a platform to connect with potential customers.
    //     </p>
    //     <div className="flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative">
    //       <div className="relative">
    //         {/* <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]" /> */}
    //         <input
    //           className="placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:py-4"
    //           type="text"
    //           placeholder="Search article"
    //         />
    //       </div>
    //       <button className="w-full bg-primary text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2">
    //         Search
    //       </button>
    //     </div>
    //     <div className="flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7">
    //       <span className="text-dark-light font-semibold italic mt-2 lg:mt-4 lg:text-sm xl:text-base">
    //         Popular Tags:
    //       </span>
    //       <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base">
    //         <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
    //           Design
    //         </li>
    //         <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
    //           User Experience
    //         </li>
    //         <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
    //           User Interfaces
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    //   <div className="hidden lg:block lg:1/2">
    //     <img
    //       className="w-full"
    //       src='/images/HeroImage.svg'
    //       alt="users are reading articles"
    //     />
    //   </div>
    // </section>
    <>
    <section id="hero">
    {/* <!-- Flex Container --> */}
    <div
      class="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row"
    >
      {/* <!-- Left item --> */}
      <div class="flex flex-col mt-12 mb-32 space-y-12 md:w-1/2">
        <h1
          class="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left"
        >
         Looking for a way to get your business noticed?
        </h1>
        {/* <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
        Look no further than Yellow Pages Digital Enterprise! Our online platform makes it easy to list your business and get noticed by customers searching for your products or services.
        </p> */}

        <ul class="max-w-lg space-y-4 text-neutral-800 list-inside ">
            <li class="flex items-center">  <svg class="flex-shrink-0 w-7 h-6 text-gray-800 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> Look no further than Yellow Pages Digital Enterprise!</li>
            <li class="flex items-center"> <svg class="flex-shrink-0 w-7 h-6 text-gray-800 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>Our online platform makes it easy to list your business and get noticed by customers searching for your products or services.</li>
            <li class="flex items-center"> <svg class="flex-shrink-0 w-7 h-6 text-gray-800 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>For an even more widespread reach, consider adding one of out outdoor billboards to your marketing mix!</li>
        </ul>
        <div class="flex justify-center md:justify-start">
          <a
            href="#"
            class="p-3 px-6 pt-2 text-gray-800 bg-yellow-400 rounded-full baseline bg-brightRedLight"
            >Get Started</a
          >
        </div>
      </div>
      {/* <!-- Image --> */}
      <div class="md:w-1/2">
        <img src="/images/illustration-intro.svg" alt="" />
      </div>
    </div>
  </section>

    {/* <section id="features">
      /* <!-- Flex container -
      <div
        class="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row"
      >
        {/* <!-- What's Different 
        <div class="flex flex-col space-y-12 md:w-1/2">
          <h2 class="max-w-md text-4xl font-bold text-center md:text-left">
            What's different about Manage?
          </h2>
          <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

    
        <div class="flex flex-col space-y-8 md:w-1/2">
          
          <div
            class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
          >
            
            <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div class="flex items-center space-x-2">
                <div
                  class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
                >
                  01
                </div>
                <h3 class="text-base font-bold md:mb-4 md:hidden">
                  Track company-wide progress
                </h3>
              </div>
            </div>

            <div>
              <h3 class="hidden mb-4 text-lg font-bold md:block">
                Track company-wide progress
              </h3>
              <p class="text-darkGrayishBlue">
                See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way down to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
          </div>

      
          <div
            class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
          >
        
            <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div class="flex items-center space-x-2">
                <div
                  class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
                >
                  02
                </div>
                <h3 class="text-base font-bold md:mb-4 md:hidden">
                  Advanced built-in reports
                </h3>
              </div>
            </div>

            <div>
              <h3 class="hidden mb-4 text-lg font-bold md:block">
                Advanced built-in reports
              </h3>
              <p class="text-darkGrayishBlue">
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </p>
            </div>
          </div>

        
          <div
            class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
          >
            
            <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div class="flex items-center space-x-2">
                <div
                  class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
                >
                  03
                </div>
                <h3 class="text-base font-bold md:mb-4 md:hidden">
                  Everything you need in one place
                </h3>
              </div>
            </div>

            <div>
              <h3 class="hidden mb-4 text-lg font-bold md:block">
                Everything you need in one place
              </h3>
              <p class="text-darkGrayishBlue">
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    
    </>
  );
};

export default NewHero;