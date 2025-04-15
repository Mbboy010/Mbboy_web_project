import VerifyT from './VerifyT';
import ChatCo from '../chat/ChatCo';
import React from 'react'
import { MdClose } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux'
import { setVerify } from "../../components/redux/slicer/verify"
import type { RootState } from '../../components/redux/store'

export default function VerifyC() {
  
  const dispatch = useDispatch()
  const verify = useSelector((state: RootState) => state.verify.value) 
  
  const handle = () =>{
    dispatch(setVerify(false))
  }
  
  return (
    <div style={{zIndex: "12",display: verify ? "block" : "none"}} className="fixed w-screen min-h-screen backdrop-blur-sm bg-[#0000006a] top-0 left-0">
    <div className="w-full h-full flex justify-center items-center">
          <div className="justify-between absolute left-0 top-0 items-center w-full flex">
          <h1 className="p-2"></h1>
          <MdClose onClick={handle}  className="m-4 text-white text-3xl" />
          </div>
          
    <VerifyT />
 

    
    </div>
    </div>
    )
}