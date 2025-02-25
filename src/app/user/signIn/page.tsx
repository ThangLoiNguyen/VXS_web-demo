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
    <div className='absolute flex flex-row mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3/4 w-2/3 border-black border'>
      <div className='flex flex-col w-1/2 h-full bg-black'>
        <img src={vxsLogo.src} alt="vxs-logo" className='h-3/4 w-full object-cover' />
        <span className='flex justify-center text-white text-2xl font-bold font-serif'>Welcome to companpy !</span>
      </div>
      <div className='w-1/2 h-full px-5 py-5'>
        <span className='flex justify-center text-2xl font-bold py-6'>Sign In</span>
        <div className='px-6'>
          <form action="" className='flex flex-col gap-6'>
            <div className='flex flex-col gap-3'>
              <span>
                <label htmlFor='username' className='text-sm cursor-pointer select-none'>Enter Username</label>
              </span>
              <input
                type="text"
                id='username'
                name='username'
                className='w-full border rounded-full px-3 py-2 text-sm'
              />
            </div>
            <div className='flex flex-col gap-3'>
              <span>
                <label htmlFor="password" className='text-sm cursor-pointer select-none'>Enter password</label>
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                id='password'
                name='password'
                className='relative w-full border rounded-full pl-3 py-2 pr-10 text-sm'
              />
              <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className='absolute right-14 top-1/2 -translate-y-[18px] text-gray-300 hover:text-gray-700'
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
            <button className='w-full px-3 py-2 border border-black bg-white text-black text-sm hover:bg-black hover:text-white duration-300 rounded-full'>Sign in</button>
          </div>
        </div>
        <div className='flex flex-col gap-3 pt-10 items-center'>
          <div>
            <Link href={'/'}>
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
  )
}
