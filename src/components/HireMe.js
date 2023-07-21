"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";

export const handleClickHireMe = (e) => {
  e.preventDefault();
  window.location.href = "mailto:adewaleselim6@gmail.com";
};

const HireMe = () => {
  const [showButton, setshowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 600) {
      setshowButton(true);
    } else {
      setshowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
    bounce: {
      y: [0, -20, 0], // Bounce up by 20 pixels and return to the original position
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="fixed right-0  bottom-10 z-50 cursor-pointer m-5">
      <motion.div
        className="w-[90px] h-[90px] bg-[#a772bf] text-sm rounded-full flex justify-center items-center text-white shadow p-2"
        initial="hidden"
        animate={showButton ? "visible" : "hidden"}
        variants={variants}
        whileTap={{ scale: 0.8 }}
        transition={{
          duration: 0.5,
          type: "tween",
        }}
        onClick={handleClickHireMe}
      >
        HIRE ME
      </motion.div>
    </div>
  );
};

export default HireMe;
