import React from "react";
import whatsappIcon from "../assets/footer/whatsapp.svg";
import instagramIcon from "../assets/footer/instagram.svg";
import facebookIcon from "../assets/footer/facebook.svg";
import linkedInIcon from "../assets/footer/linkedin.svg";
import githubIcon from "../assets/footer/github.svg";
import { HashLink as Link } from "react-router-hash-link";

function Footer() {
  return (
    <footer className="rounded-t-2xl px-12 h-[40vh] bg-gradient-to-br from-dark via-background to-dark shadow-2xl shadow-white flex flex-col justify-center items-center space-y-10">
      <div className="flex justify-between w-[100%] sm:w-[25%]">
        <Link
          onClick={() =>
            window.open("https://www.linkedin.com/in/deviprasad-rai", "_blank")
          }
        >
          <img src={linkedInIcon} alt="" />
        </Link>
        <Link
          onClick={() =>
            window.open("https://www.instagram.com/deviprasad_rai_5", "_blank")
          }
        >
          <img src={instagramIcon} alt="" />
        </Link>
        <Link onClick={() => window.open("https://wa.link/servwx", "_blank")}>
          <img src={whatsappIcon} alt="" />
        </Link>
        <Link
          onClick={() =>
            window.open(
              "https://www.facebook.com/profile.php?id=100027593468415",
              "_blank"
            )
          }
        >
          <img src={facebookIcon} alt="" />
        </Link>
      </div>
      <ul className="flex justify-center items-center text-white">
        <Link to="#home" className="border-r px-5">
          Home
        </Link>
        <Link to="#education" className="border-r px-5">
          Education
        </Link>
        <Link to="#skills" className="border-r px-5">
          Skills
        </Link>
        <Link to="#projects" className=" px-5">
          Projects
        </Link>
      </ul>
      <button
        className="flex justify-between items-center text-lg font-bold text-white bg-gradient-to-tr from-background to-dark py-2 px-5 w-[200px] rounded-full hover:scale-110 duration-300"
        onClick={() => window.open("https://github.com/devi5040", "_blank")}
      >
        <img src={githubIcon} alt="" />
        Go To Github
      </button>
    </footer>
  );
}

export default Footer;
