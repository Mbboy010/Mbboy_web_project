import { BiCodeAlt } from "react-icons/bi";
import { BsCaretRightFill } from "react-icons/bs";
import {motion,useScroll,useTransform} from "framer-motion"
import React,{useRef} from "react"
import { AiFillAppstore } from "react-icons/ai";
import { FaCode } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { IoIosMusicalNote } from "react-icons/io";
import { GrShieldSecurity } from "react-icons/gr";
import type { RootState } from '../../../components/redux/store'
import { useSelector, useDispatch } from 'react-redux'

export default function Sec( ){
  
  const isColor = useSelector((state: RootState) => state.color.value) 
  
  const divRef = useRef(null)
  
  const {scrollYProgress} = useScroll({
    target: divRef,
    offset: ["end end","start end"]
  })
  
  const scale = useTransform(scrollYProgress,[0.40,1],[1,0.40])
  const opacity = useTransform(scrollYProgress,[0,1],[1,0])
  
  
  return(
    <div>
      <motion.div ref={divRef} style={{
        
        scale,
        opacity
        
      }} className={`${isColor ? "bg-[#d7d7d719]" : "bg-[#72727236]"} w-[90vw] md:w-[40vw] lg:w-[33vw] xl:w-[30vw]  flex  flex-col  shadow-lg rounded-2xl `}
      whileHover={{scale: 1.05}}
      whileTap={{scale: 0.95, }}
      >
      
        <div className="flex mt-3 ml-5 flex-row items-center gap-5 ">
        <div className="w-10 rounded-full h-10 bg-orange-500  flex justify-center items-center">
        <GrShieldSecurity className=" drop-shadow-lg shadow-white text-2xl font-black text-white" />
        </div>
        <h1 className="text-1xl capitalize text-orange-500  font-black">Software security and  ethical hacking</h1>
        </div>
        <div className="mx-5 my-5">
        <p className="">Software security and ethical hacking focus on protecting systems from cyber threats and identifying vulnerabilities before malicious hackers can exploit them</p>
        </div>
      </motion.div>
    </div>
    )
}