import React, { useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 
               w-10 h-10 flex items-center justify-center cursor-pointer 
               bg-white text-black rounded-full shadow-md hover:bg-gray-200 z-10"
  >
    <FaArrowLeft />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 
               w-10 h-10 flex items-center justify-center cursor-pointer 
               bg-white text-black rounded-full shadow-md hover:bg-gray-200 z-10"
  >
    <FaArrowRight />
  </button>
);

const Products = () => {
  const products = useMemo(
    () => [
      {
        id: 1,
        name: "Premium Virgin Hair",
        subtitle: "Long-Lasting Shine",
        img: "../../src/assets/Images/Hair7.jpg",
      },
      {
        id: 2,
        name: "Raw Hair Extensions",
        subtitle: "Long-Lasting Shine",
        img: "../../src/assets/Images/Hair6.jpg",
      },
      {
        id: 3,
        name: "Custom Wigs & Closures",
        subtitle: "Long-Lasting Shine",
        img: "../../src/assets/Images/Hair8.jpg",
      },
      {
        id: 4,
        name: "Blonde Hair Extensions",
        subtitle: "Long-Lasting Shine",
        img: "../../src/assets/Images/Hair4.jpg",
      },
      {
        id: 5,
        name: "Straight Human Hair",
        subtitle: "Shiny & Smooth",
        img: "../../src/assets/Images/Hair5.jpg",
      },
      {
        id: 6,
        name: "Curly Hair Extensions",
        subtitle: "Bouncy & Natural",
        img: "../../src/assets/Images/Hair1.jpg",
      },
    ],
    []
  );

  const settings = useMemo(
    () => ({
      dots: false,
      infinite: true,
      speed: 600,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 2 } },
        { breakpoint: 640, settings: { slidesToShow: 1 } },
      ],
    }),
    []
  );

  return (
    <section className="bg-black text-white py-16 relative">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-serif lg:text-4xl font-bold mb-3 font-mariposa">
          Explore Our Products
        </h2>
        <p className="text-gray-300 mb-8 font-montserrat">
          Discover the Perfect Blend of Quality, Innovation, and Style
        </p>

        <div className="flex justify-between items-center mb-10">
          <button
            className="cursor-pointer px-5 py-1 rounded-full text-gray-800 bg-[#be9b81] font-montserrat font-medium 
                             hover:bg-[#E0AC85] hover:text-white transition duration-300 ease-in-out"
          >
            New Arrivals
          </button>
          <button
            className="cursor-pointer border border-gray-400 px-5 py-1 rounded-full text-sm 
                             transition duration-300 ease-in-out
                             hover:bg-[#E0AC85] hover:text-white hover:border-[#E0AC85]"
          >
            See All Product
          </button>
        </div>

        <div className="relative">
          <Slider {...settings}>
            {products.map((item) => (
              <div key={item.id} className="px-3">
                <div className="flex flex-col items-center w-full">
                  <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full relative">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-80 object-cover"
                    />

                    <div className="absolute inset-0 flex justify-center items-end m-4 cursor-pointer">
                      <div className="bg-white rounded-full flex items-center shadow px-2 py-1">
                        <span className="bg-black text-white text-xs sm:text-sm px-3 py-1 rounded-l-full">
                          100%
                        </span>
                        <span className="text-black text-xs sm:text-sm px-3 py-1 rounded-r-full">
                          Human Hair
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-semibold text-white">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-300 font-medium font-serif">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Products;
