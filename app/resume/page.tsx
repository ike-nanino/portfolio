'use client'


import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { motion } from 'framer-motion';
import { 
  FaHtml5, 
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaWordpress,
} from 'react-icons/fa'

import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiAdobephotoshop,
  SiWebflow,
} from 'react-icons/si'

const about = {
  title: 'About me',
  description: `Hello, I’m Isaac Semanu, a passionate and results-driven Frontend Developer from Accra, Ghana. With over 3 years of experience in front-end technologies like HTML, CSS, and JavaScript, alongside 2+ years specializing in React.js and more than a year working with Next.js and React Native, I’ve honed my expertise in building dynamic and efficient web applications.

I have a deep understanding of modern frameworks, including React, Next.js, and Webflow, and I consistently seek to craft innovative solutions that elevate user experience. My dedication to web development is complemented by a creative flair for UI/UX design and complete brand identity and visual communication, utilizing industry-leading tools such as Figma and Adobe Photoshop.

Beyond coding, I’m deeply interested in continuous learning and personal growth. You’ll often find me traveling, listening to podcasts, or staying active through regular workouts.

If you’re looking for a developer with a strong eye for design and a commitment to excellence, I’d love to collaborate. Feel free to reach out at ikesemanu@gmail.com.`,
};

const skills = {
  title: "My Skills",
  description: `Skills`,
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'HTML 5',
    },
    {
      icon: <FaCss3 />,
      name: 'CSS 3',
    },
    {
      icon: <FaJs />,
      name: 'Javascript',
    },
    {
      icon: <FaReact />,
      name: 'React.js',
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next.js',
    },
    {
      icon: <SiTailwindcss />,
      name: 'Tailwind CSS',
    },
    {
      icon: <SiTypescript />,
      name: 'Typescript',
    },
    {
      icon: <FaFigma />,
      name: 'Figma',
    },
    {
      icon: <SiAdobephotoshop />,
      name: 'Adobe PhotoShop',
    },
    {
      icon: <FaWordpress />,
      name: 'Wordpress',
    },
    {
      icon: <SiWebflow />,
      name: 'Webflow',
    },
    {
      icon: <FaReact />,
      name: 'React Native',
    },
  ]
}

function Resume() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: 1,
      transition: {
        delay: 2.4,
        duration: 0.4,
        ease: 'easeIn'
      }
    
    }}
    className='min-h-80vh flex items-center justify-center py-12 xl:py-0'
    >
     <div className="container mx-auto">
      <Tabs defaultValue='about' className='flex flex-col xl:flex-row gap-[60px]'>
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="about">
              About Me
          </TabsTrigger>
          <TabsTrigger value='skills'>
              Skills
          </TabsTrigger>
        </TabsList>

        <div className='min-h-[70vh] w-full'>
          <TabsContent value='about' className='w-full text-center xl:text-left'>
          <div className='flex flex-col gap-[30px]'>
            <h3 className='text-4xl font-bold'> {about.title} </h3>
            <p className='max-w-[600] text-white/60 mx-auto xl:mx-0'> {about.description} </p>

           
          </div>
          </TabsContent>
          <TabsContent value='skills' className='w-full h-full'>
          <div className="flex flex-col gap-[30px]">
            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
              <h3 className='text-4xl font-bold'>{skills.title}</h3>
              <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
            </div>
            <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] mb-4'>
             {skills.skillList.map((skill, index) => {
              return (
                  <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[120px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                            <div className='text-5xl group-hover:text-accent transition-all duration-300'> {skill.icon} </div>

                          </TooltipTrigger>

                          <p className='text-white/60 text-center mt-2'> {skill.name} </p>
                          <TooltipContent>
                          <p> {skill.name}</p>
                        </TooltipContent>
                        </Tooltip>

                      </TooltipProvider>
                  </li>
              )
             })}
            
            </ul>
          </div>
          </TabsContent>

        </div>

      </Tabs>

     </div>
    </motion.div>
  )
}

export default Resume
