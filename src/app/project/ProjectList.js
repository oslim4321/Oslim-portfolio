"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GithubIcon } from "../../components/Icons";
import Link from "next/link";
import { merriweather } from "@/lib/utilty/Font";
import Image from "next/image";

const ProjectList = ({ project, projectData }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [pupUpShow, setpupUpShow] = useState();

  useEffect(() => {
    setpupUpShow(projectData[selectedId - 1]);
  }, [selectedId]);

  return (
    <>
      <div className="h-[90vh] no-scrollbar overflow-y-scroll  relative dark:bg-gray-900">
        <GridListing
          projectData={projectData}
          project={project}
          setSelectedId={setSelectedId}
        />
        {/* <div className="relative">
          <AnimatePresence>
            {selectedId && pupUpShow && (
              <motion.div
                layoutId={selectedId}
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
              >
                <motion.div
                  className="bg-white dark:bg-gray-800 w-full md:w-[60%] h-[60%] shadow-mdd  rounded-md p-4 overflow-scroll scrollbar-white relative"
                  initial={{ opacity: 0, scale: 0.95, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-wrap gap-x-5">
                    <Image
                      src={pupUpShow.image ? pupUpShow.image : ""}
                      alt={pupUpShow.projectName}
                      className="w-[500px] h-[200px] object-cover"
                      width="500"
                      height="500"
                    />
                    <div>
                      <motion.h5 className="text-xl font-bold mb-2 dark:text-light">
                        {pupUpShow.projectName}
                      </motion.h5>
                      <motion.h2 className="text-gray-600 dark:text-gray-400">
                        {pupUpShow?.projectDesc
                          .split(/(?=\d\))/)
                          .map((line, index) => (
                            <div key={index} className="my-2">
                              {line.trim().startsWith("1)") ? <br /> : null}
                              {line.trim()}
                            </div>
                          ))}
                      </motion.h2>

                      <button className="my-3 border px-2 py-1 dark:text-light/70 ">
                        Visit Website
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {pupUpShow?.technologies.map((skill, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center justify-center rounded-full font-semibold text-dark py-1.5 px-1.5 md:px-6 md:py-3 cursor-pointer text-sm md:text-lg bg-transparent bg-slate-300 sm:text-sm bg-slate-100 dark:bg-slate-600 dark:text-light "
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <p className="text-lg font-medium">{skill}</p>
                      </motion.div>
                    ))}
                  </div>

                  <h5 className="text-xl font-bold my-2 mt-5 dark:text-light">
                    Beautiful Pictures of the website
                  </h5>

                  <div>
                    <ProjectImageList pupUpShow={pupUpShow} />
                  </div>
                  <motion.button
                    onClick={() => setSelectedId(null)}
                    className="fixed right-0 md:right-[20%] top-[20%] z-50"
                  >
                    <Close className="text-10xl dark:text-white" size="50" />
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div> */}
      </div>
    </>
  );
};

export default ProjectList;

function GridListing({ projectData, project, setSelectedId }) {
  const getRandomGridSpan = () => {
    const randomCols = Math.floor(Math.random() * 3) + 1;
    const randomRows = Math.floor(Math.random() * 2) + 1;

    return `col-span-${randomCols} md:col-span-${randomCols} row-span-${randomRows} md:row-span-${randomRows}`;
  };

  return (
    <div className="my-10">
      <p className="text-2xl font-bold mb-6 text-center dark:text-light">
        {project}
      </p>
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:grid-cols-4 grid-row-1 md:grid-rows-2 cont">
        {projectData.length > 0 &&
          projectData?.map((item, index) => (
            <motion.div
              key={index + 1}
              layoutId={index + 1}
              className={`p-4 bg-white dark:bg-gray-800 shadow-md rounded-md cursor-pointer glassBgNoShadow dark:text-white border-r-2 border-[#efced9] ${getRandomGridSpan()} h-[400px] py-10`}
              initial={{ x: item.direction }}
              whileInView={{ x: 0 }}
              transition={{ delay: 0.3 + index * 0.08 }}
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-[100%] h-[50%]">
                <a
                  href={item.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <img src={item.image} alt="" /> */}
                  <Image
                    src={item.image ? item.image : ""}
                    className="w-full h-full object-cover"
                    alt={item.projectName}
                    width="500"
                    height="500"
                  />
                </a>
              </div>
              <div className="">
                <motion.h2
                  className={`text-xl font-bold ${merriweather.clasName}`}
                >
                  {item.projectName.length > 21 ? (
                    <div>{item.projectName.slice(0, 21)}...</div>
                  ) : (
                    item.projectName
                  )}
                </motion.h2>
                <motion.h5 className="text-gray-600 dark:text-gray-400">
                  {item.projectDesc.slice(0, 50)}...
                </motion.h5>
                <div className="flex justify-between items-center mt-4">
                  <p className="leading-relaxed text-base overflow-x-auto w-40 scrollbar-white no-scrollbar">
                    <span className="inline-flex space-x-2">
                      {item.technologies.map((language, i) => (
                        <span
                          className="inline-block px-2 py-1 text-sm font-medium leading-none bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full whitespace-nowrap"
                          key={i}
                        >
                          {language}
                        </span>
                      ))}
                    </span>
                  </p>

                  {/* <button
                    onClick={() => setSelectedId(index + 1)}
                    className="border p-2 text-sm text-gray-600 hover:text-gray-900 transition-colors dark:text-light dark:hover:text-light/70 hover:scale-x-100 transition-all duration-100"
                  >
                    See More
                  </button> */}

                  <a
                    href={item.gitHubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 transition-colors "
                  >
                    <GithubIcon size={20} />
                  </a>
                </div>
                <div className="flex justify-between items-center capitalize font-bold">
                  {item.studentName && <p>{item.studentName}</p>}

                  <a
                    href={item.projectLink}
                    target="_blank"
                    className="text-end"
                  >
                    <button
                      onClick={() => setSelectedId(index + 1)}
                      className="border-slate-300 border p-2 text-sm text-gray-600 hover:text-gray-900 transition-colors dark:text-light dark:hover:text-light/70 mt-5 text-slate-400"
                    >
                      Visit Portfolio
                    </button>
                  </a>
                </div>
                <p className="text-sm mt-2 text-gray-500">{item.projectType}</p>
              </div>
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
}
