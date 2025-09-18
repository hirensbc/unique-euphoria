import React from "react";

import {
  FaThumbsUp,
  FaUsers,
  FaWrench,
  FaGlobe,
  FaBoxOpen,
} from "react-icons/fa";

const features = [
  { title: "One-Stop Service", icon: FaThumbsUp },
  { title: "Trusted By 800K+ Customers", icon: FaUsers },
  { title: "Customization Service", icon: FaWrench },
  { title: "Worldwide Shipping", icon: FaGlobe },
  { title: "Hassle-Free Return Policy", icon: FaBoxOpen },
];

const Icon = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-mariposa text-black mb-2">
          Why Unique Euphoria
        </h2>
        <p className="text-gray-600 mb-10 sm:mb-12 font-montserrat">
          The Unique Euphoria Difference
        </p>

        <div className="relative flex justify-around items-start flex-wrap gap-y-6 sm:justify-between">
          <div
            className="absolute hidden md:block z-1 w-full h-[1px] bg-[#11111126]"
            style={{ top: "50px" }}
          ></div>
          {/* <div
            className="absolute hidden md:block w-full h-px bg-[#11111126]"
            style={{ top: "40px" }}
          ></div> */}
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center p-2 flex-shrink-0 w-1/2 md:w-auto md:basis-1/5 z-2"
            >
              <div className="relative">
                <div className="w-20 h-20 rounded-full border border-[#11111126] flex items-center justify-center shadow-md bg-[#FFFFFF]">
                  <feature.icon className="text-3xl text-[#BE9B81]" />
                </div>
              </div>

              <p className="mt-3 text-sm font-medium text-gray-700 font-montserrat">
                {feature.title}
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Icon;
