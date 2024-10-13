import Photo from '@/components/Photo'
import Socials from '@/components/Socials'
import React from 'react'

function Home() {
  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          <div className='text-center xl:text-left order-2 xl:order-none xl:items-center'>
            <span className='text-xl'>Frontend Developer</span>
            <h1 className='h1 my-6'>Hello I'm <span className='text-accent'>Isaac</span></h1>

            <p className='max-w-[500px] mb-9 text-white/80'>I excel at crafting digital experiences and I am proficient in various languages and technologies</p>

            <div className='mb-8 xl:mb-0 flex flex-col  xl:flex-row items-center gap-8'>
              <Socials containerStyles='flex gap-6' iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500' />
            </div>

          </div>

          {/* {photo} */}
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Home