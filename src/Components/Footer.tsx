import React from 'react'
import vxsLogo from '../assets/vxs-logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
export default function Footer() {
    return (
        <div className='bg-gray-200 flex flex-row justify-around h-96 w-full p-3'>
            <div className='flex flex-col gap-10 w-1/3 pt-10'>
                <div className='flex flex-row items-center gap-3'>
                    <img src={vxsLogo.src} alt=" vxs-logo" className='h-10 object-cover rounded-2xl' />
                    <span className='text-xs font-sans font-semibold w-1/2 text-black'>CÔNG TY CỔ PHẦN CÔNG NGHỆ VXS</span>
                </div>
                <div className='flex flex-col gap-5 px-3'>
                    <div className='flex flex-row gap-5 items-center'>
                        <FontAwesomeIcon icon={faLocationDot} className='w-5 object-cover' />
                        <span className='text-sm'>Số 17/269 Ngõ Quỳnh, Phường Quỳnh Lôi, Quận Hai Bà Trưng, Thành phố Hà Nội, Việt Nam</span>
                    </div>
                    <div className='flex flex-row gap-5 items-center'>
                        <FontAwesomeIcon icon={faPhone} className='w-5 object-cover' />
                        <span className='text-sm'>0904654694</span>
                    </div>
                    <div className='flex flex-row gap-5 items-center'>
                        <FontAwesomeIcon icon={faEnvelope} className='w-5 object-cover' />
                        <span className='text-sm'>thangloinguyen1209@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-3 w-2/5 pr-32 select-none'>
                <span className='text-lgs font-semibold'>Câu hỏi cho chúng tôi</span>
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email" className='cursor-pointer text-sm'>Your Email</label>
                        <input
                            type="text"
                            id='email'
                            name='Email'
                            className='px-3 py-2 w-full rounded-full'
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="phone" className='cursor-pointer text-sm'>Your Phone Nummber</label>
                        <input
                            type="text"
                            id='phone'
                            name='Phone number'
                            className='px-3 py-2 w-full rounded-full'
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="question" className='cursor-pointer text-sm'>Your Question</label>
                        <input
                            type="text"
                            id='question'
                            name='Question'
                            className='px-3 py-2 w-full rounded-full'
                        />
                    </div>
                    <button className='bg-black text-white px-3 py-2 mt-6 rounded-full cursor-pointer hover:bg-gray-800 shadow-lg'>Submit</button>
                </div>
            </div>
        </div>
    )
}
