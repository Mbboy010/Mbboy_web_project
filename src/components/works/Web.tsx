import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface props {
  data: any;
  value: any;
}

export default function Web({data,value}:props) {
  
  const containerRef = useRef(null);
  
  
  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ["end end","start end"]
  })
  
  const scale = useTransform(scrollYProgress,[0.40,1],[1,0.40])
  const opacity = useTransform(scrollYProgress,[0,1],[1,0])
  
  
  return (
    <motion.div
      ref={containerRef} 
      style={{
        
        scale,
        opacity
        
      }} 
      transition={{duration: 2}}
           >
          {data}
    </motion.div>
  )
}


      