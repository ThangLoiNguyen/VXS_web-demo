import AboutPageContent from '@/Components/AboutPageContent'
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
      <Routing
        title={'About'}
        link={'About'} />
      <div className='hidden md:flex w-full justify-center px-5 pt-16 pb-5'>
        <div className='w-[80%] px-10 py-5 border-b border-gray-300'>
          <span className='text-3xl font-semibold py-[18px] border-b border-sky-500'>Về công ty chúng tôi</span>
        </div>
      </div>
      <AboutPageContent />
      <Footer />
    </div>
  )
}
