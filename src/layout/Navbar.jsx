import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import resume from "../assets/pdf/BoluAdetifaResume.pdf";
import logo from "../assets/icons/logo.png";
import { HiMenuAlt2 } from "react-icons/hi";
import Sidebar from "./Sidebar";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <header
        className={`w-full text-black bg-white/80 backdrop-blur-md  ${
          isScrolled && "bg-white text-black"
        }`}
      >
        <div className="w-full h-[3rem] md:flex hidden flex justify-between items-center 2xl:max-w-[110rem] max-w-[85rem] mx-auto ">
          <a 
          href="/"
          className="md:flex hidden items-center space-x-2 md:space-x-10">
            <img
            className="h-15 w-20"
              src={logo}
            />
          </a>

          <ul className="hidden items-center space-x-10 md:flex">
            <li className="headerLink">
              <a href="/">Home</a>
            </li>
            <li className="headerLink">
              <a href="#about">About</a>
            </li>
            <li className="headerLink">
              <a href="#services">Services</a>
            </li>
            <li className="headerLink">
              <a href="#contact">Contact</a>
            </li>
            <a
            href="appointment"
             className="">
            <button
            class="px-4 py-4 font-medium tracking-wide text-white  capitalize transition-colors duration-300 transform bg-black rounded-lg ">
                    <p className="">
                      Appointment
                    </p>
                  </button>
            </a>
          </ul>
        </div>
        <div className="flex md:hidden justify-between items-center space-x-2 md:space-x-10">
        <img
            className="h-15 w-20"
              src={logo}
            />
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="">
            <HiMenuAlt2 className="w-7 h-7" />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
