"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PaginatePage from "./PaginatePage";
import LoadingSpinner from "@/src/components/FetchProjectSpinner";
import ProjectList from "./ProjectList";

import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/utilty/firebase";

export default function ProjectParent() {
  const [project, setproject] = useState("All");
  const [projectData, setprojectData] = useState([]);
  const [loading, setloading] = useState(false);
  const [errorState, seterrorState] = useState("");

  // useEffect(() => {
  //   setprojectData(projectListData);
  // }, [projectListData]);

  async function getData() {
    let project = [];
    try {
      setloading(true);
      const colRef = collection(db, "projects");
      const res = await getDocs(colRef);
      res.docs.forEach((doc) => {
        project.push({ ...doc.data(), id: doc.id });
      });
      console.log(projectData, "projectData");
      setprojectData(project);
      return project;
    } catch (error) {
      seterrorState(error.message);
      console.log(error.message);
    } finally {
      setloading(false);
    }
  }
  useEffect(() => {
    getData();
  }, []);

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
            {loading ? (
              <div className="flex justify-center items-center">
                {" "}
                <LoadingSpinner />
              </div>
            ) : null}

            {/* {selectedTab ? selectedTab.icon : "😋"} */}
            {errorState ? (
              <p className="text-center">{errorState}</p>
            ) : (
              <ProjectList project={project} projectData={projectData} />
            )}
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
