import aboutImg from "../assets/AshishCoratia1.jpg";
import { ABOUT_TEXT_1,ABOUT_TEXT_2 ,ABOUT_TEXT_3 , ABOUT_TEXT_4, ABOUT_TEXT_5 } from "../constants";

import { motion } from "framer-motion"
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">About 
            <span className="text-neutral-500">Me</span>
        </h1>
        <div className="flex flex-wrap">
    <motion.div 
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full lg:w-1/2 lg:p-8">
        <div className="flex items-center justify-center">
            <img 
                className="rounded-2xl" 
                src={aboutImg} 
                alt="AshishCoratia1" 
            />   
        </div>
    </motion.div>
    <motion.div 
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: 100, opacity: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start">
            <p className="my-2 max-w-xl py-10">{ABOUT_TEXT_1}</p>
            <p className="my-2 max-w-xl py-1">{ABOUT_TEXT_2}</p>
            <p className="my-2 max-w-xl py-1">{ABOUT_TEXT_3}</p>
            <p className="my-2 max-w-xl py-1">{ABOUT_TEXT_4}</p>
            <p className="my-2 max-w-xl py-1">{ABOUT_TEXT_5}</p>
        </div>
    </motion.div>
</div>

    </div>
  )
}

export default About
