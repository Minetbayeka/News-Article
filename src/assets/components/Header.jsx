import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "./Button";
import {
  
  Menu,
  X,
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="relative mx-auto max-w-7xl px-4">
      <div className="flex items-center justify-between mt-8">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide cursor-pointer">
          NEWS-<span className="text-[#cc3333]">ARTICLES</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex gap-10 text-base">
            <li className="hover:text-orange-400">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-orange-400">
              <Link to="/AboutUs">About</Link>
            </li>
            <li className="hover:text-orange-400">
              <Link to="/Services">Need our help</Link>
            </li>
            <li className="hover:text-orange-400">
              <Link to="/Gallery">Get Involved</Link>
            </li>
            <li className="hover:text-orange-400">
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <Link to="/Login">
            <Button title={"How to Donate"} lg />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="lg:hidden p-2 text-black">
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 bg-white p-6 rounded-lg shadow-md">
          <ul className="flex flex-col gap-4 text-base">
            <li className="hover:text-orange-400">
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="hover:text-orange-400">
              <Link to="/AboutUs" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className="hover:text-orange-400">
              <Link to="/Services" onClick={closeMenu}>
                Need our help
              </Link>
            </li>
            <li className="hover:text-orange-400">
              <Link to="/Gallery" onClick={closeMenu}>
                Get Involved
              </Link>
            </li>
            <li className="hover:text-orange-400">
              <Link to="/Contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>

          <div className="mt-5">
            <Link to="/Login" onClick={closeMenu}>
              <Button title={"Memberships"} lg />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
