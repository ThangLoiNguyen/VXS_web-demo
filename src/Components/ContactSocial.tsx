import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedinIn, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
export default function ContactSocial() {
    return (
        <div>
            <div className=' fixed animate-fade-right-left z-50 h-0 bottom-72 right-12 flex flex-col gap-10'>
                <div className='flex'>
                    <Link href={'https://www.facebook.com/'} className='p-1 border-2 border-transparent hover:border-gray-300 rounded-full duration-300'>
                        <FontAwesomeIcon icon={faFacebookF} className='h-5 w-5 text-black hover:text-sky-600 opacity-50 hover:opacity-100 duration-300 cursor-pointer' />
                    </Link>
                </div>
                <div className='flex'>
                    <Link href={'https://x.com/?mx=2'} className='p-1 border-2 border-transparent hover:border-gray-300 rounded-full duration-300'>
                        <FontAwesomeIcon icon={faTwitter} className='h-5 w-5 text-black hover:text-sky-600 opacity-50 hover:opacity-100 duration-300 cursor-pointer' />
                    </Link>
                </div>
                <div className='flex'>
                    <Link href={'https://www.facebook.com/'} className='p-1 border-2 border-transparent hover:border-gray-300 rounded-full duration-300'>
                        <FontAwesomeIcon icon={faLinkedinIn} className='h-5 w-5 text-black hover:text-sky-600 opacity-50 hover:opacity-100 duration-300 cursor-pointer' />
                    </Link>
                </div>
            </div>
            <div className='fixed z-50 h-0 bottom-20 right-9 animate-visible'>
                <span className='absolute top-0 left-0 rounded-full w-3 h-3 bg-red-600'></span>
                <div className='hover:bg-[--primary-color] bg-sky-600 p-3 rounded-full cursor-pointer duration-300'>
                    <FontAwesomeIcon icon={faFacebookMessenger} className='h-6 w-6 text-white duration-300' />
                </div>
                <span className='absolute -z-10 top-[6px] left-[6px] rounded-full w-9 h-9 bg-red-600 animate-ping' ></span>
            </div>
        </div>
    )
}
