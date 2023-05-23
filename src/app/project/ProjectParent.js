"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PaginatePage from "./PaginatePage";
import LoadingSpinner from "@/src/components/FetchProjectSpinner";
import ProjectList from "./ProjectList";

export default function ProjectParent({ projectListData }) {
  const [project, setproject] = useState("all");

  return (
    <div>
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

const buttons = [
  {
    text: "All",
    category: "all",
  },
  {
    text: "Personal projects",
    category: "personal-projects",
  },
  {
    text: "Open source projects",
    category: "open-source-projects",
  },
  {
    text: "Education projects",
    category: "",
  },
  {
    text: "Freelance projects",
    category: "freelance projects",
  },
  {
    text: "Awards and recognition",
    category: "awards-and-recognition",
  },
];
