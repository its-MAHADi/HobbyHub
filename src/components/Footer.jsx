import React from "react";
import { FaFacebook, FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 px-6 py-10 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white">HobbyHub</h2>
          <p className="mt-2 text-gray-400">
            Discover. Connect. Create. HobbyHub brings people together through shared passions.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
           <div className="space-y-2 flex flex-col w-25">
          <NavLink className={({isActive})=>(isActive? "border-b-2 text-white" : "")} to="/">Home</NavLink>
          <NavLink  className={({isActive})=>(isActive? "border-b-2 text-white" : "")} to="/all-groups">All Groups</NavLink>
          <NavLink  className={({isActive})=>(isActive? "border-b-2 text-white" : "")} to="/create-group">Create Group</NavLink>
          <NavLink  className={({isActive})=>(isActive? "border-b-2 text-white" : "")} to="/my-groups">My Groups</NavLink>
           </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-gray-400 text-xl">
      <a href="https://www.facebook.com/mh.mahadi.921944/" target='_blank'><FaFacebook className='text-blue-500' size={24} /></a>
      <a href="https://github.com/its-MAHADi" target='_blank'><FaGithub size={24} /></a>
      <a href="https://www.instagram.com/__m_a_h_a_d_i___/" target='_blank'><FaInstagram className='text-pink-500' size={24} /></a>
      <a href=""><FaYoutube className='text-red-500' size={28} /></a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} HobbyHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
