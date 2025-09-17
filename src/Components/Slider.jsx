import React, { useState, useMemo } from "react";
import Slider from "react-slick";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Hair1 from "../assets/Images/Hair1.jpg";
import Hair2 from "../assets/Images/Hair2.jpg";
import Hair3 from "../assets/Images/Hair3.jpg";
import Hair4 from "../assets/Images/Hair4.jpg";
import Hair5 from "../assets/Images/Hair5.jpg";


const products = [
  { image: Hair1, discount: "25% off", name: "Italian Wave", category: "Wavy" },
  { image: Hair2, discount: "25% off", name: "Straights", category: "Straight" },
  { image: Hair3, discount: "25% off", name: "I Tip", category: "Straight" },
  { image: Hair4, discount: "25% off", name: "Body Wave", category: "Wavy" },
  { image: Hair5, discount: "25% off", name: "Curly Bounce", category: "Curly" },
];


const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 cursor-pointer top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-lg z-10 -mr-4 hover:bg-white hover:text-black hover:scale-105 transition-all duration-300"
  >
    <IoIosArrowRoundForward className="text-2xl" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute cursor-pointer left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-lg z-10 -ml-4 hover:bg-white hover:text-black hover:scale-105 transition-all duration-300"
  >
    <IoIosArrowRoundBack className="text-2xl" />
  </button>
);

const ProductSlider = ({title}) => {
  const [activeCategory, setActiveCategory] = useState("All");


  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="container min-h-screen bg-[#FDFBF7] text-black p-8 flex flex-col items-center justify-center ">
 
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-mariposa font-bold text-[#333]">
          {title}
        </h2>

    
        <div className="mt-8 flex justify-center space-x-4">
          {["All", "Straight", "Wavy", "Curly"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium cursor-pointer border transition-all duration-300 font-montserrat
                ${
                  activeCategory === cat
                    ? "bg-black text-white border-black scale-105"
                    : "bg-transparent text-gray-700 border-gray-400 hover:bg-black hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      
      <div className="relative w-full max-w-6xl">
        <Slider {...settings}>
          {filteredProducts.map((product, index) => (
            <div key={index} className="px-3">
              <div className="w-full bg-white rounded-3xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover rounded-3xl font-montserrat"
                  />
                  <div className="absolute top-4 right-4 bg-[#C0A887] text-white text-xs font-semibold px-4 py-2 rounded-full">
                    {product.discount}
                  </div>
                </div>
                <div className="p-4 bg-transparent text-center">
                  <h3 className="text-lg text-gray-800 mt-2 font-mariposa">{product.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductSlider;
