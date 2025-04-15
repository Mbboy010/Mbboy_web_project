import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import {Link} from "react-router-dom"
import type { RootState } from '../../../components/redux/store'
import { useSelector, useDispatch } from 'react-redux'

export default function Social() {
  
  const isColor = useSelector((state: RootState) => state.color.value) 
  
  
  return (
    <div className="flex justify-center gap-4 items-center w-full h-[4.5rem]">
      <Link to="https://www.instagram.com/mbboy010/" className={`w-[2rem] flex justify-center items-center text-[1rem] rounded-full border border-orange-500 h-[2rem] ${isColor ? "bg-[#ffffff2a] border-orange-500 " : "bg-[#72727236] border-orange-500"}`}>
      <FaInstagram />
      </Link>
      <Link to="https://wa.me/qr/Q2EJMOH3QP3DM1" className={`w-[2rem] flex justify-center items-center text-[1rem] rounded-full border border-orange-500 h-[2rem] ${isColor ? "bg-[#ffffff2a] border-orange-500 " : "bg-[#72727236] border-orange-500"}`}>
      <FaWhatsapp />
      </Link>
      <Link to="https://www.facebook.com/profile.php?id=100091933395389" className={`w-[2rem] flex justify-center items-center text-[1rem] rounded-full border border-orange-500 h-[2rem] ${isColor ? "bg-[#ffffff2a] border-orange-500 " : "bg-[#72727236] border-orange-500"}`}>
      <CiFacebook />
      </Link>
    </div>
  )
}