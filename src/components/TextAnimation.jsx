import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useRef } from "react";

function TextAnimation({ text }) {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  return (
    <AnimatePresence>
      {text.split("").map((char, i) => (
        <motion.p
          ref={ref}
          key={i}
          initial={{ opacity: 0, x: -18 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          exit="hidden"
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="text-4xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]"
        >
          {char === " " ? <span>&nbsp;</span> : char}
        </motion.p>
      ))}
    </AnimatePresence>
  );
}

export default TextAnimation;