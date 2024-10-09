import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <footer className="bg-green-200 flex flex-col h-auto p-4 backdrop-filter backdrop-blur-2xl rounded-lg">
        <div className="flex flex-wrap justify-around items-center font-bold text-black text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative hover:text-orange-500 ${isActive ? "text-orange-500" : ""}`
            }
          >
            Home
          </NavLink>

          <div className="relative">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `relative hover:text-orange-500 ${isActive ? "text-orange-500" : ""}`
              }
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Services
            </NavLink>
            {/* Dropdown for services */}
            {dropdownOpen && (
              <div className="absolute bg-green-200 mt-2 w-48 flex flex-col text-sm text-zinc-600 font-medium transition-all duration-300 ease-in-out">
                <NavLink to="/seo" className="block py-2 hover:text-orange-500">
                  SEO
                </NavLink>
                <NavLink to="/whatsapp" className="block py-2 hover:text-orange-500">
                  WhatsApp Marketing
                </NavLink>
                <NavLink to="/social" className="block py-2 hover:text-orange-500">
                  Social Media Management
                </NavLink>
                <NavLink to="/ppc" className="block py-2 hover:text-orange-500">
                  Pay Per Click
                </NavLink>
                <NavLink to="/web" className="block py-2 hover:text-orange-500">
                  Web Development
                </NavLink>
              </div>
            )}
          </div>

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
      </footer>

      <div className="bg-green-200 text-center text-sm text-gray-600 py-2">
        &copy; {new Date().getFullYear()} ADMS. All Rights Reserved.
      </div>
    </>
  );
};

export default Footer;
