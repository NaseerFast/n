import React from 'react'

function OurservicesFeature() {

  return (
    <div className="pb-16" style={{ fontFamily: '"Lato", sans-serif' }}>
      {/* Code block starts */}
      <dh-component>
        <section className="max-w-8xl mx-auto container bg-neutral-800 pt-16">
          <div>
            <div role="contentinfo" className="flex items-center flex-col px-4">
              <p  className="focus:outline-none uppercase text-lg text-center text-gray-600 leading-4 mt-4">Services we offer</p>
              {/* <hh1  className="focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 text-gray-800 lg:w-5/12 md:w-9/12 pt-4">Create Beautiful Landing Pages &amp; Web Apps in a Jiffy</hh1> */}
            </div>
            <div  aria-label="group of cards" className="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4">
              <div  aria-label="card 1" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                <div className="w-20 h-20 relative mr-5">
                  <div className="absolute top-0 right-0 bg-yellow-300 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="absolute text-white bottom-0 left-0 bg-yellow-400 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG1.svg" alt="drawer" />
                  </div>
                </div>
                <div className="w-10/12">
                  <h2  className="focus:outline-none text-lg font-bold leading-tight text-gray-700">Business listing </h2>
                  <p  className="focus:outline-none text-base text-gray-600 leading-normal pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae massa vitae est faucibus fermentum quis eu ipsum. Vestibulum rhoncus tortor turpis, vel finibus est.</p>
                </div>
              </div>
              <div  aria-label="card 2" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                <div className="w-20 h-20 relative mr-5">
                  <div className="absolute top-0 right-0 bg-yellow-300 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="absolute text-white bottom-0 left-0 bg-yellow-400 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG2.svg" alt="check" />
                  </div>
                </div>
                <div className="w-10/12">
                  <h2  className="focus:outline-none text-lg font-semibold leading-tight text-gray-700">Online store</h2>
                  <p  className="focus:outline-none text-base text-gray-600 leading-normal pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae massa vitae est faucibus fermentum quis eu ipsum. Vestibulum rhoncus tortor turpis, vel finibus est.</p>
                </div>
              </div>
              <div  aria-label="card 3" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                <div className="w-20 h-20 relative mr-5">
                  <div className="absolute top-0 right-0 bg-yellow-300 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="absolute text-white bottom-0 left-0 bg-yellow-400 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG3.svg" alt="html tag" />
                  </div>
                </div>
                <div className="w-10/12">
                  <h2  className="focus:outline-none text-lg font-semibold leading-tight text-gray-700">Job portal</h2>
                  <p  className="focus:outline-none text-base text-gray-600 leading-normal pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae massa vitae est faucibus fermentum quis eu ipsum. Vestibulum rhoncus tortor turpis, vel finibus est.</p>
                </div>
              </div>
              <div  aria-label="card 4" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                <div className="w-20 h-20 relative mr-5">
                  <div className="absolute top-0 right-0 bg-yellow-300 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="absolute text-white bottom-0 left-0 bg-yellow-400 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG4.svg" alt="monitor" />
                  </div>
                </div>
                <div className="w-10/12">
                  <h2  className="focus:outline-none text-lg font-semibold leading-tight text-gray-700">Tender</h2>
                  <p  className="focus:outline-none text-base text-gray-600 leading-normal pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae massa vitae est faucibus fermentum quis eu ipsum. Vestibulum rhoncus tortor turpis, vel finibus est.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </dh-component>
      {/* Code block ends */}
    </div>

  )
}

export default OurservicesFeature
