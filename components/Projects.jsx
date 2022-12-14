import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import peaceImg from '../public/assets/projects/peace.png'
import weatherImg from '../public/assets/projects/weathertracker.png';
import moonImg from '../public/assets/projects/2damoon.png';
import auraImg from '../public/assets/projects/aura.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I&#39;ve Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>

                <ProjectItem 
                    title='Peace of Mind v2' 
                    backgroundImg={peaceImg} 
                    projectUrl='/peace' 
                />
                <ProjectItem 
                    title='Weather Tracker' 
                    backgroundImg={weatherImg} 
                    projectUrl='/weather' 
                />
                <ProjectItem 
                    title='2 Da Moon Recipes' 
                    backgroundImg={moonImg} 
                    projectUrl='/moon' 
                />
                <ProjectItem 
                    title='Aura' 
                    backgroundImg={auraImg} 
                    projectUrl='/aura' 
                />
                
            </div>
        </div>
    </div>
  )
}

export default Projects