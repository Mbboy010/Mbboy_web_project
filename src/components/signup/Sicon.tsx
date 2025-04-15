import GoogleSign from '../googleProvider/GoogleSign';
import React, { FormEvent,useState,useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Toaster, toast } from 'sonner'
import {Link,useNavigate} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { setLoad } from "../redux/slicer/Load"
import type { RootState } from '../redux/store';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import {auth,db,storage} from "../../server/firebaseConfig"
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc,collection, addDoc } from "firebase/firestore";


const Sicon: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [first,setFirst] = useState<string>("")
  const [second,setSecord] = useState<string>("")
  const [email,setEmail] = useState<string>("")
  const [country,setCountry] = useState<string>("")
  const [password,setPassword] = useState<string>("")
   
  const navigate = useNavigate();
   
  const isColor = useSelector((state: RootState) => state.color.value);
  
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  
  
  
  const dispatch = useDispatch()
  
  
  let fullData = {
  firstName: first.trim(),
  lastName: second.trim(),
  country: country.trim(),
  email: email.trim(),
  password: password.trim(),
  motivate: false,
  verification: false,
  img: first[0],
  }
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    
    
    
    
    if(first === ""){
      return toast.warning("first name is empty")
    }
    if(second === ""){
      return toast.warning("second name is empty")
    }
    if(country === ""){
      return toast.warning("country name is empty")
    }
    
    if(email === ""){
      return toast.warning("email is empty")
    }

    if(password === ""){
      return toast.warning("password is empty")
    }
    
     if(password.length <= 6){
      return toast.warning("password is short")
    }
    
    
    try {
      
      dispatch(setLoad(true))
      
      const dataArray = ["#679897","#679870","#98677e","#986767","#989167","#4893f8"]
        const randomNumber = Math.floor(Math.random() * 6);
        

      
      await createUserWithEmailAndPassword(auth, email, password)
    
      const user = await auth.currentUser
      
      const now = await new Date()
      const d = await now.toLocaleDateString("En-US", {
            dateStyle: "medium"
          })
      
      if(user){
        const docRef = await setDoc(doc(db, "Users", user.uid),{
        ...fullData, 
        uid: user.uid,
        joinDate: d,
        color: dataArray[randomNumber],
        sign: "with password"
      });
      
      }
      
       await toast.success("you have successfully to create account ")

       dispatch(setLoad(false))
       navigate("/");
       
    } catch (error) {
      toast.error("something when wrong try again")

      dispatch(setLoad(false))
    }
    
    
    
    
    
  };


 useEffect(() =>{
   
   const dac = () =>{
    const user = auth.currentUser
          if(user) return navigate("/");
     
   }
   
  dac()
  
  
 })


  return (
    <div className="min-h-screen   px-4">
      <h1 className="p-1"></h1>
      <div style={{backgroundColor: isColor ? "black" : "white"}}  className="max-w-md mt-20 rounded-2xl w-full mt-1 p-8 ">
        <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium ">First Name</label>
            <input
              onChange={(e) => setFirst(e.target.value)}
              value={first}
              type="text"
              name="firstName"
              placeholder="Enter first name"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium ">Second Name</label>
            <input
              onChange={(e) => setSecord(e.target.value)}
              value={second}
              type="text"
              name="secondName"
              placeholder="Enter second name"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium ">country</label>
            <input
              onChange={(e) => setCountry(e.target.value)}
              value={country}
              type="text"
              name="country"
              placeholder="Enter Country"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
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
            <label className="block mb-1 text-sm font-medium">Password</label>
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
            <h1 className="mt-2">make sure password length is greaterthan 6</h1>
          </div>
          <div className="flex gap-4">
          
             <GoogleSign />

          
            <button
              type="submit"
              className="w-1/2 bg-orange-600 text-white py-2 rounded-xl hover:bg-orange-700 transition duration-200"
            >
              Register
            </button>

          </div>
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Sicon;
