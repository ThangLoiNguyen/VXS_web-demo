import React from 'react'
import Image from 'next/image'
import introBusiness from '../Assets/intro-business-blue.png'

export default function AboutUs() {
  return (
    <div className='flex flex-col md:flex-row gap-10 items-center md:mx-20 xl:mx-40'>
      <div className='flex flex-col gap-10 w-1/2'>
        <h1 className='text-2xl md:text-2xl 2xl:text-5xl font-semibold text-[--text-color]'>Lĩnh vực kinh doanh</h1>
        <p className='text-sm md:text-base md:ml-10 text-[--text-color]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repudiandae doloremque et, deserunt, adipisci voluptatibus cum accusantium debitis odit, neque omnis rerum.
          Veritatis expedita minima alias atque labore ullam praesentium! Obcaecati.</p>
      </div>
      <div className='w-1/2'>
        <Image src={introBusiness} alt="intro-business"/>
      </div>
    </div>
  )
}
