import GoogleSign from '../googleProvider/GoogleSign';
import React, { FormEvent,useState,useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Toaster, toast } from 'sonner'
import {Link,useNavigate} from "react-router-dom"
import { setLoad } from "../redux/slicer/Load"
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../redux/store';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import {auth,db,storage} from "../../server/firebaseConfig"
import {  signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc,collection, addDoc } from "firebase/firestore";



const Logcon: React.FC = () => {
  
const isColor = useSelector((state: RootState) => state.color.value);
  const navigate = useNavigate();
  const [email,setEmail] = useState<string>("")
  const [password,setPassword] = useState<string>("")
  
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    if(email === ""){
      return toast.warning("email is empty")
    }
    if(password === ""){
      return toast.warning("password is empty")
    }
    
    if(password.length <= 6){
      return toast.warning("password is short")
    }
    
    
    dispatch(setLoad(true))
    
    
    try {
    
     await signInWithEmailAndPassword(auth, email, password)
     await navigate("/");
     await dispatch(setLoad(false))
  } catch(error : any) {
    
    var errorCode = await error.code;
    var errorMessage = await error.message;
    
    
    
    if ( errorCode == 'auth/invalid-credential') {
       toast.error("check your email or password ain't matching ");
           dispatch(setLoad(false))
        } else{
            toast.error("something is wrong please try again later")
              dispatch(setLoad(false))
            }
    // ..
  };
       
    
    
  };

useEffect(() =>{
   
   const dac = () =>{
    const user = auth.currentUser
          if(user) return navigate("/");
     
   }
   
  dac()
  
  
 })


  return (
    <div className="min-h-screen  px-4">
    <h1 className="p-1"></h1>
      <div style={{backgroundColor: isColor ? "black" : "white"}} className="max-w-md w-full mt-20 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Login an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium ">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium ">Password</label>
            <div className="relative">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="********"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-xl"
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>
          
          
            {/* Forgot Password Link */}
            <div className="text-right mt-2">
              <Link to="/login/forgot_password" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="text-sm">Remember me</span>
          </div>
          
          
          <div className="flex gap-4">
          
             <GoogleSign />

          
            <button
              type="submit"
              className="w-1/2 bg-orange-600 text-white py-2 rounded-xl hover:bg-orange-700 transition duration-200"
            >
              login
            </button>

          </div>
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">
          I don't have an account? <Link to="/signup" className="text-blue-600 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Logcon;
