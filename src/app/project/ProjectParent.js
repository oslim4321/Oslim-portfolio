"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PaginatePage from "./PaginatePage";
import LoadingSpinner from "@/src/components/FetchProjectSpinner";
import ProjectList from "./ProjectList";

export default function ProjectParent({ projectListData }) {
  const [project, setproject] = useState("All");
  const [projectData, setprojectData] = useState("");

  useEffect(() => {
    setprojectData(projectListData);
  }, [projectListData]);

  return (
    <div>
      <div className="flex justify-center items-center">
        <PaginatePage
          project={project}
          setproject={setproject}
          setprojectData={setprojectData}
        />
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
            <ProjectList project={project} projectData={projectData} />
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
