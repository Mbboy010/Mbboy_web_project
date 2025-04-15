import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface props {
  data: string;
  
}

export default function WebT({data}:props) {
  
  const containerRef = useRef(null);
  
  
  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ["end end","start end"]
  })
  
  const scale = useTransform(scrollYProgress,[0.40,1],[1,0.40])
  const opacity = useTransform(scrollYProgress,[0,1],[1,0])
  
  
  return (
    <motion.h2
      ref={containerRef} 
      style={{
        
        scale,
        opacity
        
      }} 
      transition={{duration: 2}}
      className="font-bold my-4 text-yellow-500"
           >
          {data}
    </motion.h2>
  )
}


