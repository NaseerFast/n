import Image from 'next/image';
import { Fragment } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function MyTabs({joblistings}) {

  return (
    <div>
    <Tab.Group>

    <div className="grid grid-cols-6 gap-3  ">


    <div className='col-span-4 md:col-span-3 max-h-96 overflow-y-auto mx-auto has-scrollbar'>

    <Tab.List>






      {joblistings.map((item, i) => (


        <Tab key={i}
        
        >


<div className="lg:w-8/12   mb-7 bg-neutral-800 p-6 shadow rounded mx-auto md:border border-neutral-800 md:bg-neutral-900">

<div 

className="flex border-b border-neutral-800 pb-6">
      <img src="https://cdn.tuk.dev/assets/components/misc/doge-coin.png" alt className="w-12 h-12 rounded-full" />
      <div className="flex items-start justify-between w-full">
       <div className="pl-3 w-full">
       <p className="text-xl font-medium leading-5 text-gray-400 text-left">{item.title}</p>
       <p className="text-sm leading-normal pt-2 text-gray-500 text-left">{item.employer + ", " + (`${item.location}`)}</p>
      </div>
       <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z" stroke="#2C3E50" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
                        </div>
                    </div>
                    <div className="px-2">
                        <p className="text-sm leading-5 py-4 text-gray-600 text-left">A group of people interested in dogecoin, the currency and a bit of side for the meme and dof that we all know and love. These cases are perfectly simple and easy to distinguish.</p>
                        <div className="flex">
                            <div className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#Ngo</div>
                            <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#Technology</div>
                        </div>
                    </div>
</div>

                  
         </Tab>
      ))}



      </Tab.List>
      </div>

      <div className='col-span-3 lg:col-span-3 max-h-96 overflow-y-auto text-gray-300 bg-neutral-800 rounded-md has-scrollbar'>
      <Tab.Panels>
      {joblistings.map((item, i) => (
        <Tab.Panel key={i}>
        <div className="panel-content  border-b border-gray-800 py-4 ">
     <div className=" px-4 " >
     <p className="text-lg leading-6 font-medium">{item.title}</p>
     <p className="text-sm leading-6">{item.employer}</p>
     <p className="">{item.location}</p>
     <p className="text-xs leading-6">posted 5 days ago</p>
     </div>

   </div>

   <div className="panel-content border-b border-gray-800 py-4 ">
     <div className=" px-4 space-y-4 text-sm py-4 " >
     <p className="text-lg  pb-4">Full Description</p>

   <p className="text-xs"></p>  {item.description}
       </div>

     <div className=" px-4 space-y-4 text-sm " >
     <p className="text-lg">Requirements</p>
     <ul>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
 <li>Nulla sit amet vept et leo semper fermentum ac id mi.</li>
 <li>Curabitur eget sem eu ante egestas fermentum.</li>
 <li>Donec volutpat risus non placerat condimentum.</li>
 <li>Cras sodales ept ut feps convalps ultricies.</li>
 <li>Proin viverra eros vitae mattis cursus.</li>
 <li>Curabitur consectetur odio sit amet sapien iacups, vulputate ultricies odio facipsis.</li>
 <li>Vestibulum interdum nibh vel vept rutrum, apquam scelerisque lectus ornare.</li>
 <li>Sed non pbero at lorem sagittis vehicula pretium vitae nisi.</li>


 <p>Morbi at erat quis pbero tristique fringilla non vitae erat.</p>
 <p>Suspendisse non leo egestas, tristique enim non, mattis erat.</p>
 <p>Praesent at lorem et nisi auctor pellentesque vitae nec erat.</p>

     </ul>
     </div>
 <div className="border-b border-gray-800">
     <div className=" px-4" >

 </div>
 </div>

    <div className="px-4 space-y-4 py-4 text-sm">
 <h2 className=" text-lg  ">Roles and Responsibilities</h2>
 <div>
 <p>Aenean eu nunc nec metus feugiat eleifend eget quis turpis.</p>
 <p>Aenean eu nunc nec metus feugiat eleifend eget quis turpis.</p>
 <p>Aenean eu nunc nec metus feugiat eleifend eget quis turpis.</p>
 <p>Aenean eu nunc nec metus feugiat eleifend eget quis turpis.</p>
 </div>
 </div>

     </div>
    <div className="pl-4 pr-2 space-y-4 py-4">
     <p className="text-lg">Method of Application</p>
     <p className="text-sm">
 Interested and qualified candidates should:
 Click here to apply online
 Or
 Send their Cover Letter and CV to “The Human Resources Officer (CBI)” via: <span className="hover:text-yellow-300 hover:underline">recruitment.carebestinitiative@gmail.com </span> specifying the Job Title as the subject of the mail.</p>
     </div>
        </Tab.Panel>
      ))}

      </Tab.Panels>
      </div>


      </div>
    </Tab.Group>
    <div>
  
    </div>
    
    </div>
  )
}
