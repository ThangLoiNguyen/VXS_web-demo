'use client'
import Link from 'next/link'
import React from 'react'
import { faEye } from '@fortawesome/free-regular-svg-icons/faEye';
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons/faEyeSlash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import vxsLogo from '../../../Assets/vxs-logo.jpg'
export default function ForgotPage() {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className='relative flex h-full w-full items-center justify-center'>
      <video
        className='absolute -z-10 top-0 left-0 w-full h-full object-cover'
        src='/night-sky.mp4'
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <div className='flex flex-row w-[90%] xl:w-[30%] bg-white rounded-3xl overflow-hidden'>
        <div className='w-full h-full px-5 py-5'>
          <span className='flex justify-center text-2xl font-bold py-6'>Forgot Password</span>
          <div className='px-6 md:py-20 xl:py-40'>
            <form action="" className='flex flex-col gap-6'>
              <div className='flex flex-col gap-3'>
                <span>
                  <label htmlFor='username' className='flex text-base font-semibold justify-center pb-15 cursor-pointer select-none'>Enter your phone number</label>
                </span>
                <input
                  type="text"
                  id='username'
                  name='username'
                  className='w-full border border-black rounded-full px-3 py-3 text-sm'
                />
              </div>
            </form>
            <div className='flex w-full pt-6'>
                <button className='w-full px-3 py-2 bg-black hover:bg-gray-900 text-white text-sm rounded-full'>
                <Link href={'/user/changePassword'}>Send code</Link>
                </button>
            </div>
            
            <div className='flex justify-center pt-16'>
              <Link href={'/user/signIn'}>
                <span className='text-sm cursor-pointer select-none hover:text-[--secondary-color] hover:underline'>Have an account? Sign In</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
