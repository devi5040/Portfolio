import React from "react";

function Skills() {
  return (
    <div id="skills" className="md:h-[480px] w-full p-10  text-justify">
      <div className="md:px-44 flex flex-col justify-center h-full md:space-y-8 ">
        <h3 className="font-bold text-4xl uppercase font-poppins text-center text-[#353839]">
          skills
        </h3>
        {/*row 1 */}
        <div className="grid grid-cols-2 md:grid-cols-4 md:space-x-10">
          <div className="bg-primary h-[50px] flex items-center justify-center rounded-md shadow-xl m-4 md:m-0 text-xl text-font cursor-pointer hover:shadow-2xl duration-300 hover:scale-110">
            C
          </div>
          <div className="bg-primary h-[50px] flex items-center justify-center rounded-md shadow-xl text-xl m-4 md:m-0 text-font cursor-pointer hover:shadow-2xl duration-300 hover:scale-110">
            C++
          </div>
          <div className="bg-primary h-[50px] flex items-center justify-center rounded-md shadow-xl text-xl m-4 md:m-0 text-font cursor-pointer hover:shadow-2xl duration-300 hover:scale-110">
            Python
          </div>
          <div className="bg-primary h-[50px] flex items-center justify-center rounded-md shadow-xl text-xl m-4 md:m-0 text-font cursor-pointer hover:shadow-2xl duration-300 hover:scale-110">
            Java
          </div>
        </div>
        {/*row2 */}
        <div className="grid grid-cols-2 md:grid-cols-4 md:space-x-10">
          <div className="bg-primary h-[50px] flex items-center justify-center rounded-md shadow-xl text-xl m-4 md:m-0 text-font cursor-pointer hover:shadow-2xl duration-300 hover:scale-110">
            PHP
          </div>
          <div className="bg-primary h-[50px] flex items-center m-4 md:m-0 justify-center rounded-md shadow-xl text-xl text-font cursor-pointer hover:shadow-2xl duration-300 hover:scale-110">
            HTML
          </div>
          <div className="bg-primary h-[50px] flex items-center justify-center rounded-md shadow-xl text-xl m-4 md:m-0 text-font cursor-pointer hover:shadow-2xl duration-300 hover:scale-110">
            CSS
          </div>
          <div className="bg-primary h-[50px] flex items-center justify-center rounded-md shadow-xl text-xl m-4 md:m-0 text-font cursor-pointer hover:shadow-2xl duration-300 hover:scale-110">
            Cloud
          </div>
        </div>

        {/**Row 3 */}
        <div className="grid grid-cols-2 md:grid-cols-4  md:space-x-10">
          <div className="bg-primary h-[50px] flex items-center justify-center rounded-md shadow-xl text-xl m-4 md:m-0 text-font cursor-pointer hover:shadow-2xl duration-300 hover:scale-110">
            OOP
          </div>
          <div className="bg-primary h-[50px] flex items-center justify-center rounded-md shadow-xl text-xl m-4 md:m-0 text-font cursor-pointer hover:shadow-2xl duration-300 hover:scale-110">
            Android Studio
          </div>
          <div className="bg-primary h-[50px] flex items-center justify-center rounded-md shadow-xl text-xl m-4 md:m-0 text-font cursor-pointer hover:shadow-2xl duration-300 hover:scale-110">
            React JS
          </div>
          <div className="bg-primary h-[50px] flex items-center justify-center rounded-md shadow-xl text-xl m-4 md:m-0 text-font cursor-pointer hover:shadow-2xl duration-300 hover:scale-110">
            Node JS
          </div>
        </div>

        {/**Row 4 */}
        <div className="grid grid-cols-2 md:grid-cols-4 md:space-x-10">
          <div className="bg-primary h-[50px] flex items-center justify-center rounded-md shadow-xl text-xl m-4 md:m-0 text-font cursor-pointer hover:shadow-2xl duration-300 hover:scale-110">
            Tailwind
          </div>
          <div className="bg-primary h-[50px] flex items-center justify-center rounded-md shadow-xl text-xl m-4 md:m-0 text-font cursor-pointer hover:shadow-2xl duration-300 hover:scale-110">
            Frontend
          </div>
          <div className="bg-primary h-[50px] flex items-center justify-center rounded-md shadow-xl text-xl m-4 md:m-0 text-font cursor-pointer hover:shadow-2xl duration-300 hover:scale-110">
            Backend
          </div>
          <div className="bg-primary h-[50px] flex items-center justify-center rounded-md shadow-xl text-xl m-4 md:m-0 text-font cursor-pointer hover:shadow-2xl duration-300 hover:scale-110">
            Full-Stack
          </div>
        </div>
        {/**Row 5 */}
        <div className="grid grid-cols-2 md:grid-cols-4 md:space-x-10">
          <div className="bg-primary h-[50px] flex items-center justify-center rounded-md shadow-xl text-xl m-4 md:m-0 text-font cursor-pointer hover:shadow-2xl duration-300 hover:scale-110">
            Javascript
          </div>
          <div className="bg-primary h-[50px] flex items-center justify-center rounded-md shadow-xl text-xl m-4 md:m-0 text-font cursor-pointer hover:shadow-2xl duration-300 hover:scale-110">
            Docker
          </div>
          <div className="bg-primary h-[50px] flex items-center justify-center rounded-md shadow-xl text-xl m-4 md:m-0 text-font cursor-pointer hover:shadow-2xl duration-300 hover:scale-110">
            SQL
          </div>
          <div className="bg-primary h-[50px] flex items-center justify-center rounded-md shadow-xl text-xl m-4 md:m-0 text-font cursor-pointer hover:shadow-2xl duration-300 hover:scale-110">
            Figma
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
