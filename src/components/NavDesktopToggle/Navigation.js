import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import "./style.css";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <>
    <motion.ul variants={variants}>
      {list.map((elem, i) => (
        <MenuItem text={elem} i={elem.id} key={elem.id} />
      ))}
    </motion.ul>
  </>
);

const itemIds = ["hello", "my work", "testing", "jmmm", "tooo"];

const list = [
  {
    id: 1,
    text: "my work",
    link: "#",
  },
  {
    id: 2,
    text: "my Shelf",
    link: "#",
  },
  {
    id: 3,
    text: "my Resume",
    link: "#",
  },
];
