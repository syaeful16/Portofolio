import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Navbar from './components/Navbar'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tl3ibif', 'template_tm3i74z', form.current, 'vATw52rI6igjcG0dx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    <Navbar menu={[]}/>
      <div className="p-container grid md:grid-cols-2 py-12 min-h-[90vh] max-h-screen">
        <div className="font-poppins text-white flex flex-col justify-center w-full h-full py-16">
          <h1 className='text-5xl font-semibold text-gradient'>Contact me using form or reach out directly</h1>
          <h3 className='text-[#999999] text-lg mt-16 mb-4'>Phone & Email</h3>
          <h2 className='text-white text-xl'>+62 858 1332 5779</h2>
          <h2 className='text-white text-xl my-2'>syaefulloharnas16@gmail.com</h2>
          <h3 className='text-[#999999] text-lg mt-12 mb-4'>Address</h3>
          <h2 className='text-white text-xl'>Purbalingga, Jawa Tengah</h2>
        </div>
        <div className="w-full flex flex-col justify-center py-20 md:py-0">
          <form ref={form} onSubmit={sendEmail} className='text-white font-poppins'>
            <div className="grid md:grid-cols-2 gap-8">
              <input type="text" name="user_name" placeholder='Fullname' className='p-6 bg-slate-800 placeholder:text-white'/>
              <input type="email" name="user_email" placeholder='Email' className='p-6 bg-slate-800 placeholder:text-white'/>
            </div>
            <textarea name="message" placeholder='Message' className='w-full p-6 my-6 min-h-[240px] bg-slate-800 placeholder:text-white'/>
            <input type="submit" value="Send Message" className='w-full bg-white text-black font-poppins py-6 font-semibold text-lg cursor-pointer hover:text-xl ease-in-out duration-300'/>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact