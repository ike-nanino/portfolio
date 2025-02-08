'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import React, { useState } from 'react'
import { BsArrowUpRight, BsGithub} from 'react-icons/bs'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import Image from 'next/image'
import WorkSliderButton from '@/components/WorkSliderButton'



const projects = [
  {
    num: '01',
    category: 'Frontend',
    title: 'Streamverse',
    description: 'Movie database app built with Next js and typescript. Powered with the TMdB API.',
   stack: [
    {
      name: 'Next Js'
    },
    {
      name: 'Typescript'
    },
    {
      name: 'Tailwind'
    },
   ],
   image: '/assets/images/streamverse.png',
   github: 'https://github.com/ike-nanino/streamverse',
   live: 'https://streamversee.vercel.app/'
  },
  {
    num: '02',
    category: 'Frontend',
    title: `Wray's Kitchen`,
    description: 'A simple restaurant app',
   stack: [
    {
      name: 'Html 5'
    },
    {
      name: 'Css 3'
    },
    {
      name: 'Javascript'
    },
   ],
   image: '/assets/images/wray.png',
   github: 'https://github.com/ike-nanino/wrayskitchen',
   live: 'https://wrayskitchen.vercel.app/'
  },
  {
    num: '03',
    category: 'Frontend',
    title: 'Contacts',
    description: 'Contacts app developed using react fundamentals including hooks, components and conditional rendering. inspired by Nii Aryeh',
   stack: [
    {
      name: 'React.js'
    },
    {
      name: 'Tailwind'
    },
  
   ],
   image: '/assets/images/contacts.png',
   github: 'https://github.com/ike-nanino/contacts-app',
   live: 'https://contacts-app-beige-delta.vercel.app/'
  },
  {
    num: '04',
    category: 'Frontend',
    title: 'LegalEcho',
    description: 'A sleek, Tailwind CSS-powered website for a law firm, offering a polished user experience. Includes a contact form for client inquiries, ensuring easy communication. Optimized for responsiveness and accessibility.',
   stack: [
    {
      name: 'Next.js'
    },
    {
      name: 'Typescript'
    },
    {
      name: 'Tailwind'
    },
   ],
   image: '/assets/images/legalecho.png',
   github: 'https://github.com/ike-nanino/legalecho',
   live: 'https://legalecho.vercel.app/'
  },
  {
    num: '05',
    category: 'Fullstack',
    title: 'Medical Care',
    description: 'A healthcare platform that streamlines patient registration, appointment scheduling, and medical records. Appwrite for backend',
   stack: [
    {
      name: 'Next.js'
    },
    {
      name: 'Typescript'
    },
    {
      name: 'Tailwind'
    },
   ],
   image: '/assets/images/medicalcenter.png',
   github: 'https://github.com/ike-nanino/e-medicalcenter',
   live: 'https://e-medicalcenter.vercel.app/'
  },
]



function Work() {

  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  }
  return (
    <motion.div
     initial={{ opacity: 0}}
     animate={{ 
       opacity: 1, 
       transition: {
        delay: 2.4,
        duration: 0.4,
        ease: 'easeIn'
       }
     }}

     className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>{project.num}</div>
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{project.category}</h2>
              <p> {project.description} </p>
              <ul className='flex gap-4'>
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className='text-xl text-accent'>
                       {item.name}

                       {index !== project.stack.length - 1 && ','}
                    </li>
                  )

                })}
              </ul>
              <div className="border border-white/20"></div>

              <div className='flex items-center gap-4'>
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[44px] h-[44px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-2xl group-hover:text-accent'/>
                      </TooltipTrigger>
                      <TooltipContent>
                         <p>Preview</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[44px] h-[44px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsGithub className='text-white text-2xl group-hover:text-accent'/>
                      </TooltipTrigger>
                      <TooltipContent>
                         <p>Github Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper 
            spaceBetween={30}
            slidesPerView={1}
            className='xl:h-[520px] mb-12'
            onSlideChange={handleSlideChange}
            
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className='w-full'>
                    <div className='h-[460px] relative group flex justify-center items-center'>

                  

                    <div className='relative w-full h-full'>
                      <Image
                      src={project.image}
                      fill
                      className='object-contain xl:object-cover'
                      alt='Projects'
                      />
                    </div>

                    </div>
                    
                  </SwiperSlide>
                )
              })}

              <WorkSliderButton
              containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
              btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] flex justify-center items-center transition-all'
              iconsStyles=''
              />
            </Swiper>
          </div>

        </div>

      </div>
    </motion.div>
  )
}

export default Work
