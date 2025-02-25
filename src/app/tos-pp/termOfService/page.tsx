import Link from 'next/link'
import React from 'react'

export default function TermOfService() {
    return (
        <div className='flex h-full w-full items-center justify-center text-xl'>
            <Link href={'/'} className=' bg-black text-white px-3 py-2 rounded-full cursor-pointer select-none hover:bg-gray-800'>
                Confirm that ThangLoiNguyen is the best handsome boy in the world!
            </Link>
        </div>
    )
}
