import {
  FaGithub,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp
} from 'react-icons/fa';

import {Link} from "react-router-dom"

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t-2 border-orange-500 text-gray-300 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and description */}
        <div>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[#F86E01] to-red-500 text-transparent bg-clip-text">MBBOY</h1>
          <p className="mt-2 text-sm">
            Building clean, modern websites and applications for businesses and creatives.
          </p>
        </div>

        {/* Navigation Links */}
        <nav>
          <h3 className="text-lg font-semibold text-white mb-2">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/works" className="hover:text-white">Works</Link></li>
            <li><Link  to="/collaborate" className="hover:text-white">Collaborate</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
          </ul>
        </nav>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: <a href="mailto:mbboyservices@gmail.com" className="hover:text-white">mbboyservices@gmail.com</a></li>
            <li>Phone: <a href="tel:+2349049968390" className="hover:text-white">+23490499683900</a></li>
            <li>Location: Kaduna state, Nigeria</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Follow Me</h3>
          <div className="flex space-x-4 text-lg">
            <a href="https://github.com/Mbboy010" className="hover:text-white" aria-label="Github">
              <FaGithub />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100091933395389" className="hover:text-white" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/mbboy010/" className="hover:text-white" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://wa.me/qr/Q2EJMOH3QP3DM1" className="hover:text-white" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Mbboy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
