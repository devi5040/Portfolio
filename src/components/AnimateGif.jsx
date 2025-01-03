import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function AnimateGif({ gifSource, top, left }) {
  const { scrollY } = useScroll();

  const dragY = useTransform(scrollY, [0, 100, 300, 500], [0, -10, -30, -70]);
  const scaleOnScroll = useTransform(
    scrollY,
    [0, 100, 300, 500],
    [1, 1.2, 1.2, 1.3]
  );
  return (
    <motion.img
      src={gifSource}
      style={{
        top: `${top}%`,
        left: `${left}%`,
        y: dragY,
        scale: scaleOnScroll,
      }}
      className="rounded-full absolute z-0 "
      alt="/"
    />
  );
}

export default AnimateGif;
