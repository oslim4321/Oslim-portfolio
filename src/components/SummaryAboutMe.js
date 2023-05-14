import { motion } from "framer-motion";

const Summary = () => {
  const name = "sooto selim";

  const nameVariants = {
    initial: { color: "#000" },
    animate: { color: "#ff00ff" },
  };

  return (
    <motion.p
      className="font-base my-4 text-lg font-medium text-start"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
    >
      Hello, I am{" "}
      <motion.span
        className="highlight"
        variants={nameVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5 }}
      >
        {name}
      </motion.span>
      . Explore my latest projects and articles: A testament to my passion for
      turning ideas into web applications.
    </motion.p>
  );
};

export default Summary;
