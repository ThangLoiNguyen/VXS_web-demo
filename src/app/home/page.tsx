import Navigation from '@/Components/Navigation'
import React from 'react'
import slideIntro from '../../Assets/slide-intro.avif'
import Link from 'next/link'
import ContactSocial from '@/Components/ContactSocial'
import Footer from '@/Components/Footer'
import AboutItems from '@/Components/AboutItems'
import SlideProduct from '@/Components/SlideProduct'
import Image from 'next/image'
import MobileMenu from '@/Components/MobileMenu'
export default function HomePage() {
  return (
    <div className='relative'>
      <ContactSocial />
      <MobileMenu/>
      <Navigation />
      <div className='relative mb-80'>
        <Image src={slideIntro} alt="slide-intro" className='animate-fade-left-right w-11/12' />
        <div className='absolute animate-fade-up flex flex-col top-24 md:top-52 lg:top-60 right-16 md:right-40 lg:right-56 xl:right-80 gap-3 xl:gap-10 2xl:gap-20 bg-white ring-2 ring-gray-200 p-5 md:p-10 xl:p-16 w-3/5 lg:w-2/5'>
          <span className='text-lg md:text-2xl xl:text-6xl'>IT Consulting & Services</span>
          <div className='flex flex-row w-full gap-8'>
            <span className='flex h-0.5 w-1/4 2xl:w-1/3 bg-[--primary-color] translate-y-3'></span>
            <p className='w-3/4 text-xs md:text-base 2xl:text-xl font-light font-sans tracking-wider text-black'>I&apos;m a paragraph. Click here to add your own text and edit me. click “Edit Text” or double click me to add your own content and make changes to the font. I&apos;m a great place for you to tell a story and let your users know a little more about you.</p>
          </div>
          <span className='flex justify-end'>
            <Link href={'/about'} className=' text-white text-sm 2xl:text-lg hover:bg-[--secondary-color] border px-3 py-1 bg-[--primary-color] duration-300'>See more</Link>
          </span>
        </div>
      </div>
      <AboutItems/>
      <div className='hidden md:flex w-full justify-center px-5 pt-16 pb-5'>
        <div className='w-full px-10 py-5 border-b border-gray-300'>
          <span className='text-3xl font-semibold py-[18px] border-b border-sky-500'>Sản phẩm tiêu biểu</span>
        </div>
      </div>
      <SlideProduct/>
      <Footer />
    </div>
  )
}
