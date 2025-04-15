import React from 'react'
import {Link} from "react-router-dom"
import type { RootState } from '../../../components/redux/store'
import { useSelector, useDispatch } from 'react-redux'


export default function ButtonD() {
  
  const isColor = useSelector((state: RootState) => state.color.value) 
  
  return (
    <div className="flex justify-center  items-center  w-full h-[4.5rem] gap-7">
    <Link className="bg-[#F86E01] text-white h-[2rem] w-[8rem] flex justify-center items-center rounded-md "  to="/signup">
    Join me
    </Link>
    <Link className={`h-[2rem] w-[8rem] flex justify-center border ${isColor ? "border-orange-500": "border-orange-500"} items-center rounded-md`} to="/about">
    About
    </Link>
    </div>
  )
}