import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from "react-tilt";

import { services } from "../constants";
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        My background as a software developer, combined with the diverse range of projects I have successfully delivered during my Masters, has equipped me with a profound understanding of software development and the entire software development life cycle (SDLC).
        I am driven to bridge the gap between technical excellence and the creation of exceptional products that resonate with users.
        
        I am confident that my skills and passion for technologies would make a valuable contribution to any team and help drive your products to new heights. <br />
        I am eagerly looking forward to the opportunity as <span className='text-white'>TECHNICAL PRODUCT MANAGER || SOFTWARE DEVELOPER.</span>
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      

    </>
  )
}

export default About