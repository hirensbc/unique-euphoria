import React, { useRef, useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import model3 from "../../src/assets/Images/model3.jpg";
import model6 from "../../src/assets/Images/model6.png";
import model12 from "../../src/assets/Images/model12.png";
import { LiaAngleRightSolid, LiaAngleLeftSolid } from "react-icons/lia";


const Testimonial = () => {
  const sliderRef = useRef(null);

  const testimonials = useMemo(
    () => [
      {
        img: model3,
        name: "Samantha R.",
        rating: 5,
        text: "I was hesitant to try a new stylist, but this website made it so easy to find the perfect match! The recommendations were spot-on, and I couldn't be happier with my haircut. The stylist understood exactly what I wanted and even suggested a few enhancements that made my hair look even better. I've received so many compliments—I'll definitely be back.",
      },
      {
        img: model6,
        name: "Jessica K.",
        rating: 4,
        text: "Amazing experience! The stylist was professional and listened to my needs. My hair has never looked better.",
      },
      {
        img: model12,
        name: "Olivia M.",
        rating: 5,
        text: "Highly recommend! The website made booking so simple, and the stylist's suggestions were perfect.",
      },
    ],
    []
  );

  const settings = useMemo(
    () => ({
      dots: false,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    }),
    []
  );

  return (
    <div className="bg-black">
      <div className="bg-black text-white py-16 px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-2 font-mariposa">Customer Testimonials</h2>
          <p className="text-gray-400 font-montserrat">Real Stories from Happy Customers</p>
        </div>

        <Slider {...settings} ref={sliderRef}>
          {testimonials.map((item, index) => (
            <div key={index}>
              <div className="flex flex-col-2 lg:flex-row items-center lg:items-start gap-12">
                <div className="lg:justify-start">
                  <img
                    src={item.img}
                    alt="Customer"
                    className="w-[350px] p-2 object-scale-down md:object-cover rounded-2xl"
                  />
                </div>

                <div className="flex-1 text-left relative">
                  <div className="flex items-center mb-4">
                    <span className="text-xl">{"★".repeat(item.rating)}</span>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {item.text}
                  </p>
                  <p className="font-handwriting text-lg font-montserrat">{item.name}</p>

                  <div className="flex gap-4 mt-8 justify-end">
                    <button
                      onClick={() => sliderRef.current.slickPrev()}
                      className="w-10 h-10 cursor-pointer flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200"
                    >
                      <LiaAngleLeftSolid />
                    </button>
                    <button
                      onClick={() => sliderRef.current.slickNext()}
                      className="w-10 h-10 cursor-pointer font-bold flex items-center justify-center rounded-full bg-[#b37b4d] text-white hover:bg-opacity-90"
                    >
                      <LiaAngleRightSolid/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
