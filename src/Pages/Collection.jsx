import React, { useMemo, useState } from "react";
import NavBar from "../Components/NavBar";
import Items from "../Components/Slider";
import CollectionImg from "../assets/Images/Collections.png";
import { FaPlay } from "react-icons/fa";
import Slider from "react-slick";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import model15 from "../assets/Images/model15.png";
import model16 from "../assets/Images/model16.png";
import model17 from "../assets/Images/model17.png";
import model18 from "../assets/Images/model18.png";

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 
             w-12 h-12 flex items-center justify-center 
             bg-white text-gray-800 font-montserrat font-medium 
             rounded-full shadow 
             hover:text-white hover:bg-[var(--primary)] 
             transition duration-300 ease-in-out cursor-pointer"
  >
    <IoIosArrowRoundForward className="text-2xl" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 
             bg-white text-black p-3 rounded-full z-10 -ml-4 cursor-pointer shadow 
             hover:text-white hover:bg-[var(--primary)] 
             transition duration-300 ease-in-out"
  >
    <IoIosArrowRoundBack className="text-2xl" />
  </button>
);

const Collection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const videos = useMemo(
    () => [
      { image: model15, title: "Video Tutorial By Our Professional Team" },
      { image: model16, title: "Video Tutorial By Our Professional Team" },
      { image: model17, title: "Video Tutorial By Our Professional Team" },
      { image: model18, title: "Video Tutorial By Our Professional Team" },
    ],
    []
  );

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
    <>
      <div className="absolute top-0 left-0 w-full z-50">
        <NavBar textColor="text-white" />
      </div>
      <section
        className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
        style={{ backgroundImage: `url(${CollectionImg})` }}
      >
        <div className="absolute inset-0 bg-opacity-40"></div>

        <div className="relative z-10 text-center">
          <h1 className="text-white text-4xl md:text-6xl font-mariposa font-bold mb-4">
            Featured Collections
          </h1>
        </div>
      </section>
      <section className="w-full flex flex-col justify-center items-center bg-white">
        <Items
          bgWhite={"bg-white"}
          title={
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#333]">
              Luxury Hair Extensions
            </h1>
          }
        />
        <Items
          bgWhite={"bg-white"}
          title={
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#333]">
              Premium Wigs
            </h1>
          }
        />

        <div className="min-h-screen bg-gradient-to-r from-[#BE9B81] to-[#ECDED3] w-full text-black p-8 flex flex-col items-center justify-center font-inter">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#333] font-mariposa">
              Professionals
            </h2>
            <p className="text-lg md:text-xl font-inter text-gray-600 mt-2 font-montserrat">
              Video Tutorial By Our Professional Team
            </p>
          </div>

          <div className="relative w-full max-w-6xl">
            <Slider {...settings}>
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="relative px-3 lg:h-[515px] sm:h-[215px] group py-4"
                >
                  <div className="relative">
                    <img
                      src={video.image}
                      alt={video.title}
                      className="w-full lg:h-[500px] sm:h-[200px] object-cover rounded-[25px]"
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

                    <div className="absolute inset-0 flex justify-center items-end mb-4">
                      <button
                        onClick={() => setActiveIndex(index)}
                        className={`cursor-pointer rounded-full font-montserrat shadow w-[250px] px-4 py-1 text-sm border-2 transition
            ${
              activeIndex === index
                ? "bg-[#BE9B81] text-white border-[#BE9B81]"
                : "bg-white text-black border-[#ECDED3] hover:bg-[#E0AC85] hover:text-white"
            }
          `}
                      >
                        View Video
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <Items
          bgWhite={"bg-white"}
          title={
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#333]">
              Best Seller
            </h1>
          }
        />
      </section>
    </>
  );
};

export default Collection;
