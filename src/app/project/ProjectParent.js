"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PaginatePage from "./PaginatePage";
import LoadingSpinner from "@/src/components/FetchProjectSpinner";
import ProjectList from "./ProjectList";

export default function ProjectParent({ projectListData }) {
  // const [selectedTab, setSelectedTab] = useState(allIngredients[0]);
  const [project, setproject] = useState("Personal projects");

  console.log(project);
  console.log(projectListData);

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
            {projectListData.length > 0 ? null : <LoadingSpinner />}

            {/* {selectedTab ? selectedTab.icon : "😋"} */}
            <ProjectList project={project} projectListData={projectListData} />
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
    text: "Personal projects",
    onClick: () => handleButtonClick("/personal-projects"),
  },
  {
    text: "Open source projects",
    onClick: () => handleButtonClick("/open-source-projects"),
  },
  {
    text: "Education projects",
    onClick: () => handleButtonClick("/education-projects"),
  },
  {
    text: "Freelance projects",
    onClick: () => handleButtonClick("/freelance projects"),
  },
  {
    text: "Awards and recognition",
    onClick: () => handleButtonClick("/awards-and-recognition"),
  },
];
