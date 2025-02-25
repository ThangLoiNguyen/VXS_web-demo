'use client'
import React from 'react'
import vxsLogo from '../assets/vxs-logo.jpg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function Navigation() {
    const pathname = usePathname();
    return (
        <div className='sticky z-50 overflow-hidden top-0 bg-white flex flex-row h-24 w-full gap-20 pl-10 pr-12 items-center shadow select-none'>
            <div className='flex flex-row justify-between w-full'>
                <Link href={'/'} className='flex flex-row gap-5 items-center w-fit'>
                    <img src={vxsLogo.src} alt="vxs-logo"
                        className='w-16 rounded-2xl overflow-hidden object-fill' />
                    <span className='text-sm font-sans font-semibold w-[125px] text-black'>CÔNG TY CỔ PHẦN CÔNG NGHỆ VXS</span>
                </Link>
                <div className='flex flex-row items-center gap-10'>
                    <div className='flex flex-col items-center'>
                        <Link href={"/home"}
                            className={`font-sans font-semibold hover:text-[--secondary-color] duration-300
                            ${pathname === "/home" || pathname === "/" ? "text-[--secondary-color]" : "text-black"}`}>Trang chủ</Link>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Link href={"/about"}
                            className={`font-sans font-semibold hover:text-[--secondary-color] duration-300
                            ${pathname === "/about" ? "text-[--secondary-color]" : "text-black"}`}>Về chúng tôi</Link>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Link href={"/product"}
                            className={`font-sans font-semibold hover:text-[--secondary-color] duration-300
                            ${pathname === "/product" ? "text-[--secondary-color]" : "text-black"}`}>Sản phẩm</Link>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Link href={"/contact"}
                            className={`font-sans font-semibold hover:text-[--secondary-color] duration-300
                            ${pathname === "/contact" ? "text-[--secondary-color]" : "text-black"}`}>Liên hệ</Link>
                    </div>
                </div>
            </div>
            <div className='flex flex-row w-52 gap-3 items-center'>
                <Link href={'/user/signIn'} className=' flex text-xs font-sans justify-center border rounded-full py-2 w-1/2 border-sky-600 hover:border-[--primary-color]  bg-sky-600 text-white hover:bg-[--primary-color] hover:text-white duration-300'>
                    <span>Đăng nhập</span>
                </Link>
                <Link href={'/user/signUp'} className=' flex text-xs font-sans justify-center border rounded-full py-2 w-1/2 border-sky-600 hover:border-[--primary-color] text-sky-600 bg-white hover:bg-[--primary-color] hover:text-white duration-300'>
                    <span >Đăng ký</span>
                </Link>
            </div>
        </div>
    )
}
