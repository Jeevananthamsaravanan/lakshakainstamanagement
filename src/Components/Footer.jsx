import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="relative bg-orange-600 px-4 text-white py-8 overflow-hidden">
      {/* Moving gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-orange-800 opacity-50 animate-gradient"></div>

      <div className="container mx-auto flex flex-col items-center justify-center text-center gap-8 relative z-10">
        <div>
          <h2 className="text-xl font-semibold mb-4">Our Locations</h2>
          <div className="flex lg:flex-row flex-col gap-10">
            <div className="w-[300px] sm:w-[400px] bg-white shadow-lg rounded-lg px-4 py-8 text-orange-600">
              <h3 className="text-lg font-semibold mb-2 flex items-center justify-center w-[100%] gap-3"><FaLocationDot /> Coimbatore</h3>
              <p>Lakshaka Insta Management Private Limited<br/>
                No. 359, 1st Floor, Natraj Building,<br/>
                Dr. Nanjappa Road, Coimbatore,<br/>
                Tamilnadu, India. 641018.</p>
            </div>
            <div className="w-[300px] sm:w-[400px] bg-white shadow-lg rounded-lg px-4 py-8 text-orange-600">
              <h3 className="text-lg font-semibold mb-2 flex items-center justify-center w-[100%] gap-3"><FaLocationDot /> Bangalore</h3>
              <p className=''>109, Regus Supreme, Overseas Export Building,<br/> 1st Floor,
                Krishna Rajendra Road, 7th Block, Jaya Nagar,<br/>
                Bengaluru, Karnataka, India-560 070.</p>
            </div>
          </div>
        </div>

        <div className='text-center mt-5'>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex justify-center items-center space-x-4 mb-4">
            <a href="https://www.linkedin.com/in/lakshaka-insta-management-private-limited-411a6b24a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-blue-600 bg-white hover:text-blue-500 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className='text-lg' />
            </a>
            {/* Add more social media icons here */}
          </div>
          <p>Connect with us on social media for updates and news.</p>
        </div>

        <div className="text-center ">
          <p className="mb-2">© 2024 My Website. All rights reserved.</p>
          <p className="text-sm">Created with ❤️ by Your Company</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
