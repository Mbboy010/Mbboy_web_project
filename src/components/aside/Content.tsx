import React from 'react'
import {Link} from "react-router-dom"
import { IoMdDownload } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineSystemUpdate } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdHome } from "react-icons/md";
import { FaHandshake } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { useLocation } from 'react-router-dom';
import { IoMdAnalytics } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";


export default function Content() {
  
  
  const location = useLocation()
  
  
  return (
    <div>
    <div>
      <div className="flex mt-3 text-white flex-col gap-2 ml-2">
        
        <Link className={`text-[1rem] opacity-90 hover:text-gray-300 items-center  font-[600] flex items-center ${location.pathname == "/" ? "text-orange-500 hover:text-orange-300" : "text-white"}`} to="/"><AiFillHome className="text-[1.6rem] mr-1"/>Home</Link>

        <Link className={`text-[1rem] opacity-90 hover:text-gray-300 items-center  font-[600] flex items-center ${location.pathname == "/works" ? "text-orange-500 hover:text-orange-300" : "text-white"}`} to="/works"><MdWork className="text-[1.6rem] mr-1"/>Works</Link>

        <Link className={`text-[1rem] opacity-90 hover:text-gray-300 items-center  font-[600] flex items-center ${location.pathname == "/collaborate" ? "text-orange-500 hover:text-orange-300" : "text-white"}`} to="/collaborate"><FaHandshake className="text-[1.6rem] mr-1"/>Collaborate</Link>
        
        <Link className={`text-[1rem] opacity-90 hover:text-gray-300 items-center  font-[600] flex items-center ${location.pathname == "/about" ? "text-orange-500 hover:text-orange-300" : "text-white"}`} to="/about"><IoMdAnalytics className="text-[1.6rem] mr-1"/>About</Link>


        
      </div>
    </div>
    </div>
  )
}