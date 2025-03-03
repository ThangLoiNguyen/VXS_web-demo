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
        link={'About'} />
      <AboutPageContent />
      <Footer/>
    </div>
  )
}
