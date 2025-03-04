'use client'
import React from 'react'
import vxsLogo from '../assets/vxs-logo.jpg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Navigation() {
    const pathname = usePathname();
    return (
        <div className='sticky z-50 overflow-hidden top-0 bg-white flex flex-row h-24 2xl:h-32 w-full gap-10 px-2 md:px-10 items-center shadow select-none'>
            <div className='flex flex-row justify-between w-full'>
                <Link href={'/'} className='flex flex-row gap-5 items-center w-fit'>
                    <img src={vxsLogo.src} alt="vxs-logo"
                        className='w-16 2xl:w-20 rounded-2xl overflow-hidden object-fill' />
                    <span className='text-sm 2xl:text-xl font-sans font-semibold w-[125px] 2xl:w-[200px] text-black'>CÔNG TY CỔ PHẦN CÔNG NGHỆ VXS</span>
                </Link>
                <div className='hidden lg:flex flex-row items-center gap-10'>
                    <div className='flex flex-col items-center'>
                        <Link href={"/home"}
                            className={`2xl:text-xl font-sans font-semibold hover:text-[--secondary-color] duration-300
                            ${pathname === "/home" || pathname === "/" ? "text-[--secondary-color]" : "text-black"}`}>Trang chủ</Link>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Link href={"/about"}
                            className={`2xl:text-xl font-sans font-semibold hover:text-[--secondary-color] duration-300
                            ${pathname === "/about" ? "text-[--secondary-color]" : "text-black"}`}>Về chúng tôi</Link>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Link href={"/product"}
                            className={`2xl:text-xl font-sans font-semibold hover:text-[--secondary-color] duration-300
                            ${pathname === "/product" ? "text-[--secondary-color]" : "text-black"}`}>Sản phẩm</Link>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Link href={"/contact"}
                            className={`2xl:text-xl font-sans font-semibold hover:text-[--secondary-color] duration-300
                            ${pathname === "/contact" ? "text-[--secondary-color]" : "text-black"}`}>Liên hệ</Link>
                    </div>
                </div>
            </div>
            <div className='relative hidden md:flex'>
                <input type="text" placeholder='Tìm kiếm' className='md:w-[200px] xl:w-[300px] border border-gray-300 py-3 px-5 pr-12 h-10 2xl:h-14 rounded-full duration-600 outline-none focus:border focus:border-gray-500' />
                <FontAwesomeIcon icon={faSearch} className='absolute top-1/2 -translate-y-1/2 right-5 text-gray-500' />
            </div>
        </div>
    )
}
