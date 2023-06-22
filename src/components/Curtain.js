"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Curtain = ({ showCurtain, mode }) => {
  console.log(mode);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
  }, [showCurtain]);

  const onAnimationComplete = () => {
    setIsAnimating(false);
  };

  return (
    <div>
      {/* <motion.div
        className="fixed top-0 bottom-0 right-0 w-screen h-screen z-20"
        style={{ backgroundColor: mode === "dark" ? "white" : "black" }}
        initial={{ x: "100%", width: "100%" }}
        animate={
          isAnimating ? { x: "100%", width: "100%" } : { x: "0%", width: "0%" }
        }
        transition={{ duration: 0.8, ease: "easeInOut" }}
        onAnimationComplete={onAnimationComplete}
      ></motion.div> */}

      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-dark"
        initial={{ x: "100%", width: "100%" }}
        animate={
          isAnimating ? { x: "0%", width: "0%" } : { x: "100%", width: "100%" }
        }
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      ></motion.div>
    </div>
  );
};

export default Curtain;
