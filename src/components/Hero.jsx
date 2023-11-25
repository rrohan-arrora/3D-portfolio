import { motion } from "framer-motion";
import { styles } from '../styles';

import { SectionWrapper } from '../hoc';
import { slideIn } from "../utils/motion";


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

  <div className='flex p-4 rounded-2xl'>
    <motion.div
      variants={slideIn('left', 'tween', 0.1, 1)}
    >
      <p className={"sm:text-[18px] text-[14px] text-secondary tracking-wider text-white"}>
        <br/>My background as a software developer, combined with the diverse range of projects 
        I have successfully delivered during my Masters from IIIT BANGALORE, has equipped me with 
        a profound understanding of entire software development life cycle (SDLC).
      </p>
    </motion.div>
  </div>

  <div className='flex p-4 rounded-2xl mt-5'>
    <motion.div
      variants={slideIn('right', 'tween', 0.1, 1)}
    >
      <p className="sm:text-[18px] text-[14px] text-secondary tracking-wider text-white">
        I am confident that my skills and passion for technologies would make a valuable contribution to any team and help drive your products to new heights.
      </p>
    </motion.div>
  </div>
</section>

  )
}

export default SectionWrapper(Hero, "")