import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import RecaptchaLogo from '@/Assets/RecaptchaLogo.svg.png'
import Image from 'next/image'
export default function Request() {
    return (
        <div className='flex flex-col w-full gap-5 items-center'>
            <div className='flex justify-center w-full border-b border-gray-300 py-5'>
                <h1 className='text-3xl font-semibold'>Yêu cầu báo giá</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 w-full pt-10'>
                <input type="text" placeholder='Tên của bạn' className='lg:min-w-[200px] border-none focus:shadow-gray-900 shadow-sm shadow-gray-400 py-3 px-5 rounded-full duration-600 outline-none focus:border focus:border-gray-500' />
                <input type="text" placeholder='Số điện thoại' className='lg:min-w-[200px] border-none focus:shadow-gray-900 shadow-sm shadow-gray-400 py-3 px-5 rounded-full duration-600 outline-none focus:border focus:border-gray-500' />
                <input type="text" placeholder='Email' className='lg:min-w-[200px] border-none focus:shadow-gray-900 shadow-sm shadow-gray-400 py-3 px-5 rounded-full duration-600 outline-none focus:border focus:border-gray-500' />
                <div className='relative lg:min-w-[200px] border-none focus:shadow-gray-900 shadow-sm shadow-gray-400 rounded-full duration-600 overflow-hidden'>
                    <select className='h-full w-full py-3 px-5 pr-8 appearance-none outline-none cursor-pointer'>
                        <option value="Chọn yeu cầu">Chọn yêu cầu</option>
                        <option value='Yêu cầu thiết kế Website'>Yêu cầu thiết kế Website</option>
                        <option value='Yêu cầu dịch vụ CEO'>Yêu cầu dịch vụ CEO</option>
                        <option value="Yêu cầu thiết kế Web-app"> Yêu cầu thiết kế Web-app</option>
                        <option value="Yêu cầu Outsourcing"> Yêu cầu Outsourcing</option>
                        <option value="Yêu cầu cộng tác"> Yêu cầu cộng tác</option>
                    </select>
                    <div className='absolute top-1/2 right-2 -translate-y-[60%] -translate-x-1/2 z-10'>
                        <FontAwesomeIcon icon={faAngleDown} className='w-3 h-3 object-cover' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-5 w-full'>
            <textarea placeholder='Nội dung yêu cầu' className='h-24 border-none focus:shadow-gray-900 shadow-sm shadow-gray-400 py-3 px-5 rounded-xl duration-600 outline-none focus:border focus:border-gray-500' />
                <div className='flex flex-row gap-3 w-80 items-center border-none focus:shadow-gray-900 shadow-sm shadow-gray-400 py-3 px-5 rounded-lg'>
                    <input id='checkbox' type="checkbox" placeholder='Tôi không phải là người máy' 
                    className='w-6 h-6 p-3 rounded-full cursor-pointer' />
                    <label htmlFor='checkbox' className=' flex items-center text-base duration-300 select-none cursor-pointer'>Tôi không phải là người máy</label>
                    <Image src={RecaptchaLogo} alt="recaptcha-logo" className='w-10 object-contain' />
                </div>
            </div>
            <button className='mt-10 border-none py-3 px-8 rounded-full bg-sky-600 hover:bg-sky-700 text-white'>Gửi ngay</button>
        </div>
    )
}
