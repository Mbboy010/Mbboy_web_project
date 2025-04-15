import Web from './Web';
import { CiLocationOn } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import {Link} from "react-router-dom"
const Co = () => {
  return (
    <section className="py-12 md:ml-7 lg:ml-16 xl:ml-32 px-6">
    
    <Web value="k" data={<p className=" mb-8 ">Looking to collaborate or need a custom solution? Feel free to reach out!</p>}/>


    
      <div className="flex flex-col md:gap-56  md:items-center  md:flex-row">
      
       <Web value="k" data={    <div>
    
      <h2 className="text-xl text-orange-600 font-bold  mb-6">Contact Me</h2>
      
      <div className="space-y-4 ">
        <p className="flex gap-1 items-center">
          <HiOutlineMail className="text-xl" /> <a href="mailto:mbboyservices@gmail.com" className="hover:underline">mbboyservices@gmail.com</a>
        </p>
        <a href="tel:+2349049968390" className="flex gap-1 items-center"><IoCallOutline className="text-xl" /> +2349049968390</a>
        <p className="flex gap-1 items-center">
          <TbWorld className="text-xl" /> <Link to="/" className="hover:underline">mbboy</Link>
        </p>
        <p className="flex gap-1 items-center"><CiLocationOn className="text-xl" /> Kaduna state, Nigeria</p>
      </div>
      </div>}/>
      
  
      
      
          <Web value="k" data={<div >
      
     <h2 className="text-xl font-bold text-orange-600 my-4 md:mb-6 md:my-0">Follow Me</h2>
      <div className="space-y-4">
        <p className="flex gap-1 items-center">
          <FaWhatsappSquare className="text-xl" /> <a href="https://wa.me/qr/Q2EJMOH3QP3DM1" className="hover:underline">WhatsApp</a>
         </p>
        <p className="flex gap-1 items-center">
          <FaSquareInstagram className="text-xl" /> <a href="https://www.instagram.com/mbboy010/" className="hover:underline">Instagram</a>
         </p>
        <p className="flex gap-1 items-center">
          <FaFacebook className="text-xl" /> <a href="https://www.facebook.com/profile.php?id=100091933395389" className="hover:underline">Facebook</a>

         </p>
        <p className="flex gap-1 items-center">
          <FaGithubSquare className="text-xl" /> <a href="https://github.com/Mbboy010" className="hover:underline">Github</a>

         </p>
      </div>
      </div>}/>
      
      
      </div>
          <Web value="k" data={ <p className=" mt-8 ">
        I’m available for <strong>web & app development, branding, and software security consulting.</strong>
      </p>}/>

    </section>
  );
};

export default Co;
