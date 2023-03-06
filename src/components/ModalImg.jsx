import React from 'react'
import { IoIosClose } from 'react-icons/io'

const ModalImg = ({modal, image}) => {
  return (
    <div className="fixed z-20 flex justify-center items-center backdrop-blur-sm top-0 left-0 w-full h-full bg-black/80">
      <div className="relative w-[80%] 2xl:w-[50%] h-[80%] bg-white/90 rounded-xl p-10 xl:p-20">
        <IoIosClose size={32} className='absolute right-3 top-3 sm:right-6 sm:top-6 cursor-pointer' onClick={modal}/>
        <div className="w-full h-full flex justify-center">
          <img src={image[1]} alt="" className='h-full w-full object-contain'/>
        </div>
      </div>
    </div>
  )
}

export default ModalImg