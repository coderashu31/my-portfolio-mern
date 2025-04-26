import { HERO_CONTENT } from '../constants'
import profilePic from '../assets/Me.png'
import { motion } from "framer-motion"

const container = delay => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: delay
        },
    }
    });

const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1  
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className='pb-16 text-7xl tracking-tight lg:mt-16 lg:text-20xl from-neutral-50'>Ashish Kumar Mishra
                        </motion.h1>

                        <motion.span 
                            variants={container(0.3)}
                            initial="hidden"
                            animate="visible"
                            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-600 bg-clip-text text-5xl tracking-tight text-transparent'>Computer Science UG Student</motion.span>

                            <motion.span 
                            variants={container(0.9)}
                            initial="hidden"
                            animate="visible"
                            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-600 bg-clip-text text-3xl tracking-tight text-transparent'>(Experience in Full Stack Web Development)
                        </motion.span>

                        <motion.p 
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"

                        className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                            {HERO_CONTENT}
                        </motion.p>

                    </div>
                </div>

                <div className='w-full lg:w-1/2 lg:p-8 '>
                    {/* <div className="">

                    </div> */}
                    <div className='flex justify-center'>
                        <motion.img 
                            initial={{ x:100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.7, delay: 1 }}
                            src={profilePic} 
                            alt="Ashish Kumar Mishra" 
                            style={{ borderRadius: '50px' }}
                        />
                    </div>
                </div>
                <div className='flex flex-col items-center lg:items-start'>
                        <motion.div variants={container(1)}
                            initial="hidden"
                            animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-600 bg-clip-text text-3xl tracking-tight text-transparent">
                            <a href="https://drive.google.com/file/d/1pVh42Pp-OwH942Ag0thjkYx5U45h2lRe/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        
                            <span>Click here to find my resume....</span>
            
                            <div className='flex flex-col items-center '>
                                <button className='bg-purple-500 text-white text-2xl font-bold  py-2 px-4 rounded-full'>Resume</button>
                            </div>
                        </a>
                        </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero
