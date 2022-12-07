import Image from 'next/image';
import React from 'react';
import peaceImg from '../public/assets/projects/peace.png';
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
                src={peaceImg} 
                alt='/' 
            />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Peace of Mind v2</h2>
                <h3>Node | Express | MongoDB | GraphQL | React | AntD</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2 className='py-2'>Overview</h2>
                <p>
                    Final project of the bootcamp were team of six members work together to publish a single page MERN stack React application.
                </p>
                <br />
                <p>
                    Make new posts called Feelings that others can read. But don't worry! All posts are made using a randomly generated name so you can post with true freedom to express yourself.
                    Comment on other user's Feelings so that you can provide support and emotion comfort to others who may need it.
                    Provide Hugs to other people on their Feelings and comments. Think of Hugs as a "Like" on Facebook, but Hugs are more meaningful and feel better!
                    Keep track of how many Hugs your Feelings have received and see a running total on your own personal Dashboard!
                    Use Peace of Mind on all of your internet connected devices. Peace of Mind has been created and maintained using a fully responsive framework. We encourage you to use Peace of Mind on the stay, on the go, and everywhere life takes you.
                </p>
                <br />
                    <h4>Members:</h4>
                    <li>Aaron</li>
                    <li>Andrea</li>
                    <li>Joseph</li>
                    <li>Nate</li>
                    <li>Nick</li>
                    <li>Valeria</li>
                <br />
                <a 
                    href='https://peace-of-mind-app-v2.herokuapp.com/'
                    target='_blank'
                    rel='noreferrer'
                >
                    <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
                </a>
                <a 
                    href='https://github.com/natenaranjo/Peace-Of-Mind_V2'
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
                            <RiRadioButtonFill className='pr-1' /> React
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> AntD
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> GraphQL API
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> MongoDB
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> Express
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> Node
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