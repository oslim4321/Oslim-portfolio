import { motion } from "framer-motion";

const RotatingAnimation = ({ children }) => {
  return (
    <motion.div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
    >
      {children}
    </motion.div>
  );
};

export default RotatingAnimation;
