import React from "react";
import htmlIcon from "../assets/skills/icons8-html-5.svg";
import SkillCard from "../components/SkillCard";

function Skills() {
  return (
    <div
      className="mx-12 py-8 px-4 my-8 sm:px-4 sm:py-4 shadow-2xl sm:h-[500px] shadow-dark rounded-xl bg-gradient-to-bl from-background to-dark"
      id="skills"
    >
      <h3 className="text-2xl text-gray-300 text-center my-3 font-bold uppercase">
        My Skills
      </h3>
      <div className="flex sm:h-[400px] flex-wrap justify-between items-center sm:px-32">
        <SkillCard progress={60} name="html5" />
        <SkillCard progress={70} name="React JS" />
        <SkillCard progress={50} name="JavaScript" />
        <SkillCard progress={65} name="CSS3" />
        <SkillCard progress={60} name="PHP" />
        <SkillCard progress={65} name="Node JS" />
        <SkillCard progress={45} name="React Native" />
        <SkillCard progress={55} name="C" />
        <SkillCard progress={60} name="C++" />
        <SkillCard progress={60} name="Python" />
        <SkillCard progress={75} name="Tailwind CSS" />
        <SkillCard progress={70} name="MySQL" />
        <SkillCard progress={50} name="Mongo DB" />
        <SkillCard progress={70} name="Git" />
        <SkillCard progress={50} name="Web Hosting" />
        <SkillCard progress={80} name="SEO" />
      </div>
    </div>
  );
}

export default Skills;
