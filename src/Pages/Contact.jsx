import React, { Fragment } from 'react'
import Landing from '../Components/Landing'

const Contact = () => {
  return (
    <Fragment>
    <Landing title={"Contact Us"}/>
  <div className='bg-gray-100'>
  <div className="max-w-7xl mx-auto">
    <div className="p-6 font-sans">
<div className="bg-white shadow-lg rounded-lg p-8 mb-10">
  <h1 className="text-2xl font-bold mb-4 text-orange-600 pt-[20px] pb-[20px]">Contact Details</h1>
  <div>
    <h1><strong>Mail Id:</strong></h1>
    <p>lakshakainstaofficial@gmail.com <br/> padh122@gmail.com<br/>ltcbe102@gmail.com</p>
  </div>
  
  <div className='mt-[20px]'>
    <h1><strong>Phone Number:</strong></h1>
    <p>+91 99403 06555</p>
  </div>

  </div>
  
  <div className="bg-white shadow-lg rounded-lg p-8 mb-10">

  <h1 className="text-2xl  font-bold mb-4 text-orange-600 pt-[20px] pb-[20px]">Coimbatore Location</h1>
  <address className="mb-6">
    Lakshaka Insta Management Private Limited<br/> 
    No. 359, 1st Floor, Natraj Building,<br/> 
    Dr. Nanjappa Road, Coimbatore,<br/> 
    Tamilnadu, India. 641018.
  </address>
  </div>
  <div className="bg-white shadow-lg rounded-lg p-8 mb-10">
  <h1 className="text-2xl font-bold mb-4 text-orange-600 pt-[20px] pb-[20px]">Map</h1>
  <div className="my-4 w-[100%] mx-auto">
    <iframe
      title="Google Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.77653327145094!2d76.96630420550375!3d11.006740447567681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859b422f30c1f%3A0x10da09d7d153a853!2sCoimbatore%20Brethren%20Church%2C%20Gandhipuram!5e0!3m2!1sen!2sin!4v1717139152837!5m2!1sen!2sin"
      width="100%"
      height="400"
      allowFullScreen=""
      loading="lazy"
      className="rounded-lg"
    ></iframe>
  </div>
  </div>
</div>
</div>
</div>
     

    </Fragment>
  )
}

export default Contact