import React from 'react';
import bgImage from "../assets/back.jpg";


const Landing = ({title}) => {
  return (
    <section className="bg-gradient-to-r font-sans from-orange-500 to-orange-700 h-[40vh] flex flex-col justify-center items-center text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${bgImage})` }}></div>
      
      <h1 className='text-4xl lg:text-5xl xl:text-6xl text-white font-bold z-10 p-4'>{title}</h1>
     
    </section>
  )
}

export default Landing