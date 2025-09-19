import React from "react";
import Icon from "../Components/Icon";

import NavBar from "../Components/NavBar";
import Testimonial from "../Components/Testimonial";
import Appointment from "../Components/Appointment";

import model13 from "../assets/Images/model13.png";
import model14 from "../assets/Images/model14.png";
import logo from "../assets/Images/logoBlack.png";
import hair2 from "../assets/Images/Hair2.jpg";
import hair5 from "../assets/Images/Hair5.jpg";
import InfoSection from "../Components/InfoSection";

const info = [
  {
    img: logo,
    title: "Our Story",
    desc: "At Unique Euphoria, we believe that beauty is an expression of confidence and individuality. Our journey began with a simple mission: to provide luxurious, high-quality hair solutions that empower individuals to feel their best. With a passion for elegance and excellence, we curate hair products that blend beauty with timeless sophistication.",
    reverse: false,
  },
  {
    img: hair2,
    title: "Our Mission",
    desc: "Our mission is to redefine luxury hair care by offering premium, ethically sourced products that enhance natural beauty and boost self-confidence. We are dedicated to providing every customer with an exceptional experience, ensuring they feel empowered, radiant, and uniquely themselves.",
    reverse: true,
  },
  {
    img: hair5,
    title: "Our Commitment <br /> to Quality",
    desc: "Every strand of hair we offer is carefully selected and ethically sourced to ensure unmatched quality and durability. From natural textures to stunning styles, our products are crafted to enhance your beauty effortlessly. Whether you seek volume, length, or a fresh new look, Unique Euphoria is dedicated to delivering hair that feels as incredible as it looks.",
    reverse: false,
  },
];

const About = () => {
  return (
    <>
      <NavBar textColor="text-black" />
      <section className="flex py-16 px-4 sm:px-6 lg:px-12 gradient-background w-full mx-auto">
        <div className="max-w-7xl mx-auto lg:grid grid-cols-2 lg:grid-cols-2 gap-12 items-start xs:flex xs:flex-col xs:flex-col-reverse">
          <div className="text-left space-y-6">
            <h2 className="text-4xl md:text-5xl font-medium font-mariposa  text-black mb-4">
              About Unique Euphoria
            </h2>
            <p className="text-black leading-relaxed font-montserrat font-medium">
              At Unique Euphoria, we redefine beauty with luxury hair solutions
              designed for confidence and elegance. Our brand is built on the
              foundation of quality, innovation, and self-expression, offering
              premium hair products that empower individuals to embrace their
              unique beauty. From ethically sourced hair extensions to expertly
              crafted wigs, every product is designed to deliver unmatched
              quality, versatility, and a natural look. We are more than just a
              beauty brand—we are a movement that celebrates diversity,
              confidence, and the art of transformation. With a commitment to
              excellence and customer satisfaction, Unique Euphoria continues to
              inspire and elevate beauty standards, making luxury hair
              accessible to all.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <div className="w-full h-full">
                <img
                  src={model14}
                  alt="Another model"
                  className="w-full h-full rounded-xl shadow-lg object-cover"
                />
              </div>
              <div className="w-full   bg-black rounded-xl  flex flex-col justify-center items-center text-white p-6">
                <span className="text-5xl lg:text-6xl font-mariposa font-bold">
                  15+
                </span>
                <p className="mt-2 text-sm lg:text-base font-normal">
                  Year Experience
                </p>
              </div>
            </div>
            <div className="w-full h-full">
              <img
                src={model13}
                alt="Another model"
                className="w-full h-full rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col justify-center items-center bg-white">
        <InfoSection info={info} />

        <Icon />
        <div className="mx-auto bg-black w-full">
          <Testimonial />
        </div>
        <Appointment />
      </section>
    </>
  );
};

export default About;
