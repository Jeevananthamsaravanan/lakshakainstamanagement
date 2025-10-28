import React, { Fragment } from 'react'
import Landing from '../Components/Landing'

import page2 from '../assets/GIMS - Presentation_page-0002.jpg';
import page3 from '../assets/GIMS - Presentation_page-0003.jpg';
import page4 from '../assets/GIMS - Presentation_page-0004.jpg';
import page5 from '../assets/GIMS - Presentation_page-0005.jpg';
import page6 from '../assets/GIMS - Presentation_page-0006.jpg';
import page7 from '../assets/GIMS - Presentation_page-0007.jpg';
import page8 from '../assets/GIMS - Presentation_page-0008.jpg';
import page9 from '../assets/GIMS - Presentation_page-0009.jpg';
import page10 from '../assets/GIMS - Presentation_page-0010.jpg';
import page11 from '../assets/GIMS - Presentation_page-0011.jpg';

const SkillDevelopment = () => {
  return (
    <Fragment>
    <Landing title={"Skill Development"}/>
    <div className='bg-gray-100'>
    <div className="max-w-7xl mx-auto ">
    
    <div className="p-6 font-sans">
    <div className="bg-white shadow-lg rounded-lg p-8 mb-10">
      
      
      <div className="space-y-5">
        <p>
          Basic skills training helps young people improve their skills in areas such as literacy and numeracy. This makes it easier for them to engage with training or employment that demands a level of fluency in reading, writing, and working with numbers.
        </p>
       
        <ul className="list-disc list-inside space-y-2">
          <li><strong>UPSKILLING:</strong> Helps improve a person's performance with their current work in their current role.</li>
          <li><strong>CROSS-SKILLING:</strong> Helps a person take on new work in their current role.</li>
          <li><strong>RESKILLING:</strong> Helps a person shift to a new role or adjust to dramatic change in their current role.</li>
        </ul>
      </div>
    </div>

    <div className="flex flex-row sm:flex-row flex-wrap justify-center items-center gap-10 mb-6">
      <img src={page2} alt="GIMS Page 2" className="w-full rounded-lg shadow-md object-cover" />
              <img src={page3} alt="GIMS Page 3" className="w-full rounded-lg shadow-md object-cover" />
              <img src={page4} alt="GIMS Page 4" className="w-full rounded-lg shadow-md object-cover" />
              <img src={page5} alt="GIMS Page 5" className="w-full rounded-lg shadow-md object-cover" />
              <img src={page6} alt="GIMS Page 6" className="w-full rounded-lg shadow-md object-cover" />
              <img src={page7} alt="GIMS Page 7" className="w-full rounded-lg shadow-md object-cover" />
              <img src={page8} alt="GIMS Page 8" className="w-full rounded-lg shadow-md object-cover" />
              <img src={page9} alt="GIMS Page 9" className="w-full rounded-lg shadow-md object-cover" />
              <img src={page10} alt="GIMS Page 10" className="w-full rounded-lg shadow-md object-cover" />
              <img src={page11} alt="GIMS Page 11" className="w-full rounded-lg shadow-md object-cover" />
    </div>

    </div>
    </div>
    </div>

    
    
    </Fragment>
  )
}

export default SkillDevelopment