import WebT from './WebT';
import Web from './Web';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";



export default function Services() {
  
  const containerRef = useRef(null);
  
  
  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ["end end","start end"]
  })
  
  const scale = useTransform(scrollYProgress,[0.40,1],[1,0.40])
  const opacity = useTransform(scrollYProgress,[0,1],[1,0])
  
  
  return (
    <div className="max-w-4xl mx-auto opacity-90 p-3">
    <WebT data="Website Types 🌐" />
      <ul 
        className="list-disc pl-5 space-y-2">
         <Web data="E-commerce Websites – Online stores for selling products. Business Websites – Informational sites for companies." value="-100%"/>
         <Web data="School & Educational Platforms – Student portals and e-learning." value="100%" />
         <Web data="Corporate Websites – Professional branding and portfolios." value="-100%"/>
         <Web data="Portfolio Websites – Personal or business portfolios." value="100%" />
         <Web data="Booking & Appointment Websites – For salons, doctors, etc." value="-100%"/>
         <Web data="Real Estate Websites – Property listings and rental platforms." value="100%" />
         <Web data="Social Media & Community Platforms – Forums and networking." value="-100%"/>
         <Web data="Blogs & News Websites – Content-driven sites for news and media." value="100%" />
         <Web data="Job Portals – Job listings, applications, and recruitment." value="100%" />
      </ul>
     <WebT data="Mobile Application Types 📱" />

      <ul className="list-disc pl-5 space-y-2">
      
      <Web data="E-commerce Apps – Mobile shopping apps." value="100%" />
      <Web data="Business Apps – CRM and business management apps." value="100%" />
      <Web data="Educational Apps – E-learning platforms and quiz apps." value="100%" />
      <Web data="Booking & Scheduling Apps – Appointment scheduling apps." value="100%" />
      <Web data="Finance & Banking Apps – Payment and financial tracking apps." value="100%" />
      <Web data="Delivery & Logistics Apps – Food delivery and courier apps." value="100%" />
      <Web data="Social Media Apps – Chat, video-sharing, and networking." value="100%" />
      <Web data="Fitness & Health Apps – Workout tracking and telemedicine." value="100%" />
      <Web data="Event & Ticketing Apps – Event booking and ticket sales." value="100%" />
      <Web data="Gaming Apps – Mobile games and interactive learning." value="100%" />
      </ul>
      
      
       <WebT data="More Services You Can Offer 🚀" />
       
      <ul className="list-disc pl-5 space-y-2">
      
      <Web data="Custom Web Applications – Advanced CRM, ERP, and SaaS platforms." value="100%" />
      <Web data="Progressive Web Apps (PWAs) – Web-based apps with mobile-like functionality." value="100%" />
      <Web data="Website Optimization & Security – Speed optimization and cybersecurity solutions." value="100%" />
      <Web data="API Development & Integration – Connecting apps with external services." value="100%" />
      <Web data="UI/UX Design – Creating modern and user-friendly interfaces." value="100%" />
      </ul>
    </div>
  );
}
