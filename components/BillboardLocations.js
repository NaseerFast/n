import Image from 'next/image'

export default function Locations(){
    return(
        <div className="flex flex-col w-full ">
         <div className="max-w-xl  md:mx-auto sm:text-center lg:max-w-2xl ">
        <h2 className="max-w-lg text-center mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="df31b9f6-a505-42f8-af91-d2b7c3218e5c"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#df31b9f6-a505-42f8-af91-d2b7c3218e5c)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative  px-2 py-4 text-yellow-500">BornoYellowPages</span>
          </span>{' '}
          <span className="text-white" >Billboards</span>
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
       
        <div className="pb-12 w-full md:px-8 mt-16">
        <img passHref alt="image"  src="/images/HugeGlobal.svg"className="w-full h-auto" />

        </div>
        </div>
         
    );
}