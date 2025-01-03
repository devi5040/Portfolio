import React from "react";
import ProjectCard from "../components/ProjectCard";
import vegshellImage from "../assets/VEGSHELL.jpeg";
import cafeImage from "../assets/cafe-connect.png";
import infostoreImage from "../assets/infostore.png";
import panchayatImage from "../assets/panchayat.png";

function Projects() {
  return (
    <div
      className="h-[520px] mx-12 my-16 rounded-xl shadow-md shadow-dark bg-gradient-to-bl from-dark to-background"
      id="projects"
    >
      <h1 className="text-center text-white text-xl font-bold uppercase py-5">
        My Projects
      </h1>
      <div className="px-2 sm:px-16 flex justify-between flex-nowrap overflow-x-auto scrollbar-hide">
        <ProjectCard
          projectName="VEGSHELL"
          projectDescription="VEGSHELL is a comprehensive platform designed to address key agricultural challenges. It provides farmers with educational resources, real-time crop pricing, and equipment recommendations. Developed as both a website and mobile app, VEGSHELL empowers farmers by offering essential tools and information to improve productivity, make informed decisions, and enhance profitability."
          projectLink="#"
          projectImage={vegshellImage}
        />
        <ProjectCard
          projectName="Namma Panchayat"
          projectDescription="Namma Panchayat is a user-friendly website designed to provide all relevant information about local Panchayats. It allows citizens to easily access details on Panchayat activities, services, and announcements. Additionally, the platform enables users to report and post their issues or concerns, fostering better communication and responsiveness between the community and local authorities."
          projectLink="#"
          projectImage={panchayatImage}
        />
        <ProjectCard
          projectName="INFOSTORE"
          projectDescription="Infostore is a secure platform designed to help individuals store and manage all their personal details, important documents, emails, and passwords in one place. With a focus on privacy and convenience, Infostore ensures that users can easily organize and access their sensitive information while keeping it protected from unauthorized access."
          projectLink="#"
          projectImage={infostoreImage}
        />
        <ProjectCard
          projectName="Canteen Connect"
          projectDescription="Canteen Connect is an Android application designed to streamline the college canteen experience. It allows students to pre-book their meals, reducing wait times and preventing crowding during peak hours. The app helps manage food orders efficiently, ensuring smooth operations and allowing students to enjoy their breaks with minimal delays."
          projectLink="#"
          projectImage={cafeImage}
        />
      </div>
    </div>
  );
}

export default Projects;
