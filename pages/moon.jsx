import Image from 'next/image';
import React from 'react';
import moonImg from '../public/assets/projects/2damoon.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const moon = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image 
                className='absolute z-1' 
                layout='fill' 
                objectFit='cover' 
                src={moonImg} 
                alt='/' 
            />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>2 Da Moon Recipes</h2>
                <h3>Node | Express | Handlebars | Mysql</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2 className='py-2'>Overview</h2>
                <p>
                    You and your group will use everything youve learned over the past six weeks to create a real-world front-end application that youll be able to showcase to potential employers. The user story and acceptance criteria will depend on the project that you create, but your project must fulfil the following requirements:
                </p>
                <li>CSS Framework other than Bootstrap</li>
                <li>Deployed to Github Pages</li>
                <li>Be Interactive</li>
                <li>Use at least two API&#39;s</li>
                <br />
                <a 
                    href='https://natenaranjo.github.io/2damoon/'
                    target='_blank'
                    rel='noreferrer'
                >
                    <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
                </a>
                <a 
                    href='https://github.com/natenaranjo/2damoon'
                    target='_blank'
                    rel='noreferrer'
                >
                    <button className='px-8 py-2 mt-4'>Code</button>
                </a>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> JavaScript
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> JQUERY
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> Recipe API
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> Foundation CSS
                        </p>
                    </div>
                </div>
            </div>
            <Link href='/#projects'>
                <p className='underline cursor-pointer'>Back</p>
            </Link>
        </div>

    </div>
  )
}

export default moon