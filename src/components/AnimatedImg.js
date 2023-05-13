import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AnimatedImg = ({ path, alt, className = "" }) => {
  return (
    <motion.div
      className="overflow-x-auto"
      initial={{ x: "-100%" }}
      whileInView={{ x: 0 }}
      transition={{ delay: 0.5, staggerChildren: 0.08 }}
    >
      {/* <HeroPageAnimatedLeft /> */}
      <Image
        src={path}
        alt={alt}
        width={"700"}
        height={"700"}
        className={`w-full ${className}`}
      />
    </motion.div>
  );
};

export default AnimatedImg;
