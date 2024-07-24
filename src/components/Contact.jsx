import { CONTACT } from "../constants"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 ">
        <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }} 
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl">Get in Touch</motion.h1>
        
        <div className="text-center tracking-tighter">
            <motion.p 
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }} 
            transition={{ duration: 1 }}
            >{CONTACT.address}</motion.p>

            <motion.p 
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }} 
            transition={{ duration: 1 }}
            >{CONTACT.phoneNo}</motion.p>

            <a href={`mailto:${CONTACT.email}`} className="border-b border-neutral-500">{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact