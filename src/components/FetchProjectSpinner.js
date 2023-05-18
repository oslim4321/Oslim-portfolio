"use client";

import { motion } from "framer-motion";

const spinnerVariants = {
  start: {
    rotate: 0,
  },
  end: {
    rotate: 360,
  },
};

const LoadingSpinner = ({ size = 50, thickness = 5 }) => {
  return (
    <motion.div
      style={{
        width: size,
        height: size,
        border: `${thickness}px solid transparent`,
        borderTopColor: "#6366F1",
        borderRadius: "50%",
      }}
      variants={spinnerVariants}
      animate="end"
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  );
};

export default LoadingSpinner;
