import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [nav, setNav] = useState(true);
  function handleNav() {
    setNav(!nav);
  }
  return (
    <div className="py-10 px-20 md:px-56 bg-primary w-full flex justify-between font-poppins border-b">
      <h4
        className={
          nav ? "text-4xl cursor-pointer font-bold text-font " : "hidden"
        }
      >
        PORTFOLIO
      </h4>
      <div>
        <div className="text-white fixed top-8 right-8 md:hidden">
          {nav ? (
            <MenuIcon onClick={handleNav} />
          ) : (
            <CloseIcon onClick={handleNav} />
          )}
        </div>
        <ul
          className={
            !nav
              ? "fixed top-0 left-0 h-full w-[60%] bg-primary font-sans text-lg  text-cardFont md:hidden"
              : "hidden"
          }
        >
          <h3 className="text-4xl text-font font-semibold font-poppins px-6 py-10">
            PORTFOLIO
          </h3>
          <div className="space-y-6 px-6">
            <li className="border-b pb-3">
              <HashLink to="/">Home</HashLink>
            </li>
            <li className="border-b pb-3">
              <HashLink to="#about">About</HashLink>
            </li>
            <li className="border-b pb-3">
              <HashLink to="#skills">Skills</HashLink>
            </li>
            <li className="border-b pb-3">
              <HashLink to="#projects">Projects</HashLink>
            </li>
          </div>
        </ul>
        <ul className="font-sans text-lg space-x-8 hidden text-cardFont md:flex">
          <li>
            <HashLink to="/">Home</HashLink>
          </li>
          <li>
            <HashLink to="#about">About</HashLink>
          </li>
          <li>
            <HashLink to="#skills">Skills</HashLink>
          </li>
          <li>
            <HashLink to="#projects">Projects</HashLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
