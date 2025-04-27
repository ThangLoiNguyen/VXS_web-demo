import React from 'react'
import vxsLogo from '../assets/vxs-logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
export default function Footer() {
    return (
        <div className='bg-gray-200 flex flex-col md:flex-row justify-around w-full p-3 gap-10 md:gap-0 pb-10'>
            <div className='flex flex-col gap-10 w-full px-5 md:px-0 md:w-1/3 pt-10'>
                <div className='flex flex-row items-center gap-3'>
                    <Image src={vxsLogo} alt=" vxs-logo" className='h-10 w-10 xl:h-16 xl:w-16 object-cover rounded-2xl' />
                    <span className='text-xs xl:text-base font-sans font-semibold w-1/2 text-black'>CÔNG TY CỔ PHẦN CÔNG NGHỆ VXS</span>
                </div>
                <div className='flex flex-col gap-5 px-3'>
                    <div className='flex flex-row gap-5 items-center'>
                        <FontAwesomeIcon icon={faLocationDot} className='w-5 xl:w-8 object-cover' />
                        <span className='text-sm xl:text-base'>Số 17/269 Ngõ Quỳnh, Phường Quỳnh Lôi, Quận Hai Bà Trưng, Thành phố Hà Nội, Việt Nam</span>
                    </div>
                    <div className='flex flex-row gap-5 items-center'>
                        <FontAwesomeIcon icon={faPhone} className='w-5 xl:w-8 object-cover' />
                        <span className='text-sm xl:text-base'>0904654694</span>
                    </div>
                    <div className='flex flex-row gap-5 items-center'>
                        <FontAwesomeIcon icon={faEnvelope} className='w-5 xl:w-8 object-cover' />
                        <span className='text-sm xl:text-base'>thangloinguyen1209@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-3 px-5 md:px-0 md:w-2/5 md:pr-10 xl:pr-32 select-none'>
                <span className='text-lg xl:text-xl font-semibold pt-10 py-5'>Câu hỏi cho chúng tôi</span>
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-row gap-5 w-full'>
                        <div className='flex flex-col gap-1 w-1/2'>
                            <label htmlFor="email" className='cursor-pointer text-sm xl:text-base'>Email</label>
                            <input
                                type="text"
                                id='email'
                                name='Email'
                                className='px-3 py-2 w-full rounded-full border-none focus:shadow-gray-900 shadow-sm shadow-gray-400 outline-none'
                            />
                        </div>
                        <div className='flex flex-col gap-1 w-[45%]'>
                            <label htmlFor="phone" className='cursor-pointer text-sm xl:text-base'>Phone Nummber</label>
                            <input
                                type="text"
                                id='phone'
                                name='Phone number'
                                className='px-3 py-2 w-full rounded-full border-none focus:shadow-gray-900 shadow-sm shadow-gray-400 outline-none'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="question" className='cursor-pointer text-sm xl:text-base'>Your Question</label>
                        <input
                            type="text"
                            id='question'
                            name='Question'
                            className='px-3 py-2 w-full rounded-full border-none focus:shadow-gray-900 shadow-sm shadow-gray-400 outline-none'
                        />
                    </div>
                    <button className='bg-sky-600 text-white px-3 py-2 mt-6 rounded-full cursor-pointer hover:bg-sky-700 shadow-lg'>Submit</button>
                </div>
            </div>
        </div>
    )
}
