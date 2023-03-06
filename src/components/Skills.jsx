import React from 'react'
import BootstrapImg from '../assets/bootstrap.png'
import TailwindImg from '../assets/tailwind.png'
import CssImg from '../assets/css.png'
import HtmlImg from '../assets/html.png'
import JsImg from '../assets/javascript.png'
import PhpImg from '../assets/php.png'
import LaravelImg from '../assets/laravel.png'
import ReactImg from '../assets/react.png'
import MysqlImg from '../assets/mysql.png'
import NodeImg from '../assets/nodejs.png'
import GitImg from '../assets/git.png'
import PythonImg from '../assets/python.png'
import TensorImg from '../assets/tensorflow.png'

const logoImage = [
  { name:'HTML', img:HtmlImg },
  { name:'JavaScript', img:JsImg },
  { name:'CSS', img:CssImg},
  { name:'PHP', img:PhpImg},
  { name:'Laravel', img:LaravelImg},
  { name:'Reactjs', img:ReactImg},
  { name:'Bootstrap', img:BootstrapImg},
  { name:'Tailwind', img:TailwindImg},
  { name:'Mysql', img:MysqlImg},
  { name:'Nodejs', img:NodeImg},
  { name:'Git', img:GitImg},
  { name:'Python', img:PythonImg},
  { name:'Tensorflow', img:TensorImg},
]

const Skills = () => {
  return (
    <div className='w-full my-10 flex flex-col justify-center items-center p-8 md:p-12 backdrop-blur-md bg-white/5' data-aos='fade-in' data-aos-delay='200'>
      <div className="grid grid-cols-3 gap-4 md:hidden">
        {logoImage.map((image, index) => (
          <div key={index} className="">
            <img src={image.img} alt={image.name} className='' sizes={20}/>
          </div>
        ))}
      </div>
      <div className='hidden md:flex flex-col w-4/5 justify-center items-center'>
        <div className='flex justify-between items-center'>
          {logoImage.map((image, index) => (
            <div key={index}>
              {index <= 4 ? <img src={image.img} alt={image.name} className='p-6'/> : ''}
            </div>
          ))}
        </div>
        <div className='flex justify-between items-center'>
          {logoImage.map((image, index) => (
            <div key={index}>
              {index > 4 && index <= 8? <img src={image.img} alt={image.name} className='p-6'/> : ''}
            </div>
          ))}
        </div>
        <div className='flex justify-between items-center'>
          {logoImage.map((image, index) => (
            <div key={index}>
              {index > 8 && index < logoImage.length ? <img src={image.img} alt={image.name} className='p-6'/> : ''}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills