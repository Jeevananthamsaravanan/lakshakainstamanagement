import React, { Fragment } from 'react';
import Carousel from "../Components/Carousel";
import Landing from '../Components/Landing';
import uniform1 from '../assets/uniform1.png';
import uniform2 from '../assets/uniform2.png';
import uniform3 from '../assets/uniform3.png';
import uniform4 from '../assets/uniform4.png';

import body1 from '../assets/body1.png';
import body2 from '../assets/body2.png';
import body3 from '../assets/body3.png';
import body4 from '../assets/body4.png';

import training1 from '../assets/training1.jpg';
import training2 from '../assets/training2.jpg';
import training3 from '../assets/training3.jpg';
import training4 from '../assets/training4.jpg';
import training5 from '../assets/training5.jpg';

import device1 from '../assets/device1.jpg';
import device2 from '../assets/device2.jpg';
import device3 from '../assets/device3.jpg';

import case1 from '../assets/case1.jpg';


const ProductDetails= () => {
  return (
    <Fragment>
      <Landing title={'Product Details'} />
    <div className="px-4 sm:px-10 py-10 font-sans bg-gray-100 min-h-screen">
  <div className="max-w-7xl mx-auto">
    <div className="bg-white shadow-lg rounded-lg p-8 mb-4">
      {/* --- Two Product Images --- */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
        <img
          src={uniform1}
          alt="Nurse Wear Front"
          className="w-3/4 sm:w-1/3 rounded-lg shadow-md object-cover"
        />
        <img
          src={uniform2}
          alt="Nurse Wear Pant"
          className="w-3/4 sm:w-1/3 rounded-lg shadow-md object-cover"
        />
      </div>

      {/* --- Product Details --- */}
      <div className="space-y-3 text-gray-700 text-base leading-relaxed">
        <p><strong>Colour:</strong> Multi Colour</p>
        <p><strong>Gender:</strong> Unisex</p>
        <p><strong>Material:</strong> 65% Spun and 35% Polyester</p>
        <p><strong>Size:</strong> Small, Medium, Large</p>
        <p><strong>Type:</strong> Nurse Wear</p>
        <p><strong>Customized Logo:</strong> Available</p>
      </div>
    </div>

    <div className="bg-white shadow-lg rounded-lg p-8 mb-4">
      {/* --- Two Product Images --- */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
        <img
          src={uniform3}
          alt="Nurse Wear Front"
          className="w-3/4 sm:w-1/3 rounded-lg shadow-md object-cover"
        />
        <img
          src={uniform4}
          alt="Nurse Wear Pant"
          className="w-3/4 sm:w-1/3 rounded-lg shadow-md object-cover"
        />
      </div>

      {/* --- Product Details --- */}
      <div className="space-y-3 text-gray-700 text-base leading-relaxed">
        <p><strong>Colour:</strong> Multi Colour</p>
        <p><strong>Gender:</strong> Unisex</p>
        <p><strong>Material:</strong> 65% Spun and 35% Polyester</p>
        <p><strong>Size:</strong> Small, Medium, Large</p>
        <p><strong>Type:</strong> Nurse Wear</p>
        <p><strong>Customized Logo:</strong> Available</p>
      </div>
    </div>
     <div className="bg-white shadow-lg rounded-lg p-8">
      <h2 className="text-lg font-semibold text-center mb-6">
        Ablation Series - Thyroid Nodules Biopsy
      </h2>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 mb-6">
        <img src={body1} alt="Liver Image 1" className="w-3/4 sm:w-1/3 rounded-lg shadow-md object-cover" />
        <img src={body2} alt="Liver Image 2" className="w-3/4 sm:w-1/3 rounded-lg shadow-md object-cover" />
      </div>
      <h2 className="text-lg font-semibold text-center mb-6">
        Ablation Series - Uterine Fibroids (Myomas) Biopsy
      </h2>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 mb-6">
        <img src={body3} alt="Liver Image 3" className="w-3/4 sm:w-1/3 rounded-lg shadow-md object-cover" />
        </div>
        <h2 className="text-lg font-semibold text-center mb-6">
        Ablation Series enhances training precision, - Breast Examination, Biopsy
      </h2>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 mb-6">
        <img src={body4} alt="Liver Image 3" className="w-3/4 sm:w-1/3 rounded-lg shadow-md object-cover" />
        </div>
    </div>

    <div className="bg-white shadow-lg rounded-lg p-8 mt-6">
      <h2 className="text-lg font-semibold text-center mb-6">
        SKILL DEVELOPMENT TRAINING PROGRAM
      </h2>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 mb-6">
        <img src={training1} alt="Training Program 1" className="w-3/4 sm:w-1/3 rounded-lg shadow-md object-cover" />
        <img src={training2} alt="Training Program 1" className="w-3/4 sm:w-1/3 rounded-lg shadow-md object-cover" />
        <img src={training3} alt="Training Program 1" className="w-3/4 sm:w-1/3 rounded-lg shadow-md object-cover" />
        <img src={training4} alt="Training Program 1" className="w-3/4 sm:w-1/3 rounded-lg shadow-md object-cover" />
        <img src={training5} alt="Training Program 1" className="w-3/4 sm:w-1/3 rounded-lg shadow-md object-cover" />
      </div>
    </div>

    <div className="bg-white shadow-lg rounded-lg p-8 mt-6 font-serif">
  <h2 className="text-2xl font-semibold text-center text-purple-800 mb-8 tracking-wide">
    STIMULATION DEVICES
  </h2>

  {/* Oncology Section */}
  <div className="mb-8">
    <h3 className="text-lg font-semibold text-purple-800 mb-4">Oncology:</h3>
    <div className="flex flex-col sm:flex-row items-center gap-6">
      <img
        src={device1}
        alt="Breast binder"
        className="w-40 h-40 object-cover rounded-lg shadow-md"
      />
      <div>
        <p className="font-semibold text-purple-900">Breast binder:</p>
        <p className="text-gray-700 leading-relaxed">
          A strip or roll of fabric or plastic material applied to the breast or breasts
          for soft tissue support. This is a single-use device.
        </p>
      </div>
    </div>
  </div>

  {/* Physical Support Section */}
  <div>
    <h3 className="text-lg font-semibold text-purple-800 mb-4">Physical support:</h3>

    {/* Finger Orthosis */}
    <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
      <img
        src={device2}
        alt="Finger orthosis"
        className="w-40 h-40 object-cover rounded-lg shadow-md"
      />
      <div>
        <p className="font-semibold text-purple-900">Finger orthosis:</p>
        <p className="text-gray-700 leading-relaxed">
          Intended to encompass the whole or part of the finger to support, align,
          prevent, or correct deformities/injuries or to improve function of the finger.
        </p>
      </div>
    </div>

    {/* Knee Immobilizer */}
    <div className="flex flex-col sm:flex-row items-center gap-6">
      <img
        src={device3}
        alt="Knee immobilizer"
        className="w-40 h-40 object-cover rounded-lg shadow-md"
      />
      <div>
        <p className="font-semibold text-purple-900">Knee immobilizer:</p>
        <p className="text-gray-700 leading-relaxed">
          Intended to temporarily render the knee immovable, either preoperatively or
          following injury or arthroscopy.
        </p>
      </div>
    </div>
  </div>
</div>


<div className="bg-white shadow-lg rounded-lg p-8 mt-10 font-serif">
  <div className="flex flex-col sm:flex-row items-start gap-8">
    {/* Left Side Image */}
    <img
      src={case1}
      alt="EDMS Diagram"
      className="w-full sm:w-1/3 object-contain rounded-lg shadow-md"
    />

    {/* Right Side Text */}
    <div className="flex-1">
      <h2 className="text-2xl font-semibold text-orange-700 mb-6">
        Real Use Cases:
      </h2>

      {/* 1 */}
      <div className="mb-5">
        <p className="font-semibold text-gray-800">
          1. Invoice Processing for Manufacturing Units
        </p>
        <p className="text-gray-700 leading-relaxed">
          Example: A factory in Coimbatore processes 500+ invoices a week. Our AI extracts vendor name, date,
          amount, and line items automatically and sends it to the accounts team—cutting down time and mistakes.
        </p>
      </div>

      {/* 2 */}
      <div className="mb-5">
        <p className="font-semibold text-gray-800">
          2. Loan Application Handling in NBFC’s
        </p>
        <p className="text-gray-700 leading-relaxed">
          A finance firm in Chennai collects hundreds of housing loan documents—salary slips, PAN cards,
          bank statements. Our system checks if the documents are valid, pulls out the data, and creates a clean
          file for approval.
        </p>
      </div>

      {/* 3 */}
      <div className="mb-5">
        <p className="font-semibold text-gray-800">
          3. Legal Contract Analysis
        </p>
        <p className="text-gray-700 leading-relaxed">
          A company signs 100+ contracts per year. Our tool reads each contract, highlights penalty clauses,
          due dates, and renewal terms—saving hours of legal work.
        </p>
      </div>

      {/* 4 */}
      <div className="mb-5">
        <p className="font-semibold text-gray-800">
          4. Government Use (Smart City / Digital Records)
        </p>
        <p className="text-gray-700 leading-relaxed">
          Panchayat or district offices often store scanned documents. Our software helps digitize, organize,
          and make these records searchable instantly.
        </p>
      </div>

      {/* 5 */}
      <div>
        <p className="font-semibold text-gray-800">
          5. HR Teams in Colleges or Corporates
        </p>
        <p className="text-gray-700 leading-relaxed">
          From resumes to certificates, our system stores, tags, and manages all employee/student documents
          with zero manual effort.
        </p>
      </div>
    </div>
  </div>
</div>



  </div>
</div>



    </Fragment>
  );
}

export default ProductDetails