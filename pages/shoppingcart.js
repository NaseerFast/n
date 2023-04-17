import React, { useContext, useEffect, useState } from 'react';
import { Tab } from '@headlessui/react'
import Layout from '../components/product/layout';
import { RadioGroup } from '@headlessui/react'
import { Store } from '../utils/Store';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const plans = [
  {
    name: 'Paypal',
    ram: '12GB',
    cpus: '6 CPUs',
    disk: '160 GB SSD disk',
  },
  {
    name: 'Paystack',
    ram: '16GB',
    cpus: '8 CPUs',
    disk: '512 GB SSD disk',
  },
  {
    name: 'Cash',
    ram: '32GB',
    cpus: '12 CPUs',
    disk: '1024 GB SSD disk',
  },
]

export default function Example() {
  const [selected, setSelected] = useState(plans[0])


  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { shippingAddress, paymentMethod } = cart;

  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!selectedPaymentMethod) {
      return toast.error('Payment method is required');
    }
    dispatch({ type: 'SAVE_PAYMENT_METHOD', payload: selectedPaymentMethod });
    Cookies.set(
      'cart',
      JSON.stringify({
        ...cart,
        paymentMethod: selectedPaymentMethod,
      })
    );

    router.push('/placeorder');
  };
  useEffect(() => {
    if (!shippingAddress.address) {
      return router.push('/shipping');
    }
    setSelectedPaymentMethod(paymentMethod || '');
  }, [paymentMethod, router, shippingAddress.address]);

  let [categories] = useState({
    Summary: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Payment: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Shipping: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  })

  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };


  return (
    <Layout>
        <div className="bg-neutral-900">
        <nav className="relative w-full flex flex-wrap items-center justify-between pt-4  text-gray-500 hover:text-gray-700 text-sm focus:text-gray-700  navbar navbar-expand-lg navbar-light">
  <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
    <nav className="bg-grey-light rounded-md w-full" aria-label="breadcrumb">
      <ol className="list-reset flex">
        <li><a href="#" className="text-gray-500 hover:text-gray-600">Store</a></li>
        <li><span className="text-gray-500 mx-2">/</span></li>
        <li><a href="#" className="text-gray-500 hover:text-gray-600">Produt</a></li>
        <li><span className="text-gray-500 mx-2">/</span></li>
        <li><a href="#" className="text-gray-500 hover:text-gray-600">Checkout</a></li>
      </ol>
    </nav>
  </div>
</nav>
    <div className="w-full max-w-xl px-2 py-16 sm:px-0 mx-auto ">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl  p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  ' bg-neutral-800 border border-gray-700 rounded  focus:ring-neutral-700 ',
                  selected
                    ? 'bg-white shadow'
                    : 'text-neutral-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
        
            <Tab.Panel
              
              className={classNames(
                'rounded-xl bg-neutral-800 p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 bg-neutral-800 border border-gray-700 rounded  focus:ring-neutral-700 '
              )}
            >
              <div className="bg-neutral-800">
    <div className="py-12">
       <p>SUmmary</p>
    </div>
</div>

            </Tab.Panel>


            <Tab.Panel
              
              className={classNames(
                'rounded-xl bg-neutral-800 p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 bg-neutral-800 border border-gray-700 rounded  focus:ring-neutral-700 '
              )}
            >
              <div className="bg-neutral-800">
    <div className="py-12">
        <div className="max-w-md mx-auto bg-neutral-800 shadow-lg rounded-lg md:max-w-xl mx-2">
            <div className="md:flex ">
                <div className="w-full p-4 px-5 py-5">
                    {/* <div className="flex flex-row">
                        <h2 className="text-3xl font-semibold">Borno</h2>
                        <h2 className="text-3xl text-yellow-300 font-semibold">YellowPages</h2>
                    </div> */}
                    <div className="mx-auto w-full max-w-md">
                      
                    <form className="mx-auto max-w-screen-md" onSubmit={submitHandler}>
        <h1 className="mb-4 text-xl">Payment Method</h1>
        {['PayPal', 'Stripe', 'CashOnDelivery'].map((payment) => (
          <div key={payment} className="mb-4">
            <input
              name="paymentMethod"
              className="p-2 outline-none focus:ring-0"
              id={payment}
              type="radio"
              checked={selectedPaymentMethod === payment}
              onChange={() => setSelectedPaymentMethod(payment)}
            />

            <label className="p-2" htmlFor={payment}>
              {payment}
            </label>
          </div>
        ))}
        <div className="mb-4 flex justify-between">
          <button
            onClick={() => router.push('/shipping')}
            type="button"
            className="default-button"
          >
            Back
          </button>
          <button className="primary-button">Next</button>
        </div>
      </form>
      </div> 

                       {/* <span className="text-gray-400">Customer Information</span>
                    <div className="relative pb-5">
                    <input type="text" name="mail" className="border border-neutral-900 text-gray-400 rounded h-10 w-full   focus:ring-neutral-700 focus:border-none px-2 mt-2 text-sm bg-neutral-800" placeholder="E-mail"/> 
                    <span className="absolute text-blue-500 right-2 top-4 font-medium text-sm">Log out</span>
                     </div> <span className="text-gray-400">Billing Address</span>
                    <div className="grid md:grid-cols-2 md:gap-2"> 
                    <input type="text" name="mail" className="border border-neutral-900 text-gray-400  rounded h-10 w-full  px-2 mt-2 text-sm bg-neutral-800" placeholder="First name*"/>
                     <input type="text" name="mail" className="border border-neutral-900 text-gray-400 bg-neutral-800 rounded h-10 w-full   focus:ring-neutral-700 focus:border-none px-2 mt-2 text-sm" placeholder="Last name*"/> </div> 
                     <input type="text" name="mail" className="border border-neutral-900 text-gray-400 bg-neutral-800 rounded h-10 w-full   focus:ring-neutral-700 focus:border-none px-2 mt-2 text-sm" placeholder="Address*"/> 
                    <div className="grid md:grid-cols-3 md:gap-2"> 
                    <input type="text" name="mail" className="border border-neutral-900 text-gray-400  rounded h-10 w-full   focus:ring-neutral-700 focus:border-none px-2 mt-2 text-sm bg-neutral-800" placeholder="Zipcode*"/> 
                    <input type="text" name="mail" className="border border-neutral-900 text-gray-400 bg-neutral-800 rounded h-10 w-full   focus:ring-neutral-700 focus:border-none px-2 mt-2 text-sm" placeholder="City*"/> 
                    <input type="text" name="mail" className="border border-neutral-900 text-gray-400 bg-neutral-800 rounded h-10 w-full   focus:ring-neutral-700 focus:border-none px-2 mt-2 text-sm" placeholder="State*"/> </div> 
                    <input type="text" name="mail" className="border border-neutral-900  bg-neutral-800 rounded h-10 w-full   focus:ring-neutral-700 focus:border-none px-2 mt-2 text-sm" placeholder="Phone Number*"/>
                    <div className="flex justify-between items-center pt-2"> <button type="button" className="h-12 w-24 text-white text-xs font-medium">Return to cart</button> <button type="button" className="h-12 w-48 rounded font-medium text-xs bg-white text-neutral-900">Continue to Shipping</button> </div>
                    <input type="text" name="mail" className="border border-neutral-900  bg-neutral-800 rounded h-10 w-full   focus:ring-neutral-700 focus:border-none px-2 mt-2 text-sm" placeholder="Phone Number*"/>
                    <input type="text" name="mail" className="border border-neutral-900  bg-neutral-800 rounded h-10 w-full   focus:ring-neutral-700 focus:border-none px-2 mt-2 text-sm" placeholder="Phone Number*"/> */}

                </div>
            </div>
        </div>
    </div>
</div>

            </Tab.Panel>

            <Tab.Panel
              
              className={classNames(
                'rounded-xl bg-neutral-800 p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 bg-neutral-800 border border-gray-700 rounded  focus:ring-neutral-700 '
              )}
            >
              <div className="bg-neutral-800">
    <div className="py-12">
        <div className="max-w-md mx-auto bg-neutral-800 shadow-lg rounded-lg md:max-w-xl mx-2">
            <div className="md:flex ">
                <div className="w-full p-4 px-5 py-5">
                    <div className="flex flex-row">
                        <h2 className="text-3xl font-semibold">Borno</h2>
                        <h2 className="text-3xl text-yellow-300 font-semibold">YellowPages</h2>
                    </div>
                    <div className="flex flex-row pt-2 text-xs pt-6 pb-5"> <span className="font-bold">Information</span> <small className="text-gray-400 ml-1"></small> <span className="text-gray-400 ml-1">Shopping</span> <small className="text-gray-400 ml-1"></small> <span className="text-gray-400 ml-1">Payment</span> </div> <span className="text-gray-400">Customer Information</span>
                    <div className="relative pb-5">
                    <input type="text" name="mail" className="border border-neutral-900 text-gray-400 rounded h-10 w-full   focus:ring-neutral-700 focus:border-none px-2 mt-2 text-sm bg-neutral-800" placeholder="E-mail"/> <span className="absolute text-blue-500 right-2 top-4 font-medium text-sm">Log out</span> </div> <span className="text-gray-400">Shipping Address</span>
                    <div className="grid md:grid-cols-2 md:gap-2"> 
                    <input type="text" name="mail" className="border border-neutral-900 text-gray-400  rounded h-10 w-full  px-2 mt-2 text-sm bg-neutral-800" placeholder="First name*"/>
                     <input type="text" name="mail" className="border border-neutral-900 text-gray-400 bg-neutral-800 rounded h-10 w-full   focus:ring-neutral-700 focus:border-none px-2 mt-2 text-sm" placeholder="Last name*"/> </div> 
                     <input type="text" name="mail" className="border border-neutral-900 text-gray-400 bg-neutral-800 rounded h-10 w-full   focus:ring-neutral-700 focus:border-none px-2 mt-2 text-sm" placeholder="Company (optional)"/> 
                     <input type="text" name="mail" className="border border-neutral-900 text-gray-400 bg-neutral-800 rounded h-10 w-full   focus:ring-neutral-700 focus:border-none px-2 mt-2 text-sm" placeholder="Address*"/> 
                     <input type="text" name="mail" className="border border-neutral-900 text-gray-400 bg-neutral-800 rounded h-10 w-full   focus:ring-neutral-700 focus:border-none px-2 mt-2 text-sm" placeholder="Apartment, suite, etc. (optional)"/>
                    <div className="grid md:grid-cols-3 md:gap-2"> 
                    <input type="text" name="mail" className="border border-neutral-900 text-gray-400  rounded h-10 w-full   focus:ring-neutral-700 focus:border-none px-2 mt-2 text-sm bg-neutral-800" placeholder="Zipcode*"/> 
                    <input type="text" name="mail" className="border border-neutral-900 text-gray-400 bg-neutral-800 rounded h-10 w-full   focus:ring-neutral-700 focus:border-none px-2 mt-2 text-sm" placeholder="City*"/> 
                    <input type="text" name="mail" className="border border-neutral-900 text-gray-400 bg-neutral-800 rounded h-10 w-full   focus:ring-neutral-700 focus:border-none px-2 mt-2 text-sm" placeholder="State*"/> </div> 
                    <input type="text" name="mail" className="border border-neutral-900 text-gray-400 bg-neutral-800 rounded h-10 w-full   focus:ring-neutral-700 focus:border-none px-2 mt-2 text-sm" placeholder="Country*"/> 
                    <input type="text" name="mail" className="border border-neutral-900  bg-neutral-800 rounded h-10 w-full   focus:ring-neutral-700 focus:border-none px-2 mt-2 text-sm" placeholder="Phone Number*"/>
                    <div className="flex justify-between items-center pt-2"> <button type="button" className="h-12 w-24 text-white text-xs font-medium">Return to cart</button> <button type="button" className="h-12 w-48 rounded font-medium text-xs bg-white text-neutral-900">Continue to Shipping</button> </div>
                </div>
            </div>
        </div>
    </div>
</div>

            </Tab.Panel>


           
      
        </Tab.Panels>
      </Tab.Group>
    </div>
    </div>
    </Layout>
  )
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}