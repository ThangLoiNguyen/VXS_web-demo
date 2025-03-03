'use client'
import Link from 'next/link'
import React from 'react'
import { faEye } from '@fortawesome/free-regular-svg-icons/faEye';
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons/faEyeSlash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import vxsLogo from '../../../Assets/vxs-logo.jpg'
export default function ChangePassword() {
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
          <span className='flex justify-center text-2xl font-bold py-6'>Change Password</span>
          <div className='px-6'>
            <form action="" className='flex flex-col gap-6'>
              <div className='relative flex flex-col gap-3'>
                <span>
                  <label htmlFor="password" className='text-sm font-semibold cursor-pointer select-none'>Enter new password</label>
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  name='password'
                  className='w-full border rounded-full pl-3 py-2 pr-10 text-sm'
                />
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className='absolute right-3 top-1/2 translate-y-[10px] text-gray-300 hover:text-gray-700'
                  onClick={togglePasswordVisibility} />
              </div>
              <div className='relative flex flex-col gap-3'>
                <span>
                  <label htmlFor="password" className='text-sm font-semibold cursor-pointer select-none'>Confirm password</label>
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  name='password'
                  className='w-full border rounded-full pl-3 py-2 pr-10 text-sm'
                />
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className='absolute right-3 top-1/2 translate-y-[10px] text-gray-300 hover:text-gray-700'
                  onClick={togglePasswordVisibility} />
              </div>
            </form>
            <div className='flex w-full pt-6'>
              <button className='w-full px-3 py-2 bg-black hover:bg-gray-900 text-white text-sm rounded-full'>
                <Link href={'/user/signIn'}>Save</Link>
                </button>
            </div>
          </div>
          <div className='flex flex-col gap-3 pt-6 items-center'>
            <div>
              <span className='text-xs cursor-pointer select-none'>By registering, you agree to VXS terms {''}
                <Link href={'/tos-pp/termOfService'}>
                  <span className=' text-[--secondary-color] hover:underline'>Terms of Service</span>
                </Link>
                {''} & {''}
                <Link href={'/tos-pp/privacyPolicy'}>
                  <span className='text-[--secondary-color] hover:underline'>Privacy Policy</span>
                </Link></span>
            </div>
            <div className='pt-3'>
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
