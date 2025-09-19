import React from "react";
import Hair4 from "../../src/assets/Images/Hair4.jpg";
import Hair5 from "../../src/assets/Images/hair5.jpg";
import Hair2 from "../../src/assets/Images/Hair2.jpg";

const InfoSection = ({ info }) => {
  return (
    <div className="flex xs:py-10 flex-col items-center justify-center px-0 md:px-0 bg-white ">
      {info.map((sec, idx) => (
        <div
          key={idx}
          className={`flex flex-col md:flex-row items-center justify-center px-0 ${
            idx > 0 ? "mt-16 md:mt-0" : ""
          }`}
        >
          {/* IMAGE */}
          <div
            className={`w-full md:w-1/2 flex justify-center ${
              sec.reverse ? "md:order-2 md:pl-0" : "md:order-1 md:pr-0"
            }`}
          >
            <img
              src={sec.img}
              alt="Hair Collection"
              className="lg:w-[830px] lg:h-[500px] xs:h-[200px] xs:w-full object-cover shadow-md"
            />
          </div>

          {/* TEXT */}
          <div
            className={`w-full md:w-1/2 sm:w-100 lg:mx-auto text-center md:text-left ${
              sec.reverse ? "md:order-1 md:pr-12" : "md:order-2 md:pl-12"
            }`}
          >
            <h2
              className="lg:text-[55px] font-medium text-black mb-4 mx-auto font-mariposa"
              dangerouslySetInnerHTML={{ __html: sec.title }}
            />
            <p
              className="text-black font-medium mb-6 xs:mx-auto lg:mx-0 text-justify lg:text-left md:text-left lg:text-[18px] xs:text-sm xs:w-80 xs:text-justify  sm:text-justify lg:w-100 font-montserrat"
              dangerouslySetInnerHTML={{ __html: sec.desc }}
            >
              {/* {sec.desc} */}
            </p>
            {sec.button ? (
              <button className="font-montserrat px-6 py-2 bg-[var(--primary)] text-white rounded-full cursor-pointer hover:bg-[#E0AC85] hover:text-white hover:scale-105 transition-all duration-300">
                {sec.button}
              </button>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoSection;
