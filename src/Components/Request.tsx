import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import RecaptchaLogo from '@/Assets/RecaptchaLogo.svg.png'

export default function Request() {
    return (
        <div className='flex flex-col w-full items-center'>
            <div className='flex justify-center w-full border-b border-gray-300 py-5'>
                <h1 className='text-3xl font-semibold'>Yêu cầu báo giá</h1>
            </div>
            <div className='flex flex-wrap gap-5 w-full px-5 pt-10'>
                <input type="text" placeholder='Tên của bạn' className='w-[45%] border border-gray-300 py-3 px-5 rounded-full duration-600 outline-none focus:border focus:border-gray-500' />
                <input type="text" placeholder='Số điện thoại' className='w-[45%] border border-gray-300 py-3 px-5 rounded-full duration-600 outline-none focus:border focus:border-gray-500' />
                <input type="text" placeholder='Email' className='w-[45%] border border-gray-300 py-3 px-5 rounded-full duration-600 outline-none focus:border focus:border-gray-500' />
                <div className='relative w-[45%] border border-gray-300 rounded-full duration-600 overflow-hidden'>
                    <select className='h-full w-full py-3 px-5 appearance-none outline-none cursor-pointer'>
                        <option value="Chọn yeu cầu">Chọn yêu cầu</option>
                        <option value='Yêu cầu thiết kế Website'>Yêu cầu thiết kế Website</option>
                        <option value='Yêu cầu dịch vụ CEO'>Yêu cầu dịch vụ CEO</option>
                        <option value="Yêu cầu thiết kế Web-app"> Yêu cầu thiết kế Web-app</option>
                        <option value="Yêu cầu Outsourcing"> Yêu cầu Outsourcing</option>
                        <option value="Yêu cầu cộng tác"> Yêu cầu cộng tác</option>
                    </select>
                    <div className='absolute top-1/2 right-3 -translate-y-1/2 -translate-x-1/2 z-10'>
                        <FontAwesomeIcon icon={faAngleDown} className=' w-3 h-3 object-cover' />
                    </div>
                </div>
                <input type="text" placeholder='Nội dung yêu cầu' className='w-[45%] border border-gray-300 py-3 px-5 rounded-full duration-600 outline-none focus:border focus:border-gray-500' />
                <div className='flex flex-row gap-3 w-[45%] items-center border border-gray-300 py-3 px-5 rounded-lg'>
                    <input id='checkbox' type="checkbox" placeholder='Tôi không phải là người máy' className='w-5 h-5 px-3 border border-gray-300 p-3 rounded-full cursor-pointer' />
                    <label htmlFor='checkbox' className=' flex items-center text-base duration-300 cursor-pointer'>Tôi không phải là người máy</label>
                    <img src={RecaptchaLogo.src} alt="recaptcha-logo" className='w-10 h-10 object-cover' />
                </div>
            </div>
            <button className='mt-10 border border-gray-300 py-3 px-8 rounded-full bg-sky-600 hover:bg-sky-700 text-white'>Gửi ngay</button>
        </div>
    )
}
