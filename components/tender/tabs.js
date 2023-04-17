

import { Fragment } from 'react'
import { Tab } from '@headlessui/react'


export default function MyTabs({tenderlistings}) {

  return (
    <Tab.Group>

    <div className="grid grid-cols-6 gap-3  ">


  <div className='col-span-4 md:col-span-3 max-h-96 overflow-y-auto'>

    <Tab.List>


      {tenderlistings.map((item, i) => (


        <Tab key={i}>


      <div className="  px-4 text-gray-300 ">
        <div  className="p-2 md:p-4 max-w-sm cursor-pointer mb-4 rounded-md  bg-neutral-800" >

        <p className="border-b  border-gray-700 text-left font-bold text-lg pt-1">Call For Tender </p>


     <p className="text-left font-medium text-lg pt-1">Construction and Renovation of Buildings for the FGGC, Monguno</p>
    <p className="text-left  font-medium text-xs">Maiduguri, Bo </p>
     <p className="text-left font-normal text-xs   py-2">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
     <p className="text-left  font-medium text-xs">Closing 28th of July</p>
  <p className="text-left  font-medium text-xs pt-2"> Fulltime</p>
  <p className="text-left  font-medium text-xs pt-2"> posted 2 days ago</p>


                 </div>
         </div>
         </Tab>
      ))}



      </Tab.List>
      </div>

      <div className='col-span-3 lg:col-span-3 max-h-96 overflow-y-auto text-gray-300 bg-neutral-00 rounded-md px-4'>
      <Tab.Panels>
      {tenderlistings.map((item, i) => (
        <Tab.Panel key={i}>
        <div className="panel-content   py-4 bg-neutral-800 rounded-lg font-medium">
     <div className=" px-4 " >
     <p className="text-lg leading-6 ">Construction and Renovation of Buildings for the FGGC, Monguno</p>

     <p className="">{item.location}</p>
     <p className="text-xs leading-6">posted 5 days ago</p>
     </div>

   </div>

   <div className="panel-content py-4  ">
     <div className=" px-4 space-y-4 text-sm py-4 bg-neutral-800 rounded-lg font-medium" >
     <p className="text-lg  pb-4">Full Description</p>

   <p className="text-xs"></p>  {item.description}
       </div>


 <div className="">
     <div className=" px-4" >

 </div>
 </div>

    <div className="px-4 space-y-4 py-4 text-sm bg-neutral-800 mt-4 rounded-lg font-medium" >
 <h2 className=" text-lg  ">Roles and Responsibilities</h2>
 <div>
 <p>Aenean eu nunc nec metus feugiat eleifend eget quis turpis.</p>
 <p>Aenean eu nunc nec metus feugiat eleifend eget quis turpis.</p>
 <p>Aenean eu nunc nec metus feugiat eleifend eget quis turpis.</p>
 <p>Aenean eu nunc nec metus feugiat eleifend eget quis turpis.</p>
 </div>
 </div>

     </div>
    <div className="pl-4 pr-2 space-y-4 py-4 bg-neutral-800 rounded-lg">
     <p className="text-lg">Method of Application</p>
     <p className="text-sm">
 Interested and qualified candidates should:
 Click here to apply online
 Or
 Send their Cover Letter and CV to “The Human Resources Officer (CBI)” via: <span className="hover:text-yellow-300 hover:underline">recruitment.carebestinitiative@gmail.com </span> specifying the Job Title as the subject of the mail.</p>

<p className="bg-yellow-300 px-2 py-2 inline-block text-neutral-900 rounded-md text-xs font-medium hover:bg-yellow-400 cursor-pointer">Download document</p>
     </div>
        </Tab.Panel>
      ))}

      </Tab.Panels>
      </div>


      </div>
    </Tab.Group>
  )
}
