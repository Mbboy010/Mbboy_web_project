import ChatCo from '../chat/ChatCo';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setChat } from "../../components/redux/slicer/CheckChat"
import { MdClose } from "react-icons/md";
import type { RootState } from '../../components/redux/store'

export default function ChatB() {
  
  const dispatch = useDispatch()
  const chatCheck = useSelector((state: RootState) => state.chatCheck.value) 
  
  
  
  return (
    <div style={{zIndex: "12",display: chatCheck ? "block" : "none"}} className="fixed w-screen min-h-screen backdrop-blur-sm bg-[#0000006a] top-0 left-0">
    <div className="w-full h-full flex justify-center items-center">

          
    <ChatCo />

    
    </div>
    </div>
    )
}