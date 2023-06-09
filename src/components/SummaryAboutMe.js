import { motion } from "framer-motion";

const Summary = () => {
  const name = "sooto selim";

  return (
    <motion.p
      className="font-base my-4 text-lg font-medium dark:text-light text-center md:text-start"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
    >
      Hello, I am{" "}
      <motion.span
        className="bg-[#efced9] px-2 py-1 rounded-md  animated-border text-dark"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {name}
      </motion.span>
      . Explore my latest projects and articles: A testament to my passion for
      turning ideas into web applications.
    </motion.p>
  );
};

export default Summary;
