import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

function Routing({ link }) {
  return (
    <div>
      <div className='flex flex-col h-72 bg-black items-center justify-center gap-5'>
        <span className='text-4xl text-white'>About the Company</span>
        <span className='flex justify-center items-center w-1/2 text-white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eveniet eaque commodi similique dolore dolores laborum? Nesciunt, quia, totam maxime voluptatibus molestias, eius laborum magnam mollitia neque ipsam eum libero.
        </span>
      </div>
      <div className=' flex flex-row gap-3 px-10 bg-gray-700 w-full h-24 items-center'>
        <Link href={'/'} className='text-xl text-white font-semibold hover:underline cursor-pointer'>Home</Link>
        <span className='text-xl text-white font-semibold cursor-default'>/</span>
        <span className='text-xl text-white font-semibold cursor-default'>{link}</span>
      </div>
    </div>
  )
}

Routing.propTypes = {

}

export default Routing

