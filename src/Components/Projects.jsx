import React from "react";
import img from "../assets/file.png";

function Projects() {
  return (
    <div
      id="projects"
      className="md:h-[480px]  w-full px-10 bg-secondary  text-justify"
    >
      <div className="md:px-44 py-10 md:py-32 flex flex-col justify-center h-full space-y-8 ">
        <h3 className="font-bold text-4xl uppercase font-poppins text-center text-[#353839]">
          my projects
        </h3>
        {/**Row 1 */}
        <div className="grid md:grid-cols-2 md:space-x-10 ">
          <div className="bg-card rounded-md cursor-pointer shadow-lg text-cardFont grid grid-cols-6 px-6 py-2 my-4 md:my-0 space-x-4 hover:shadow-2xl hover:scale-105 duration-500">
            <div className="col-span-1">
              <img src={img} alt="" className="h-full w-full" />
            </div>
            <div className="col-span-5 flex flex-col justify-center">
              <h3 className="text-xl font-bold">VEGSHELL</h3>
              <p className="text-lg">
                A one stop solution for all agricultural problems
              </p>
            </div>
          </div>

          <div className="bg-card rounded-md cursor-pointer shadow-lg text-cardFont grid grid-cols-6 px-6 py-2 mt-4 md:my-0 space-x-4 hover:shadow-2xl hover:scale-105 duration-500">
            <div className="col-span-1">
              <img src={img} alt="" className="h-full w-full" />
            </div>
            <div className="col-span-5 flex flex-col justify-center">
              <h3 className="text-xl font-bold">NAMMA PANCHAYAT</h3>
              <p className="text-lg">
                A website where we can get all the information about our
                Panchayat.
              </p>
            </div>
          </div>
        </div>
        {/**Row 2 */}
        <div className="grid md:grid-cols-2 md:space-x-10">
          <div className="bg-card rounded-md cursor-pointer shadow-lg text-cardFont grid grid-cols-6 px-6 py-2 space-x-4 my-4 md:my-0 hover:shadow-2xl hover:scale-105 duration-500">
            <div className="col-span-1">
              <img src={img} alt="" className="h-full w-full" />
            </div>
            <div className="col-span-5 flex flex-col justify-center">
              <h3 className="text-xl font-bold">InfoStore</h3>
              <p className="text-lg">
                A place where we can store all our information.
              </p>
            </div>
          </div>

          <div className="bg-card rounded-md cursor-pointer shadow-lg text-cardFont grid grid-cols-6 px-6 py-2 space-x-4 mt-4 md:my-0 hover:shadow-2xl hover:scale-105 duration-500">
            <div className="col-span-1">
              <img src={img} alt="" className="h-full w-full" />
            </div>
            <div className="col-span-5 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-cardFont">NEWS APP</h3>
              <p className="text-lg">
                An android application to display the trending news
              </p>
            </div>
          </div>
        </div>
        {/**Row 3 */}
        <div className="grid md:grid-cols-2 md:space-x-10">
          <div className="bg-card rounded-md cursor-pointer shadow-lg text-cardFont grid grid-cols-6 px-6 py-2 space-x-4 my-4 md:my-0 hover:shadow-2xl hover:scale-105 duration-500">
            <div className="col-span-1">
              <img src={img} alt="" className="h-full w-full" />
            </div>
            <div className="col-span-5 flex flex-col justify-center">
              <h3 className="text-xl font-bold">Canteen Connect</h3>
              <p className="text-lg">
                An Android application to look after college canteen business
              </p>
            </div>
          </div>

          <div className="bg-card rounded-md cursor-pointer shadow-lg text-cardFont grid grid-cols-6 px-6 py-2 space-x-4 mt-4 md:my-0 hover:shadow-2xl hover:scale-105 duration-500">
            <div className="col-span-1">
              <img src={img} alt="" className="h-full w-full" />
            </div>
            <div className="col-span-5 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-cardFont">SHARE NOW</h3>
              <p className="text-lg">
                A Frontend React website to share our thoughts
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
