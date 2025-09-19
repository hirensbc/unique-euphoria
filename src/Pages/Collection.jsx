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
import { useResponser } from "../Hooks/useResponser";
import Hair1 from "../assets/Images/Hair5.jpg";
import Hair2 from "../assets/Images/Hair3.jpg";
import Hair3 from "../assets/Images/itip.png";
import Hair4 from "../assets/Images/body-wave.png";
import Hair5 from "../assets/Images/Hair5.jpg";
import Hair6 from "../assets/Images/Hair6.jpg";
import Hair7 from "../assets/Images/Hair7.jpg";
import Hair8 from "../assets/Images/Hair2.jpg";

const extensions = [
  { image: Hair1, discount: "25% off", name: "Italian Wave", category: "Wavy" },
  {
    image: Hair2,
    discount: "25% off",
    name: "Straights",
    category: "Straight",
  },
  { image: Hair3, discount: "25% off", name: "I Tip", category: "Straight" },
  { image: Hair4, discount: "25% off", name: "Body Wave", category: "Wavy" },
  {
    image: Hair5,
    discount: "25% off",
    name: "Curly Bounce",
    category: "Curly",
  },
];

const wigs = [
  {
    image: Hair6,
    discount: "25% off",
    name: "Micro Link Hair Premium Human Hair",
    category: "Full Lace",
  },
  {
    image: Hair7,
    discount: "25% off",
    name: "Loose Wave",
    category: "Full Lace",
  },
  {
    image: Hair1,
    discount: "25% off",
    name: "Italian Wave",
    category: "Lace Fronts",
  },
  {
    image: Hair8,
    discount: "25% off",
    name: "Micro Link Hair Premium Human Hair",
    category: "Lace Fronts",
  },
];

const filters = {
  extensions: ["All", "Straight", "Wavy", "Curly"],
  wigs: ["All", "Lace Fronts", "Full Lace", "Custom Wigs"],
  bestSeller: ["All", "Wigs", "Extensions"],
};

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 
             w-12 h-12 flex items-center justify-center 
             bg-white text-black font-montserrat font-medium 
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
  const slidesToShow = useResponser();
  const [extensionCategory, setExtensionCategory] = useState("All");
  const [wigsCategory, setWigsCategory] = useState("All");
  const [bestSellerCategory, setBestSellerCategory] = useState("All");

  const filterProducts = (products, activeCategory, type) => {
    if (activeCategory === "All") return products;
    if (type === "bestSeller") {
      if (activeCategory === "Wigs") return wigs;
      if (activeCategory === "Extensions") return extensions;
    }
    return products.filter((p) => p.category === activeCategory);
  };

  const filteredExtensions = useMemo(
    () => filterProducts(extensions, extensionCategory, "extensions"),
    [extensionCategory]
  );

  const filteredWigs = useMemo(
    () => filterProducts(wigs, wigsCategory, "wigs"),
    [wigsCategory]
  );

  const filteredBestSeller = useMemo(
    () =>
      filterProducts(
        [...extensions, ...wigs],
        bestSellerCategory,
        "bestSeller"
      ),
    [bestSellerCategory]
  );

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
      centerMode: true,
      centerPadding: "60",
      infinite: true,
      initialSlide: 0,
    speed: 600,
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
    <>
      <div className="absolute top-0 left-0 w-full z-50">
        <NavBar textColor="text-white" />
      </div>

      {/* Hero section */}
      <section
        className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative brightness-65"
        style={{ backgroundImage: `url(${CollectionImg})` }}
      />
      <h1 className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white text-4xl md:text-6xl font-mariposa font-bold mb-4">
        Featured Collections
      </h1>

      <section className="w-full flex flex-col justify-center items-center bg-white">
        {/* Extensions */}
        <Items
          title="Luxury Hair Extensions"
          bgWhite="bg-white"
          products={filteredExtensions}
          filters={filters.extensions}
          activeCategory={extensionCategory}
          setActiveCategory={setExtensionCategory}
        />

        {/* Wigs */}
        <Items
          title="Premium Wigs"
          bgWhite="bg-white"
          products={filteredWigs}
          filters={filters.wigs}
          activeCategory={wigsCategory}
          setActiveCategory={setWigsCategory}
        />

        {/* Videos */}
        <div className="min-h-screen bg-gradient-to-r from-[#BE9B81] to-[#ECDED3] w-full text-black p-8 flex flex-col items-center justify-center font-inter">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-mariposa font-bold text-[#333]">
              Professionals
            </h2>
            <p className="text-lg md:text-xl font-inter text-black mt-2 font-montserrat">
              Video Tutorial By Our Professional Team
            </p>
          </div>
          <div className="relative w-full max-w-6xl">
            <Slider {...settings}>
              {videos.map((video, index) => (
                <div key={index} className="px-3">
                  <div className="w-full bg-white rounded-3xl overflow-hidden">
                    <div className="relative h-[full]">
                      <img
                        src={video.image}
                        alt={video.title}
                        className="w-full h-[full] object-cover rounded-3xl"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-opacity-50 rounded-full p-4 cursor-pointer hover:bg-opacity-70 transition">
                          <FaPlay className="h-10 w-10 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 mx-auto lg:translate-x-12 xs:hidden lg:block p-4 bg-transparent text-center">
                      <button className="text-black border-4 bg-white border-[#ECDED3] font-montserrat rounded-full px-17 py-2 mt-2 font-medium cursor-pointer hover:text-white hover:bg-[var(--primary)] transition">
                        View Video
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Best Seller */}
        <Items
          title="Best Seller"
          bgWhite="bg-white"
          products={filteredBestSeller}
          filters={filters.bestSeller}
          activeCategory={bestSellerCategory}
          setActiveCategory={setBestSellerCategory}
        />
      </section>
    </>
  );
};

export default Collection;
