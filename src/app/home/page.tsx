import Navigation from '@/Components/Navigation'
import React from 'react'
import slideIntro from '../../Assets/slide-intro.avif'
import Link from 'next/link'
import ContactSocial from '@/Components/ContactSocial'

export default function HomePage() {
  return (
    <div>
      <ContactSocial />
      <Navigation />
      <div className='relative'>
        <img src={slideIntro.src} alt="slide-intro" className='animate-fade-left-right w-11/12' />
        <div className='absolute animate-fade-up flex flex-col top-60 right-80 gap-10 bg-white ring-2 ring-gray-200 p-16 w-2/5'>
          <span className='text-6xl'>IT Consulting & Services</span>
          <div className='flex flex-row w-full gap-8'>
            <span className='flex h-0.5 w-1/4 bg-[--primary-color] translate-y-3'></span>
            <p className='w-3/4 font-light font-sans tracking-wider text-black'>I'm a paragraph. Click here to add your own text and edit me. click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
          </div>
          <span className='flex justify-end'>
            <Link href={'/about'} className=' text-white text-sm hover:bg-[--secondary-color] border px-3 py-1 bg-[--primary-color] duration-300'>See more</Link>
          </span>
        </div>
      </div>
    </div>
  )
}
