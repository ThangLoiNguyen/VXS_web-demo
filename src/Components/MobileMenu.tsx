'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { faClose, faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import vxsLogo from '../assets/vxs-logo.jpg'
import Image from 'next/image'
export default function MobileMenu() {
    const [isOpenMenu, setIsOpenMenu] = React.useState(false);
    const toggleMenu = () => setIsOpenMenu(!isOpenMenu);
    const [isOpenSearch, setIsOpenSearch] = React.useState(false);
    const toggleSearch = () => setIsOpenSearch(!isOpenSearch);
    const pathname = usePathname();
    return (
        <div className='sticky z-40 top-0 bg-white flex lg:hidden flex-row h-24 2xl:h-32 w-full gap-10 px-3 md:px-10 items-center shadow select-none'>
            <div className='flex flex-row justify-between w-full items-center'>
                <Link href={'/'} className='flex flex-row gap-5 items-center w-fit'>
                    <Image src={vxsLogo} alt="vxs-logo"
                        className='w-16 2xl:w-20 rounded-2xl overflow-hidden object-contain' />
                    <span className='text-sm 2xl:text-xl font-sans font-semibold w-[125px] 2xl:w-[200px] text-black'>CÔNG TY CỔ PHẦN CÔNG NGHỆ VXS</span>
                </Link>
                <div className='flex flex-row items-center gap-2 md:gap-10'>
                    <div className='relative flex'>
                        <input type="text" placeholder='Tìm kiếm' className='hidden md:flex md:w-[200px] xl:w-[300px] border border-gray-300 py-2 px-5 pr-12 rounded-full duration-600 outline-none focus:border focus:border-gray-500' />
                        <label htmlFor="search">
                            <FontAwesomeIcon icon={faSearch} onMouseDown={toggleSearch}
                                className='absolute p-2 md:p-0 scale-90 ring-1 ring-gray-400 text-white bg-[black] md:bg-white rounded-full md:ring-0 top-1/2 -translate-y-1/2 right-5 md:text-gray-500 cursor-pointer' />
                        </label>
                        {isOpenSearch &&
                            <input id='search' type="text" placeholder='Tìm kiếm' onBlur={() => setIsOpenSearch(false)}
                                className='absolute md:hidden flex top-14 -right-5 outline-none border-2 border-white ring-1 shadow-2xl ring-gray-300 focus:ring-black px-3 w-[90vw] py-2 rounded animate-fade-down placeholder:text-sm text-sm' />
                        }
                    </div>
                    <FontAwesomeIcon icon={faBars} onClick={toggleMenu}
                        className='text-2xl text-black' />
                    {isOpenMenu &&
                        <div className='absolute flex flex-row top-0 right-0 h-screen w-screen animate-fade-menu'>
                            <div onClick={toggleMenu}
                                className=' flex flex-col gap-10 p-5 bg-gray-900 opacity-50 h-screen w-1/2'></div>
                            <div className=' flex flex-col gap-10 p-5 bg-black h-screen w-1/2'>
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
            </div>
        </div>
    )
}
