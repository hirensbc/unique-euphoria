import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white text-sm font-sans">
      <div className="w-full border-b border-gray-700 pt-10 px-6 lg:px-20"></div>

      <div className="py-10 px-6 lg:px-20">
        <div className="flex xs:flex-col sm:flex-col lg:flex-row justify-between items-center justify-items-center lg:items-end gap-6">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-semibold text-white mb-2 font-mariposa">
              Ready To Glow?
            </h2>
            <p className="text-white text-sm font-montserrat">
              Subscribe for info on our latest products + discounts, sales and
              more!
            </p>
          </div>
          <div className="hidden lg:block border-l border-gray-700 h-25"></div>

          <div className="flex-1 w-full lg:max-w-md ">
            <div className="flex bg-white rounded-full shadow-sm overflow-hidden sm:px-1 xs:px-1">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 font-montserrat pl-4 py-1 text-black focus:outline-none text-sm"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#BE9B81] text-white text-sm font-medium font-montserrat m-2 rounded-full transition-all duration-300 hover:bg-[#a67f67] hover:shadow-lg "
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-b border-gray-700 py-4 px-6 lg:px-20"></div>

      <div className="py-10 px-6 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 text-center lg:text-left">
          <div>
            <h3 className="text-white font-semibold mb-4 font-mariposa">
              Unique Euphoria
            </h3>
            <p className="mb-4 text-white text-sm leading-relaxed font-montserrat ">
              At Unique Euphoria, we offer premium-quality hair extensions and
              wigs that enhance your beauty and confidence. Elevate your style
              with our luxurious, natural-looking products designed to bring out
              your best, inside and out.
            </p>
            <div className="flex justify-center lg:justify-start gap-4 text-lg">
              <a
                href="#"
                className="text-white hover:text-white border border-gray-700 p-2 rounded-full hover:bg-[#E0AC85] transition-colors duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-white hover:text-white border border-gray-700 p-2 rounded-full hover:bg-[#E0AC85] transition-colors duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-white hover:text-white border border-gray-700 p-2 rounded-full hover:bg-[#E0AC85] transition-colors duration-300"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold  mb-4 font-mariposa ">
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

          <div>
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

          <div>
            <h3 className="text-white font-semibold mb-4 font-mariposa">
              Get in Touch
            </h3>
            <ul className="space-y-2 font-montserrat ">
              <li>+91 00000 00000</li>
              <li>
                Buddha Jadawadi,
                <br />
                Opp Digital Equipment Ltd,
                <br />
                Mumbai
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full border-b border-gray-700"></div>

      <div className="max-w-8xl py-4 text-white lg:px-5 flex xs:justify-center xs:items-center xs:flex-col xs:flex lg:justify-end lg:flex-row text-xs md:space-x-200">
        <p className="mb-2 lg:mb-0 lg:text-base xs:text-[10px]">
          © 2025 Unique Euphoria. All rights reserved.
        </p>
        <div className="flex space-x-10 xs:space-x-1 sm:block lg:mt-0 lg:justify-end ">
          {/* <div className="flex space-x-6 mt-2 lg:mt-0 justify-center lg:justify-end"> */}
          <a href="#" className="hover:underline mr-5">
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
