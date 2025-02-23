import React from 'react'
import vxsLogo from '../assets/vxs-logo.jpg'
import Link from 'next/link'
export default function Navigation() {
    return (
        <div className='sticky z-50 overflow-hidden top-0 bg-white flex flex-row h-24 w-full gap-20 pl-10 pr-12 items-center shadow'>
            <div className='flex flex-row justify-between w-full'>
                <div className='flex flex-row w-fill items-center'>
                    <Link href={'/'}>
                        <img src={vxsLogo.src} alt="vxs-logo"
                            className='w-40 h-32 object-cover invert' />
                    </Link>
                    <span className='text-base font-sans font-semibold w-full text-black'>CÔNG TY CỔ PHẦN CÔNG NGHỆ VXS</span>
                </div>
                <div className='flex flex-row items-center gap-10'>
                    <div className='flex flex-col items-center'>
                        <Link href={"/home"}
                            className='font-sans font-semibold hover:text-[--secondary-color] duration-300'>Trang chủ</Link>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Link href={"/about"}
                            className='font-sans font-semibold hover:text-[--secondary-color] duration-300'>Về chúng tôi</Link>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Link href={"/product"}
                            className='font-sans font-semibold hover:text-[--secondary-color] duration-300'>Sản phẩm</Link>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Link href={"/contact"}
                            className='font-sans font-semibold hover:text-[--secondary-color] duration-300'>Liên hệ</Link>
                    </div>
                </div>
            </div>
            <div className='flex flex-row w-60 gap-3 items-center'>
                <button className='text-xs font-sans border rounded-full px-3 py-2 w-1/2 border-sky-600 hover:border-[--primary-color]  bg-sky-600 text-white hover:bg-[--primary-color] hover:text-white duration-300'>Đăng nhập</button>
                <button className='text-xs font-sans border rounded-full px-3 py-2 w-1/2 border-sky-600 hover:border-[--primary-color] text-sky-600 bg-white hover:bg-[--primary-color] hover:text-white duration-300'>Đăng ký</button>
            </div>
        </div>
    )
}
