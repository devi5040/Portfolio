import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-primary w-full p-10">
      <div className="md:px-44 grid md:grid-cols-2 md:space-x-20">
        <h2 className="text-center md:text-left text-4xl font-bold text-font mb-6">
          PORTFOLIO
        </h2>
        <div className="text-font flex md:justify-end space-x-10 justify-center">
          <Link to="https://www.instagram.com/deviprasad_rai_5/?igsh=MTc4amwxZDRldnQ3Yg%3D%3D">
            <InstagramIcon />
          </Link>
          <Link to="https://www.github.com/devi5040">
            <GitHubIcon />
          </Link>
          <TwitterIcon />
          <Link to="https://www.linkedin.com/in/deviprasad-rai">
            <LinkedInIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
