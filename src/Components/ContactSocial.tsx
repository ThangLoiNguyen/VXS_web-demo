'use client'
import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedinIn, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import { faXmark, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
export default function ContactSocial() {
    const [showChat, setShowChat] = React.useState(false)
    const handleShowChat = () => setShowChat(!showChat)
    return (
        <div>
            <div className='hidden md:fixed animate-fade-right-left z-50 h-0 bottom-[400px] right-12 md:flex flex-col gap-10'>
                <div className='flex bg-white px-2 py-1.5 rounded-full'>
                    <Link href={'https://www.facebook.com/'}>
                        <FontAwesomeIcon icon={faFacebookF} className=' h-5 w-5 object-cover hover:scale-125 text-black hover:text-sky-600 opacity-50 hover:opacity-100 duration-300 cursor-pointer' />
                    </Link>
                </div>
                <div className='flex bg-white px-2 py-1.5 rounded-full'>
                    <Link href={'https://x.com/'}>
                        <FontAwesomeIcon icon={faTwitter} className='h-5 w-5 hover:scale-125 text-black hover:text-sky-600 opacity-50 hover:opacity-100 duration-300 cursor-pointer' />
                    </Link>
                </div>
                <div className='flex bg-white px-2 py-1.5 rounded-full'>
                    <Link href={'https://www.instagram.com/'}>
                        <FontAwesomeIcon icon={faLinkedinIn} className='h-5 w-5 hover:scale-125 text-black hover:text-sky-600 opacity-50 hover:opacity-100 duration-300 cursor-pointer' />
                    </Link>
                </div>
            </div>
            <div className='md:fixed z-50 h-0 bottom-20 right-10 animate-visible'>
                <span className='absolute top-0 left-0 rounded-full w-3 h-3 bg-red-600'></span>
                <div className='hover:bg-[--primary-color] px-3 py-2.5 bg-sky-600 rounded-full cursor-pointer duration-300'>
                        <FontAwesomeIcon icon={faFacebookMessenger} 
                        onClick={handleShowChat}
                        className='h-6 w-6 object-cover translate-y-[2px] text-white duration-300' />
                </div>
                <span className='absolute -z-10 top-[6px] left-[6px] rounded-full w-9 h-9 bg-red-600 animate-ping'></span>
                {showChat && 
                <div className='absolute shadow-2xl -bottom-20 right-16 w-[400px] max-h-[500px] h-[80vh] bg-white rounded-t-2xl select-none overflow-hidden animate-fade-in'>
                    <div className='relative h-16 w-full bg-sky-600'>
                        <Image src='/vxs-logo.jpg' alt=" vxs-logo" width={40} height={40} className='absolute top-1/2 -translate-y-1/2 left-3 h-10 w-10 rounded-full object-cover' />
                        <div className='absolute z-10 top-1/2 translate-y-[7px] left-10 w-3 h-3 rounded-full bg-green-600'></div>
                        <span className='absolute top-1/2 -translate-y-1/2 left-16 font-semibold text-white'>VXS</span>
                        <FontAwesomeIcon icon={faXmark} onClick={handleShowChat} className='absolute top-1/2 -translate-y-1/2 right-3 h-6 w-6 object-cover text-white hover:text-red-500 cursor-pointer' />
                    </div>
                    <div className='absolute flex justify-center bottom-3 left-0 w-full h-16 border-t border-gray-300'>
                        <input type="text" placeholder='Aa' className='flex -translate-x-5 translate-y-3 w-[80%] h-12 rounded-full px-5 placeholder-gray-500 bg-gray-200 outline-none text-black' />
                        <FontAwesomeIcon icon={faPaperPlane} className='absolute top-1/2 -translate-y-1/2 right-5 h-6 w-6 object-cover text-sky-500 hover:text-sky-600 cursor-pointer' />
                    </div>
                </div>
                }
            </div>
        </div>
    )
}
