import React, { Fragment } from 'react';
import Carousel from "../Components/Carousel";
import Landing from '../Components/Landing';

const About = () => {
  return (
    <Fragment>
      <Landing title={'About Us'} />
      <div className="px-4 sm:px-10 py-10 font-sans bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
      <div className="bg-white shadow-lg rounded-lg p-8 mb-10">
      
      <div className="space-y-5">
        <p>
          Lakshaka Insta Management Private Limited is based in Coimbatore, Tamilnadu. Our prime goal is to mark ourselves as a fast-growing, well-established, and renowned company. Our main product includes all kinds of Medical Dress, Nurse Uniforms, Medical Equipment, etc.
        </p>
        <p>
          The family is traditionally in the field of Textiles and in Garments Manufacturing for more than 8 decades. The Patriarch of the family is the owner of a garment business named <span className="font-bold text-black">Veeramaasthi Tex Fabs</span> in Coimbatore and Bangalore and their son is the owner of a garment business named <span className="font-bold text-black">Lakshaka Tex LLP</span> in Coimbatore and their granddaughter is the owner of a garment business named <span className="font-bold text-black">PH Project</span> in Coimbatore.
        </p>
        <p>
          And now the Lakshaka Insta Management Pvt Ltd with the vision of skill development and entrepreneurship for the youths has partnered with the Tamilnadu Government on skilling. We have also conducted assessments in Skill Development for 5000 candidates across Tamilnadu for the Government. We have professionals in our company who can take care of the Admin and Management and also technical experts to conduct any program.
        </p>
      </div>
     
      
      <h2 className="text-2xl text-orange-600 font-bold mb-4 pt-[20px]">Object</h2>
      <div className="space-y-5">
        <p>
          To carry on the business providing Management Consultancy Services in the field of skill development programs, Training Programs, Government Funded Programs, Fee Based Program, CSR Programs and Marketing and Services Whether in India or Abroad.
        </p>
        <p>
          To commence and carry on all the activities related to the promotion / propagation of vocational technical and non-technical education among unemployed and underemployed youth including transfer of skills and Knowledge through crash / refresher / short term courses, class based conferences, orientation training / capacity building programs. And also supply all types of medical equipment and medical dress etc.
        </p>
      </div>
      

      <h2 className="text-2xl text-orange-600 font-bold mb-4 pt-[20px]">Strength</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>The key financial indicators as per projections reflects financial strength.</li>
        <li>The promoter directors have the professional and technical qualification and work experience to ensure quality of the product demanding a king of skill.</li>
        <li>The Directors have the wealth of experience in the line of business and have proven experience in business expansion of Domestic and export units.</li>
      </ul>

      <h2 className="text-2xl text-orange-600 font-bold mb-4 pt-[20px]">Infrastructure</h2>
       <div className='space-y-5'>
      <p>Lakshaka Insta Management Pvt Ltd has 2900 sq.feet of building space in the heart of the city and we can commit training 200-300 candidates ever quarter. We have the capacity of further increase the numbers. We have the office in Dr. Nanjappa Road, Coimbatore, Tamilnadu.</p>
      <p>Branch office: We have our branch office in Bangalore.</p>
      <p>Training Facility: We conduct our training programs anywhere in India and also in other countries either directly or through our partners.</p>
      <p>Interviews: Interviews usually are conducted in a flexible manner in the locations where we have a good number of participants. This can be in multiple locations.</p>
      </div>
      </div>
      <h2 className="text-2xl text-orange-600 font-bold mb-4 pt-[20px] pb-[20px]">Gallery</h2>
      <div className="mt-[20px]">
        <Carousel />
      </div>
    </div>
    </div>
    </Fragment>
  );
}

export default About