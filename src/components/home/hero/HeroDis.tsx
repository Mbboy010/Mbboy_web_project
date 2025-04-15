import ImageCom from './ImageCom';
import React,{useState,useEffect,useRef} from 'react';
import { motion } from "framer-motion";
import type { RootState } from '../../../components/redux/store';
import {auth,db} from "../../../server/firebaseConfig"
import { doc, setDoc,collection, addDoc,getDoc,updateDoc } from "firebase/firestore";

import { useSelector, useDispatch } from 'react-redux';
export default function HeroDis() {
  
  
  const isColor = useSelector((state: RootState) => state.color.value);
  
  const im =  useRef<HTMLDivElement | any>(null);
  const cy =  useRef<HTMLDivElement | any>(null);
  const handleDiv =  useRef<HTMLDivElement | any>(null);
  
  const [image,setImage] = useState<string>("")
  
  useEffect(() => {
    
    
    
    
    
    
    
    const applyed = (e : any) =>{
      alert("yyyy")
    }
    
    const onClick = (e : any) =>{
      const {offsetX , offsetY} = e;
      
      let x = offsetX;
      let y = offsetY;
      
    if(y <  15 * 2){
      y = -28
    } else if(y <  15 * 3){
      y = -26
    }else if(y <  15 * 4){
      y = -24
    } else if(y <  15 * 5){
      y = -22
    } else if(y <  15 * 6){
      y = -20
    } else if(y <  15 * 7){
      y = -18
    } else if(y <  15 * 8){
      y = -16
    } else if(y <  15 * 9){
      y = -14
    }else if(y <  15 * 10){
      y = -12
    } else if(y <  15 * 11){
      y = -10
    } else if(y <  15 * 12){
      y = -8
    } else if(y <  15 * 13){
      y = -6
    } else if(y <  15 * 14){
      y = -4
    } else if(y <  15 * 15){
      y = -2
    } else if(y < 212 + 15 * 2){
      y = 2
    } else if(y < 212 + 15 * 3){
      y = 4
    }else if(y < 212 + 15 * 4){
      y = 6
    } else if(y < 212 + 15 * 5){
      y = 8
    } else if(y < 212 + 15 * 6){
      y = 10
    } else if(y < 212 + 15 * 7){
      y = 12
    } else if(y < 212 + 15 * 8){
      y = 14
    } else if(y < 212 + 15 * 9){
      y = 16
    }else if(y < 212 + 15 * 10){
      y = 18
    } else if(y < 212 + 15 * 11){
      y = 20
    } else if(y < 212 + 15 * 12){
      y = 22
    } else if(y < 212 + 15 * 13){
      y = 24
    } else if(y < 212 + 15 * 14){
      y = 26
    } else if(y < 212 + 15 * 15){
      y = 30
    }
    
    if(y > 212 + 15 * 15){
      y = 30
    }
    
   if(x <  15 * 2){
      x = -28
    } else if(x <  15 * 3 - 20){
      x = -26
    }else if(x <  15 * 4 - 20){
      x = -24
    } else if(x <  15 * 5 - 20){
      x = -22
    } else if(x <  15 * 6 - 20){
      x = -20
    } else if(x <  15 * 7 - 20){
      x = -18
    } else if(x <  15 * 8 - 20){
      x = -16
    } else if(x <  15 * 9 - 20){
      x = -14
    }else if(x <  15 * 10 - 20){
      x = -12
    } else if(x <  15 * 11 - 20){
      x = -10
    } else if(x <  15 * 12 - 20){
      x = -8
    } else if(x <  15 * 13 - 20){
      x = -6
    } else if(x <  15 * 14 - 20){
      x = -4
    } else if(x <  15 * 15 - 20){
      x = -2
    } else if(x < 212 + 15 * 2 - 20){
      x = 2
    } else if(x < 212 + 15 * 3 - 20){
      x = 4
    }else if(x < 212 + 15 * 4 - 20){
      x = 6
    } else if(x < 212 + 15 * 5 - 20){
      x = 8
    } else if(x < 212 + 15 * 6 - 20){
      x = 10
    } else if(x < 212 + 15 * 7 - 20){
      x = 12
    } else if(x < 212 + 15 * 8 - 20){
      x = 14
    } else if(x < 212 + 15 * 9 - 20){
      x = 16
    }else if(x < 212 + 15 * 10 - 20){
      x = 18
    } else if(x < 212 + 15 * 11 - 20){
      x = 20
    } else if(x < 212 + 15 * 12 - 20){
      x = 22
    } else if(x < 212 + 15 * 13 - 20){
      x = 24
    } else if(x < 212 + 15 * 14 - 20){
      x = 26
    } else if(x < 212 + 15 * 15 - 20){
      x = 30
    }
    
      
      
      console.log(x)
      
   let img = im.current;
   let cycle = cy.current;
   let styleIm = img.style;
   let styleCy = cycle.style;
   
   styleIm.transform = `translate(${x}px,${y}px)`
   styleCy.transform = `translate(${y}px,${x}px)`
   
   setTimeout(() =>{
    styleIm.transform = "translate(0px,0px)"
    styleCy.transform = "translate(0px,0px)"
   },350)
    }
   
   handleDiv.current.addEventListener("mouseup", onClick)
   let ha = handleDiv.current
   return () =>{
    ha.removeEventListener("mouseup", onClick)
   }
   
  })
  
  
  return (
    <div className="w-full   relative flex justify-center items-center h-[29rem]"  ref={handleDiv}>
      <motion.div
      ref={cy}
      initial={{ opacity: 0, x: 30 }}  // Start hidden & moved down
      animate={{ opacity: 1, x: 0 }}  // Animate to visible & normal position
      transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
      className={`h-[19rem] duration-700  rounded-full w-[19rem] ${isColor ? "bg-[#d7d7d719]" : "bg-[#5d5d5d4e]" }`}></motion.div>
      <motion.div
      ref={im}
      initial={{ opacity: 0, y: 40 }}  // Start hidden & moved down
      animate={{ opacity: 1, y: 0 }}  // Animate to visible & normal position
      transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
      
      className="absolute duration-1000 flex justify-center items-center top-0 left-0 w-full h-full">
     <ImageCom />

      <div className="w-full  h-full absolute top-0 left-0 ">
      <div style={{boxShadow: `${isColor ? "#121212" : "#F3F4F6"} 0 0 40px`}} className={`w-full h-4  absolute left-0 bottom-0 ${isColor ? "bg-[#121212]" : "bg-gray-100 "} `}></div>
      <div style={{boxShadow: `${isColor ? "#121212" : "#F3F4F6"} 0 0 40px`}} className={`w-full h-4  absolute left-0 bottom-0 ${isColor ? "bg-[#121212]" : "bg-gray-100 "} `}></div>
      <div style={{boxShadow: `${isColor ? "#121212" : "#F3F4F6"} 0 0 40px`}} className={`w-full h-4  absolute left-0 bottom-0 ${isColor ? "bg-[#121212]" : "bg-gray-100 "} `}></div>

      </div>
      </motion.div>
    </div>
  )
}