"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PaginatePage from "./PaginatePage";
import LoadingSpinner from "@/src/components/FetchProjectSpinner";
import ProjectList from "./ProjectList";
import MyContextProvider, { GlobalMyContextProvider } from "@/lib/Context";
import ErrorFetch from "@/src/components/ErrorFetch";

export default function ProjectParent({ data }) {
  const { loading, errorState } = GlobalMyContextProvider(MyContextProvider);
  const [error, setError] = useState("");

  const [project, setproject] = useState("Client works");
  const [projectData, setprojectData] = useState([]);
  // setprojectData(data);
  useEffect(() => {
    if (loading) {
      setprojectData([]);
    }
  }, [loading]);

  useEffect(() => {
    if (data.length < 1) {
      setError(true);
    } else {
      setprojectData(data);
    }
  }, [data]);
  if (error) {
    return <ErrorFetch error={"Error getting Projects"} />;
  }

  // async function getData() {
  //   let project = [];
  //   try {
  //     setloading(true);
  //     const colRef = collection(db, "projects");
  //     const res = await getDocs(colRef);
  //     res.docs.forEach((doc) => {
  //       project.push({ ...doc.data(), id: doc.id });
  //     });

  //     setprojectData(project);
  //     if (project.length < 1) {
  //       seterrorState("check internet connection");
  //     }

  //     // return project;
  //   } catch (error) {
  //     // alert("error fetching projects");
  //     // seterrorState(error);
  //     // console.log(error.message);
  //   } finally {
  //     setloading(false);
  //   }
  // }
  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      <div className="flex justify-center items-center">
        <PaginatePage
          project={project}
          setproject={setproject}
          setprojectData={setprojectData}
          // result={data}
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
              <p className="text-center text-2xl capitalize text-red-600">
                {errorState}
              </p>
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
