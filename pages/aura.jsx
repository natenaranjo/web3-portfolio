import Image from 'next/image';
import React from 'react';
import auraImg from '../public/assets/projects/aura.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const aura = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image 
                className='absolute z-1' 
                layout='fill' 
                objectFit='cover' 
                src={auraImg} 
                alt='/' 
            />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Aura</h2>
                <h3>Node | Express | Handlebars | Mysql</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2 className='py-2'>Overview</h2>
                <p>
                    Help yourself become more aware of your mood and track it. This can help the user with self reflection and uncover trends in their mood over time. Upon making an account at the login scrren, the user will be promted to rate their mood for that day. Once a mood has been chosen, the user will be brought to the mainpage wher they will be given a phrase dependent on the mood they chose to provide helpful advice if necessary. There will also be a textarea where journal entries can be entered daily to have a more in-depth description for the reason the user is in the mood they chose for the day.
                </p>
                <br />
                <h3>Features</h3>
                <li>Advice dependent on chosen mood.</li>
                <li>Data presented over a long period of time.</li>
                <li>Journal entries to be recorded and reviewed daily.</li>
                <br />
                <h3>Challenges</h3>
                <p>
                    Managing the usage of unfimiliar frameworks and API complicated the developement process. There was a necessary learing curve that needed to happen to be able to use the additional resources we chose to use effectively. Deployment requiered a lot more of managing errors which required very clear communication among the team as there was a lot of individual pieces that needed to be managed. We needed conssitency when naming thins such as proper id's for correct routing and managing pushes on the repo to avoid potential issues down the line.
                </p>
                <br />
                <h3>Future Iterations</h3>
                <p>Additional features we have considered for the future:</p>
                <li>Interactive Element</li>
                <li>Links to meditaitons or breathing exercies</li>
                <li>More calendar functionality</li>
                <li>Voice memo</li>
                <br />
                <a 
                    href='https://guarded-sea-23692.herokuapp.com/'
                    target='_blank'
                    rel='noreferrer'
                >
                    <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
                </a>
                <a 
                    href='https://github.com/natenaranjo/aura'
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
                            <RiRadioButtonFill className='pr-1' /> Node
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> Express
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> Handlebars
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> Mysql
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> Tailwind
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> Heroku
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

export default aura