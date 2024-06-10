import React from 'react';
import { FaUserTie, FaBuilding, FaCalendarAlt, FaRegMoneyBillAlt, FaBusinessTime ,FaLandmark, FaHandsHelping, FaUserFriends, FaHeart, FaHospital, FaRegObjectGroup, FaBriefcase, FaShieldAlt, FaUserCog } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';

const Sections = () => {
  return (
    <div className="px-4 sm:px-10 py-10 font-sans bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Company Overview */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-10">
          <h1 className="text-3xl text-orange-600 font-bold mb-6 text-start">
            Lakshaka Insta Management Private Limited
          </h1>
          <div className="space-y-6 text-gray-700">
            <p>
              Lakshaka Insta Management Private Limited is a Private incorporated on 16 August 2022. It is classified as Non-govt company and is registered at Registrar of Companies, Coimbatore. Its authorized share capital is Rs. 1,000,000 and its paid up capital is Rs. 300,000. It is involved in Business activities.
            </p>
            <p>
              Directors of Lakshaka Insta Management Private Limited are Masthamma Nataraj Padmanabhan and Padmanabhan Sridevi.
            </p>
            <p>
              Lakshaka Insta Management Private Limited's Corporate Identification Number is (CIN) U74999TZ2022PTC039689 and its registration number is 39689.
            </p>
            <p>
              Current status of Lakshaka Insta Management Private Limited is - Active.
            </p>
          </div>
        </div>

{/* Company Info */}
<div className="bg-white shadow-lg rounded-lg p-8 mb-10">
          <h2 className="text-2xl font-bold mb-4 text-orange-600">Company Info</h2>
          <div className="space-y-2 text-gray-700">
            <div className="flex items-start">
                <div className='w-[30px] h-[30px]'>
              <FaCalendarAlt className="inline-block mr-3 text-[18px] text-orange-600" />
              </div>
              <p><strong>Incorporation Date:</strong> 16 August 2022</p>
            </div>
            <div className="flex items-start">
            <div className='w-[30px] h-[30px]'>
              <FaBuilding className="inline-block mr-3 text-[18px] text-orange-600" />
             </div>
              <p><strong>Company Type:</strong> Private, Non-govt company</p>
            </div>
            <div className="flex items-start">
            <div className='w-[30px] h-[30px]'>
              <FaBuilding className="inline-block mr-3 text-[18px] text-orange-600" />
             </div>
              <p><strong>Registrar of Companies:</strong> Coimbatore</p>
            </div>
            <div className="flex items-start">
            <div className='w-[30px] h-[30px]'>
              <FaRegMoneyBillAlt className="inline-block mr-3 text-[18px] text-orange-600" />
              </div>
              <p><strong>Authorized Share Capital:</strong> Rs. 1,000,000</p>
            </div>
            <div className="flex items-start">
            <div className='w-[30px] h-[30px]'>
              <FaRegMoneyBillAlt className="inline-block mr-3 text-[18px] text-orange-600" />
             </div>
              <p><strong>Paid Up Capital:</strong> Rs. 300,000</p>
            </div>
            <div className="flex items-start">
            <div className='w-[30px] h-[30px]'>
              <FaBusinessTime className=" inline-block mr-3 text-[18px] text-orange-600" />
             </div>
              <p><strong>Business Activities:</strong> Business activities n.e.c.</p>
            </div>
            <div className="flex items-start">
            <div className='w-[30px] h-[30px]'>
              <FaCalendarAlt className="inline-block mr-3 text-[18px] text-orange-600" />
            </div>
              <p><strong>Annual General Meeting (AGM):</strong> N/A</p>
            </div>
            <div className="flex items-start">
            <div className='w-[30px] h-[30px]'>
              <FaCalendarAlt className="inline-block mr-3 text-[18px] text-orange-600" />
             </div>
              <p><strong>Balance Sheet Filed:</strong> N/A</p>
            </div>
            <div className="flex items-start">
            <div className='w-[30px] h-[30px]'>
              <FaBuilding className="inline-block mr-3 text-[18px] text-orange-600" />
             </div>
            <p><strong>Corporate Identification Number (CIN):</strong> U74999TZ2022PTC039689</p>
            </div>
            <div className="flex items-start">
            <div className='w-[30px] h-[30px]'>
              <FaBuilding className="inline-block mr-3 text-[18px] text-orange-600" />
             </div>
              <p><strong>Registration Number:</strong> 39689</p>
            </div>
            <div className="flex items-start">
            <div className='w-[30px] h-[30px]'>
              <FaBusinessTime className="inline-block mr-3 text-[18px] text-orange-600" />
             </div>
              <p><strong>Current Status:</strong> Active</p>
            </div>
          </div>
        </div>
        

        {/* Directors */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-10">
          <h2 className="text-2xl font-bold mb-4 text-orange-600">Directors</h2>
          <ul className="list-disc flex gap-3 flex-col list-inside text-gray-700">
            <li className='flex items-center gap-3'><span className='h-[5px] w-[5px] rounded-full text-[10px] text-slate-900'><GoDotFill  /></span><FaUserTie className="inline-block mr-3 text-[18px] text-orange-600" /> Masthamma Nataraj Padmanabhan</li>
            <li className='flex items-center gap-3'><span className='h-[5px] w-[5px] rounded-full text-[10px] text-slate-900'><GoDotFill  /></span><FaUserTie className="inline-block mr-3 text-[18px] text-orange-600" /> Padmanabhan Sridevi</li>
          </ul>
        </div>

        {/* Directors Details */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-10">
          <h2 className="text-2xl font-bold mb-4 text-orange-600">Directors Details</h2>
          <div className='overflow-x-auto bg-white'>
            <table className="min-w-full overflow-x-auto divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DIN</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Director Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Designation</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Appointment Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">01121272</td>
                  <td className="px-6 py-4 whitespace-nowrap">Masthamma Nataraj Padmanabhan</td>
                  <td className="px-6 py-4 whitespace-nowrap">Director</td>
                  <td className="px-6 py-4 whitespace-nowrap">16 August 2022</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">05308735</td>
                  <td className="px-6 py-4 whitespace-nowrap">Padmanabhan Sridevi</td>
                  <td className="px-6 py-4 whitespace-nowrap">Director</td>
                  <td className="px-6 py-4 whitespace-nowrap">16 August 2022</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Profile Details */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-10">
          <h2 className="text-2xl font-bold mb-4 text-orange-600">Profile Details</h2>
          <div className="space-y-4 text-gray-700 mb-4">
            <p><strong>Name:</strong> M N PADMANABHAN B.Com</p>
            <p><strong>Education:</strong> Textiles Technology from City & Guilds Institute of London</p>
            
          </div>
   

        {/* Property Details */}
      
          <h2 className="text-xl font-bold mb-4 text-slate-900">Property Details</h2>
          <div className="space-y-4 text-gray-700 mb-4">
          <p><strong>Agriculture Lands:</strong> In and around Coimbatore.</p>
          <p><strong>Rental Commercial Buildings:</strong> In Coimbatore City.</p>
          </div>
       
          <h2 className="text-xl font-bold mb-4 text-slate-900">Positions</h2>
          <div className="space-y-4 text-gray-700 grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start">
              <div className='w-[30px] h-[30px]'>
                <FaUserTie className="text-orange-600 mr-3 mt-2" />
              </div>
              <p>30 Years of Textile Industry</p>
            </div>
            <div className="flex items-start">
              <div className='w-[30px] h-[30px]'>
                <FaBriefcase className="text-orange-600 mr-3 mt-2" />
              </div>
              <p>Managing Director of Madhava Lakshmi Mills</p>
            </div>
            <div className="flex items-start">
              <div className='w-[30px] h-[30px]'>
                <FaBriefcase className="text-orange-600 mr-3 mt-2" />
              </div>
              <p>Managing Director of Lakshaka Tex</p>
            </div>
            <div className="flex items-start">
              <div className='w-[30px] h-[30px]'>
                <FaBuilding className="text-orange-600 mr-3 mt-2" />
              </div>
              <p>Director of Coimbatore Cosmopolitan Club</p>
            </div>
            <div className="flex items-start">
              <div className='w-[30px] h-[30px]'>
                <FaUserFriends className="text-orange-600 mr-3 mt-2" />
              </div>
              <p>Governing General Council Member of Indian Chamber of Commerce</p>
            </div>
            <div className="flex items-start">
              <div className='w-[30px] h-[30px]'>
                <FaUserFriends className="text-orange-600 mr-3 mt-2" />
              </div>
              <p>National Executive Committee member of Indo-American Chamber of Commerce</p>
            </div>
            <div className="flex items-start">
              <div className='w-[30px] h-[30px]'>
                <FaHandsHelping className="text-orange-600 mr-3 mt-2" />
              </div>
              <p>Trustee of Sankara Eye Hospital</p>
            </div>
            <div className="flex items-start">
              <div className='w-[30px] h-[30px]'>
                <FaRegObjectGroup className="text-orange-600 mr-3 mt-2" />
              </div>
              <p>Committee Member of Indo-Japan Chamber of Commerce</p>
            </div>
            <div className="flex items-start">
              <div className='w-[30px] h-[30px]'>
                <FaShieldAlt className="text-orange-600 mr-3 mt-2" />
              </div>
              <p>Member of TIE</p>
            </div>
            <div className="flex items-start">
              <div className='w-[30px] h-[30px]'>
                <FaLandmark className="text-orange-600 mr-3 mt-2" />
              </div>
              <p>Member of Siruthuli Coimbatore</p>
            </div>
            <div className="flex items-start">
              <div className='w-[30px] h-[30px]'>
                <FaRegObjectGroup className="text-orange-600 mr-3 mt-2" />
              </div>
              <p>Executive Member of RACC Coimbatore</p>
            </div>
            <div className="flex items-start">
              <div className='w-[30px] h-[30px]'>
                <FaUserCog className="text-orange-600 mr-3 mt-2" />
              </div>
              <p>Chairman of British Business Group of Coimbatore Chapter</p>
            </div>
            <div className="flex items-start">
              <div className='w-[30px] h-[30px]'>
                <FaHeart className="text-orange-600 mr-3 mt-2" />
              </div>
              <p>Managing Trustee of Nataraj Sree Sarojini Charitable Trust</p>
            </div>
          </div>
        </div>
        


      </div>
    </div>
  );
};

export default Sections;
