import ContactSocial from '@/Components/ContactSocial'
import Footer from '@/Components/Footer'
import Navigation from '@/Components/Navigation'
import Routing from '@/Components/Routing'
import React from 'react'

export default function AboutPage() {
  return (
    <div>
      <Navigation />
      <ContactSocial />
      <div className='flex flex-col h-72 bg-black items-center justify-center gap-5'>
        <span className='text-4xl text-white'>About the Company</span>
        <span className='flex justify-center items-center w-1/2 text-white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eveniet eaque commodi similique dolore dolores laborum? Nesciunt, quia, totam maxime voluptatibus molestias, eius laborum magnam mollitia neque ipsam eum libero.
        </span>
      </div>
      <div className='mb-10'>
      <Routing
        link={'About'} />
      </div>
      <AboutPage />
      <Footer/>
    </div>
  )
}
