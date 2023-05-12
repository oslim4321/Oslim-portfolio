"use client";
import React from "react";
import { motion } from "framer-motion";

export const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, className = "" }) => {
  // const sectionRef = useRef(null);
  // const controls = useAnimation();

  // useEffect(() => {
  //   const sectionObserver = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           controls.start("animate");
  //         }
  //       });
  //     },
  //     { threshold: 0.5 } // Adjust the threshold value as needed
  //   );

  //   if (sectionRef.current) {
  //     sectionObserver.observe(sectionRef.current);
  //   }

  //   return () => {
  //     sectionObserver.disconnect();
  //   };
  // }, [controls]);

  const quote = {
    initial: {
      opacity: 0, // Set initial opacity to 0
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <div
      // ref={sectionRef}
      className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden"
    >
      <motion.h1
        className={`${className} inline-block w-full text-dark text-8xl `}
        variants={quote}
        initial="initial" // Set initial state to "initial"
        whileInView="animate"
      >
        {text.split(" ").map((word, i) => (
          <motion.span
            key={word + i}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
