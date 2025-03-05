import ContactSocial from '@/Components/ContactSocial'
import Footer from '@/Components/Footer'
import Information from '@/Components/Information'
import MobileMenu from '@/Components/MobileMenu'
import Navigation from '@/Components/Navigation'
import Request from '@/Components/Request'
import Routing from '@/Components/Routing'
import React from 'react'

export default function ContactPage() {
  return (
    <div>
      <Navigation />
      <MobileMenu />
      <ContactSocial />
      <Routing
        title={'Contact'}
        link={'Contact'}
      />
      <div className='hidden md:flex w-full justify-center px-5 pt-16 pb-5'>
        <div className='w-[80%] px-10 py-5 border-b border-gray-300'>
          <span className='text-3xl font-semibold py-[18px] border-b border-sky-500'>Liên hệ với chúng tôi</span>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 w-full pt-10 p-7 sm:p-10 gap-10'>
        <Information />
        <Request />
      </div>
      <div className='flex items-center justify-center py-10'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.304828290303!2d105.54881977476892!3d21.020485688063566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345b00206df143%3A0xefde84efe70afdad!2sHanoi%20House%203!5e0!3m2!1svi!2s!4v1740493588164!5m2!1svi!2s"
          style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          className='w-[80%] sm:w-[60%] h-[450px]'></iframe>
      </div>
      <Footer />
    </div>
  )
}
