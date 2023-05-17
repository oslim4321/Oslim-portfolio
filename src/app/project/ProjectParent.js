"use client";
// import { useState } from "react";
// import PaginatePage from "./PaginatePage";
import ProjectList from "@/src/components/ProjectList";
// import { motion } from "framer-motion";

// const ProjectParent = () => {
//   const [test, setTest] = useState(false);

//   return (
//     <>
//       <button onClick={() => setTest(!test)}>Toggle</button>
//       <PaginatePage />
//       <motion.div
//         style={{ display: "flex", overflow: "hidden" }}
//         initial={{ x: 0 }}
//         animate={{ x: test ? "-100%" : "0" }}
//         transition={{ duration: 0.5 }}
//       >
//         {test ? (
//           <motion.div
//             key="project1"
//             // style={{ width: "100%", marginRight: "1rem" }}
//             initial={{ x: -1000 }}
//             animate={{ x: test === true ? 0 : -1000 }}
//             transition={{ duration: 0.5 }}
//           >
//             1
//             <ProjectList />
//           </motion.div>
//         ) : (
//           <motion.div
//             key="project2"
//             style={{ width: "100%" }}
//             initial={{ x: -1000 }}
//             animate={{ x: !test ? 0 : -1000 }}
//             transition={{ duration: 0.5 }}
//           >
//             2
//             <ProjectList />
//           </motion.div>
//         )}
//       </motion.div>
//     </>
//   );
// };

// export default ProjectParent;

// import "./styles.css";
import { useState } from "react";
// import { initialTabs as tabs } from "./ingredients";
import { motion, AnimatePresence } from "framer-motion";
import PaginatePage from "./PaginatePage";

export default function ProjectParent() {
  const [selectedTab, setSelectedTab] = useState(allIngredients[0]);

  return (
    <div>
      <ul className="flex">
        <PaginatePage />
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
      </ul>

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab ? selectedTab.icon : "😋"}
            <ProjectList />
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
  { icon: "🥕", label: "Carrot" },
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
