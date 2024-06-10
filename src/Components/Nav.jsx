import React from 'react';
import { FaPhone, FaUser, FaTools } from 'react-icons/fa';
import Logo from "../assets/lakshaka.webp";
import { useLocation } from 'react-router-dom';

const Nav = () => {
  let location = useLocation();
 
  return (
    <nav className="bg-white z-50 sticky sm:top-0 w-full shadow-md py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            {/* <img className='w-[50px] h-[30px]' src={Logo} alt="Logo"/> */}
            <span className="text-orange-600 font-bold ml-2">
              LAKSHAKA INSTA MANAGEMENT PRIVATE LIMITED
              <br />
              GST No: 33AAFCL1334C1Z6
            </span>
          </a>
          <ul className="hidden lg:flex gap-8 items-center font-semibold text-[16px]">
            <li className={`${location.pathname == "/about-us" ? "text-orange-600":""} hover:text-orange-600 cursor-pointer flex items-center gap-2`}>
            <a href="/about-us"><FaUser /></a>
              <a href="/about-us">About Us</a>
            </li>
            <li className={`${location.pathname == "/skill-development" ? "text-orange-600":""} hover:text-orange-600 cursor-pointer flex items-center gap-2`}>
            <a href="/skill-development"><FaTools /></a>
              <a href="/skill-development">Skill Development</a>
            </li>
            <li className={`${location.pathname == "/contact-us" ? "text-orange-600":""} hover:text-orange-600 cursor-pointer flex items-center gap-2`}>
            <a href="/contact-us"><FaPhone /></a>
              <a href="/contact-us">Contact Us</a>
            </li>
          </ul>
         
        </div>
        <div className="lg:hidden ml-5 flex mt-5" id="menu">
          <ul className="flex flex-col sm:flex-row gap-5 items-start font-semibold text-[16px]">
          <li className={`${location.pathname == "/about-us" ? "text-orange-600":""} hover:text-orange-600 cursor-pointer flex items-center gap-2`}>
            <a href="/about-us"><FaUser /></a>
              <a href="/about-us">About Us</a>
            </li>
            <li className={`${location.pathname == "/skill-development" ? "text-orange-600":""} hover:text-orange-600 cursor-pointer flex items-center gap-2`}>
            <a href="/skill-development"><FaTools /></a>
              <a href="/skill-development">Skill Development</a>
            </li>
            <li className={`${location.pathname == "/contact-us" ? "text-orange-600":""} hover:text-orange-600 cursor-pointer flex items-center gap-2`}>
            <a href="/contact-us"><FaPhone /></a>
              <a href="/contact-us">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
