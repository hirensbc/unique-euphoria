import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../assets/Images/logo1.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white text-sm">
      <div className="w-full border-b border-gray-700 pt-10 px-6 lg:px-20"></div>

      <div className="py-10 px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center  gap-100">
          <div className="text-center lg:text-left flex-1">
            <h2 className="text-2xl font-semibold text-white mb-2 font-mariposa">
              Ready To Glow?
            </h2>
            <p className="text-white text-sm font-montserrat">
              Subscribe for info on our latest products + discounts, sales and
              more!
            </p>
          </div>
          <div className="hidden lg:block border-l border-white h-35 justify-center"></div>

          {/* This container's responsiveness has been adjusted */}
          <div className="flex-1 w-full lg:max-w-md">
            <div className="flex flex-row items-center bg-white rounded-full shadow-sm overflow-hidden px-1">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 font-montserrat pl-4 py-1 text-black focus:outline-none text-sm"
              />
              <button
                type="submit"
                className="px-4 py-2 md:px-6 md:py-3 bg-[#BE9B81] text-white text-sm font-medium font-montserrat m-2 rounded-full transition-all duration-300 hover:bg-[#a67f67] hover:shadow-lg"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-b border-gray-700 py-4 px-6 lg:px-20 "></div>

      <div className="py-10 px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-start lg:gap-[6%]">
          <div className="text-center lg:text-left w-full lg:w-[35%]">
           <h3 className="text-white font-semibold mb-4 font-mariposa ">
             
              <img src={logo} alt=""  className=" w-[165.75px] h-[49px]  opacity-100" />
            </h3>

            <p className="mb-4 text-white text-sm leading-relaxed font-montserrat">
              At Unique Euphoria, we offer premium-quality hair extensions and
              wigs that enhance your beauty and confidence. Elevate your style
              with our luxurious, natural-looking products designed to bring out
              your best, inside and out.
            </p>
            <div className="flex justify-center lg:justify-start gap-4 text-lg">
              <a
                href="#"
                className="text-[#BE9B81] hover:text-white border border-[#FFFFFF3D] p-2 rounded-full hover:bg-[#E0AC85] transition-colors duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-[#BE9B81] hover:text-white border border-[#FFFFFF3D] p-2 rounded-full hover:bg-[#E0AC85] transition-colors duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-[#BE9B81] hover:text-white border border-[#FFFFFF3D] p-2 rounded-full hover:bg-[#E0AC85] transition-colors duration-300"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between w-full lg:w-auto mt-10 lg:mt-0">
            <div className="text-center sm:text-left sm:pr-10 lg:pr-16 lg:ml-20">
              <h3 className="text-white font-semibold mb-4 font-mariposa">
                Quick Links
              </h3>
              <ul className="space-y-2 font-montserrat">
                {[
                  "Home",
                  "Products",
                  "About Us",
                  "Awards",
                  "Video Review",
                  "Testimonials",
                  "Blogs",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left sm:pr-10 lg:pr-16 lg:ml-20">
              <h3 className="text-white font-semibold mb-4 font-mariposa">
                Our Services
              </h3>
              <ul className="space-y-2 font-montserrat">
                {["Volume", "Length", "Coverage", "Style", "Color"].map(
                  (service) => (
                    <li key={service}>
                      <a
                        href="#"
                        className="hover:text-white transition-colors duration-300"
                      >
                        {service}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            
            <div className="text-center sm:text-left sm:pr-10 lg:pr-16 lg:ml-20">
              <h3 className="text-white font-semibold mb-4 tracking-wide font-mariposa">Get in Touch</h3>
              <address className="space-y-1 not-italic font-montserrat text-sm text-white">
                <p>+91 00000 00000</p>
                <p>Budhia Jadawadi,</p>
                <p>Opp Digital</p>
                <p>Equipment Ltd,</p>
                <p>Mumbai</p>
              </address>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-b border-gray-700"></div>

      <div className="w-full max-w-8xl py-4 text-white lg:px-5 flex flex-col lg:flex-row items-center relative text-xs">
        <p className="text-center font-montserrat w-full lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          © 2025 Unique Euphoria. All rights reserved.
        </p>
        <div className="flex space-x-6 lg:ml-auto mt-2 lg:mt-0 px-18">
          <a href="#" className="hover:underline font-montserrat">
            Terms and Condition
          </a>
          <a href="#" className="hover:underline font-montserrat">
            Return Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
