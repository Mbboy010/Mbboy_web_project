import Web from '../works/Web';
import Co from '../works/Co';
import HeroDis from '../home/hero/HeroDis';
import { useState, useEffect } from 'react';
import {Link} from "react-router-dom"

export default function ProfileCard() {
  return (
    <div className="w-full">
    <div className="relative w-full md:mt-7 md:flex md:flex-col md:items-center">

      <h1 className="text-2xl ml-2 font-bold text-orange-500">Hi, I'm Musa Hakilu</h1>
      <div className="md:hidden">
      <HeroDis />
      </div>
      
      <Web value="k" data={ <p className="text-lg ml-2 opacity-90 md:text-center  mt-7">
        A versatile <span className="font-semibold">Web & Mobile Developer, Software Engineer, Software Security Specialist, Music Producer,</span> and <span className="font-semibold">Logo Designer.</span>
      </p>} />

      <Web value="k" data={
        <p className=" ml-2 opacity-90 md:text-center  mt-4">
        I have a passion for building innovative digital solutions, from developing secure and scalable applications to crafting visually compelling logos and producing high-quality music.
      </p>
        
      } 
      />
      <Web value="k" data={<p className=" ml-2 opacity-90 md:text-center mt-4">
        With expertise in <span className="font-semibold">software security</span>, I ensure that applications are not only functional but also safeguarded against vulnerabilities. My creative side shines through in <span className="font-semibold">logo design</span> and <span className="font-semibold">music production</span>, where I blend artistic vision with technical skills to create unique and impactful works.
      </p>} />
      
     <Web value="k" data={<p className=" ml-2 opacity-90  md:text-center mt-4">
        I'm always eager to collaborate on exciting projects that merge <span className="font-semibold">technology, security, and creativity.</span> Let’s build something great together! 🚀
      </p>} />

    </div>
    
        </div>
  );
}
