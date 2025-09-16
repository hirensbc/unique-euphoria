import React from "react";
import { createRoot } from "react-dom/client";
import model5 from "../assets/Images/model5.png";

const Appointment = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="container mx-auto max-w-7xl rounded-2xl overflow-hidden shadow-xl">
        <div className="relative flex flex-col md:flex-row items-center">
          <div className="md:w-full w-full relative">
            <img
              src={model5}
              alt="Unique Euphoria Model"
              className="w-full h-auto object-fill"
              style={{
                objectPosition: "top center",
                maxHeight: "500px",
              }}
            />

            <div className="absolute inset-0 bg-[#b0967c] opacity-82"></div>
          </div>

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 md:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-2 leading-tight text-black">
              Have Any Questions?
              <br />
              Get Free Consultation
            </h2>
            <p className="text-sm font-medium italic mb-6 text-black">
              Expert Advice Just a Click Away!
            </p>
            <button className="bg-black text-white rounded-full px-8 py-3 font-semibold transition-all duration-300 hover:bg-gray-800">
              Get Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
