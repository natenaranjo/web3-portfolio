import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Link from 'next/link'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest'>
                    LET&#39;S BUILD SOMETHING TOGETHER
                </p>
                <h1 className='py-4 text-gray-700'>
                    Hi&#44; I&#39;m <span className='text-[#5651e5]' >Nate</span>
                </h1>
                <h1 className='py-2 text-gray-700'>
                    A Full Stack Developer
                </h1>
                <p className='text-xl py-4 text-gray-600 max-w-[70%] m-auto'>
                    I&#39;m a full stack web developer specializing in building (and occasionally designing) exceptional digital experiences.  Currently, I&#39;m focused on building responsive front-end and back-end web applications while learning blockchain technologies.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <a
                        href='https://www.linkedin.com/in/natenaranjo'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn />
                        </div>
                    </a>
                    <a
                        href='https://github.com/natenaranjo'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub />
                        </div>
                    </a>
                    <Link href='/#contact'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail />
                        </div>
                    </Link>
                    <Link href='/resume'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsFillPersonLinesFill />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main