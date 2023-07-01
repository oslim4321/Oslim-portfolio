"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const HireMe = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsClicked(true);
    window.location.href = "mailto:adewaleselim6@gmail.com";
  };

  return (
    <div className="fixed right-0  bottom-10 z-50 cursor-pointer m-5">
      <motion.div
        className="w-[90px] h-[90px] bg-[#a772bf] text-sm rounded-full flex justify-center items-center text-white shadow p-2"
        initial={{ y: 0 }}
        animate={{ y: [-20, 0] }}
        whileTap={{ scale: 0.8 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        onClick={handleClick}
      >
        HIRE ME
      </motion.div>
    </div>
  );
};

export default HireMe;
