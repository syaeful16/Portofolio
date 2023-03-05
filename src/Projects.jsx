import React, { useState } from 'react'
import { AiFillGithub, AiFillGitlab } from 'react-icons/ai'
import Navbar from './components/Navbar'
import DosAI from './assets/program/dosai.png'
import EstCam from './assets/program/estcam.png'
import LieDetect from './assets/program/liedetection.png'
import Rejosari from './assets/program/rejosari.png'
import { projectUix, projectFeedIg, projectProgram }  from './components/DataProject'
import Image2 from './assets/feed/image2.png'
import Image4 from './assets/feed/image4.png'
import Image6 from './assets/feed/image6.png'
import ModalImg from './components/ModalImg'

const Projects = () => {

  const [modalImg, setModalImg] = useState(false)
  const [tempData, setTempData] = useState([])

  const handleModal = () => {
    setModalImg(!modalImg)
  }

  const getData = (image) => {
    let tempData = [image]
    setTempData(item => [1, ...tempData])

    return setModalImg(true)
  }

  const navMenu = [
    {name: 'UI/UX Design', linkto: 'uix'},
    {name: 'Design Feed', linkto: 'feed'},
    {name: 'Program', linkto: 'program'}
  ]

  return (
    <>
      <Navbar menu={navMenu}/>
      <div className='w-screen p-container font-poppins mt-12'>
        {/* UI/UX */}
        <div className="w-full pb-20" id='uix'>
          <h1 className='text-gradient w-fit text-5xl py-2 font-bold'>UI/UX Design</h1>
          <div className="grid sm:grid-cols-2 2xl:grid-cols-3 gap-8 pt-6">
            {/* <DataProject/> */}
            {projectUix.map((data, index) => (
              <div className="" key={index}>
                <div className="relative h-max overflow-hidden group font-poppins">
                  <img src={data.img} alt="Harvest Code App" className='rounded-lg w-full object-cover lg:group-hover:brightness-[.7] duration-300'/>
                  <a href={data.link} rel='noreferrer' target='_blank' className="hidden xl:block absolute -top-10 group-hover:top-4 right-4 ease-in-out duration-300 px-4 py-2 rounded-md bg-[#FFD568] text-base">View Detail</a>
                  <div className="w-full absolute z-10 hidden lg:flex flex-col backdrop-blur-xl bg-black/10 bottom-0 rounded-b-lg h-[0] group-hover:h-[60%] ease-in-out duration-300">
                    <h1 className='text-2xl font-poppins font-bold p-5 text-[#FFD568]'>{data.title}</h1>
                    <p className='text-base px-5 text-white'>{data.description}</p>
                  </div>
                  <div className="w-full lg:hidden flex flex-col pt-4 font-poppins">
                    <h1 className='text-2xl font-bold py-2 text-[#FFD568]'>{data.title}</h1>
                    <p className='text-base text-white font-thin'>{data.description}</p>
                    <a href={data.link} rel='noreferrer' target='_blank' className='w-max px-3 py-1 rounded-md mt-4 border text-white border-[#FFD568] text-sm'>View Detail</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Feed Instagram */}
        <div className="w-full pb-20" id='feed'>
          <h1 className='text-gradient text-5xl py-2 font-bold'>Design Feed Instagram</h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 auto-rows-[10px] gap-6 pt-6">
            { projectFeedIg.map((data, index) => (
              <div key={index} className={`relative w-full ${data.size} group cursor-pointer`} onClick={() => getData(data.img)}>
                <div className="absolute flex w-full h-full justify-center items-center group-hover:bg-black/60 z-10 rounded-xl duration-200 ease-in-out">
                  <p className='text-white text-lg opacity-0 group-hover:opacity-100 duration-200'>View</p>
                </div>
                <img src={data.img} alt="" className='w-full h-full object-cover rounded-xl' />
              </div>
            ))}
            { modalImg ? <ModalImg modal={handleModal} image={tempData}/> : '' }
          </div>
        </div>
        <div className="w-full pb-20" id='program'>
          <div className='flex justify-between'>
            <h1 className='text-gradient text-5xl py-2 font-bold'>Program</h1>
            <div className='flex items-center text-white gap-6'>
              <a href="https://github.com/syaeful16" target='_blank' rel='noreferrer'><AiFillGithub size={28}/></a>
              <a href="https://gitlab.com/syaeful16" target='_blank' rel='noreferrer'><AiFillGitlab size={28}/></a>
            </div>
          </div>
          <div className="w-full grid grid-cols-3 mt-10 gap-10 gap-y-20">
            { projectProgram.map((data, index) => (
              <div key={index} className='text-white'>
                <img src={data.img} alt="DoSAI" className='rounded-md w-full h-[280px] object-cover' />
                <div className='px-2'>
                  <h1 className='text-3xl font-bold mt-6'>{data.title}</h1>
                  <p className='text-[#FFD568] text-base font-thin'>{data.category}</p>
                  <p className='w-full mt-6 leading-loose text-justify'>
                    {data.description}
                  </p>
                  <ul className='w-full flex flex-wrap gap-2 mt-6'>
                    {data.lang.map((items, index) => (
                      <li className='px-6 py-2 bg-slate-100/5 w-fit rounded-2xl text-[12px]'>{items}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
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
            {/* <div className='text-white'>
              <img src={EstCam} alt="DoSAI" className='rounded-md w-full h-[280px] object-cover' />
              <div className='px-2'>
                <h1 className='text-2xl font-bold mt-6'>EST.Cameras.id</h1>
                <p className='text-[#FFD568] text-base font-thin'>Website</p>
                <p className='w-full mt-6 leading-loose'>
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
                <p className='w-full mt-6 leading-loose'>
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
                <p className='w-full mt-6 leading-loose'>
                The Rejosari Village website is a website created for online community service. This website aims to make it easier for Rejosari Village residents to submit letters. In making it use the DataTables library and PHPMailer.
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
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects