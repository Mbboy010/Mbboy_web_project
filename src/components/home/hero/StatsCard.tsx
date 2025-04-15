import { motion } from "framer-motion";
import type { RootState } from '../../../components/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';
import "./Style.css"
import {auth,db,storage} from "../../../server/firebaseConfig"
import { doc, setDoc,collection, addDoc,getDoc,updateDoc } from "firebase/firestore";

export default function StatsCard() {
  
  const isColor = useSelector((state: RootState) => state.color.value) 
  
  
  const [ex,setEx] = useState<number>(0)
  const [pr,setPr] = useState<number>(0)
  const [hp,setHp] = useState<number>(0)
  
  const [exdata,setExdata] = useState<number>(0)
  const [prdata,setPrdata] = useState<number>(0)
  const [hpdata,setHpdata] = useState<number>(0)
  
  const [isCheck,setIsCheck] = useState<boolean>(false)
  
  
  useEffect(() => {
    const meee = async () =>{
      const docRef = await doc(db, "Admin", "motivate");
      
      const docSnap = await getDoc(docRef);
      
        if (docSnap.exists()) {
      
        let dtu = await docSnap.data()
        await setExdata(dtu.Experiences)
        await setPrdata(dtu.Projectdone)
        await setHpdata(dtu.HappyClients)
        await setIsCheck(true)
        
      } else {
        // docSnap.data() will be undefined in this case
        
      }

    }
    
    meee()
  })
  
  
  
  useEffect(() => {
    
    const time = 100
    
    const exIn = setInterval(() =>{
      setEx(ex + 1)
    },time)
    
    if(ex  == exdata){
      clearInterval(exIn)
    }
    
    const prIn = setInterval(() =>{
      setPr(pr + 1)
    },time)
    
    if(pr  == prdata){
      clearInterval(prIn)
    }
    const hpIn = setInterval(() =>{
      setHp(hp + 1)
    },time)
    
    if(hp  == hpdata){
      clearInterval(hpIn)
    }
    
    const D = () =>{
      clearInterval(hpIn)
      clearInterval(prIn)
      clearInterval(exIn)
    }
    
    return () =>{
      D();
    } 
  })
  
  
  
  return (
    <div className={`flex justify-center items-center space-x-6 ${isColor ? "bg-[#d7d7d719]" : "bg-[#72727236]"}  p-5 rounded-lg`}>
      <div className="text-center flex  flex-col justify-center items-center">
      {
        isCheck ? <p className="text-orange-500 text-2xl font-bold">{ex}+</p> :
        <p className="h-7 w-11 cousss rounded-lg "></p>
      }
        
        <p className="text-sm">Experiences</p>
      </div>
      <div className="border-l border-gray-600 h-10"></div>
      <div className="text-center flex  flex-col justify-center items-center">
      
      {
        isCheck ? <p className="text-orange-500 text-2xl font-bold">{pr}+</p> :
        <p className="h-7 w-11 coussstwo rounded-lg "></p>
      }
      

        <p className="text-sm">Project done</p>
      </div>
      <div className="border-l border-gray-600 h-10"></div>
      <div className="text-center flex  flex-col justify-center items-center">
      {
        isCheck ? <p className="text-orange-500 text-2xl font-bold">{hp}+</p> :
        <p className="h-7 w-11 cousssone rounded-lg "></p>
      }

        <p className="text-sm">Happy Clients</p>
      </div>
    </div>
  );
}
