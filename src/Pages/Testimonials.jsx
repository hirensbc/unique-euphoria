import React from "react";
import NavBar from "../Components/NavBar";
import Testimonial from "../Components/Testimonial";
import RealLife from "../Components/RealLife";
import ClientTestimonialsImg from "../assets/Images/ClientTestimonials.jpg";

import model7 from "../assets/Images/model7.png";
import model9 from "../assets/Images/model9.png";
import model12 from "../assets/Images/model12.png";
import model6 from "../assets/Images/model6.png";

import model19 from "../assets/Images/model19.png";
import model20 from "../assets/Images/model20.png";
import model21 from "../assets/Images/model21.png";

const Testimonials = () => {
  const realLifeData = [
    { img: model7 },
    { img: model9 },
    { img: model12 },
    { img: model6 },
    { img: model19 },
    { img: model20 },
    { img: model21 },
  ];

  return (
    <>
      <div className="absolute top-0 left-0 w-full z-50">
        <NavBar textColor="text-white" />
      </div>
      <section
        className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative brightness-65"
        style={{ backgroundImage: `url(${ClientTestimonialsImg})` }}
      >
        {/* <div className="absolute inset-0 bg-opacity-40"></div> */}
        {/* <div className="relative z-10 text-center">
        </div> */}
      </section>
      <h1 className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white text-4xl md:text-6xl font-mariposa font-bold mb-4">
        Client Testimonials
      </h1>

      <RealLife
        title="Client Stories"
        subtitle="How Unique Euphoria Changed Their Look"
        testimonials={realLifeData}
      />
      <Testimonial />

      <RealLife
        title="See It In Real Life"
        subtitle="Bringing Concepts to Life - See, Feel, and Experience the Difference"
        testimonials={realLifeData}
      />
    </>
  );
};

export default Testimonials;
