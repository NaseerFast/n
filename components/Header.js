/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import Image from 'next/image';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
    const router = useRouter();
  return (

    <div className="overflow-hidden" style={{background: "url(images/grad-10.jpg)", backgroundSize: 'cover'}}>
  <div>
    <div className="flex items-center justify-between px-8 ">
      <div className="w-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-auto mr-14">
            <a href="#">
              <img src="gradia-assets/logos/gradia-name-white.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    
    </div>
    {/* <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
      <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
    
    </div> */}
  </div>
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-between -m-6 pt-16 pb-20">
      <div className="w-full lg:w-5/12 xl:w-1/2 p-6">
        <p className="mb-5 font-heading text-neutral-900 font-medium text-xl ">Grow fast, get things done with ease</p>
        <h1 className="mb-14 font-heading text-4xl  text-neutral-900 font-bold ">Explore our directory for business places around you , anywhere, anytime.</h1>
        <div className="flex md:flex-wrap -m-3 ">
          {/* <div className="w-full lg:w-auto p-3 ">
          <NextLink href={`/directorysearch`} passHref  >
            <div  className=" text-center font-heading font-semibold w-full px-6 py-4 text-sm text-gray-900 bg-white hover:bg-gray-100 rounded-md cursor-pointer">Explore our directory</div>
            </NextLink>
          </div> */}
          <div className="w-full lg:w-auto p-3">
          <NextLink href={`/directory`} passHref  >
            <div className="text-center font-heading font-semibold w-full px-6 py-4 text-sm text-neutral-900 bg-white hover:bg-neutral-900 hover:text-white rounded-md cursor-pointer">Explore Directory</div>
            </NextLink>
          </div>
        </div>
       
      </div>
      <div className="w-full lg:w-7/12 xl:w-1/2 p-6">
        {/* <div className="max-w-max mx-auto">
          <div className="flex flex-wrap justify-center -m-3 mb-3">
            <div className="w-full p-3">
              <div className="mx-auto w-64 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                <div className="flex flex-wrap -m-2">
                  <div className="w-auto p-2">
                    <img src="gradia-assets/images/hero/avatar-circle.png" alt="" />
                  </div>
                  <div className="w-auto p-2">
                    <p className="font-heading text-base text-gray-900">Albert Flores</p>
                    <p className="mb-2 text-sm text-gray-500">Software Engineer</p>
                    <div className="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                      <svg className="mr-1" width="13" height="13" viewbox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      <p className="text-xs text-gray-700 font-medium">Wyoming, USA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center max-w-max -m-3 mb-3">
            <div className="w-full sm:w-1/2 p-3">
              <div className="mx-auto w-64 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                <div className="flex flex-wrap -m-2">
                  <div className="w-auto p-2">
                    <img src="gradia-assets/images/hero/avatar-circle2.png" alt=""/>
                  </div>
                  <div className="w-auto p-2">
                    <p className="font-heading text-base text-gray-900">Darlene Robertson</p>
                    <p className="mb-2 text-sm text-gray-500">Software Tester</p>
                    <div className="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                      <svg className="mr-1" width="13" height="13" viewbox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      <p className="text-xs text-gray-700 font-medium">New York, USA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 p-3">
              <div className="mx-auto w-64 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                <div className="flex flex-wrap -m-2">
                  <div className="w-auto p-2">
                    <img src="gradia-assets/images/hero/avatar-circle3.png" alt=""/>
                  </div>
                  <div className="w-auto p-2">
                    <p className="font-heading text-base text-gray-900">Kristin Watson</p>
                    <p className="mb-2 text-sm text-gray-500">Project Manager</p>
                    <div className="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                      <svg className="mr-1" width="13" height="13" viewbox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      <p className="text-xs text-gray-700 font-medium">Pennsylvania, USA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center max-w-max -m-3 mb-3 xl:-ml-20">
            <div className="w-full sm:w-1/2 p-3">
              <div className="mx-auto w-64 p- bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                <div className="flex flex-wrap -m-2">
                  <div className="w-auto p-2">
                    <img src="gradia-assets/images/hero/avatar-circle4.png" alt=""/>
                  </div>
                  <div className="w-auto p-2">
                    <p className="font-heading text-base text-gray-900">Guy Hawkins</p>
                    <p className="mb-2 text-sm text-gray-500">Scrum Master</p>
                    <div className="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                      <svg className="mr-1" width="13" height="13" viewbox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      <p className="text-xs text-gray-700 font-medium">North Carolina, USA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 p-3">
              <div className="mx-auto w-64 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                <div className="flex flex-wrap -m-2">
                  <div className="w-auto p-2">
                    <img src="gradia-assets/images/hero/avatar-circle5.png" alt=""/>
                  </div>
                  <div className="w-auto p-2">
                    <p className="font-heading text-base text-gray-900">Annette Black</p>
                    <p className="mb-2 text-sm text-gray-500">Software Engineer</p>
                    <div className="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                      <svg className="mr-1" width="13" height="13" viewbox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      <p className="text-xs text-gray-700 font-medium">North Dakota, USA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center max-w-max -m-3">
            <div className="w-full sm:w-1/2 p-3">
              <div className="mx-auto w-64 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                <div className="flex flex-wrap -m-2">
                  <div className="w-auto p-2">
                    <img src="gradia-assets/images/hero/avatar-circle.png" alt=""/>
                  </div>
                  <div className="w-auto p-2">
                    <p className="font-heading text-base text-gray-900">Robert Fox</p>
                    <p className="mb-2 text-sm text-gray-500">UI/UX Designer</p>
                    <div className="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                      <svg className="mr-1" width="13" height="13" viewbox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      <p className="text-xs text-gray-700 font-medium">Maine, USA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 p-3">
              <div className="mx-auto w-64 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                <div className="flex flex-wrap -m-2">
                  <div className="w-auto p-2">
                    <img src="gradia-assets/images/hero/avatar-circle2.png" alt="" />
                  </div>
                  <div className="w-auto p-2">
                    <p className="font-heading text-base text-gray-900">Cody Fisher</p>
                    <p className="mb-2 text-sm text-gray-500">Ethical Hacker</p>
                    <div className="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                      <svg className="mr-1" width="13" height="13" viewbox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      <p className="text-xs text-gray-700 font-medium">Alaska, USA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  </div>
</div>
  )
}
