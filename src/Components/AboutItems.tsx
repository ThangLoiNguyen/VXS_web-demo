import Link from 'next/link'
import { title } from 'process'
import React from 'react'

export default function AboutItems() {
  const dataAboutItems = [
    {
      title: "Cloud Solutions",
      text: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me."
    },
    {
      title: "Managed IT Services",
      text: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me."
    },
    {
      title: "Disaster Recovery",
      text: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me."
    },
    {
      title: "Cloud Desktop",
      text: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me."
    },
    {
      title: "Network Solutions",
      text: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me."
    },
    {
      title: "Support Consulting",
      text: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me."
    }
  ]
  return (
    <div className='relative'>
      <div className=' flex flex-col h-[400px] md:h-[450px] px-20 md:px-40 py-20 bg-black gap-5'>
        <span className='text-2xl md:text-6xl font-semibold text-white'>
          Our Service
        </span>
        <p className='text-white'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me.</p>
      </div>
      <div className='absolute flex flex-row flex-wrap top-72 gap-14 justify-center items-center w-full px-6 sm:px-20 xl:px-40 2xl:px-60'>
      {dataAboutItems.map(({ title, text }, index) => (
          <div key={index} className='relative flex flex-col h-52 sm:h-44 md:h-60 lg:h-80 w-56 lg:w-72 px-6 lg:px-10 py-3 md:py-5 lg:py-8 gap-1 lg:gap-3 bg-gray-300 z-30'>
          <div className='sm:text-lg lg:text-4xl text-black'>{title}</div>
          <span className='text-black text-sm md:text-base font-light'>{text}</span>
          <span className='absolute h-52 sm:h-44 md:h-60 lg:h-80 w-56 lg:w-72 -z-10 border-2 border-gray-300 top-5 left-5'></span>
          <span className=' lg:mt-3 sm:py-3'>
            <Link href={'/about'} className='text-[--secondary-color] hover:text-[--primary-color] text-sm md:text-base cursor-pointer'>+ Learn more</Link>
          </span>
          </div>
        ))}
      </div>
      <div className='h-[1500px] sm:h-[1300px] md:h-[800px] lg:h-[1000px] xl:h-[950px] 2xl:h-[600px]'></div>
    </div>
  )
}
