import React from "react";
import { motion, useScroll } from "framer-motion";

const LiIcons = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center start"],
  });
  return (
    <figure className="absolute -left-20 md:-left-12 top-0 stroke-dark">
      <svg
        className=" -rotate-100"
        width="75"
        height="75"
        viewBox="0 0 100 100 "
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className=" stroke-[5px] fill-light"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className=" animate-pulse stroke-1 fill-primary"
        />
      </svg>
    </figure>
  );
};

export default LiIcons;
