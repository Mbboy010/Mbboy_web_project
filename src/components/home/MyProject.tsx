import Web from '../works/Web';
import type { RootState } from '../../components/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect,useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
export default function MyProject() {
  
  const isColor = useSelector((state: RootState) => state.color.value) 
  
  const projects = [
  {
    title: "E-commerce Website",
    image: "/images/ecommerce.png",
    description: ""
  },
  {
    title: "Logo Design Portfolio",
    image: "/images/logos.png",
    description: "A collection of my most creative and minimalistic logo designs."
  },
  {
    title: "3D Model Showcase",
    image: "/images/3dmodels.png",
    description: "High-detail 3D models built for games, animations, and AR experiences."
  }
];
  
  
  
  
  return (
    <div>
    
          {/* Projects Section */}
      <section id="projects" className="py-20 px-6 ">
      
      <Web
      value="tyyy"
      data={<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Projects</h2>}
      />

        <div className="grid md:grid-cols-3 gap-8  max-w-6xl mx-auto">
           <Web value="6" data={
              <div
             className={`${isColor ? "bg-[#d7d7d719]" : "bg-[#72727236]"} rounded-2xl p-6 shadow-lg hover:scale-105 transition`}>
              <img src={require("../../assist/WebAds.jpg")} alt="E-commerce Website" className="w-full h-40 object-cover rounded-xl mb-4" />
              <h3 className="text-xl text-orange-500 font-semibold">E-commerce Website</h3>
              <p className=" mt-2">A modern, scalable e-commerce platform with advanced cart features.</p>
            </div>
           } />

           <Web value="6" data={
              <div
             className={`${isColor ? "bg-[#d7d7d719]" : "bg-[#72727236]"} rounded-2xl p-6 shadow-lg hover:scale-105 transition`}>
              <img src={require("../../assist/LogAds.jpg")} alt="Logo Design Portfolio" className="w-full h-40 object-cover rounded-xl mb-4" />
              <h3 className="text-xl text-orange-500 font-semibold">Logo Design Portfolio</h3>
              <p className=" mt-2">A collection of my most creative and minimalistic logo designs.</p>
            </div>
           } />

           <Web value="6" data={
              <div
             className={`${isColor ? "bg-[#d7d7d719]" : "bg-[#72727236]"} rounded-2xl p-6 shadow-lg hover:scale-105 transition`}>
              <img src={require("../../assist/3DAds.jpg")} alt="3D Model Showcase" className="w-full h-40 object-cover rounded-xl mb-4" />
              <h3 className="text-xl text-orange-500 font-semibold">3D Model Showcase</h3>
              <p className=" mt-2">High-detail 3D models built for games, animations, and AR experiences.</p>
            </div>
           } />


          
        </div>
      </section>
    
    </div>
  )
}