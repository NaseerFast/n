import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { XCircleIcon } from '@heroicons/react/outline';
import Layout from '../components/product/layout/index';
import { Store } from '../utils/Store';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { toast } from 'react-toastify';

var formatter = new Intl.NumberFormat({
    style: 'currency',
    currency: 'NGN',

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});


function CartScreen() {
   
    const router = useRouter();
    const { state, dispatch } = useContext(Store);
    const {
      cart: { cartItems },
    } = state;
    const removeItemHandler = (item) => {
      dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
    };
    const updateCartHandler = async (item, qty) => {
      const quantity = Number(qty);
      const { data } = await axios.get(`/api/products/${item._id}`);
      if (data.countInStock < quantity) {
        return toast.error('Sorry. Product is out of stock');
      }
      dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } });
      toast.success('Product updated in the cart');
    };



    return (
        <Layout>
            <div className="mx-auto bg-neutral-900">
                  {/* <p className="text-xl  font-black leading-10 text-gray-800 pt-3">Shopping Cart </p> */}
            {cartItems.length === 0 ? (
        <div>
          Cart is empty. <Link href="/product">Go shopping</Link>
        </div>
      ) : (
               
                    <div className="w-full  overflow-x-hidden  p-2 md:p-4" id="chec-div">
                        
                        <div className="w-full  z-10   overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700 overflow-y-auto" id="checkout">
                      
                            <div className="flex md:flex-row flex-col justify-center" id="cart">
                                <div className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-neutral-900 overflow-y-auto overflow-x-hidden " id="scroll">
                                    <div className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer" >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <polyline points="15 6 9 12 15 18" />
                                        </svg>
                                      <Link href="/product" passHref>
                                        
                                        <p className="text-sm pl-2 leading-none">Back</p> 
                                      </Link>
                                    </div>
                                    
                                    

                                    
                                    
                              
{cartItems.map((item,i) => (
                                    <div key={i} className="md:flex items-center py-8 border-b border-gray-200">
                                        <div className="w-4/4">
                                            <img src={item.image} className="w-full h-full object-center object-cover" />
                                        </div>
                                        <div className="md:pl-3 md:w-3/4 w-full">
                                            <p className="text-xs leading-3 text-gray-300 md:pt-0 pt-4">RF293</p>
                                            <div className="flex items-center justify-between w-full pt-1">
                                                <p className="text-base font-black leading-none text-gray-400">{item.name}</p>
                                                <select className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none overflow-y-auto"
                                                   value={item.quantity}
                                                   onChange={(e) =>
                                                     updateCartHandler(item, e.target.value)
                                                   }
                                                >
                                                   {[...Array(item.countInStock).keys()].map((x) => (
                          <option className="" key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                                                </select>
                                                
                                            </div>
                                            <p className="text-xs leading-3 text-gray-600 pt-2">Height: 10 inches</p>
                                            <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
                                            <p className="w-96 text-xs leading-3 text-gray-600">Composition: 100% calf leather</p>
                                            <div className="flex items-center justify-between pt-5 pr-6">
                                                <div className="flex itemms-center">
                                                    <p className="text-xs leading-3 underline text-gray-600 cursor-pointer">Add to favorites</p>
                                                    <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"  onClick={() => removeItemHandler(item)}>Remove</p>
                                                </div>
                                                <p className="text-base font-black leading-none text-gray-600">N {formatter.format(`${item.price}`)}</p>
                                            </div>
                                        </div>
                                    </div> 

))}
                                </div>
                                <div className=" lg:w-1/3 xl:w-1/2   bg-neutral-800 h-full">
                                    <div className="flex flex-col  px-8 py-5 justify-between overflow-y-auto">
                                        <div>
                                            <p className="text-2xl  leading-9 text-gray-300">Summary</p>
                                         
                                            <div className="flex items-center justify-between pt-5">
                                                <p className="text-base leading-none text-gray-600">Subtotal  ({cartItems.reduce((a, c) => a + c.quantity, 0)}) </p>
                                                <p className="text-base leading-none text-gray-600"> N
                                                 {formatter.format(`${cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}`)}      
                                                </p>       
                                            </div>
                                            <div className="flex items-center justify-between pt-5">
                                                <p className="text-base leading-none text-gray-600">Shipping</p>
                                                <p className="text-base leading-none text-gray-600">N30</p>
                                            </div>
                                            <div className="flex items-center justify-between pt-5">
                                                <p className="text-base leading-none text-gray-600">Tax</p>
                                                <p className="text-base leading-none text-gray-600">N35</p>
                                            </div>
                                            <div>
                                            <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                                <p className="text-2xl leading-normal text-gray-600">Total</p>
                                                <p className="text-base leading-none text-gray-600"> N
                                                {formatter.format(`${cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}`)}</p>
                                            </div>
                                            <button  onClick={() => router.push('login?redirect=/shipping')} className="text-base leading-none w-full py-4 bg-yellow-300 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white font-bold rounded-lg">
                                                Checkout
                                            </button>
                                        </div>
                                        </div>
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
       )} 
            </div>

            <style>
                {` /* width */
                #scroll::-webkit-scrollbar {
                    width: 6px;
                }

                /* Track */
                #scroll::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                /* Handle */
                #scroll::-webkit-scrollbar-thumb {
                    background: rgb(133, 132, 132);
                }
`}
            </style>
        </Layout>
    );
}

export default dynamic(() => Promise.resolve(CartScreen), { ssr: false });



// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useContext } from 'react';
// import { XCircleIcon } from '@heroicons/react/outline';
// import Layout from '../components/product/layout/index';
// import { Store } from '../utils/Store';
// import { useRouter } from 'next/router';
// import dynamic from 'next/dynamic';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// function CartScreen() {
//   const router = useRouter();
//   const { state, dispatch } = useContext(Store);
//   const {
//     cart: { cartItems },
//   } = state;
//   const removeItemHandler = (item) => {
//     dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
//   };
//   const updateCartHandler = async (item, qty) => {
//     const quantity = Number(qty);
//     const { data } = await axios.get(`/api/products/${item._id}`);
//     if (data.countInStock < quantity) {
//       return toast.error('Sorry. Product is out of stock');
//     }
//     dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } });
//     toast.success('Product updated in the cart');
//   };
//   return (
//     <Layout title="Shopping Cart">
//       <div className="bg-neutral-900">
//       <h1 className="mb-4 text-xl text-white p-2">Shopping Cart</h1>
//       {cartItems.length === 0 ? (
//         <div>
//           Cart is empty. <Link href="/">Go shopping</Link>
//         </div>
//       ) : (
//         <div className="grid md:grid-cols-4 md:gap-5 bg-neutral-900 p-8">
//           <div className="overflow-x-auto md:col-span-3">
//             <table className="min-w-full ">
//               <thead className=" text-white">
//                 <tr>
//                   <th className="p-5 text-left">Item</th>
//                   <th className="p-5 text-right">Quantity</th>
//                   <th className="p-5 text-right">Price</th>
//                   <th className="p-5">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="text-white">
//                 {cartItems.map((item) => (
//                   <tr key={item.slug} className="">
//                     <td>
//                       <Link href={`/product/${item.slug}`}>
//                         <a className="flex items-center text-white hover:text-white hover:underline ">
//                           <Image
//                             src={item.image}
//                             alt={item.name}
//                             width={180}
//                             height={200}
//                           ></Image>
//                           &nbsp;
//                           {item.name}
//                         </a>
//                       </Link>
//                     </td>
//                     <td className="p-5 text-right text-white">
//                       <select
//                       className="bg-neutral-900"
//                         value={item.quantity}
//                         onChange={(e) =>
//                           updateCartHandler(item, e.target.value)
//                         }
//                       >
//                         {[...Array(item.countInStock).keys()].map((x) => (
//                           <option key={x + 1} value={x + 1}>
//                             {x + 1}
//                           </option>
//                         ))}
//                       </select>
//                     </td>
//                     <td className="p-5 text-right">${item.price}</td>
//                     <td className="p-5 text-center">
//                       <button onClick={() => removeItemHandler(item)}>
//                         <XCircleIcon className="h-5 w-5"></XCircleIcon>
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           <div className="card p-5">
//             <ul>
//               <li>
//                 <div className="pb-3 text-xl text-white">
//                   Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}) : $
//                   {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
//                 </div>
//               </li>
//               <li>
//                 <button
//                   onClick={() => router.push('login?redirect=/shipping')}
//                   className="primary-button w-full"
//                 >
//                   Check Out
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       )}
//       </div>
//     </Layout>
//   );
// }

// export default dynamic(() => Promise.resolve(CartScreen), { ssr: false });
