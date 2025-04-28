'use client'
import React from 'react'
import Image from 'next/image'
import introBusiness from '../Assets/intro-business-blue.png'
import CountUp from './FunctionCompo/CountUp'
import SlideProduct from './SlideProduct'
export default function AboutUs() {
  return (
    <div className='flex flex-col gap-10 lg:mx-20 xl:mx-40'>
      {/* Lĩnh vực kinh doanh */}
      <div className='flex flex-col mx-10 gap-10'>
        <h1 className='text-2xl md:text-4xl 2xl:text-5xl font-semibold text-[--text-color]'>Lĩnh vực kinh doanh</h1>
        <div className='flex flex-col lg:flex-row gap-10'>
          <p className='text-sm md:text-xl lg:mx-10 lg:w-1/2 text-[--text-color]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae doloremque et, deserunt, adipisci voluptatibus cum accusantium debitis odit, neque omnis rerum.
            Veritatis expedita minima alias atque labore ullam praesentium! Obcaecati.</p>
          <div className='lg:w-1/2'>
            <Image src={introBusiness} alt="intro-business" />
          </div>
        </div>
      </div>
      {/* Dự án của chúng tôi */}
      <div className='flex flex-col mx-10 gap-10'>
        <h1 className='text-2xl md:text-4xl 2xl:text-5xl font-semibold text-[--text-color]'>Dự án của chúng tôi</h1>
        <div className='flex flex-col gap-10 mx-10 lg:items-start'>
          <div className='flex flex-row gap-10'>
            <CountUp
              from={0}
              to={200}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text text-[--primary-color] text-6xl lg:text-9xl font-bold"
              onStart={undefined} onEnd={undefined} />
            <div className='flex flex-col lg:gap-9'>
              <span className='text-[--primary-color] text-3xl lg:text-5xl font-bold'>++</span>
              <span className='lg:text-2xl'>Đối tác</span>
            </div>
          </div>
          <div className='flex flex-row gap-10'>
            <CountUp
              from={0}
              to={300}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text text-[--primary-color] text-6xl lg:text-9xl font-bold"
              onStart={undefined} onEnd={undefined} />
            <div className='flex flex-col lg:gap-9'>
              <span className='text-[--primary-color] text-3xl lg:text-5xl font-bold'>++</span>
              <span className='lg:text-2xl'>Dịch vụ được hỗ trợ</span>
            </div>
          </div>
          <button
            className="relative inline-flex lg:mx-5 items-center justify-center py-6 px-6 lg:px-20 overflow-hidden text-white bg-gray-800 rounded-md group"
          >
            <span
              className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[--primary-color] rounded-full group-hover:w-96 group-hover:h-96"
            >
            </span>
              <span className="relative lg:text-xl font-semibold">Xem tất cả dự án</span>
          </button>
        </div>
      </div>
    </div>
  )
}
