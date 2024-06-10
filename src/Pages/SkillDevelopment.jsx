import React, { Fragment } from 'react'
import Landing from '../Components/Landing'

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
    <div className="bg-white shadow-lg rounded-lg p-8 mb-10">
      <h2 className="text-2xl text-orange-600 font-bold mb-4 pt-[20px]">Types of Skills</h2>
      {/* <div className="space-y-5">
       
        <ul className="list-disc list-inside space-y-2">
          <li>Soft skills are related to emotional intelligence.</li>
          <li>Flexibility</li>
          <li>Leadership</li>
          <li>Motivation</li>
          <li>Patience</li>       
          <li>Hard skills are any skills relating to a specific task.</li>
          <li>These skills are quantifiable.</li>
          <li>Proficiency in a foreign language</li>
          <li>A degree or certificate</li>
          <li>Typing speed</li>
          <li>Machine operation</li>
          <li>Computer programming</li>
        </ul>
      </div> */}

<div className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-black pt-[20px]">Hard Skills</h2>
      <ul className="list-disc list-inside space-y-2 mb-5">
        <li>Easy to measure and define</li>
        <li>Generally acquired via training</li>
        <li>Specific to a particular job or task</li>
      </ul>
      <p>Examples: Microsoft Office, language ability, software skills, accounting</p>
     </div>
      <div className=" mb-10">
      <h2 className="text-2xl font-bold mb-4 text-black pt-[20px]">Soft Skills</h2>
      <ul className="list-disc list-inside space-y-2 mb-5">
        <li>Difficult to measure and define</li>
        <li>Generally acquired via experience</li>
        <li>Easily transferable</li>
      </ul>
      <p>Examples: Critical thinking, leadership, good work ethic, negotiation skills</p>
    </div>

    </div>
    
    <div className="bg-white shadow-lg rounded-lg p-8 mb-10">
      <h2 className="text-2xl font-bold mb-4 text-orange-600 pt-[20px]">Trainings</h2>
      <ul className="list-disc list-inside space-y-2 mb-5">
        <li>On-the-job training</li>
        <li>Classroom training</li>
        <li>E-learning  </li>
        <li>Coaching and mentoring</li>
        <li>Job shadowing</li>
      </ul>
      
    </div>

    </div>
    </div>
    </div>
    
    </Fragment>
  )
}

export default SkillDevelopment