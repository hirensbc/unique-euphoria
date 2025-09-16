import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 text-sm font-sans">
    
      <div className="w-full border-b border-gray-700 pt-10 px-6 lg:px-20"></div>

      <div className="py-10 px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-6">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-2xl font-semibold text-white mb-2">
              Ready To Glow?
            </h2>
            <p className="text-gray-400 text-sm">
              Subscribe for info on our latest products + discounts, sales and
              more!
            </p>
          </div>

         
          <div className="hidden lg:block border-l border-gray-700 h-16 mx-6"></div>

          <div className="flex-1 w-full lg:max-w-md">
            <div className="flex bg-white rounded-full shadow-sm overflow-hidden">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 px-4 py-2 text-black focus:outline-none text-sm"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-[#E0AC85] text-white text-sm font-medium hover:bg-white hover:text-[#E0AC85] transition-colors duration-300"
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
            <h3 className="text-white font-semibold mb-4">Unique Euphoria</h3>
            <p className="mb-4 text-gray-400 text-sm leading-relaxed">
              At Unique Euphoria, we offer premium-quality hair extensions and
              wigs that enhance your beauty and confidence. Elevate your style
              with our luxurious, natural-looking products designed to bring out
              your best, inside and out.
            </p>
            <div className="flex justify-center lg:justify-start gap-4 text-lg">
              <a
                href="#"
                className="text-gray-400 hover:text-white border border-gray-700 p-2 rounded-full hover:bg-[#E0AC85] transition-colors duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white border border-gray-700 p-2 rounded-full hover:bg-[#E0AC85] transition-colors duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white border border-gray-700 p-2 rounded-full hover:bg-[#E0AC85] transition-colors duration-300"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

       
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Products", "About Us", "Awards", "Video Review", "Testimonials", "Blogs"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

        
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
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
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2">
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


      <div className="py-4 px-6 lg:px-20 flex flex-col lg:flex-row justify-between items-center text-gray-500 text-xs">
        <p className="mb-2 lg:mb-0">
          © 2025 Unique Euphoria. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-2 lg:mt-0 justify-center lg:justify-end">
          <a href="#" className="hover:underline">
            Terms and Condition
          </a>
          <a href="#" className="hover:underline">
            Return Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
