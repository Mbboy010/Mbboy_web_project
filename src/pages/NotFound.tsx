import NotFoundCon from '../components/notfound/NotFoundCon';
import Collabo from '../components/collaborate/Collabo';

import {Spinner} from "@heroui/react";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setIsAside } from "../components/redux/slicer/AsideCheck"
import { setPosit } from "../components/redux/slicer/posit"
import { setOpacity } from "../components/redux/slicer/opacity"
import { setLoad } from "../components/redux/slicer/Load"
import { setChat } from "../components/redux/slicer/CheckChat"
import { setVerify } from "../components/redux/slicer/verify"
import SeoPage from '../components/helmetData/SeoPage';


export default function NotFound() {
  
  const [loading,setLoading] = useState<boolean>(false)
  
  

   const dispatch = useDispatch()
   
   
     

     
   
  
  
useEffect(() => {
  dispatch(setChat(false))
    dispatch(setLoad(false))
     dispatch(setOpacity("0"))
     dispatch(setPosit("-79vw"))
     dispatch(setVerify(false))
     setTimeout(() =>{
         dispatch(setIsAside(false))
     },500)
     
     
  
  
  setTimeout(() =>{
    setLoading(true)
  },3000)
},[])
  
  return (
    <div className="w-screen min-h-screen relative">
    
        <SeoPage
      pageTitle="Not found page - Mbboy"
      title="Page Not Found - 404"
      description="Page Not Found - The Page You’re Looking For Doesn’t Exist."
      image="https://firebasestorage.googleapis.com/v0/b/new-todo-66e30.appspot.com/o/MetaImage.png?alt=media&token=5894b4a8-d856-407b-8014-fb6f42e4dfed" // Must be full public URL
    />
    
         
    {
      loading ?
      <div>
        <NotFoundCon />
      </div> :
      <div className="flex justify-center items-center w-full h-screen">
         <Spinner color="warning" size="lg" classNames={{label: "text-foreground mt-4"}} variant="wave" />
      </div>
    }


    </div>
  )
}