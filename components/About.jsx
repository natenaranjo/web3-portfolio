import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
            <div className="col-span-2">
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I am</h2>
                <p className='text-xl py-2 text-gray-600'>// I am not your normal developer</p>
                <p className='text-xl py-2 text-gray-600'>
                    I have spent the last 10 years in the industrial industry as a coordinator for turnaround and maintenance for various refineries and power plants.  I have always had a knack for technology and working with computers.  I started off in 2006 working with HTML & CSS building gaming sites and local wikipedia's for dungeon & dragon groups for campaign stories.
                    Building a couple small business websites on wordpress back in the late 2000's for mom and pop shops around town. 
                </p>
                <p className='text-xl py-2 text-gray-600'>
                    Fascinated with how intricate programming can be I was quickly drawn to learn more. I started learning C++ to learn to develop my own games. Starting out freelancing for guilds in the gaming community, I am now spending time learning web3 development to prepare for the future of the web.
                </p>
                <p className='text-xl py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src='/assets/about.png' alt='/' />
            </div>
        </div>
    </div>
  )
}

export default About