'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { faClose, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function MobileMenu() {
    const [isOpenMenu, setIsOpenMenu] = React.useState(false);
    const toggleMenu = () => setIsOpenMenu(!isOpenMenu);
    const pathname = usePathname();
    return (
        <div className='fixed z-50 flex md:hidden items-center top-8 right-5'>
            <FontAwesomeIcon icon={faBars} onClick={toggleMenu}
                className='top-5 right-5 text-2xl text-black' />
            {isOpenMenu &&
                <div className='absolute flex flex-row -top-8 -right-5 z-50 w-screen animate-fade-menu'>
                    <div onClick={toggleMenu}
                    className=' flex flex-col gap-10 p-5 md:hidden bg-gray-900 opacity-50 h-screen w-[30vh]'></div>
                    <div className=' flex flex-col gap-10 p-5 md:hidden bg-black h-screen w-[30vh]'>
                        <div className='flex justify-start w-full'>
                            <FontAwesomeIcon icon={faClose} onClick={toggleMenu}
                                className='text-2xl text-white' />
                        </div>
                        <div className='flex flex-col gap-10 px-5'>
                            <div className='flex flex-col'>
                                <Link href={"/home"}
                                    className={`2xl:text-xl font-sans font-semibold hover:text-[--secondary-color] duration-300
                            ${pathname === "/home" || pathname === "/" ? "text-[--secondary-color]" : "text-white"}`}>Trang chủ</Link>
                            </div>
                            <div className='flex flex-col'>
                                <Link href={"/about"}
                                    className={`2xl:text-xl font-sans font-semibold hover:text-[--secondary-color] duration-300
                            ${pathname === "/about" ? "text-[--secondary-color]" : "text-white"}`}>Về chúng tôi</Link>
                            </div>
                            <div className='flex flex-col'>
                                <Link href={"/product"}
                                    className={`2xl:text-xl font-sans font-semibold hover:text-[--secondary-color] duration-300
                            ${pathname === "/product" ? "text-[--secondary-color]" : "text-white"}`}>Sản phẩm</Link>
                            </div>
                            <div className='flex flex-col'>
                                <Link href={"/contact"}
                                    className={`2xl:text-xl font-sans font-semibold hover:text-[--secondary-color] duration-300
                            ${pathname === "/contact" ? "text-[--secondary-color]" : "text-white"}`}>Liên hệ</Link>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
