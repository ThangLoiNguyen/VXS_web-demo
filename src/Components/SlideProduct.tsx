'use client'
import React from 'react'
import Slider from "react-slick";
import gecko from '@/Assets/gecko-introduction.webp'

export default function SlideProduct() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        centerPadding: "60px",
        centerMode: true,
        speed: 600,
        autoplaySpeed: 3000,
        cssEase: "linear",
        variableWidth: true,
        arrows: false
    };
    const dataProduct = [
        {
            id: 1,
            image: gecko
        },
        {
            id: 2,
            image: gecko
        },
        {
            id: 3,
            image: gecko
        },
        {
            id: 4,
            image: gecko
        },
        {
            id: 5,
            image: gecko
        },
        {
            id: 6,
            image: gecko
        }
    ]
    return (
        <div className='py-10 w-full'>
            <Slider {...settings}>
                {dataProduct.map(({ id, image }) => (
                    <div key={id} className='px-3 w-4/5 pb-5'>
                        <div className='flex flex-row w-full p-8 pb-16 items-center gap-5 rounded border bg-gradient-to-r from-sky-500 via-white to-white'>
                            <img src={image.src} alt="image" className='w-2/3 object-contain' />
                            <div className='flex flex-col items-center justify-center w-full gap-1'>
                                <span className='flex justify-center text-2xl font-semibold'>Gecko</span>
                                <span className='flex justify-center text-sm pb-5'>Learning English</span>
                                <button>
                                    <a href="" className='bg-sky-600 hover:bg-sky-700 text-white px-3 py-2 rounded-lg'>Xem live</a>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
