import React from "react";

function EducationCard({ title, description, year }) {
  return (
    <div className="p-10 bg-gradient-to-bl rounded-xl from-dark via-background to-dark cursor-pointer space-y-5 hover:scale-110 duration-300 sm:h-[60%]">
      <h3 className="text-3xl font-bold text-center">{title}</h3>
      <p className="text-md text-justify">{description}</p>
      <div className="my-10">
        <p className="border border-dark py-2 px-8 w-[150px] rounded-full shadow-md shadow-background">
          {year}
        </p>
      </div>
    </div>
  );
}

export default EducationCard;
