import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ProjectCard({
  projectName,
  projectImage,
  projectDescription,
  projectLink,
}) {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked((prevState) => !prevState);
  };

  const swipeVariants = {
    hidden: {
      x: 300,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: {
      x: -300,
      opacity: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  return (
    <AnimatePresence>
      <div
        className="w-[240px] sm:w-[400px] shadow-xl shadow-dark h-[380px] rounded-xl cursor-pointer overflow-hidden flex-shrink-0 m-5"
        onClick={clickHandler}
      >
        {!clicked && (
          <motion.div
            key="project-main"
            variants={swipeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <img
              src={projectImage}
              className="h-[240px] w-[100%] object-cover rounded-t-xl"
              alt="/"
            />
            <h3 className="uppercase text-xl font-bold text-center text-white my-10 sm:my-1">
              {projectName}
            </h3>
            <p className="text-md text-center text-white">
              Click this card for more details
            </p>
          </motion.div>
        )}
        {clicked && (
          <motion.div
            key="project-details"
            variants={swipeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="p-2 text-white"
          >
            <h3 className="text-lg font-semibold my-5">{projectName}</h3>
            <p className="text-justify">{projectDescription}</p>
            {/* <button
              target="_blank"
              className="my-12 w-[100%] py-2 rounded-full shadow-xl border hover:bg-dark duration-500 hover:border-0"
              onClick={() => window.open(projectLink, "_blank")}
            >
              Github Link
            </button> */}
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
}

export default ProjectCard;
