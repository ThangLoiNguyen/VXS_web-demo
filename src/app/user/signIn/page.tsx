'use client'
import Link from 'next/link'
import React from 'react'
import { faEye } from '@fortawesome/free-regular-svg-icons/faEye';
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons/faEyeSlash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import vxsLogo from '../../../Assets/vxs-logo.jpg'
export default function SignInPage() {
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
          <span className='flex justify-center text-2xl font-bold py-6'>Sign In</span>
          <div className='px-6'>
            <form action="" className='flex flex-col gap-6'>
              <div className='flex flex-col gap-3'>
                <span>
                  <label htmlFor='username' className='text-sm font-semibold cursor-pointer select-none'>Enter Username</label>
                </span>
                <input
                  type="text"
                  id='username'
                  name='username'
                  className='w-full border rounded-full px-3 py-2 text-sm'
                />
              </div>
              <div className='relative flex flex-col gap-3'>
                <span>
                  <label htmlFor="password" className='text-sm font-semibold cursor-pointer select-none'>Enter password</label>
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
              <div className='flex flex-row-reverse gap-3 justify-end'>
                <span>
                  <label htmlFor="remember" className='text-sm -translate-y-[2px] cursor-pointer select-none'>Remember me</label>
                </span>
                <input
                  type="checkbox"
                  id='remember'
                  name='remember'
                />
              </div>
            </form>
            <div className='flex w-full pt-6'>
              <button className='w-full px-3 py-2 bg-black hover:bg-gray-900 text-white text-sm rounded-full'>Sign in</button>
            </div>
          </div>
          <div className='flex flex-col gap-3 pt-10 items-center'>
            <div>
              <Link href={'/user/forgot'}>
                <span className='text-sm cursor-pointer select-none hover:text-[--secondary-color] hover:underline'>Forgot Password</span>
              </Link>
            </div>
            <div>
              <Link href={'/user/signUp'}>
                <span className='text-sm cursor-pointer select-none hover:text-[--secondary-color] hover:underline'>Don't have an account? Sign Up</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
