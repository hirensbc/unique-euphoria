import React from "react";
import { FaShopify, FaUsers, FaCogs, FaGlobe, FaUndo } from "react-icons/fa";

const features = [
  { id: 1, icon: <FaShopify />, title: "One-Stop Service" },
  { id: 2, icon: <FaUsers />, title: "Trusted By 800k+ Customers" },
  { id: 3, icon: <FaCogs />, title: "Customization Service" },
  { id: 4, icon: <FaGlobe />, title: "Worldwide Shipping" },
  { id: 5, icon: <FaUndo />, title: "Hassle-Free Return Policy" },
];

const Icon = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-Mariposa text-black mb-2">
          Why Unique Euphoria
        </h2>
        <p className="text-gray-600 mb-10 sm:mb-12 font-montserrat">
          The Unique Euphoria Difference
        </p>

        <div className="relative sm:flex sm:justify-around sm:items-center">
          <div className="absolute hidden sm:block top-1/2 left-0 right-0 h-px bg-gray-300 z-0"></div>

          <div className="flex flex-col sm:flex-row sm:justify-around sm:space-x-0 space-y-8 sm:space-y-0">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex-shrink-0 flex flex-col items-center text-center relative z-10"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-300">
                  <span className="text-2xl text-[#BE9B81]">
                    {feature.icon}
                  </span>
                </div>

                <p className="mt-3 text-xs sm:text-sm lg:text-base font-medium font-montserrat text-gray-800">
                  {feature.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Icon;
