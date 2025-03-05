import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

function Routing({ title, link }) {
  return (
    <div className='relative z-30'>
      <div className='flex flex-col py-5 md:py-14 bg-black items-center justify-center gap-3 md:gap-8'>
        <span className='text-xl md:text-5xl text-white'>{title}</span>
        <span className='flex justify-center items-center px-8 md:w-2/3 text-white text-xs md:text-base'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eveniet eaque commodi similique dolore dolores laborum? Nesciunt, quia, totam maxime voluptatibus molestias, eius laborum magnam mollitia neque ipsam eum libero.
        </span>
      </div>
      <div className=' flex flex-row gap-3 px-5 md:px-10 bg-gray-700 w-full py-5 md:py-10 items-center'>
        <Link href={'/'} className='text-base md:text-xl text-white font-semibold hover:underline cursor-pointer'>Home</Link>
        <span className='text-base md:text-xl text-white font-semibold cursor-default'>/</span>
        <span className='text-base md:text-xl text-white font-semibold cursor-default'>{link}</span>
      </div>
    </div>
  )
}

Routing.propTypes = {

}

export default Routing

