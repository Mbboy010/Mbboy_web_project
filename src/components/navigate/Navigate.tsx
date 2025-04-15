import ChatB from './ChatB';
import Aside from '../aside/Aside';

import { useEffect, useState } from "react";
import {Link} from "react-router-dom"

import { motion } from "framer-motion";
import {MoonIcon} from "../svg/MoonIcon"
import {SunIcon} from "../svg/SunIcon";
import {Switch} from "@heroui/react";
import { IoIosMenu } from "react-icons/io";
import type { RootState } from '../../components/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setIsAside } from "../redux/slicer/AsideCheck"
import { setPosit } from "../redux/slicer/posit"
import { setOpacity } from "../redux/slicer/opacity"


interface props{
  darkMode: any;
  setDarkMode: any;
}


export default function Navigate({darkMode,setDarkMode}:props) {
  
  const dispatch = useDispatch()
  
  const [mounted, setMounted] = useState<boolean>(false)
  const [posi,setPosi] = useState<string>("-79vw")
  
  const handleAside = () =>{
    dispatch(setIsAside(true))
    
    setTimeout(() =>{
      dispatch(setOpacity("100"))
      dispatch(setPosit("0vw"))
    },10)
    
  }
  
  return (
    <div className="relative" style={{zIndex: "100"}}>
       <Aside setPosi={setPosi} posi={posi} /> 

    <div  className="fixed left-0 top-0 w-screen">
       <motion.nav
        className="w-full backdrop-blur-md bg-[#76767625] h-[4.5rem]   text-center flex justify-between items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
      <Link to="/">
        <h1 className="text-2xl ml-1 md:ml-4 lg:ml-7 font-bold bg-gradient-to-r from-[#F86E01] to-red-500 text-transparent bg-clip-text">MBBOY</h1>
      </Link>
        
        <div
          
          className=" text-whitetransition md:mr-4 lg:mr-7  flex gap-1"
        >

           
           <Switch
      defaultSelected
      size="md"
      color="warning" 
      
      thumbIcon={({ isSelected, className }) =>
         darkMode ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
      onValueChange={() => setDarkMode(!darkMode)}
    >
    </Switch>

    <IoIosMenu onClick={handleAside}  className="text-[3rem] mr-1 hover:text-[#F86E01]" />
    
   
        </div>
        
      </motion.nav>

    </div>
    </div>
  )
}