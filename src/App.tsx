import ScrollToTop from './components/startTopPage/ScrollToTop';
import NotFound from './pages/NotFound';
import Verification from './pages/Verification';
import ForgotPassword from './pages/ForgotPassword';
import Loading from './components/loading/Loading';
import ChatCo from './components/chat/ChatCo';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import Collaboration from './pages/Collaboration';
import Works from './pages/Works';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import Navigate from './components//navigate/Navigate';
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {Routes,Route} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { setColor } from "./components/redux/slicer/color"
import type { RootState } from './components/redux/store'

const App = () => {
  
  const dispatch = useDispatch()
  const isColor = useSelector((state: RootState) => state.color.value) 
  
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true; // default to dark
  });
  
  useEffect(() =>{
    if(darkMode == undefined){
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      dispatch(setColor(true))
    }
    
    console.log(darkMode)
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      dispatch(setColor(true))
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      dispatch(setColor(false))
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen  ${darkMode ? "bg-[#121212] text-white" : "bg-gray-100 text-gray-800"}`}>
      {/* Navbar */}
      <Loading />

      
      <Navigate setDarkMode={setDarkMode} darkMode={darkMode} />


      <div className="w-screen min-h-screen">
      
      <div className="">
      
      <ScrollToTop />


        <Routes>
           
            <Route path="/" element={<Home />} /> 
            <Route path="/works" element={<Works  />} /> 
            <Route path="/collaborate" element={<Collaboration  />} /> 
            <Route path="/about" element={<About  />} /> 
            <Route path="/login" element={<Login />} /> 
            <Route path="/login/forgot_password" element={<ForgotPassword />} /> 
            <Route path="/signup" element={<Signup />} />
            <Route path="/verification" element={<Verification />} />
           <Route path="*" element={<NotFound  />} /> 

        </Routes>
      
         </div>
         
      </div>

      
      
      <Footer />

      {/* Footer */}

    </div>
  );
};

export default App;
