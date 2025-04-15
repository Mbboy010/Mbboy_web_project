import ButtonD from './ButtonD';
import Social from './Social';
import { motion } from "framer-motion";
import TypingText from './TypingText';
import React from 'react'

export default function Top() {
  return (
    <div className="w-full h-[25rem]  mt-20 relative ">
    <div className="w-full h-full flex justify-center relative items-center">
      <div className="w-40 relative rounded-bl-[50%] rounded-tr-[30%] rotate-45  opacity-20 h-60 bg-[#F86E01]"></div>
      <div className="absolute  backdrop-blur-2xl top-0 left-0 w-full  h-full">
      <div className="flex flex-col justify-center items-center mt-16">
            <motion.p 
        initial={{ opacity: 0, x: 40 }}  // Start hidden & moved down
        animate={{ opacity: 1, x: 0 }}  // Animate to visible & normal position
         transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
        className="font-mono mb-1 text-[1.1rem]  opacity-70">Hi I'm...</motion.p>
            <motion.p 
            
        initial={{ opacity: 0, x: -40 }}  // Start hidden & moved down
        animate={{ opacity: 1, x: 0 }}  // Animate to visible & normal position
        transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
            
            className="font-[300] text-[1.2rem]   opacity-80">Musa hakilu knows as mbboy</motion.p>
            <div className="">  
            
            <TypingText texts={["Software engineer", "Music producer", "Cyber security"]} speed={200} />

    
            </div>
      </div>
       <Social />
       <ButtonD />

    </div>

    
    </div>
    </div>
  )
}