import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import CheckoutWizard from '../components/CheckoutWizard';
import Layout from '../components/product/layout/';
import { getError } from '../utils/error';
import { Store } from '../utils/Store';

var formatter = new Intl.NumberFormat({
  style: 'currency',
  currency: 'NGN',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

export default function PlaceOrderScreen() {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { cartItems, shippingAddress, paymentMethod } = cart;

  const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100;

  const itemsPrice = round2(
    cartItems.reduce((a, c) => a + c.quantity * c.price, 0)
  ); // 123.4567 => 123.46

  const shippingPrice = itemsPrice > 200 ? 0 : 15;
  const taxPrice = round2(itemsPrice * 0.15);
  const totalPrice = round2(itemsPrice + shippingPrice + taxPrice);

  const router = useRouter();
  useEffect(() => {
    if (!paymentMethod) {
      router.push('/payment');
    }
  }, [paymentMethod, router]);

  const [loading, setLoading] = useState(false);

  const placeOrderHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post('/api/orders', {
        orderItems: cartItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      });
      setLoading(false);
      dispatch({ type: 'CART_CLEAR_ITEMS' });
      Cookies.set(
        'cart',
        JSON.stringify({
          ...cart,
          cartItems: [],
        })
      );
      router.push(`/order/${data._id}`);
    } catch (err) {
      setLoading(false);
      toast.error(getError(err));
    }
  };

  return (
    <Layout title="Place Order">
    <div className="bg-neutral-900 text-white py-12 px-2 md:px-8 ">
      <CheckoutWizard activeStep={3} />
      <h1 className="mb-4 text-xl text-gray-400">Place Order</h1>
      {cartItems.length === 0 ? (
        <div>
          Cart is empty. <Link  href="/product" passHref>Go shopping</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5 text-gray-500">
          <div className="overflow-x-auto md:col-span-3">
            <div className="border border-neutral-800  p-5">
              <h2 className="mb-2 text-lg">Shipping Address</h2>
              <div>
                {shippingAddress.fullName}, {shippingAddress.address},{' '}
                {shippingAddress.city}, {shippingAddress.postalCode},{' '}
                {shippingAddress.country}
              </div>
              <div>
                <Link href="/shipping" passHref><p className="text-neutral-600 hover:underline cursor-pointer">Edit</p></Link>
              </div>
            </div>
            <div className="border border-neutral-800  p-5">
              <h2 className="mb-2 text-lg">Payment Method</h2>
              <div>{paymentMethod}</div>
              <div >
                <Link  href="/payment" passHref><p className="text-neutral-600 hover:underline cursor-pointer">Edit</p></Link>
              </div>
            </div>
            <div className="border border-neutral-800 overflow-x-auto p-5">
              <h2 className="mb-2 text-lg">Order Items</h2>
              <table className="min-w-full">
                <thead className="border-b border-neutral-800">
                  <tr>
                    <th className="px-5 text-left">Item</th>
                    <th className="    p-5 text-right">Quantity</th>
                    <th className="  p-5 text-right">Price</th>
                    <th className="p-5 text-right">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item._id} className="border-b border-neutral-800">
                      <td>
                        <Link href={`/product/${item.slug}`} passHref>
                          <a className="flex items-center">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={50}
                              height={50}
                            ></Image>
                            &nbsp;
                            <p className="text-neutral-600 hover:underline cursor-pointer">{item.name}</p> 
                          </a>
                        </Link>
                      </td>
                      <td className=" p-5 text-right">{item.quantity}</td>
                      <td className="p-5 text-right">N{formatter.format(`${item.price}`)}</td>
                      <td className="p-5 text-right">
                      N{formatter.format(`${item.quantity * item.price}`)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div>
                <Link href="/cart" passHref><p className="text-neutral-600 hover:underline" passHref>Edit</p></Link>
              </div>
            </div>
          </div>
          <div>
            <div className="border border-neutral-800  p-5">
              <h2 className="mb-2 text-lg">Order Summary</h2>
              <ul>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Items</div>
                    <div>N {formatter.format(`${itemsPrice}`)}</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Tax</div>
                    <div>N {formatter.format(`${taxPrice}`)}</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Shipping</div>
                    <div>N {formatter.format(`${shippingPrice}`)}</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Total</div>
                    <div>N {formatter.format(`${totalPrice}`)}</div>
                  </div>
                </li>
                <li>
                  <button
                    disabled={loading}
                    onClick={placeOrderHandler}
                    className="bg-yellow-300 w-full py-2 rounded-lg text-neutral-900 font-bold text-xs"
                  >
                    {loading ? 'Loading...' : `Pay N${totalPrice} `}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      </div>
    </Layout>
  );
}

PlaceOrderScreen.auth = true;
