import React from 'react'
import { AiFillGithub, AiFillGitlab } from 'react-icons/ai'
import Navbar from './components/Navbar'
import DosAI from './assets/program/dosai.png'
import EstCam from './assets/program/estcam.png'
import LieDetect from './assets/program/liedetection.png'
import Rejosari from './assets/program/rejosari.png'

const Projects = () => {

  const navMenu = [
    {name: 'UI/UX Design', linkto: 'uix'},
    {name: 'Design Feed', linkto: 'feed'},
    {name: 'Program', linkto: 'program'}
  ]

  return (
    <>
      <Navbar menu={navMenu}/>
      <div className='w-screen p-container font-poppins mt-12'>
        <div className="w-full h-screen" id='uix'>
          <h1 className='text-gradient w-fit text-5xl py-2 font-bold'>UI/UX Design</h1>
        </div>
        <div className="w-full h-screen" id='feed'>
          <h1 className='text-gradient text-5xl py-2 font-bold'>Design Feed Instagram</h1>
        </div>
        <div className="w-full pb-20" id='program'>
          <div className='flex justify-between'>
            <h1 className='text-gradient text-5xl py-2 font-bold'>Program</h1>
            <div className='flex items-center text-white gap-6'>
              <a href="https://github.com/syaeful16" target='_blank'><AiFillGithub size={28}/></a>
              <a href="https://gitlab.com/syaeful16" target='_blank'><AiFillGitlab size={28}/></a>
            </div>
          </div>
          <div className="w-full grid grid-cols-3 mt-10 gap-10 gap-y-20">
            <div className='text-white'>
              <img src={DosAI} alt="DoSAI" className='rounded-md w-full h-[280px] object-cover' />
              <div className='px-2'>
                <h1 className='text-3xl font-bold mt-6'>DoS.AI</h1>
                <p className='text-[#FFD568] text-base font-thin'>Website</p>
                <p className='w-full mt-6 leading-loose text-justify'>
                DoS.AI is a website that is used to detect strawberry plant diseases based on Artificial Intelligence. The purpose of this website is to make it easier to detect strawberry plant diseases so that experts don't need to determine these plant diseases.
                </p>
                <ul className='w-full flex flex-wrap gap-2 mt-6'>
                  <li className='px-6 py-2 bg-slate-100/5 w-fit rounded-2xl text-[12px]'>HTML</li>
                  <li className='px-6 py-2 bg-slate-100/5 w-fit rounded-2xl text-[12px]'>CSS</li>
                  <li className='px-6 py-2 bg-slate-100/5 w-fit rounded-2xl text-[12px]'>JavaScript</li>
                  <li className='px-6 py-2 bg-slate-100/5 w-fit rounded-2xl text-[12px]'>Python</li>
                </ul>
              </div>
            </div>
            <div className='text-white'>
              <img src={EstCam} alt="DoSAI" className='rounded-md w-full h-[280px] object-cover' />
              <div className='px-2'>
                <h1 className='text-2xl font-bold mt-6'>EST.Cameras.id</h1>
                <p className='text-[#FFD568] text-base font-thin'>Website</p>
                <p className='w-full mt-6 leading-loose text-justify'>
                EST Cameras id is a website created for camera rentals, whether you want to rent or rent out your own camera. The website was created because the camera rental system is still rare and difficult to find in searches, so that gave rise to the idea of making the website.
                </p>
                <ul className='w-full flex flex-wrap gap-2 mt-6'>
                  <li className='px-6 py-2 bg-slate-100/5 w-fit rounded-2xl text-[12px]'>HTML</li>
                  <li className='px-6 py-2 bg-slate-100/5 w-fit rounded-2xl text-[12px]'>CSS</li>
                  <li className='px-6 py-2 bg-slate-100/5 w-fit rounded-2xl text-[12px]'>JavaScript</li>
                  <li className='px-6 py-2 bg-slate-100/5 w-fit rounded-2xl text-[12px]'>PHP</li>
                  <li className='px-6 py-2 bg-slate-100/5 w-fit rounded-2xl text-[12px]'>Mysql</li>
                </ul>
              </div>
            </div>
            <div className='text-white'>
              <img src={LieDetect} alt="DoSAI" className='rounded-md w-full h-[280px] object-cover' />
              <div className='px-2'>
                <h1 className='text-2xl font-bold mt-6'>Detection Lie Real Time</h1>
                <p className='text-[#FFD568] text-base font-thin'>System</p>
                <p className='w-full mt-6 leading-loose text-justify'>
                Predictable lie detection system in real time with camera or video input. I created the system using the Python programming language with the tensorflow library. The dataset is made from fake and honest videos that are used as pictures.
                </p>
                <ul className='w-full flex flex-wrap gap-2 mt-6'>
                  <li className='px-6 py-2 bg-slate-100/5 w-fit rounded-2xl text-[12px]'>Python</li>
                  <li className='px-6 py-2 bg-slate-100/5 w-fit rounded-2xl text-[12px]'>Tensorflow</li>
                </ul>
              </div>
            </div>
            <div className='text-white'>
              <img src={Rejosari} alt="DoSAI" className='rounded-md w-full h-[280px] object-cover' />
              <div className='px-2'>
                <h1 className='text-2xl font-bold mt-6'>Rejosari Village website</h1>
                <p className='text-[#FFD568] text-base font-thin'>Website</p>
                <p className='w-full mt-6 leading-loose text-justify'>
                Predictable lie detection system in real time with camera or video input. I created the system using the Python programming language with the tensorflow library. The dataset is made from fake and honest videos that are used as pictures.
                </p>
                <ul className='w-full flex flex-wrap gap-2 mt-6'>
                  <li className='px-6 py-2 bg-slate-100/5 w-fit rounded-2xl text-[12px]'>HTML</li>
                  <li className='px-6 py-2 bg-slate-100/5 w-fit rounded-2xl text-[12px]'>CSS</li>
                  <li className='px-6 py-2 bg-slate-100/5 w-fit rounded-2xl text-[12px]'>JavaScript</li>
                  <li className='px-6 py-2 bg-slate-100/5 w-fit rounded-2xl text-[12px]'>PHP</li>
                  <li className='px-6 py-2 bg-slate-100/5 w-fit rounded-2xl text-[12px]'>Mysql</li>
                  <li className='px-6 py-2 bg-slate-100/5 w-fit rounded-2xl text-[12px]'>PHPMailer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects