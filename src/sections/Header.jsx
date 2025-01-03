import React from "react";
import LogoImage from "../assets/logo.png";
import { HashLink as Link } from "react-router-hash-link";

function Header() {
  return (
    <header
      className="h-[12vh] my-12 mx-8 sm:mx-24 border border-background shadow-md shadow-dark rounded-full fixed top-0 w-[85%] backdrop-blur-3xl flex justify-between"
      style={{ zIndex: 99 }}
    >
      <img src={LogoImage} className="w-[100px] mx-8 cursor-pointer" alt="" />
      <ul className="flex justify-center items-center gap-10 pr-10 text-white">
        <Link to="#home" className="hidden sm:block">
          Home
        </Link>
        <Link to="#education" className="hidden sm:block">
          Education
        </Link>
        <Link to="#skills" className="hidden sm:block">
          Skills
        </Link>
        <Link
          to="#projects"
          className="flex justify-between items-center text-md font-semibold text-white bg-gradient-to-bl from-background to-dark py-2 px-5 rounded-full hover:scale-110 duration-300"
        >
          Projects
        </Link>
      </ul>
    </header>
  );
}

export default Header;
