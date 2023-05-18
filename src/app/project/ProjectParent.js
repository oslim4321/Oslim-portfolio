"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PaginatePage from "./PaginatePage";
import ProjectList from "@/src/components/ProjectList";
import LoadingSpinner from "@/src/components/FetchProjectSpinner";

export default function ProjectParent() {
  // const [selectedTab, setSelectedTab] = useState(allIngredients[0]);
  const [project, setproject] = useState("Soft works");

  console.log(project);

  return (
    <div>
      {/* <ul className="flex">
        {allIngredients.map((item) => (
          <li
            key={item.label}
            className={item === selectedTab ? "selected" : ""}
            onClick={() => setSelectedTab(item)}
          >
            {`${item.icon} ${item.label}`}
            {item === selectedTab ? (
              <motion.div className="underline" layoutId="underline" />
            ) : null}
          </li>
        ))}
      </ul> */}

      <div className="flex justify-center items-center">
        {/* {buttons.map((elem) => ( */}
        <PaginatePage buttonList={buttons} setproject={setproject} />
        {/* ))} */}
      </div>

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={project}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* <TransitionEffect /> */}
            <LoadingSpinner />

            {/* {selectedTab ? selectedTab.icon : "😋"} */}
            <ProjectList project={project} />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

// export interface Ingredient {
//   icon: string;
//   label: string;
// }

export const allIngredients = [
  { icon: "🍅", label: "Tomato" },
  { icon: "🥬", label: "Lettuce" },
  { icon: "🧀", label: "Cheese" },
  { icon: " 🥕", label: "Carrot" },
  { icon: "🍌", label: "Banana" },
  { icon: "🫐", label: "Blueberries" },
  { icon: "🥂", label: "Champers?" },
];

// const [tomato, lettuce, cheese] = allIngredients;
// export const initialTabs = [tomato, lettuce, cheese];

// export function getNextIngredient(ingredients) {
//   const existing = new Set(ingredients);
//   return allIngredients.find((ingredient) => !existing.has(ingredient));
// }

const buttons = [
  {
    text: "Soft works",
    onClick: () => handleButtonClick("/soft-works"),
  },
  {
    text: "Skill work",
    onClick: () => handleButtonClick("/skill-work"),
  },
  {
    text: "Full stack project",
    onClick: () => handleButtonClick("/full-stack-project"),
  },
  {
    text: "MERN stack project",
    onClick: () => handleButtonClick("/mern-stack-project"),
  },
  {
    text: "Client works",
    onClick: () => handleButtonClick("/client-works"),
  },
];
