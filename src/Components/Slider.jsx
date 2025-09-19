import React from "react";
import Slider from "react-slick";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { useResponser } from "../Hooks/useResponser";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const ProductCard = ({ product }) => (
  <div className="px-3">
    <div className="w-full bg-white rounded-3xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover rounded-3xl font-montserrat"
        />
        <div className="absolute top-4 right-4 bg-[#C0A887] text-white text-xs font-montserrat font-semibold px-4 py-2 rounded-full">
          {product.discount}
        </div>
      </div>
      <div className="p-4 bg-transparent text-center">
        <h3 className="text-lg text-black mt-2 font-montserrat">
          {product.name}
        </h3>
      </div>
    </div>
  </div>
);

const ProductSlider = ({
  title,
  bgWhite,
  products = [],
  filters = [],
  activeCategory,
  setActiveCategory,
}) => {
  const slidesToShow = useResponser();
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div
      className={`container min-h-screen ${bgWhite} text-black p-8 flex flex-col items-center justify-center font-inter`}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-mariposa font-bold text-[#333]">
          {title}
        </h2>

        <div className="mt-8 flex lg:flex-row xs:flex-col items-center justify-center lg:space-x-4 xs:space-x-0">
          {filters.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`xs:px-4 lg:px-6 py-2 lg:w-auto xs:w-[200px] rounded-full lg:text-[16px] xs:text-xs font-medium cursor-pointer border transition-all duration-300 font-montserrat ${
                activeCategory === cat
                  ? "bg-black text-white border-black scale-105"
                  : "bg-transparent text-black border-gray-400 hover:bg-black hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="relative w-full max-w-6xl">
        <Slider {...settings}>
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductSlider;
