"use client"

import { motion } from "framer-motion"
import Image from "next/image"

function Photo() {
  return (
    <div className="h-full w-full relative">
      <motion.div
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: 'easeIn' } 
      }}
      >

      
        <motion.div 
         initial={{opacity: 0}}
         animate={{
           opacity: 1,
           transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' } 
         }}
        >
            <div className="w-[298px] h-[298px] xl:w-[360px] xl:h-[360px] absolute">
                <Image
                 src='/assets/images/isaac1.png'
                 alt="Software Developer"
                 priority
                 quality={100}
                 fill
                 className="object-contain"
                 
                />
            </div>
        </motion.div>

        <motion.svg 
         className="w-[300px] h-[300px] xl:w-[368px] xl:h-[368px]"
         fill='transparent'
         viewBox='0 0 368 368'
         xmlns='http://www.w3.org/2000/svg'
        >
          <motion.circle
            cx='180'
            cy='180'
            r='177'
            stroke='#07adfa'
            strokeWidth='4'
            strokeLinecap='round'
            strokeLinejoin='round'
            initial={{ strokeDasharray: '24 10 0 0' }}
            animate={{ 
              strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </motion.svg>

        </motion.div>
    </div>
  )
}

export default Photo