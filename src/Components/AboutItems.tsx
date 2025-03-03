import Link from 'next/link'
import React from 'react'

export default function AboutItems() {
  return (
    <div className='relative'>
      <div className=' flex flex-col h-[450px] px-40 py-20 bg-black gap-5'>
        <span className='text-6xl font-semibold text-white'>
            Our Service
        </span>
        <p className='text-white'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me.</p>
      </div>
      <div className='absolute flex flex-row flex-wrap top-72 gap-20 justify-center items-center w-full px-60'>
        <div className='relative flex flex-col h-80 w-72 px-10 py-8 gap-3 bg-gray-300 z-30'>
            <div className='text-4xl text-black'>Cloud Solutions</div>
            <span className='text-black font-light'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me.</span>
            <span className='absolute h-80 w-72 -z-10 border-2 border-gray-300 top-5 left-5'></span>
            <span className=' mt-3 py-3'>
              <Link href={'/about'} className='text-[--secondary-color] hover:text-[--primary-color] text-base cursor-pointer'>+ Learn more</Link>
            </span>
        </div>
        <div className='relative flex flex-col h-80 w-72 px-10 py-8 gap-3 bg-gray-300 z-30'>
            <div className='text-4xl text-black'>Managed IT Services</div>
            <span className='text-black font-light'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me.</span>
            <span className='absolute h-80 w-72 -z-10 border-2 border-gray-300 top-5 left-5'></span>
            <span className=' mt-3 py-3'>
              <Link href={'/about'} className='text-[--secondary-color] hover:text-[--primary-color] text-base cursor-pointer'>+ Learn more</Link>
            </span>
        </div>
        <div className='relative flex flex-col h-80 w-72 px-10 py-8 gap-3 bg-gray-300 z-30'>
            <div className='text-4xl text-black'>Disaster Recovery</div>
            <span className='text-black font-light'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me.</span>
            <span className='absolute h-80 w-72 -z-10 border-2 border-gray-300 top-5 left-5'></span>
            <span className=' mt-3 py-3'>
              <Link href={'/about'} className='text-[--secondary-color] hover:text-[--primary-color] text-base cursor-pointer'>+ Learn more</Link>
            </span>
        </div>
        <div className='relative flex flex-col h-80 w-72 px-10 py-8 gap-3 bg-gray-300 z-30'>
            <div className='text-4xl text-black'>Cloud Desktop</div>
            <span className='text-black font-light'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me.</span>
            <span className='absolute h-80 w-72 -z-10 border-2 border-gray-300 top-5 left-5'></span>
            <span className=' mt-3 py-3'>
              <Link href={'/about'} className='text-[--secondary-color] hover:text-[--primary-color] text-base cursor-pointer'>+ Learn more</Link>
            </span>
        </div>
        <div className='relative flex flex-col h-80 w-72 px-10 py-8 gap-3 bg-gray-300 z-30'>
            <div className='text-4xl text-black'>Network Solutions</div>
            <span className='text-black font-light'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me.</span>
            <span className='absolute h-80 w-72 -z-10 border-2 border-gray-300 top-5 left-5'></span>
            <span className=' mt-3 py-3'>
              <Link href={'/about'} className='text-[--secondary-color] hover:text-[--primary-color] text-base cursor-pointer'>+ Learn more</Link>
            </span>
        </div>
        <div className='relative flex flex-col h-80 w-72 px-10 py-8 gap-3 bg-gray-300 z-30'>
            <div className='text-4xl text-black'>Support Consulting</div>
            <span className='text-black font-light'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me.</span>
            <span className='absolute h-80 w-72 -z-10 border-2 border-gray-300 top-5 left-5'></span>
            <span className=' mt-3 py-3'>
              <Link href={'/about'} className='text-[--secondary-color] hover:text-[--primary-color] text-base cursor-pointer'>+ Learn more</Link>
            </span>
        </div>
      </div>
    </div>
  )
}
