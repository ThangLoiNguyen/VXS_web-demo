import ContactSocial from '@/Components/ContactSocial'
import Footer from '@/Components/Footer'
import Information from '@/Components/Information'
import Navigation from '@/Components/Navigation'
import Request from '@/Components/Request'
import Routing from '@/Components/Routing'
import React from 'react'

export default function ContactPage() {
  return (
    <div>
      <Navigation />
      <ContactSocial />
      <Routing
        title={'Contact'}
        link={'Contact'}
      />
      <div className=' flex flex-row w-full pt-10 p-10 gap-5'>
        <Information />
        <Request />
      </div>
      <div className='flex items-center justify-center py-10'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.304828290303!2d105.54881977476892!3d21.020485688063566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345b00206df143%3A0xefde84efe70afdad!2sHanoi%20House%203!5e0!3m2!1svi!2s!4v1740493588164!5m2!1svi!2s"
          width="60%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <Footer />
    </div>
  )
}
