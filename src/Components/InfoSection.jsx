import React from "react";
import Hair4 from "../../src/assets/Images/Hair4.jpg";
import Hair5 from "../../src/assets/Images/hair5.jpg";
import Hair2 from "../../src/assets/Images/Hair2.jpg";

const sections = [
  {
    img: Hair4,
    title: "Choose Your <br /> Perfect Hair",
    desc: "Find the perfect match from our premium collection of 100% Raw hair.  Whether you're looking for volume, length, or a complete transformation, we have it all.",
    reverse: false, // image left
  },
  {
    img: Hair5,
    title: "Easily place <br /> your order",
    desc: "Enjoy a seamless shopping experience with our secure checkout and fast shipping.  Choose your preferred length, texture, and style with just a few clicks.",
    reverse: true, // image right
  },
  {
    img: Hair2,
    title: "Style With <br /> Confidence",
    desc: "Unleash your beauty with premium quality hair that speaks volumes!Whether you love sleek and straight, bold and curly, or luxurious waves,<br/>Unique Euphoria has the perfect bundles to match your vibe.",
    reverse: false, // image left again
  },
];

const InfoSection = () => {
  return (
    <div className="flex flex-col items-center justify-center px-0 md:px-0 bg-white no-space">
      {sections.map((sec, idx) => (
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
              className="w-[830px] h-[500px] object-cover shadow-md"
            />
          </div>

          {/* TEXT */}
          <div
            className={`w-full md:w-1/2 text-center md:text-left ${
              sec.reverse ? "md:order-1 md:pr-12" : "md:order-2 md:pl-12"
            }`}
          >
            <h2
              className="text-3xl font-bold text-gray-900 mb-4 font-serif"
              dangerouslySetInnerHTML={{ __html: sec.title }}
            />
            <p
              className="text-gray-600 mb-6 text-justify w-100"
              dangerouslySetInnerHTML={{ __html: sec.desc }}
            >
              {/* {sec.desc} */}
            </p>
            <button className="px-6 py-2 bg-[var(--primary)] text-white rounded-full cursor-pointer hover:bg-[#E0AC85] hover:text-white hover:scale-105 transition-all duration-300">
              View Collection
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoSection;
