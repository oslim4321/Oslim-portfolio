import { motion, useCycle } from "framer-motion";
import { useState } from "react";

const FoldAnimation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const BoxMove = ({ className, x }) => (
    <motion.div
      onClick={() => handleClick()}
      className={`bg-blue-500 w-12 h-12 rounded-md ${
        isOpen ? "" : "absolute"
      } ${className}`}
      // whileHover={{ scale: 1.09 }}
      initial={{ x: 0, y: 0 }}
      animate={isOpen ? "scatter" : "folded"}
      variants={{
        folded: { x: 0, transition: { duration: 1 } },
        scatter: { x: x, transition: { duration: 1 } },
      }}
      // whileTap={{ scale: 2 }}
    />
  );

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex">
        <BoxMove x="-15%" />
        <BoxMove x="20%" />
        <BoxMove x="55%" />
        <BoxMove x="70%" />
      </div>
    </div>
  );
};

export default FoldAnimation;
