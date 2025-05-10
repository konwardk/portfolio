import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "../components/ThemeToggle";


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

  const logo = { name: "Dipankor Konwar" };
  const navItems = {
    home: "Home",
    about: "About",
    contact: "Contact",
    services: "Services",
    downloadCV: "Download CV",
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // change threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  return (
    <nav
      className={`fixed top-0 left-0 px-4 py-3 w-full z-50 transition-colors duration-300 shadow-md ${
        scrolled ? "bg-gray-700 text-white" : "bg-gray-700 text-white"
      }`}
    >
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
          className={`md:mx-20 bg-sky-950 md:bg-transparent md:flex gap-6 absolute md:static left-0 w-full md:w-auto transition-all ease-in duration-300 ${
            menuOpen ? "top-12" : "top-[-500px]"
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
          <li className="mx-3 p-3 md:p-0 rounded-md">
            <a className="px-4 py-1 rounded-2xl border-2 border-blue-700"  href="/DK_CV.pdf" target="_blank" rel="noopener noreferrer" onClick={()=>setMenuOpen(false)}>{navItems.downloadCV}</a>
          </li>
          <li>
             <ThemeToggle/>
          </li>
        </ul>
      </div>
    </nav>
  );
};
