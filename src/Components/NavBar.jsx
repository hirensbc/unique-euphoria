import React, { useState } from "react";
import Logo from "../assets/Images/Logo.png";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = ({ textColor = "text-black" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex flex-col items-center w-full mb-1 font-montserrat">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 sm:px-6 lg:px-12 gradient-border-rounded rounded-full mt-4 w-full">
        {/* <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 sm:px-6 lg:px-12 border-4 border-[#E0AC85]/10 rounded-full mt-4  shadow-md w-full"> */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Unique Euphoria" className="h-10" />
        </div>

        <nav
          className={`hidden md:flex items-center gap-8 text-sm sm:text-base ${textColor}`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? " font-semibold" : "hover:text-[#7c5a3a]"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? " font-semibold" : "hover:text-[#7c5a3a]"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/testimonials"
            className={({ isActive }) =>
              isActive ? " font-semibold" : "hover:text-[#7c5a3a]"
            }
          >
            Testimonials
          </NavLink>
          <NavLink
            to="/awards"
            className={({ isActive }) =>
              isActive ? " font-semibold" : "hover:text-[#7c5a3a]"
            }
          >
            Awards
          </NavLink>
        </nav>

        <NavLink
          to="/collection"
          className={({ isActive }) =>
            isActive
              ? "hidden md:block px-5 py-2 rounded-full font-montserrat font-medium text-white bg-[var(--primary)] transition duration-300 ease-in-out"
              : "hidden md:block px-5 py-2 rounded-full font-montserrat font-medium text-gray-800 bg-white hover:text-white hover:bg-[var(--primary)] transition duration-300 ease-in-out"
          }
        >
          Explore Collection
        </NavLink>

        <button
          className="md:hidden p-2 rounded-md border border-[#E0AC85] text-[#b48059]"
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
        <nav className="w-full bg-[#f5e2d2aa] rounded-xl animate-slideDown border border-[#E0AC85]/40">
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
              to="#"
              className="hover:text-[#E0AC85]"
              onClick={() => setIsOpen(false)}
            >
              Award
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
              className="px-5 py-2 rounded-full text-gray-800 bg-white border border-[#E0AC85] font-medium hover:text-white hover:bg-[var(--primary)] transition duration-300 ease-in-out"
            >
              Explore Collection
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
