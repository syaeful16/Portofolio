import React from 'react'
import Myphoto3 from '../assets/myphoto3.png'

const Motivation = () => {
  return (
    <div className='w-screen py-14 px-[2rem] lg:px-[4rem] xl:px-[6rem] 2xl:px-[12rem] font-poppins'>
      <div className="lg:grid grid-cols-2 py-10">
        <div className="w-full h-full flex justify-center p-6">
          <img src={Myphoto3} alt="" className='w-auto scale-75 rounded-md' data-aos='fade-right' data-aos-delay='300'/>
        </div>
        <div className="flex flex-col justify-center items-center lg:items-baseline" data-aos='fade-left' data-aos-delay='300'>
          <h1 className='w-[80%] text-5xl text-center md:text-left text-white leading-normal'><span className='font-bold font-montserrat text-7xl'>“</span> Success and failure are both parts of life. Both are temporary.</h1>
          <p className='text-xl text-[#FFD568] mt-6 font-extralight'>Shah Rukh Khan</p>
        </div>
      </div>
    </div>
  )
}

export default Motivation