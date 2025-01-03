import React from "react";

function SkillCard({ name, progress }) {
  return (
    <div className="flex flex-col justify-center cursor-pointer w-[300px] h-[40px] mx-5 my-2 sm:my-0 hover:scale-110 duration-300">
      <div className="flex justify-between">
        <h3 className="text-white text-lg font-semibold">{name}</h3>
        <h3 className="text-white text-lg font-semibold">{progress}%</h3>
      </div>
      <div className="w-[240px] sm:w-[300px] h-[15px] bg-gray-700 rounded-full">
        <div
          className="h-[100%] bg-yellow-300 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default SkillCard;
