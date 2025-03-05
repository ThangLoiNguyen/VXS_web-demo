import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
export default function Information() {
  return (
    <div className='flex flex-col w-full items-center'>
      <div className='flex justify-center w-full border-b border-gray-300 py-5'>
        <h1 className='text-3xl font-semibold'>Thông tin công ty VXS</h1>
      </div>
      <div className='flex flex-col gap-10 w-full px-5 pt-10'>
                <div className='flex flex-col gap-5 xl:gap-8 px-3'>
                    <div className='flex flex-row gap-5 items-center'>
                        <FontAwesomeIcon icon={faLocationDot} className='w-5 object-cover' />
                        <span className='text-sm xl:text-base'>Số 17/269 Ngõ Quỳnh, Phường Quỳnh Lôi, Quận Hai Bà Trưng, Thành phố Hà Nội, Việt Nam</span>
                    </div>
                    <div className='flex flex-row gap-5 items-center'>
                        <FontAwesomeIcon icon={faPhone} className='w-5 object-cover' />
                        <span className='text-sm xl:text-base'>0904654694</span>
                    </div>
                    <div className='flex flex-row gap-5 items-center'>
                        <FontAwesomeIcon icon={faEnvelope} className='w-5 object-cover' />
                        <span className='text-sm xl:text-base'>thangloinguyen1209@gmail.com</span>
                    </div>
                </div>
            </div>
    </div>
  )
}
