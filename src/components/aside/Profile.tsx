import { useState, useEffect } from 'react';
import {Link} from "react-router-dom"
import { CgProfile } from "react-icons/cg";
import {Button, ButtonGroup} from "@heroui/button";
import { Toaster, toast } from 'sonner'
import { TbMessageFilled } from "react-icons/tb";
import { FaHeart } from "react-icons/fa6";
import { setChat } from "../../components/redux/slicer/CheckChat"
import { setUserId } from "../../components/redux/slicer/userId"
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../components/redux/store'

import { setVerify } from "../../components/redux/slicer/verify"
import {  createUserWithEmailAndPassword , signOut} from "firebase/auth";
import {auth,db,storage} from "../../server/firebaseConfig"
import { doc, setDoc,collection, addDoc,getDoc,updateDoc } from "firebase/firestore";


interface fullData {
  firstName?: string;
  lastName?: string;
  country?: string;
  email?: string;
  password?: string;
  motivate?: boolean;
  verification?: boolean;
  uid?: string;
  joinDate?: string;
  color?: string;
  img?: string;
  sign?: string;
}

export default function Profile() {
  const [isCheck,setIsCheck] = useState<boolean | undefined>()
  const verify = useSelector((state: RootState) => state.verify.value) 
  const dispatch = useDispatch()
  
  const [data, setData] = useState<fullData>({});
  const [dn,setDn] = useState<boolean>(false)
  
  const user = auth.currentUser
  
  
  useEffect(() => {
    
    
    
    
    const ch = async () =>{
      
      if(user){
        
        if(user.emailVerified){
          await dispatch(setVerify(false))
        }
        
     const docRef = await doc(db, "Users", user.uid);
      
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        let dtu = docSnap.data()
        dispatch(setUserId(dtu.uid))
        if(dtu.motivate){
          setDn(true)
        }else{
          setDn(false)
          
        }
        
        setData(dtu)
        
        await setIsCheck(true)
        
        
        
      } else {
        // docSnap.data() will be undefined in this case
        
      }
        
      }
      
    }
    
    
    
    ch()
    
    
    
    
    
  },[user])
  
  
  
    
    
    
  
  
  const logout = () =>{
    
      signOut(auth).then(() => {
         setIsCheck(false)
      }).catch((error) => {
        // An error happened.
      });
         
  }
  
  const handleV = async () =>{
    
    
    
    try {
      
      if(user){
          if(user.emailVerified){
          dispatch(setChat(true))
        } else{
          dispatch(setVerify(true))
        }
      }
      
    } catch (error:any) {
      
    }
    
  }
  
  const handleT = async () =>{
    
    
    
    
    try {
      
      if(user){
          if(user.emailVerified){
            
        const docRef = await doc(db, "Users", user.uid);
            
          if(dn){
            setDn(false)
            await updateDoc(docRef, {
                motivate: false,
              });
          }else{
            setDn(true)
              await updateDoc(docRef, {
                motivate: true,
              });
          }
            
          
        } else{
          dispatch(setVerify(true))
        }
      }
      
    } catch (error:any) {
      console.log(error)
    }
  }
  
  
  return (
    <div className="w-full border-b border-orange-600 font-bold h-48">
    
    
    {
      isCheck ?
       <div className="w-full font-[500] h-40">
       
       <div className="w-full h-28 flex justify-center items-center">
       <div className="w-24 h-24 flex justify-center items-center  rounded-full">

       <div style={{backgroundColor: data.color}} className={`w-20 h-20 rounded-full flex justify-center border border-orange-500 items-center `}>
       <h1 className="text-5xl capitalize text-white">{data.img}</h1>
       </div>
       </div>
       </div>
       <div className="w-full flex justify-center items-center">
       <p className="text-white">{data.firstName + " " + data.lastName}</p>
       </div>
       <div className="w-full h-14 flex justify-center gap-8 items-center">
       <div className="flex justify-center ml-11 gap-3 items-center">
       <h1 onClick={handleV} className="text-2xl text-white"><TbMessageFilled /></h1>
       <h1 onClick={handleT} className="text-2xl text-white">
       {
         dn ?
         <FaHeart className="text-red-500" />
         : 
         <FaHeart />
       }

       </h1>
       </div>
       <Button size="sm" className="font-semibold mr-11" onClick={logout} color="danger" >Logout</Button>
       </div> 
          
       </div> 
       :
           <div className="w-full h-40">
              <div className="w-full h-28 flex justify-center items-center">
       <div className="w-24 h-24 flex justify-center items-center  rounded-full">

       <div className="w-20 h-20 rounded-full flex justify-center border border-orange-500 items-center bg-gray-200">
       <CgProfile className="text-7xl text-black"/>
       </div>
       </div>
       </div>
       <div className="w-full h-14  flex justify-center items-center">
       <Button className="font-semibold" color="warning" >
       <Link className="font-bold  text-white opacity-90 " to="/login">
       Login
       </Link>
       </Button>
       </div> 
       </div> 
    }

    </div>
    
  )
} 
