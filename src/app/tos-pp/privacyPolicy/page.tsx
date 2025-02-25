import Link from 'next/link'
import React from 'react'

export default function PrivacyPolicy() {
    return (
        <div className='flex h-full w-full items-center justify-center text-xl'>
            <Link href={'/'} className=' bg-black text-white px-3 py-2 rounded-full cursor-pointer select-none hover:bg-gray-800'>
                If you don't confirm the Privacy Policy, you can't use this website!
            </Link>
        </div>
    )
}
