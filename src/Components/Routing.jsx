import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

function Routing({link}) {
  return (
    <div className=' flex flex-row gap-3 px-10 bg-gray-700 w-full h-24 items-center'>
      <Link href={'/'} className='text-xl text-white font-semibold hover:underline cursor-pointer'>Home</Link>
      <span className='text-xl text-white font-semibold cursor-default'>/</span>
      <span className='text-xl text-white font-semibold cursor-default'>{link}</span>
    </div>
  )
}

Routing.propTypes = {

}

export default Routing

