import StatsC from './StatsC';
import StatsCard from '../home/hero/StatsCard';
import Img from './Img';
import Tit from './Tit';
import Disp from './Disp';
import Services from './Services';
import { BiCodeAlt } from "react-icons/bi";
import {Link} from "react-router-dom"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function tags(d: any){
  return(
    <strong>{d}</strong>
    )
}


export default function WorksCon() {
  
  const containerRef = useRef(null);
  
  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ["end end","start end"]
  })
  
  const scale = useTransform(scrollYProgress,[0.40,1],[1,0.40])
  const opacity = useTransform(scrollYProgress,[0,1],[1,0])
  
  
  return (
    <div className="w-full relative ">
    <div className="p-1">
    </div>
    <div 
    className="max-w-3xl mt-20  mx-auto p-4 ">
      <h1 className="text-3xl text-orange-500 font-bold md:text-center mb-6">Works</h1>
      <p className="text-lg opacity-90 md:text-center mb-8">
        i'm specialize in <strong>website and mobile development, software security, logo design, and music production</strong>. I help businesses and individuals create secure, visually stunning, and high-performing digital experiences.
      </p>
      <div >
      <StatsC />

      </div>

      <div className="space-y-6 mt-8">
        <div className="">
        <Tit data="■ Website & Mobile Development" />


          
           <Disp data="I design and develop responsive websites and mobile applications using the latest technologies, ensuring a seamless user experience." />
           <Img data={require("../../assist/Personal.jpg")} />
 
           <Disp data={<p>
           
          You can offer a wide range of     <strong>websites</strong> and <strong>mobile applications</strong> tailored for different industries and needs. Here’s a list of types you can develop:
           
           </p>} />
           <Img data={require("../../assist/E-commerce.jpg")} />


          <Services />

        </div>

        <div className="">
         <Tit data="■ Software Security & Ethical Hacking" />

          
          <Disp data={<p>
          Security is crucial in the digital world. I provide <strong>penetration testing, vulnerability assessments, and security audits</strong> to protect your data from cyber threats.
          </p>} />
          
           <Img data={require("../../assist/Security.jpg")} />
          
          <Disp data="i'm specialize in software security, ensuring that applications and systems are safeguarded against vulnerabilities and cyber threats. Your work likely includes penetration testing, vulnerability assessments, encryption, secure coding practices, and implementing security protocols for websites, mobile apps, and enterprise software. You help businesses, schools, and companies protect their digital assets from attacks, data breaches, and unauthorized access. " />
          
        </div>

        <div className="">
        
       <Tit data="■ Logo Design & Branding" />
        

          
           <Disp data={
             <p>
             I create <strong>modern, minimalistic, and eye-catching logos</strong> that represent your brand and leave a lasting impression.
             </p>
           } />
           
          <Img data={require("../../assist/Logo.jpg")} />
           
           <Disp data="i'm help businesses establish a strong brand identity. Your work focuses on clean, timeless designs that are visually appealing and memorable. You likely incorporate color psychology, typography, and unique symbols to ensure each logo represents the brand's values and vision. Your branding expertise may also extend to designing business cards, brand guidelines, and other visual assets to maintain consistency across all platforms. " />
          
        </div>

        <div className="">
          <Tit data="■ Music Production" />
      
        <Disp data="I produce, mix, and master music across various genres, crafting high-quality soundtracks, beats, and full music compositions." />
        
         <Img data={require("../../assist/Music.jpg")} />
        </div>
      </div>
      
      <div className="md:text-center opacity-90 mt-8">
        <p className="text-lg font-semibold">Let’s Work Together!</p>
    <Disp data={<p>
    If you need a <strong>professional website, secure software, a unique logo, or high-quality music</strong>, let's collaborate.
    </p>} />
    
    
    <div className="flex justify-center items-center w-full gap-5">
          
    
        <Link to="/about" className="mt-4 inline-block bg-orange-500 text-white px-6 py-2 rounded-lg shadow hover:bg-orange-600">Contact Me</Link>
        <Link to="/collaborate" className="mt-4 inline-block border-orange-500 border text-white px-6 py-2 rounded-lg shadow hover:bg-[#38383851]">Collaborate Me</Link>
        
        
      </div>
      </div>
    </div>
    </div>
    )
}


