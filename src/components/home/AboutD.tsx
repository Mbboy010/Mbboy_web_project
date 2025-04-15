import Web from '../works/Web';
import React from 'react'
import {Link} from "react-router-dom"


export default function AboutD() {
  return (
    <div>
    
          {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
        <Web
        value="yy"
        data={
          
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        }
        />
        <Web
        value="yy"
        data={
          
          <p className=" text-lg">
            I'm Musa, also known as Mbboy. A full-stack developer, designer, and security enthusiast. I specialize in creating fast, secure, and visually engaging digital experiences using React, Next.js, Express, and more.
          </p>
        }
        />


        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 text-center">
      
       <Web
        value="yy"
        data={
          
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Work Together</h2>
        }
        />
      
       <Web
        value="yy"
        data={
         
         <div>
         
         <p className="mb-6">Got a project or idea? Let's bring it to life!</p>
      <div className="text-center mt-6 space-y-4">
      <Link to="/about">
        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-orange-700 transition">
        
          Contact Me
        </button>
        
              </Link>

      </div>
         
         </div>         
 
        }
        />
      
    

      </section>
    
    </div>
  )
}