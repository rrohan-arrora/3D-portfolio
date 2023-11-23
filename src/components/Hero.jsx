import { motion } from "framer-motion";
import { styles } from '../styles';

import { SectionWrapper } from '../hoc';


const Hero = () => {
  return (
    <section className="relative w-full h-screen-62vh mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 bottom-[120px] max-w-7xl mx-auto flex flex-row items-center gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className='w-1 sm:h-78 h-40 violet-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm
            <span className='text-[#915eff]'> Rohan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop frontend applications, backend applications <br className="sm:block hidden"/> &
            learning their deployments.
          </p>
        </div>

        <div className='absolute w-full xs:bottom-20 bottom-10 flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[40px] h-[70px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 80, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-11'
            >
              {/* SVG Arrow Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="none"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </motion.div>
          </div>
          </a>
        </div>


      </div>

    </section>
  )
}

export default SectionWrapper(Hero, "")