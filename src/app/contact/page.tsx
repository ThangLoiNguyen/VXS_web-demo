import Navigation from '@/Components/Navigation'
import React from 'react'

export default function ContactPage() {
  return (
    <div>
      <Navigation/>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.304828290303!2d105.54881977476892!3d21.020485688063566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345b00206df143%3A0xefde84efe70afdad!2sHanoi%20House%203!5e0!3m2!1svi!2s!4v1740493588164!5m2!1svi!2s"
        width="100%" height="450" style={{ border: 0 }}  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}
