import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface props{
  data: any;
}
export default function Img({data}:props) {
  
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
    
    className="my-3">
    <img className="rounded-md" src={data} />
    </motion.div>
  )
}