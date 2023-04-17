import NextLink from 'next/link';
import React, { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import Layout from '../components/layout/index';
import { getError } from '../utils/error';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function LoginScreen() {
  const { data: session } = useSession();

  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ name, email, password }) => {
    try {
      await axios.post('/api/auth/signup', {
        name,
        email,
        password,
      });

      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };
  return (
    <>

<div className="h-full  bg-neutral-900 w-full py-16 px-4">
            <div className="flex flex-col items-center justify-center">
    
            <div className="bg-neutral-800 shadow rounded lg:w-3/6  md:w-1/2 w-full p-10 mt-1">
                <div className="grid place-items-center ">
                <img 
                    className="h-8 w-auto"
                    src="/images/logo.png"
                    alt=""
                  />
                    <p tabIndex={0} role="heading" aria-label="Login to your account" className="text-xl text-center font-extrabold leading-6 text-gray-200 mt-6">
                        Create a new account
                    </p>
                    <p className="text-sm mt-4 font-medium leading-none text-gray-500">
                        Already have an account?{" "}
                        <NextLink href="/login" passHref>
                        <span tabIndex={0} role="link"  aria-label="Sign up here" className="text-sm font-medium leading-none underline text-gray-400 cursor-pointer">
                            {" "}
                            Sign in here
                        </span>
                        </NextLink>
                       
                    </p>

                    </div>
                    <button aria-label="Continue with google" role="button" className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10">
                        <svg width={19} height={20} viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z" fill="#4285F4" />
                            <path d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z" fill="#34A853" />
                            <path d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z" fill="#FBBC05" />
                            <path d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z" fill="#EB4335" />
                        </svg>
                        <p className="text-sm md:text-base font-medium ml-4 text-gray-700">Continue with Google</p>
                    </button>
                    <div className="w-full flex items-center justify-between py-5">
                        <hr className="w-full bg-gray-800" />
                        <p className="text-base font-medium leading-4 px-2.5 text-gray-400">OR</p>
                        <hr className="w-full bg-gray-800  " />
                    </div>
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        
        <div className="mb-4">
          <label htmlFor="name" className="text-sm font-medium leading-none text-gray-400">Name</label>
          <input
            type="text"
            className="bg-neutral-800 border border-gray-700 rounded  focus:ring-neutral-700 text-xs font-medium leading-none text-gray-400 py-3 w-full pl-3 mt-2"            id="name"
            autoFocus
            {...register('name', {
              required: 'Please enter name',
            })}
          />
          {errors.name && (
            <div className="text-red-500">{errors.name.message}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="text-sm font-medium leading-none text-gray-400">Email</label>
          <input
            type="email"
            {...register('email', {
              required: 'Please enter email',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: 'Please enter valid email',
              },
            })}
            className="bg-neutral-800 border border-gray-700 rounded  focus:ring-neutral-700 text-xs font-medium leading-none text-gray-400 py-3 w-full pl-3 mt-2"            id="email"
          ></input>
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="text-sm font-medium leading-none text-gray-400">Password</label>
          <input
            type="password"
            {...register('password', {
              required: 'Please enter password',
              minLength: { value: 6, message: 'password is more than 5 chars' },
            })}
            className="bg-neutral-800 border border-gray-700 rounded  focus:ring-neutral-700 text-xs font-medium leading-none text-gray-400 py-3 w-full pl-3 mt-2"            id="password"
            autoFocus
          ></input>
          {errors.password && (
            <div className="text-red-500 ">{errors.password.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="text-sm font-medium leading-none text-gray-400">Confirm Password</label>
          <input
className="bg-neutral-800 border border-gray-700 rounded  focus:ring-neutral-700 text-xs font-medium leading-none text-gray-400 py-3 w-full pl-3 mt-2"            type="password"
            id="confirmPassword"
            {...register('confirmPassword', {
              required: 'Please enter confirm password',
              validate: (value) => value === getValues('password'),
              minLength: {
                value: 6,
                message: 'confirm password is more than 5 chars',
              },
            })}
          />
          {errors.confirmPassword && (
            <div className="text-red-500 ">
              {errors.confirmPassword.message}
            </div>
          )}
          {errors.confirmPassword &&
            errors.confirmPassword.type === 'validate' && (
              <div className="text-red-500 ">Password do not match</div>
            )}
        </div>

        
        <div className="mb-4 ">
          <button className="focus:ring-neutral-700 text-sm font-semibold leading-none text-white focus:outline-none bg-neutral-900 border border-gray-700  rounded hover:bg-yellow-300 py-4 w-full">Register</button>
       
        </div>
        
      </form>
      </div>
      </div>
      </div>
    </>
  );
}
