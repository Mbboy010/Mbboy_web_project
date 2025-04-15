import SeoPage from '../components/helmetData/SeoPage';
import AboutD from '../components/home/AboutD';
import MyProject from '../components/home/MyProject';

import Acontainer from '../components/home/account/Acontainer';
import Container from '../components/home/hero/Container';
import {Spinner} from "@heroui/react";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setIsAside } from "../components/redux/slicer/AsideCheck"
import { setPosit } from "../components/redux/slicer/posit"
import { setOpacity } from "../components/redux/slicer/opacity"
import { setLoad } from "../components/redux/slicer/Load"
import { setVerify } from "../components/redux/slicer/verify"
import { motion } from "framer-motion";
import { setChat } from "../components/redux/slicer/CheckChat"


export default function Home() {
  
  
  
  
  
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
    <div className="relative min-h-screen w-screen ">

    <SeoPage
      pageTitle="Mbboy"
      title="Welcome to Mbboy"
      description="Discover creativity, innovation, and powerful solutions built by Mbboy — your tech & design partner."
      image="https://firebasestorage.googleapis.com/v0/b/new-todo-66e30.appspot.com/o/MetaImage.png?alt=media&token=5894b4a8-d856-407b-8014-fb6f42e4dfed" // Must be full public URL
    />
    
    
    {
      loading ?
      <div>
          <Container />
          <Acontainer />
          <MyProject />
          <AboutD />


      </div> :
      <div className="flex justify-center items-center w-full h-screen">
         <Spinner color="warning" size="lg" classNames={{label: "text-foreground mt-4"}} variant="wave" />
      </div>
    }

    </div>
  )
}