import { motion } from "framer-motion";
import { styles } from '../styles';


const Hero = () => {
  return (
    <section className="relative w-full h-screen-62vh mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[20px] max-w-7xl mx-auto flex flex-row items-center gap-5`}>
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
        {/* top-56 xs:top-60 */}
        <div className='absolute  w-full xs:bottom-15 bottom-40 flex justify-center items-center'>
          <a href='#about'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div
                animate={{
                  y: [0, 80, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
              />
            </div>
          </a>
        </div>
      </div>

    </section>
  )
}

export default Hero