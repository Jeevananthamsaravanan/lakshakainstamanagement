import React from 'react';
import bgImage from "../assets/back.jpg";

const LandingSection = () => {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-orange-700 h-[50vh] flex flex-col justify-center items-center text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${bgImage})` }}></div>
      <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold z-10 p-4">
        Lakshaka Insta Management Private Limited
      </h1>
      <p className="text-md md:text-lg lg:text-xl xl:text-2xl text-white z-10 max-w-3xl p-4">
        Based in Coimbatore, Tamilnadu, our prime goal is to mark ourselves as a fast-growing, well-established, and renowned company.
      </p>
      <a href='/about-us' className="bg-white text-orange-700 font-semibold py-2 px-4 rounded-full shadow-md z-10 hover:bg-orange-200 transition mt-4">
        Learn More
      </a>
    </section>
  );
};

export default LandingSection;
