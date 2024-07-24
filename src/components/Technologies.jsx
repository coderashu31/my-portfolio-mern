import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { SiWebrtc } from "react-icons/si";
import { animate, motion } from 'framer-motion'

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }

})

const Technologies = () => (
  <div className="border-b border-neutral-800 pb-24">

  <motion.h1
    whileInView={{ y: 0, opacity: 1 }}
    initial={{ y: -100, opacity: 0 }}
    transition={{ duration: 1.5 }}
    className="my-20 text-center text-4xl">Technologies</motion.h1>

    <motion.div 
    whileInView={{ x: 0, opacity: 1 }}
    initial={{ x: -100, opacity: 0 }}
    transition={{ duration: 1.5 }}
    className="flex flex-wrap items-center justify-center gap-4">

      <motion.div
        variants={iconVariants(2.8)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
        <SiMongodb className="text-7xl text-green-400" />
      </motion.div >

      <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
        <SiExpress className="text-7xl text-green-400" />
      </motion.div>

      <motion.div
        variants={iconVariants(2.8)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
        <FaReact className="text-7xl text-cyan-400" />
      </motion.div>

      <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
        <DiNodejs className="text-7xl text-green-400" />
      </motion.div>

      <motion.div
        variants={iconVariants(2.8)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
        <SiTailwindcss className="text-7xl text-cyan-400" />
      </motion.div>

      <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
        <SiTypescript className="text-7xl text-sky-400" />
      </motion.div>

      <motion.div
        variants={iconVariants(2.8)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
        <SiSocketdotio className="text-7xl text-green-400" />
      </motion.div>

      <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
        <SiWebrtc className="text-7xl text-cyan-400" />
      </motion.div>

    </motion.div>
  </div>
)

export default Technologies;
