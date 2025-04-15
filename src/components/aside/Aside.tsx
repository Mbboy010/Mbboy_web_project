import VerifyC from '../verify/VerifyC';
import ChatB from '../navigate/ChatB';
import Profile from './Profile';
import Content from './Content';
import React from 'react'
import type { RootState } from '../../components/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setIsAside } from "../redux/slicer/AsideCheck"
import { setPosit } from "../redux/slicer/posit"
import { setOpacity } from "../redux/slicer/opacity"
import {Link} from "react-router-dom"
import { MdClose } from "react-icons/md";
interface props {
  setPosi: React.Dispatch<React.SetStateAction<string>>
  posi: string;
}

export default function Aside({setPosi,posi}:props) {
  
 const isAside = useSelector((state: RootState) => state.isAs.value) 
 const opacity = useSelector((state: RootState) => state.opacity.value) 
 const posit = useSelector((state: RootState) => state.posit.value) 
 
 const dispatch = useDispatch()
 
 const handleAside = () => {
   
   
   dispatch(setOpacity("0"))
   dispatch(setPosit("-79vw"))
   
   setTimeout(() =>{
       dispatch(setIsAside(false))
   },500)
   
   
   
 }
  
  return (
    <div  style={{zIndex: "10",display: isAside ? "block" : "none",}} 
    
     className="top-0 left-0 w-full h-full fixed">
         
     <ChatB />
     <VerifyC />
     
    <div onClick={handleAside} style={{ transition: "0.3s",opacity: opacity,}} className="w-full bg-[#0000008c] h-full absolute top-0 left-0">
    
    </div>
    
    
    <div style={{left: posit,transition: "0.5s"}} className="w-[79vw] top-0 h-full backdrop-blur-3xl   absolute">
    
    <div className="relative w-full h-full">
        <div className=" w-full backdrop-blur-md justify-between items-center flex bg-[#F86E01] h-[4.5rem]">
        <h1 className="ml-1 text-white md:ml-4 lg:ml-7 text-[1.5rem] font-semibold">Menu</h1>
        
            <MdClose onClick={handleAside} className="mr-1 text-white text-[1.9rem] font-semibold"/>
         

         </div>
             <div className="relative">
               <Profile />
               <Content />
             </div>

    
    </div>
    
    </div> 
    
      
    </div>
  )
}