import React from "react";
import TextAnimation from "../components/TextAnimation";
import heroImg from "../assets/deviprasad.webp";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import githubGif from "../assets/gif/icons8-github.gif";
import javaGif from "../assets/gif/icons8-java.gif";
import pythonGif from "../assets/gif/icons8-python.gif";
import reactGif from "../assets/gif/icons8-react-native.gif";
import AnimateGif from "../components/AnimateGif";
import devGif from "../assets/gif/icons8-developer-mode.gif";
import githubIcon from "../assets/footer/github.svg";
import googleGif from "../assets/gif/icons8-google.gif";
import jsGif from "../assets/gif/icons8-javascript.gif";
import wordpressGif from "../assets/gif/icons8-wordpress.gif";

function Hero() {
  return (
    <div className="relative mt-20" id="home">
      <div className=" py-10 sm:py-0 sm:h-screen w-full flex flex-col-reverse sm:justify-between items-center sm:flex-row">
        <div className="flex flex-col justify-center items-center text-[#ffffff] w-full z-10 sm:w-1/2">
          <div className="flex ">
            <TextAnimation text="I am Deviprasad" />
          </div>
          <p className="mx-5 rounded p-5 sm:p-0 text-justify sm:w-1/2 my-5 text-lg backdrop-blur-lg sm:backdrop-blur-0">
            A passionate IT professional from Mangalore, India, with a solid
            academic background, hands-on experience, and a drive for
            innovation, continuously learning and growing in the industry.
          </p>
          <button
            className="flex justify-center items-center text-lg font-bold text-white bg-gradient-to-tr from-background to-dark py-2 px-5 w-[300px] rounded-full hover:scale-110 duration-300"
            onClick={() => window.open("https://github.com/devi5040", "_blank")}
          >
            <img src={githubIcon} className="px-1" alt="" />
            Go To Github
          </button>
        </div>
        <div className="w-full  flex justify-center my-10 sm:w-1/2 sm:my-0">
          <img
            src={heroImg}
            alt="An image of the developer"
            className="w-[300px] h-[300px] rounded-full border shadow-xl cursor-pointer shadow-dark hover:scale-110 duration-300 z-10"
          />
        </div>
      </div>
      <DotLottieReact
        src="https://lottie.host/9d1c23e8-072d-438f-9366-fe6737780c3d/K3Wzb9OJx6.lottie"
        autoplay
        loop
        className="w-[60%] sm:w-[30%] scale-125  aspect-square mx-auto absolute top-0 sm:top-10 left-[20%] sm:left-[35%] z-0"
      />
      <DotLottieReact
        src="https://lottie.host/1df5fe65-2499-409d-91a6-5a92131840d9/FbTnzUvJNy.lottie"
        autoplay
        loop
        className="w-[60%] sm:w-[30%] aspect-square absolute top-[40%] sm:top-[50%] left-[35%] sm:left-[70%] z-0"
      />
      <AnimateGif gifSource={githubGif} top={20} left={5} />
      <AnimateGif gifSource={javaGif} top={55} left={15} />
      <AnimateGif gifSource={pythonGif} top={20} left={85} />
      <AnimateGif gifSource={reactGif} top={85} left={75} />
      <AnimateGif gifSource={devGif} top={10} left={70} />
      <AnimateGif gifSource={googleGif} top={55} left={85} />
      <AnimateGif gifSource={jsGif} top={90} left={35} />
      <AnimateGif gifSource={wordpressGif} top={75} left={55} />
    </div>
  );
}

export default Hero;
