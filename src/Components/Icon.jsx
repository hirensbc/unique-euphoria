import React from "react";
import { FaShopify, FaUsers, FaCogs, FaGlobe, FaUndo } from "react-icons/fa";

const features = [
  { id: 1, icon: <FaShopify />, title: "One-Stop Service" },
  { id: 2, icon: <FaUsers />, title: "Trusted By 800k+ Customers" },
  { id: 3, icon: <FaCogs />, title: "Customization Service" },
  { id: 4, icon: <FaGlobe />, title: "Worldwide Shipping" },
  { id: 5, icon: <FaUndo />, title: "Hassle-Free Return Policy" },
];

const WhyUniqueEuphoria = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-black mb-2">
          Why Unique Euphoria
        </h2>
        <p className="text-gray-600 mb-10 sm:mb-12">
          The Unique Euphoria Difference
        </p>


        <div>
          
          <div className="flex sm:hidden overflow-x-auto space-x-6 scrollbar-hide px-2">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex-shrink-0 flex flex-col items-center text-center w-28"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-300">
                  <span className="text-2xl text-[#BE9B81]">{feature.icon}</span>
                </div>
                <p className="mt-3 text-xs font-medium text-gray-800">
                  {feature.title}
                </p>
              </div>
            ))}
          </div>

          
          <div className="hidden sm:grid grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-300">
                  <span className="text-2xl text-[#BE9B81]">{feature.icon}</span>
                </div>
                <p className="mt-3 text-sm sm:text-base font-medium text-gray-800">
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

export default WhyUniqueEuphoria;
