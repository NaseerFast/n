import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Cookies from 'js-cookie';
import CheckoutWizard from '../components/CheckoutWizard';
import Layout from '../components/product/layout/';
import { Store } from '../utils/Store';
import { useRouter } from 'next/router';

export default function ShippingScreen() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { shippingAddress } = cart;
  const router = useRouter();

  useEffect(() => {
    setValue('fullName', shippingAddress.fullName);
    setValue('address', shippingAddress.address);
    setValue('city', shippingAddress.city);
    setValue('postalCode', shippingAddress.postalCode);
    setValue('country', shippingAddress.country);
  }, [setValue, shippingAddress]);

  const submitHandler = ({ fullName, address, city, postalCode, country }) => {
    dispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: { fullName, address, city, postalCode, country },
    });
    Cookies.set(
      'cart',
      JSON.stringify({
        ...cart,
        shippingAddress: {
          fullName,
          address,
          city,
          postalCode,
          country,
        },
      })
    );

    router.push('/payment');
  };

  return (
    <Layout title="Shipping Address">
      <div className="bg-neutral-900 text-white py-12 px-2 md:px-8">     
       <CheckoutWizard activeStep={1} />
      
      <div className="mx-auto max-w-md bg-neutral-800 p-6">
      <form
        className=""
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl text-gray-400">Shipping Address</h1>
        <div className="mb-4">
          
          <input type="text" name="mail"
           className="border border-neutral-900 text-gray-400 bg-neutral-800 rounded h-10 w-full   focus:ring-neutral-700 focus:border-none px-2 mt-2 text-sm" placeholder="Full name*"
         autoFocus
            {...register('fullName', {
              required: 'Please enter full name',
            })}
         

            
          />
          {errors.fullName && (
            <div className="text-red-500">{errors.fullName.message}</div>
          )}
        </div>
        <div className="mb-4">
        
          <input
            className="border border-neutral-900 text-gray-400 bg-neutral-800 rounded h-10 w-full   focus:ring-neutral-700 focus:border-none px-2 mt-2 text-sm" placeholder="Address*"
            id="address"
            {...register('address', {
              required: 'Please enter address',
              minLength: { value: 3, message: 'Address is more than 2 chars' },
            })}
          />
          {errors.address && (
            <div className="text-red-500">{errors.address.message}</div>
          )}
        </div>

        <div className="grid md:grid-cols-2 md:gap-2">
        <div className="mb-4">
         
          <input
            className="border border-neutral-900 text-gray-400 bg-neutral-800 rounded h-10 w-full   focus:ring-neutral-700 focus:border-none px-2 mt-2 text-sm" placeholder="Postal Code*"
            id="postalcode"
            {...register('postalcode', {
              required: 'Please enter postalcode',
            })}
          />
          {errors.postalcode && (
            <div className="text-red-500 ">{errors.postalcode.message}</div>
          )}
        </div>

        <div className="mb-4">
         
          <input
            className="border border-neutral-900 text-gray-400 bg-neutral-800 rounded h-10 w-full   focus:ring-neutral-700 focus:border-none px-2 mt-2 text-sm" placeholder="City*"
            id="city"
            {...register('city', {
              required: 'Please enter city',
            })}
          />
          {errors.city && (
            <div className="text-red-500 ">{errors.city.message}</div>
          )}
        </div>

        </div>
     
        <div className="mb-4">
        
          <input
           className="border border-neutral-900 text-gray-400 bg-neutral-800 rounded h-10 w-full   focus:ring-neutral-700 focus:border-none px-2 mt-2 text-sm" placeholder="Country*"
            id="country"
            {...register('country', {
              required: 'Please enter country',
            })}
          />
          {errors.country && (
            <div className="text-red-500 ">{errors.country.message}</div>
          )}
        </div>
        <div className=" flex justify-between">
          <button className="primary-button">Next</button>
        </div>
      </form>
      </div>
      </div>

    </Layout>
  );
}

ShippingScreen.auth = true;
