import React from 'react'
import {AiOutlineInstagram, AiOutlineMail, AiFillFacebook, AiFillLinkedin} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center w-screen h-24 py-2 p-container bg-white/5'>
      <div className="h-full flex gap-8 items-center">
        <a href="https://www.instagram.com/syaefulloh_anaz/" target='_blank' rel='noreferrer'>
          <AiOutlineInstagram size={32} color={'#fff'}/>
        </a>
        <a href="mailto:syaefulloharnas16@gmail.com">
          <AiOutlineMail size={32} color={'#fff'}/>
        </a>
        <a href="https://www.facebook.com/syaefulloh.anaz/" target='_blank' rel='noreferrer'>
          <AiFillFacebook size={32} color={'#fff'}/>
        </a>
        <a href="https://www.linkedin.com/in/syaefulloh-arnas/" target='_blank' rel='noreferrer'>
          <AiFillLinkedin size={32} color={'#fff'}/>
        </a>
      </div>
      <p className='h-full flex items-center text-white font-poppins font-extralight'>@2023 Syaefulloh Arnas. All right reserved.</p>
    </div>
  )
}

export default Footer