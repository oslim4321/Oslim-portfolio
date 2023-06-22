import { motion, useCycle } from "framer-motion";

const FoldAnimation = () => {
  const [isOpen, setIsOpen] = useCycle(false, true);

  const handleClick = () => {
    setIsOpen();
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* <motion.div
        className={`bg-blue-500 w-20 h-20 rounded-md ${isOpen ? "folded" : ""}`}
        onClick={handleClick}
        layout
      />
      <motion.div
        className={`bg-red-500 w-20 h-20 rounded-md ${isOpen ? "folded" : ""}`}
        layout
      />
      <motion.div
        className={`bg-green-500 w-20 h-20 rounded-md ${
          isOpen ? "folded" : ""
        }`}
        layout
      />
      <motion.div
        className={`bg-yellow-500 w-20 h-20 rounded-md ${
          isOpen ? "folded" : ""
        }`}
        layout
      />
      <motion.div
        className={`bg-purple-500 w-20 h-20 rounded-md ${
          isOpen ? "folded" : ""
        }`}
        layout
      /> */}
      <div className="flex">
        <div className={`bg-blue-500 w-20 h-20 rounded-md  absolute`}></div>
        <div className={`bg-blue-500 w-20 h-20 rounded-md  absolute`}></div>
        <div className={`bg-blue-500 w-20 h-20 rounded-md  absolute`}></div>
        <div className={`bg-blue-500 w-20 h-20 rounded-md  absolute`}></div>
        <div className={`bg-blue-500 w-20 h-20 rounded-md  absolute`}></div>
      </div>
    </div>
  );
};

export default FoldAnimation;
