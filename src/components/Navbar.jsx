import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const logo = { name: "Dipankor Konwar" };
  const navItems = {
    home: "Home",
    about: "About",
    contact: "Contact",
    services: "Services",
    downloadCV: "Download CV",
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="px-4 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">{logo.name}</div>

        {/* Hamburger / Close Icon */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`bg-black md:mx-20 md:flex gap-6 absolute md:static left-0 w-full md:w-auto transition-all ease-in duration-300 z-50 ${
            menuOpen ? "top-16" : "top-[-500px]"
          }`}
        >
          <li className="p-3 md:p-0">
            <a href="#home" onClick={() => setMenuOpen(false)}>{navItems.home}</a>
          </li>
          <li className="p-3 md:p-0">
            <a href="#about" onClick={() => setMenuOpen(false)}>{navItems.about}</a>
          </li>
          <li className="p-3 md:p-0">
            <a href="#contact" onClick={() => setMenuOpen(false)}>{navItems.services}</a>
          </li>
          <li className="p-3 md:p-0">
            <a href="#contact" onClick={() => setMenuOpen(false)}>{navItems.contact}</a>
          </li>
          <li className="mx-3 p-3 md:p-0 border-2 border-gray-300 rounded-md">
            <a className="p-4" href="/DK_CV.pdf" target="_blank" rel="noopener noreferrer" onClick={()=>setMenuOpen(false)}>{navItems.downloadCV}</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
