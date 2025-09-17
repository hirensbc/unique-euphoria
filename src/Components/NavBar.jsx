import React, { useState } from "react";
import Logo from "../assets/Images/Logo.png";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex flex-col items-center w-full mb-1 font-montserrat">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 sm:px-6 lg:px-12 gradient-border-rounded rounded-full mt-4 w-full">
      {/* <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 sm:px-6 lg:px-12 border-4 border-[#E0AC85]/10 rounded-full mt-4  shadow-md w-full"> */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Unique Euphoria" className="h-10" />
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm sm:text-base">
          <NavLink to="/" className="hover:text-[#7c5a3a] font-montserrat">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-[#7c5a3a]">
            About
          </NavLink>
          <NavLink to="/testimonials" className="hover:text-[#7c5a3a]">
            Testimonials
          </NavLink>
          <NavLink to="/collection" className="hover:text-[#7c5a3a]">
            Collection
          </NavLink>
        </nav>

        <button className="hidden md:block px-5 py-2 rounded-full text-gray-800 bg-white font-montserrat font-medium hover:text-white hover:bg-[var(--primary)] transition duration-300 ease-in-out">
          Explore Collection
        </button>

        <button
          className="md:hidden p-2 rounded-md border border-[#E0AC85] text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      <div className={`md:hidden w-full ${isOpen ? "block" : "hidden"} mt-4`}>
        <nav className="w-full bg-[#f5e2d2] shadow-md rounded-xl animate-slideDown border border-[#E0AC85]/40">
          <div className="flex flex-col items-center gap-4 py-4 text-base font-montserrat">
            <NavLink
              to="/"
              className="hover:text-[#E0AC85]"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="hover:text-[#E0AC85]"
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/testimonials"
              className="hover:text-[#E0AC85]"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </NavLink>
            <NavLink
              to="/collection"
              className="hover:text-[#E0AC85]"
              onClick={() => setIsOpen(false)}
            >
              Collection
            </NavLink>
            <button className="px-5 py-2 rounded-full text-gray-800 bg-white border border-[#E0AC85] font-medium hover:text-white hover:bg-[var(--primary)] transition duration-300 ease-in-out">
              Explore Collection
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
