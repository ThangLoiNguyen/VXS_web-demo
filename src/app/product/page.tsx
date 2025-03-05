import Footer from '@/Components/Footer'
import MobileMenu from '@/Components/MobileMenu'
import Navigation from '@/Components/Navigation'
import Routing from '@/Components/Routing'
import SlideProduct from '@/Components/SlideProduct'
import React from 'react'

export default function ProductPage() {
  return (
    <div>
      <Navigation />
      <MobileMenu />
      <Routing
        title={'Product'}
        link={'Product'}
      />
      <div className='hidden md:flex w-full justify-center px-5 pt-16 pb-5'>
        <div className='w-[80%] px-10 py-5 border-b border-gray-300'>
          <span className='text-3xl font-semibold py-[18px] border-b border-sky-500'>Sản phẩm tiêu biểu</span>
        </div>
      </div>
      <SlideProduct />
      <Footer />
    </div>
  )
}
