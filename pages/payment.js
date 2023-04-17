import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import CheckoutWizard from '../components/CheckoutWizard';
import Layout from '../components/product/layout';
import { Store } from '../utils/Store';


var formatter = new Intl.NumberFormat({
  style: 'currency',
  currency: 'NGN',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

export default function PaymentScreen() {
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

  return (
    <Layout title="Payment Method">
    <div className="bg-neutral-900 text-white py-12 px-2 md:px-8 ">
      <CheckoutWizard activeStep={2} />
      
      <div className="mx-auto max-w-md md:bg-neutral-800 p-6  ">
      <form className="mx-auto max-w-screen-md mt-" onSubmit={submitHandler}>
        <h1 className="mb-4 text-xl text-gray-400">Payment Option</h1>
        {['PayPal', 'PayStack', 'CashenterOnDelivery'].map((payment) => (
          <div key={payment} className="mb-4">
            
            
            <input
              name="paymentMethod"
              className="hidden peer p-2 outline-none focus:ring-0 bg-yellow-300"
              id={payment}
              type="radio"
              checked={selectedPaymentMethod === payment}
              onChange={() => setSelectedPaymentMethod(payment)}
            />

            

<label htmlFor={payment} className="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-neutral-900 rounded-lg border border-neutral-800 cursor-pointer  peer-checked:text-gray-500 peer-checked:border-yellow-500 peer-checked:text-neutral-600 hover:text-gray-600  ">                           
            <div className="block">
                <div className="w-full text-lg font-semibold">{payment}</div>
                {/* <div className="w-full">Good for small websites</div> */}
            </div>
            <svg aria-hidden="true" className="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
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
      </div>
    </Layout>
    
  );
}

PaymentScreen.auth = true;
