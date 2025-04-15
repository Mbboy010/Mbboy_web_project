import React,{useState,useEffect,useRef} from 'react';

import {auth,db} from "../../../server/firebaseConfig"
import { doc, setDoc,collection, addDoc,getDoc,updateDoc } from "firebase/firestore";


export default function ImageCom() {
  
  const [image,setImage] = useState<string>("")
  
  useEffect(() =>{
    const meee = async () =>{
      
      try {
        const docRef = await doc(db, "Admin", "motivate");
      
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        
        let dtu = await docSnap.data()
        
        console.log(dtu)
        
          await setImage(dtu.img)
      } else {
        // docSnap.data() will be undefined in this case
        console.log("mujjk")
      }
      } catch (error : any) {
         console.log(error)
      }
      
      

    }
    
    meee()
  })
  
  return (
    <div>
     <img 

      className="w-[20rem]" src={image} alt="" />
    </div>
  )
}