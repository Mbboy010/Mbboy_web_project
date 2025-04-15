import Img from '../works/Img';
import Web from '../works/Web';
import {Link} from "react-router-dom"


export default function Collabo() {
  
  return (
    <div>
    <div className="p-1">
    </div>
    <section className="max-w-4xl mt-20 mx-auto p-6">
      <h2 className="text-3xl font-bold text-orange-500 md:text-center mb-6">
        Collaborate with Me
      </h2>
     <Web value="k" data={ <p className=" md:text-center  mb-4">
        I specialize in <span className="font-semibold">web and mobile app development</span> for
        <span className="font-semibold"> e-commerce, businesses, schools, and companies</span>, using
        modern technologies like <span className="font-semibold">React, Next.js, and Express</span>.
        I also focus on <span className="font-semibold">software security</span>, ensuring that applications
        are robust and protected from cyber threats.
      </p>}/>
      
      <Img data={require("../../assist/Respweb.jpg")} />

      
    <Web value="k" data={<p className="md:text-center mb-6">
        Beyond development, I offer <span className="font-semibold">logo design and branding services</span>,
        creating <span className="font-semibold">modern, minimalistic, and eye-catching logos</span>. My
        passion for <span className="font-semibold">3D modeling and music production</span> allows me to
        explore creative design solutions beyond software.
      </p>}/>
      
      <Img data={require("../../assist/Respmobile.jpg")} />

      <div className="space-y-4">
        {[
          { title: "Web & Mobile Development", desc: "Partner with me to build scalable, high-performance applications tailored to your business needs." },
          { title: "Software Security Consultation", desc: "Ensure your software is secure with in-depth security audits and best practices." },
          { title: "Logo Design & Branding", desc: "Work with me to craft a strong brand identity with custom logos and visual assets." },
          { title: "3D Modeling & Creative Design", desc: "Enhance your digital presence with 3D graphics and interactive experiences." },
          { title: "Music & Audio Production", desc: "Collaborate on sound design, background music, and audio projects." }
        ].map((item, index) => (
          <div key={index} className=" p-4">
          
          
             <Web value="k" data={<div>
             <h3 className="text-yellow-500 font-semibold ">{item.title}</h3>
            <p className="mt-1 ">{item.desc}</p>
             </div>}/>

          </div>
        ))}

      </div>
      <div className="md:text-center mt-6 space-y-4">
      <Link to="/about">
        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-orange-700 transition">
        
          Let's Collaborate
        </button>
        
              </Link>

      </div>
    </section>
       </div>
    
  );
}
