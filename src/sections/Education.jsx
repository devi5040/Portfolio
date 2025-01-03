import React from "react";
import EducationCard from "../components/EducationCard";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Education() {
  return (
    <>
      <div
        className="px-12 grid grid-cols-1 sm:gap-10 h-[1220px] sm:h-[540px] justify-center items-center sm:grid-cols-3 text-white z-20 relative"
        id="education"
      >
        <EducationCard
          title="Highschool"
          description="I completed my high school education at Vidyabodhini High School in Balila, where I achieved a remarkable 92.64% academic performance."
          year="2015-2018"
        />
        <EducationCard
          title="Pre University College"
          description="I completed my pre-university education at Vivekananda PU College in Puttur, securing a percentage of 81.67%."
          year="2018-2020"
        />
        <EducationCard
          title="Engineering"
          description="I graduated with a Bachelor of Engineering in Computer Science and Engineering from A.J. Institute of Engineering and Technology, achieving a CGPA of 8.44. "
          year="2020-2024"
        />
      </div>
      <DotLottieReact
        src="https://lottie.host/b8066644-33ab-4a3d-ace1-89ae18e8ee6d/TQXQAFok5q.lottie"
        loop
        autoplay
        className="absolute top-[105%] sm:top-[93%] z-0 h-[100%] w-[100%]  sm:h-[100%] sm:w-[100%] aspect-square overflow-hidden "
      />
      <DotLottieReact
        src="https://lottie.host/ecaa2236-155c-4d9b-a43d-26ee3dac44ef/7RIWRwcf0E.lottie"
        loop
        autoplay
        className="absolute top-[80%] sm:top-[60%] w-[50%] sm:w-[30%] z-0  aspect-square overflow-hidden "
      />
    </>
  );
}

export default Education;
