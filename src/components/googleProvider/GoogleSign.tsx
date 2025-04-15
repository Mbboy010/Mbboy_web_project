// authUtils.ts
import { auth, provider, db } from '../../server/firebaseConfig';
import { User ,signInWithPopup} from 'firebase/auth';
import { doc, setDoc,collection, addDoc,getDoc,updateDoc } from "firebase/firestore";
import { Toaster, toast } from 'sonner'
import {Link,useNavigate} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { setLoad } from "../redux/slicer/Load"
import type { RootState } from '../redux/store';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

interface UserData {
  firstName?: string;
  lastName?: string;
  country?: string;
  email?: any;
  password?: string;
  motivate?: boolean;
  verification?: boolean;
  uid?: string;
  joinDate?: string;
  color?: string;
  img?: string;
  sign?: string;
}

 const GoogleSign =  () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch()
  
  const checkG = async () =>{
  dispatch(setLoad(true))
  try {
    
    
    const result = await signInWithPopup(auth, provider);
    const user: User = result.user;
    
    
    const userRef = doc(db, 'Users', user.uid);
    const userSnap = await getDoc(userRef);
    
    
  if (!userSnap.exists()) {
    
    const nameParts = user.displayName?.split(' ') || [];
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';
    
    const now = await new Date()
    const d = await now.toLocaleDateString("En-US", {
            dateStyle: "medium"
          })
    const dataArray = ["#679897","#679870","#98677e","#986767","#989167","#4893f8"]
     const randomNumber = Math.floor(Math.random() * 6);

    const userData: UserData = {
      uid: user.uid,
      firstName,
      lastName,
      email: user.email,
      motivate: false,
      verification: true,
      img: firstName[0],
      joinDate: d,
      color: dataArray[randomNumber],
      sign: "with google",
    };

    const userRef = doc(db, 'Users', user.uid);
    await setDoc(userRef, userData);
    
    await toast.success("you have successfully to create account ")

       dispatch(setLoad(false))
       navigate("/");

    console.log('User signed in and saved:', userData);
  } else {
      dispatch(setLoad(false))
       navigate("/");
      console.log('ℹ️ User already exists in Firestore.');
    }
  
  } catch (error) {
    dispatch(setLoad(false))
    toast.error("something when wrong try again")
    console.error('Error signing in with Google:', error);
  }
  }
  
  return(
             <button
              onClick={checkG}
              type="button"
              className="w-1/2 flex items-center hover:text-black justify-center gap-2 border py-2 rounded-xl hover:bg-gray-100 transition duration-200"
            >
              <FcGoogle className="text-xl" /> Google
            </button>
  )
};


export default GoogleSign;