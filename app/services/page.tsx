'use client';


import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowDownRight } from 'react-icons/bs'


const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'From concept to deployment, offering complete web solutions that balance aesthetics with performance. Specializing in responsive design and SEO-friendly practices, I deliver websites that are visually engaging, fast-loading, and optimized for both users and search engines.',
    href: '/contact'
  },
  {
    num: '02',
    title: 'Logo Design',
    description: 'Crafting memorable logos that embody a brand’s core values and vision, utilizing strategic color choices and typography to leave a lasting impact. With a focus on versatility, each logo design is created to be adaptable across various mediums and scalable for both digital and print use, offering a strong and cohesive brand presence.',
    href: '/contact'
  },
  {
    num: '03',
    title: 'UI/UX Design',
    description: 'I focus on creating intuitive, user-friendly designs that enhance the user journey from start to finish. Through detailed research, wireframing, and iterative usability testing, I design interfaces that are both functional and visually appealing, with a commitment to accessibility and seamless user interaction on every screen.',
    href: '/contact'
  },
  {
    num: '04',
    title: 'Mobile App Development',
    description: 'Developing apps with a user-first approach for iOS, Android, and cross-platform use, ensuring smooth, optimized performance across devices. From intuitive mobile UI/UX to performance optimization, each app is built to deliver a seamless, engaging experience with efficient functionality and minimal lag, tailored for today’s mobile-first users.',
    href: '/contact'
  },
];

function Services() {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0}}
          animate={{ 
            opacity: 1, 
            transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } 
          }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {services.map((service, index) => {
            return (
              <div 
              key={index}
              className='flex-1 flex flex-col justify-center gap-6 group'
              >
                  <div className='w-full flex justify-between items-center'>
                    <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>
                    <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                      <BsArrowDownRight className='text-primary text-3xl'/>
                    </Link>
                  </div>
                  <h2 className='text-[42px] font-bold leading-none text-white'> {service.title} </h2>
                  <p className='text-white/60'> {service.description} </p>
                  <div className='border-b border-white/28 w-full'></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
