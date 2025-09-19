import React from 'react';
import myModelImage from '../../src/assets/Images/model5.png';

const Appointment = ({appImg, objectPosition}) => {
  console.log(objectPosition);
  
  return (
    <div className="relative w-full flex flex-col md:flex-row">
      

      <div className="w-full md:w-1/2 relative">
        <img 
          src={appImg} 
          alt="Consultation" 
          className={`w-full md:h-[480px] xs:h-[240px] object-cover ${objectPosition}`}
        />
       
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e4d2c4aa] to-[#e4d2c4]"></div>
      </div>


      <div className="w-full md:w-1/2 bg-[#e4d2c4] flex items-center justify-center pt-8 pb-4 md:pt-10 md:pb-6 px-6">
        <div className="text-center md:text-left max-w-md z-10">
          <h1 className="lg:text-[42px] md:text-3xl font-bold text-gray-900 mb-1 font-mariposa ">
            Join the Unique 
          </h1>
          <h3 className="lg:text-[42px] md:text-3xl font-semibold text-gray-900 mb-2 font-mariposa">
            Get Free Consultation
          </h3>
          <p className="text-black mb-3 font-semibold lg:text-[18px] md:text-base sm:text-base font-montserrat">
            Expert Advice Just a Click Away!
          </p>
          <button className="bg-black font-montserrat text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors duration-300 lg:text-[16px] sm:text-sm xs:text-sm md:text-base cursor-pointer">
            Get Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;