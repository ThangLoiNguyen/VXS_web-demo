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
        centerPadding: "200px",
        centerMode: true,
        speed: 600,
        autoplaySpeed: 3000,
        cssEase: "linear",
        variableWidth: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 768, // Dưới 768px (mobile)
                settings: {
                    slidesToShow: 1,
                    centerPadding: "100px",
                    variableWidth: false,
                }
            },
            {
                breakpoint: 480, // Dưới 480px (mobile nhỏ)
                settings: {
                    slidesToShow: 1,
                    centerMode: false, // Có thể tắt nếu bị lỗi trên mobile
                    variableWidth: false
                }
            }
        ]
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
        <div className='py-16 w-full'>
            <Slider {...settings}>
                {dataProduct.map(({ id, image }) => (
                    <div key={id} className='px-3 pb-10'>
                        <div className='flex flex-col md:flex-row w-full p-8 md:pb-16 items-center gap-5 rounded border bg-gradient-to-r from-sky-500 via-white to-white'>
                            <img src={image.src} alt="image" className='w-2/3 object-contain' />
                            <div className='flex flex-col items-center justify-center w-full gap-1'>
                                <span className='flex justify-center text-3xl md:text-2xl lg:text-3xl font-semibold'>Gecko</span>
                                <span className='flex justify-center text-base md:text-sm lg:text-base pb-5'>Learning English</span>
                                <button>
                                    <a href="https://gecko-cms.2soft.top/" className='bg-sky-600 hover:bg-sky-700 text-white text-base md:text-xs lg:text-base px-3 py-2 rounded-lg'>Xem live</a>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
