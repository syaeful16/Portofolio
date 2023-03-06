import React from 'react'
import { Element } from "react-scroll";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Motivation from "./components/Motivation";
import MyExperience from "./components/MyExperience";
import MyProject from "./components/MyProject";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Homepage = () => {

  const menuNav = [
    {name: 'Project', linkto: 'MyProject'},
    {name: 'Experience', linkto: 'MyExperience'}
  ]

  Aos.init({
    duration: 1600,
    offset: 0
  })

  return (
    <>
      <div className="">
        <Navbar menu={menuNav}/>
        <Hero/>
        <Skills/>
        <Element name='MyProject' smooth>
          <MyProject/>
        </Element>
        <Element name='MyExperience' smooth>
          <MyExperience/>
        </Element>
        <Motivation/>
        <Footer/>
      </div>
      <svg className="absolute top-0 right-0 w-full md:w-[50%] -z-10 blur-[150px]" viewBox="0 0 1161 474" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M52.0604 0C19.4651 14.086 -1.93358 31.7945 0.9996 53.5C10.9996 127.5 107 299.5 207 275.5C259.961 262.789 330.031 219.506 390.918 181.895C444.997 148.49 491.832 119.559 513 120.5C558 122.5 728.5 162 742 208.5C747.151 226.243 744.076 250.246 740.886 275.149C735.716 315.511 730.243 358.236 759 380.5C803.748 415.144 907.302 426.173 956.481 431.41C958.406 431.615 960.248 431.812 962 432C975.824 433.486 988.588 440.143 1003.13 447.727C1035.9 464.818 1077.69 486.617 1161 464.551V0H52.0604Z" fill="url(#paint0_linear_340_30)"/>
        <defs>
        <linearGradient id="paint0_linear_340_30" x1="1139" y1="-8.50011" x2="317" y2="514.5" gradientUnits="userSpaceOnUse">
        <stop stop-color="#5994FB"/>
        <stop offset="1" stop-color="#3461AF"/>
        </linearGradient>
        </defs>
      </svg>
      <svg className="absolute left-0 top-[95vh] w-[16%] -z-10 blur-[150px]" viewBox="0 0 291 1039" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1038.03V4.82894C89.6157 -5.17784 184.646 -2.47372 226 61C269.87 128.335 192.349 142.976 121.133 156.427C52.7406 169.344 -9.83699 181.163 46.5 237.5C74.8571 265.857 112.244 298.106 149.214 329.995C262.173 427.431 371.245 521.513 207 491C82.4306 467.858 71.4901 638.504 61.3913 796.024C54.181 908.487 47.3998 1014.26 0 1038.03Z" fill="url(#paint0_linear_354_32)"/>
        <defs>
        <linearGradient id="paint0_linear_354_32" x1="-99.5" y1="535.5" x2="1054.5" y2="955" gradientUnits="userSpaceOnUse">
        <stop stop-color="#670BFF"/>
        <stop offset="1" stop-color="#670BFF" stop-opacity="0"/>
        </linearGradient>
        </defs>
      </svg>
      <svg className="absolute right-0 top-[220vh] w-[40%] -z-10 blur-[200px]" width="943" height="1130" viewBox="0 0 943 1130" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M732.5 352C767.3 244.8 887.333 73 943 0.5V641.5C943 732 906.5 877 787 895.5C667.5 914 486.5 1051 374 1109C261.5 1167 109.5 1094.5 22.5002 989.5C-64.4998 884.5 120.5 895.5 265.5 877C410.5 858.5 450 779.5 555 696C660 612.5 689 486 732.5 352Z" fill="url(#paint0_linear_426_7)"/>
        <defs>
        <linearGradient id="paint0_linear_426_7" x1="975.5" y1="319" x2="-28" y2="1207" gradientUnits="userSpaceOnUse">
        <stop stop-color="#E631A8"/>
        <stop offset="1" stop-color="#5351D2" stop-opacity="0.68"/>
        </linearGradient>
        </defs>
      </svg>
      <svg className="absolute left-0 top-[370vh] w-[16%] -z-10 blur-[150px]" viewBox="0 0 291 1039" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1038.03V4.82894C89.6157 -5.17784 184.646 -2.47372 226 61C269.87 128.335 192.349 142.976 121.133 156.427C52.7406 169.344 -9.83699 181.163 46.5 237.5C74.8571 265.857 112.244 298.106 149.214 329.995C262.173 427.431 371.245 521.513 207 491C82.4306 467.858 71.4901 638.504 61.3913 796.024C54.181 908.487 47.3998 1014.26 0 1038.03Z" fill="url(#paint0_linear_354_32)"/>
        <defs>
        <linearGradient id="paint0_linear_354_32" x1="-99.5" y1="535.5" x2="1054.5" y2="955" gradientUnits="userSpaceOnUse">
        <stop stop-color="#670BFF"/>
        <stop offset="1" stop-color="#670BFF" stop-opacity="0"/>
        </linearGradient>
        </defs>
      </svg>
    </>
  )
}

export default Homepage