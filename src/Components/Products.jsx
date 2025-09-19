import React, { useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useResponser } from "../Hooks/useResponser";

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
  const slidesToShow = useResponser();

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
      centerMode: true,
      centerPadding: "60",
      infinite: true,
      initialSlide: 0,
      speed: 500,
      slidesToShow,
      slidesToScroll: 1,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 2 } },
        { breakpoint: 640, settings: { slidesToShow: 1 } },
      ],
    }),
    [slidesToShow]
  );

  return (
    <section className="bg-black text-white py-16 lg:mt-0 xs:mt-8 flex flex-col items-end relative">
        <h2 className="text-3xl  lg:text-4xl font-bold mb-3 font-mariposa mx-auto">
          Explore Our Products
        </h2>
        <p className="text-white mx-auto mb-8 font-montserrat ">
          Discover the Perfect Blend of Quality, Innovation, and Style
        </p>
      <div className="max-w-[95%] flex flex-col  px-6 text-center">

        <div className="flex justify-between items-center mb-10">
          <span
            className="lg:px-8 lg:py-3 xs:px-2 xs:py-1.5 rounded-full text-white bg-[#be9b81] font-montserrat font-normal"
          >
            New Arrivals
          </span>
          <button
            className="cursor-pointer border border-gray-400 lg:px-8 lg:py-3 xs:px-2 xs:py-1.5 rounded-full text-sm 
                             transition duration-300 ease-in-out font-montserrat
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
                  <div className="bg-transparent rounded-2xl shadow-md overflow-hidden w-full relative">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full lg:h-100 xs:h-80"
                    />

                    <div className="absolute inset-0 flex justify-center items-end mb-4 cursor-pointer font-montserrat lg:w-full xs:w-100 lg:w-100">
                      <div className="bg-white rounded-full flex items-center shadow px-1 py-1 lg:w-65 xs:w-80">
                        <span className="bg-black text-white text-xs sm:text-sm px-9 py-1 rounded-full">
                          100%
                        </span>
                        <span className="text-black text-xs sm:text-sm pl-6 py-1 rounded-full">
                          Human Hair
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <h3 className="text-lg  text-white font-montserrat">
                      {item.name}
                    </h3>
                    <p className="text-sm text-black font-mariposa font-semibold ">
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
