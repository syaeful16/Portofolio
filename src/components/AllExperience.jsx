import React from 'react'
import { experience } from './Experience'
import Navbar from './Navbar'


const AllExperience = () => {
  return (
    <div>
      <Navbar menu={[]}/>
      <div className="p-container font-poppins mt-12 w-full">
        <div className="w-full pb-20" id='uix'>
          <h1 className='text-gradient w-fit text-5xl py-2 font-bold pb-14'>UI/UX Design</h1>
          <div className="grid sm:grid-cols-2 2xl:grid-cols-3 gap-y-24 gap-10 pt-10 bg-black/20 p-10 md:p-20 2xl:p-32 rounded-lg">
            {/* <DataProject/> */}
            {experience.map((data, index) => (
              <div className="" key={index}>
                <img src={data.img} alt={data.title} className='w-full h-auto object-cover'/>
                <h1 className='text-white text-[26px] font-bold pt-8 font-poppins'>{data.title}</h1>
                <p className='text-[#9D9D9D] font-light text-lg font-poppins pt-2'>{data.from}</p>
                <p className='text-white text-base font-poppins pt-10 font-extralight leading-relaxed'>{data.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllExperience