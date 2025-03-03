import Footer from '@/Components/Footer'
import Navigation from '@/Components/Navigation'
import Routing from '@/Components/Routing'
import React from 'react'

export default function ProductPage() {
  return (
    <div>
      <Navigation/>
      <Routing
        link={'Product'}
      />
      <Footer/>
    </div>
  )
}
