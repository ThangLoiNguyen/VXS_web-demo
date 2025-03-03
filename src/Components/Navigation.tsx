'use client'
import React from 'react'
import vxsLogo from '../assets/vxs-logo.jpg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
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
            <div className='hidden sm:flex flex-row w-[80%] sm:w-[40%] lg:w-[25%] 2xl:w-[20%] gap-3 items-center'>
                <Link href={'/user/signIn'} className=' flex text-xs 2xl:text-base px-2 font-sans justify-center border rounded-full py-2 w-1/2 border-sky-600 hover:border-[--primary-color]  bg-sky-600 text-white hover:bg-[--primary-color] hover:text-white duration-300'>
                    <span>Đăng nhập</span>
                </Link>
                <Link href={'/user/signUp'} className=' flex text-xs 2xl:text-base px-2 font-sans justify-center border rounded-full py-2 w-1/2 border-sky-600 hover:border-[--primary-color] text-sky-600 bg-white hover:bg-[--primary-color] hover:text-white duration-300'>
                    <span >Đăng ký</span>
                </Link>
            </div>
        </div>
    )
}
