import React, { useState } from 'react'
import { AiFillGithub, AiFillGitlab } from 'react-icons/ai'
import Navbar from './components/Navbar'
import { projectUix, projectFeedIg, projectProgram }  from './components/DataProject'
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
      <svg className="absolute right-0 top-0 w-[40%] -z-10 blur-[200px]" width="943" height="1130" viewBox="0 0 943 1130" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M732.5 352C767.3 244.8 887.333 73 943 0.5V641.5C943 732 906.5 877 787 895.5C667.5 914 486.5 1051 374 1109C261.5 1167 109.5 1094.5 22.5002 989.5C-64.4998 884.5 120.5 895.5 265.5 877C410.5 858.5 450 779.5 555 696C660 612.5 689 486 732.5 352Z" fill="url(#paint0_linear_426_7)"/>
        <defs>
        <linearGradient id="paint0_linear_426_7" x1="975.5" y1="319" x2="-28" y2="1207" gradientUnits="userSpaceOnUse">
        <stop stop-color="#E631A8"/>
        <stop offset="1" stop-color="#5351D2" stop-opacity="0.68"/>
        </linearGradient>
        </defs>
      </svg>
      <svg className="absolute left-0 top-[160vh] w-[16%] -z-10 blur-[150px]" viewBox="0 0 291 1039" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1038.03V4.82894C89.6157 -5.17784 184.646 -2.47372 226 61C269.87 128.335 192.349 142.976 121.133 156.427C52.7406 169.344 -9.83699 181.163 46.5 237.5C74.8571 265.857 112.244 298.106 149.214 329.995C262.173 427.431 371.245 521.513 207 491C82.4306 467.858 71.4901 638.504 61.3913 796.024C54.181 908.487 47.3998 1014.26 0 1038.03Z" fill="url(#paint0_linear_354_32)"/>
        <defs>
        <linearGradient id="paint0_linear_354_32" x1="-99.5" y1="535.5" x2="1054.5" y2="955" gradientUnits="userSpaceOnUse">
        <stop stop-color="#670BFF"/>
        <stop offset="1" stop-color="#670BFF" stop-opacity="0"/>
        </linearGradient>
        </defs>
      </svg>
      <svg className="absolute right-0 top-[240vh] w-[16%] -z-10 blur-[150px]" viewBox="0 0 291 1039" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1038.03V4.82894C89.6157 -5.17784 184.646 -2.47372 226 61C269.87 128.335 192.349 142.976 121.133 156.427C52.7406 169.344 -9.83699 181.163 46.5 237.5C74.8571 265.857 112.244 298.106 149.214 329.995C262.173 427.431 371.245 521.513 207 491C82.4306 467.858 71.4901 638.504 61.3913 796.024C54.181 908.487 47.3998 1014.26 0 1038.03Z" fill="url(#paint0_linear_354_32)"/>
        <defs>
        <linearGradient id="paint0_linear_354_32" x1="-99.5" y1="535.5" x2="1054.5" y2="955" gradientUnits="userSpaceOnUse">
        <stop stop-color="#670BFF"/>
        <stop offset="1" stop-color="#670BFF" stop-opacity="0"/>
        </linearGradient>
        </defs>
      </svg>
      <Navbar menu={navMenu}/>
      <div className='w-screen p-container font-poppins mt-12'>
        {/* UI/UX */}
        <div className="w-full pb-20" id='uix'>
          <h1 className='text-gradient w-fit text-5xl py-2 font-bold'>UI/UX Design</h1>
          <div className="grid sm:grid-cols-2 2xl:grid-cols-3 gap-8 pt-10">
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
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 auto-rows-min gap-6 pt-10">
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
          <div className="w-full grid sm:grid-cols-2 xl:grid-cols-3 mt-10 gap-10 gap-y-20">
            { projectProgram.map((data, index) => (
              <div key={index} className='text-white'>
                <img src={data.img} alt="DoSAI" className='rounded-md w-full h-[280px] object-cover' />
                <div className='px-2'>
                  <h1 className='text-3xl font-bold mt-6 mb-2'>{data.title}</h1>
                  <p className='text-[#FFD568] text-base font-thin'>{data.category}</p>
                  <p className='w-full mt-6 leading-loose lg:leading-loose text-justify text-sm lg:text-base'>
                    {data.description}
                  </p>
                  <ul className='w-full flex flex-wrap gap-2 mt-6'>
                    {data.lang.map((items, index) => (
                      <li key={index} className='px-6 py-2 bg-slate-100/5 w-fit rounded-2xl text-[12px]'>{items}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            
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