import { motion } from "framer-motion";
import { styles } from '../styles';



const Hero = () => {
  return (
    <section className="relative w-full h-screen-62vh mx-auto flex flex-col items-center justify-center">
  <div className={`${styles.paddingX} flex flex-row gap-5`}>
    <div className="flex flex-col items-center">
      <div className="w-5 h-5 rounded-full bg-[rgb(145,94,255)]" />
      <div className='w-1 sm:h-78 h-52 violet-gradient'/>
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
  </div>

  <div className='absolute bottom-40 xs:bottom-40 w-full flex justify-center items-center'>
    <a href='#about'>
      <div className='w-[100px] h-[64px] flex justify-center items-start p-2'>
      <motion.div
          animate={{
            y: [0, 40, 0],
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
</section>

  )
}

export default Hero