import React,{useEffect} from 'react'
import {Spinner} from "@heroui/react";
import type { RootState } from '../../components/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import {Link,useNavigate} from "react-router-dom"

export default function Loading() {
  
  
  
  const load = useSelector((state: RootState) => state.load.value) 
  
    const navigate = useNavigate();
  
  
  useEffect(() =>{
    
  })
  
  
  
  return (
    <div style={{zIndex: "30", display: load ? "flex" : "none"}} className="w-screen min-h-screen justify-center items-center flex-col gap-4items-center fixed left-0 top-0 backdrop-blur-sm bg-[#0000006a] ">
      <h1 id="checkcomponent" className="font-bold text-white">please wait</h1>
     <Spinner color="warning" size="lg" classNames={{label: "text-foreground mt-4"}} variant="wave" />
    
    </div>
  )
}