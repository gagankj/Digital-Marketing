import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  return (
    <nav className="fixed w-full h-20 bg-glass backdrop-filter backdrop-blur-2xl p-4 flex justify-between items-center z-10">
      {/* Logo */}
      <img className='h-12 md:h-20' src={logo} alt="Logo" />

      {/* Hamburger Icon for mobile view */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          className="text-black focus:outline-none"
        >
          <FontAwesomeIcon icon={faBars} className="w-8 h-8" />
        </button>
      </div>

      {/* Navigation Links */}
      <div className={`md:flex md:items-center md:gap-6 space-x-0 flex-col md:flex-row ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative hover:text-orange-500 ${isActive ? "text-orange-500" : ""}`
          }
        >
          Home
        </NavLink>

        {/* Services Link */}
        <div className="relative md:block">
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `relative hover:text-orange-500 ${isActive ? "text-orange-500" : ""}`
            }
            onClick={() => setIsServicesOpen(!isServicesOpen)} // Toggle on click for mobile
          >
            Services
          </NavLink>
          {/* Dropdown */}
          <div
            className={`absolute left-0 mt-2 w-48 bg-white backdrop-blur-2xl border border-white/30 rounded-lg transition-all duration-300 ease-in-out transform ${isServicesOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
          >
            <NavLink to="/social" className="block px-4 py-2 hover:bg-orange-500 hover:text-white">
              Social Media Management
            </NavLink>
            <NavLink to="/whatsapp" className="block px-4 py-2 hover:bg-orange-500 hover:text-white">
              WhatsApp Marketing
            </NavLink>
            <NavLink to="/web" className="block px-4 py-2 hover:bg-orange-500 hover:text-white">
              Web Development
            </NavLink>
            <NavLink to="/ppc" className="block px-4 py-2 hover:bg-orange-500 hover:text-white">
              Pay Per Click
            </NavLink>
            <NavLink to="/seo" className="block px-4 py-2 hover:bg-orange-500 hover:text-white">
              SEO
            </NavLink>
          </div>
        </div>

        {/* Other Links */}
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `relative hover:text-orange-500 ${isActive ? "text-orange-500" : ""}`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/pricing"
          className={({ isActive }) =>
            `relative hover:text-orange-500 ${isActive ? "text-orange-500" : ""}`
          }
        >
          Pricing
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `relative hover:text-orange-500 ${isActive ? "text-orange-500" : ""}`
          }
        >
          Contact
        </NavLink>

        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `relative hover:text-orange-500 ${isActive ? "text-orange-500" : ""}`
          }
        >
          Blog
        </NavLink>
      </div>

      {/* Call Us Button (hidden on mobile, visible on larger screens) */}
      <div className="hidden md:block">
        <button className="bg-orange-500 text-white rounded-3xl px-4 py-2 transition duration-500 ease-in-out hover:bg-black hover:text-orange-500">
          Call Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
