import React from "react";
import hero from "../assets/devii.jpg";

function Hero() {
  return (
    <div
      id="home"
      className="w-full h-[600px] flex justify-center items-center bg-primary"
    >
      <div className="md:w-[1120px] flex flex-col-reverse md:grid md:grid-cols-2">
        <div className="font-poppins flex flex-col text-white justify-center p-6 space-y-10">
          <h1 className="text-2xl md:text-6xl border-l-4 border-font font-bold uppercase ">
            &nbsp;Deviprasad &nbsp;Rai P
          </h1>
          <h3 className="text-xl md:text-4xl font-semibold">Full Stack Web Developer</h3>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="h-[300px] w-[300px] md:h-[360px] md:w-[360px]">
            <img src={hero} className="h-full w-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
