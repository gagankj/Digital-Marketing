import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="flex fixed w-full h-20 items-center justify-between p-4 bg-glass backdrop-filter backdrop-blur-2xl rounded-lg">
      {/* Logo on the left */}
      <img className='h-20' src={logo} alt="Logo" />

      {/* Links in the center */}
      <div className="flex p-2 text-black text-lg gap-5 space-x-6 mx-auto">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative hover:text-orange-500 ${isActive ? "text-orange-500" : ""}`
          }
        >
          <span className="relative inline-block">
            Home
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-orange-500 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
          </span>
        </NavLink>

        {/* Services dropdown */}
        <div 
          className="relative group"
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `relative hover:text-orange-500 ${isActive ? "text-orange-500" : ""}`
            }
          >
            <span className="relative inline-block">
              Services
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-orange-500 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
            </span>
          </NavLink>

          {/* Dropdown menu */}
          <div 
            className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg transition-all duration-300 ease-in-out transform ${isServicesOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} group-hover:scale-100 group-hover:opacity-100`}
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

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `relative hover:text-orange-500 ${isActive ? "text-orange-500" : ""}`
          }
        >
          <span className="relative inline-block">
            About
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-orange-500 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
          </span>
        </NavLink>
        <NavLink
          to="/pricing"
          className={({ isActive }) =>
            `relative hover:text-orange-500 ${isActive ? "text-orange-500" : ""}`
          }
        >
          <span className="relative inline-block">
            Pricing
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-orange-500 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
          </span>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `relative hover:text-orange-500 ${isActive ? "text-orange-500" : ""}`
          }
        >
          <span className="relative inline-block">
            Contact
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-orange-500 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
          </span>
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `relative hover:text-orange-500 ${isActive ? "text-orange-500" : ""}`
          }
        >
          <span className="relative inline-block">
            Blog
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-orange-500 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
          </span>
        </NavLink>
      </div>

      {/* Call us button on the right */}
      <div>
        <button className="bg-orange-500 text-white rounded-3xl px-4 py-2 transition duration-500 ease-in-out hover:bg-black hover:text-orange-500">
          Call Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
