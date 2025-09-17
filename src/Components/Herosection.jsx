import React, { useRef, useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";

import Group from "../../src/assets/Images/Group.png";
import Hair2 from "../../src/assets/Images/Hair2.jpg";
import Hair6 from "../../src/assets/Images/Hair6.jpg";
import Hair4 from "../../src/assets/Images/Hair4.jpg";
import Hair3 from "../../src/assets/Images/Hair3.jpg";

const Hero = () => {
  const sliderRef = useRef(null);

  const categories = useMemo(
    () => [
      { name: "Topper Collection", img: Hair2 },
      { name: "Wig Collection", img: Hair6 },
      { name: "Hair Lace", img: Hair4 },
      { name: "New Arrivals", img: Hair3 },
      { name: "Topper Collection", img: Hair2 },
      { name: "Wig Collection", img: Hair6 },
      { name: "Hair Lace", img: Hair4 },
      { name: "New Arrivals", img: Hair3 },
    ],
    []
  );

  const settings = useMemo(
    () => ({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 600,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 2 } },
        { breakpoint: 640, settings: { slidesToShow: 1 } },
      ],
    }),
    []
  );

  return (
    <section className="relative lg:py-16 px-4 sm:px-6 lg:px-12 gradient-background">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-left">
          <p className="text-xs sm:text-xl tracking-wide text-black font-montserrat font-medium">
            Luxurious, Confident, and Empowering
          </p>
          <h1 className="2xl:text-7xl md:text-4xl  font-Mariposa font-bold text-[#BE9B81] leading-tight">
            Luxury Hair, <br /> Timeless Beauty
          </h1>
          <p className="md:text-2xl font-semibold sm:text-lg font-forum text-black max-w-md font-medium">
            Premium quality hair for every woman, every style, and every
            occasion.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={Group}
            alt="Luxury Hair"
            // className="rounded-xl w-[260px] sm:w-[320px] lg:w-[400px] object-contain"
            // className="rounded-xl w-[260px] sm:w-[320px] lg:w-[400px] object-contain"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative mt-12 sm:mt-16">
        <div className="absolute inset-y-0 left-0 flex items-center pl-0 sm:pl-4 z-20">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-transparent border-1
                 hover:text-white hover:bg-[var(--primary)] transition cursor-pointer duration-300 ease-in-out"
          >
            <IoIosArrowRoundBack className="text-xl sm:text-2xl text-black" />
          </button>
        </div>

        <div className="absolute inset-y-0 md:left-22 xs:right-0 flex items-center pr-2 sm:pr-4 z-20">
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[var(--primary)] border-1 border-[var(--primary)]
                 hover:text-white hover:bg-[var(--primary)] transition cursor-pointer duration-300 ease-in-out"
          >
            <IoIosArrowRoundForward className="text-xl sm:text-2xl text-black" />
          </button>
        </div>

        <Slider {...settings} className="px-4 md:ml-50 sm:px-6" ref={sliderRef}>
          {categories.map((item, idx) => (
            <div key={idx} className="px-2 sm:px-3">
              <div className="p-4 flex flex-col items-center gap-2 bg-white rounded-2xl shadow-sm hover:shadow-lg transition">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-24 sm:h-32 lg:h-36 object-cover rounded-xl"
                />
                <div className="flex items-center justify-between w-full mt-2">
                  <p className="text-sm sm:text-base font-medium font-montserrat text-gray-800">
                    {item.name}
                  </p>
                  <MdArrowOutward className="text-base sm:text-lg text-black" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Hero;
