import React, { useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { FaPlay } from "react-icons/fa";

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 
    w-10 h-10 flex items-center justify-center bg-white text-gray-800 rounded-full 
    shadow-md border hover:bg-[#E0AC85] hover:text-white transition z-10 cursor-pointer"
  >
    <IoIosArrowRoundBack className="text-2xl" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 
    w-10 h-10 flex items-center justify-center bg-white text-gray-800 rounded-full 
    shadow-md border hover:bg-[#E0AC85] hover:text-white transition z-10 cursor-pointer"
  >
    <IoIosArrowRoundForward className="text-2xl" />
  </button>
);

const RealLife = ({ title, subtitle, testimonials }) => {
  const dataToShow = testimonials || [];

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
    <section className="py-16 max-w-7xl mx-auto bg-gradient-to-r from-[#b48059] to-[#ffffff]  ">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold font-mariposa mb-3 text-black">
          {title}
        </h2>
        <p className="text-black mb-8 font-montserrat">{subtitle}</p>

        <div className="relative">
          <Slider {...settings}>
            {dataToShow.map((item, index) => (
              <>
                <div key={index} className="relative px-3 h-[200px] group">
                  <img
                    src={item.img}
                    alt={`Real life showcase ${index + 1}`}
                    className="w-full h-[500px] xs:h-[200px] object-cover rounded-[25px]"
                  />

                  <div className="absolute inset-0 flex justify-center items-center">
                    <button
                      aria-label="Play video"
                      className="w-12 h-12 flex items-center justify-center bg-white/80 
                    rounded-full shadow-lg cursor-pointer hover:bg-[#E0AC85] 
                    hover:text-white transition"
                    >
                      <FaPlay className="text-black group-hover:text-white" />
                    </button>
                  </div>
                  <div className="absolute inset-0 flex justify-center items-end mb-0 xs:mt-5">
                    <button className="bg-[#BE9B81] text-black cursor-pointer rounded-full font-montserrat shadow w-[250px] px-4 py-1 text-sm border-2 border-[#ECDED3] hover:bg-[#E0AC85] hover:border-2 border-[#ECDED3] hover:text-white transition">
                      View Details
                    </button>
                  </div>
                </div>
              </>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default RealLife;
