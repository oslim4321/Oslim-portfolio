import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

export const PopUp = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav animate={isOpen ? "open" : "closed"} variants={variants}>
      {/* <Toggle onClick={() => setIsOpen((isOpen) => !isOpen)} /> */}
      <span onClick={() => setIsOpen((isOpen) => !isOpen)}>okdffd</span>
      {/* <Items /> */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
        nobis.
      </p>
    </motion.nav>
  );
};
