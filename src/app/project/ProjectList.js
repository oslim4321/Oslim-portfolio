"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Close, GithubIcon } from "../../components/Icons";

const ProjectList = ({ project, projectListData }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [pupUpShow, setpupUpShow] = useState();
  useEffect(() => {
    setpupUpShow(projectListData[selectedId - 1]);
  }, [selectedId]);
  console.log(selectedId, "selectedId");

  return (
    <>
      {/* shuffle button */}
      {/* <button
        className="absolute right-0 border"
        onClick={() => {
          getRandomGridSpan();
          // setrand(Math.random());
        }}
      >
        shuffle
      </button> */}
      <div className=" h-[90vh] overflow-y-scroll no-scrollbar">
        <GridListing
          projectListData={projectListData}
          setSelectedId={setSelectedId}
        />
        <AnimatePresence>
          {selectedId && pupUpShow && (
            <motion.div
              layoutId={selectedId}
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
              // onClick={() => setSelectedId(null)}
            >
              <motion.div
                className="bg-white w-full md:w-[60%] h-[60%] shadow-md rounded-md p-4 overflow-scroll scrollbar-white relative"
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-wrap gap-x-5">
                  <img
                    src={pupUpShow.image}
                    alt=""
                    className="w-[500px] h-[200px] object-cover"
                  />
                  <div>
                    <motion.h5 className=" text-xl font-bold mb-2">
                      {pupUpShow.projectName}
                    </motion.h5>
                    {/* descriptions */}
                    <motion.h2 className="text-gray-600">
                      {pupUpShow.projectDesc}
                    </motion.h2>
                    <button>Visit Website</button>
                  </div>
                </div>

                {/* skills */}
                <div className="flex flex-wrap gap-x-4">
                  {pupUpShow.technologies.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-center rounded-full font-semibold text-dark sm:bg-dark dark:text-light md:text-light py-1.5 px-1.5
                      md:px-6 md:py-3  cursor-pointer text-sm md:text-lg bg-transparent sm:text-light sm:dark:bg-transparent sm:text-sm
                      md:dark:bg-light dark:md:text-dark
                      
                      "
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <p className="text-lg font-medium">{skill}</p>
                    </motion.div>
                  ))}
                </div>
                {/*Images */}
                <h5 className=" text-xl font-bold my-2 mt-5">
                  Beautiful Pictures of the website
                </h5>

                <div className="flex gap-10 overflow-x-scroll  no-scrollbar">
                  {pupUpShow.projectImages.length > 0 &&
                    pupUpShow.projectImages.map((img) => (
                      <img
                        src={img}
                        alt=""
                        className="w-[200px] h-[200px] object-cover"
                      />
                    ))}
                </div>
                <motion.button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-0 right-0 "
                  // className="mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none"
                >
                  <Close className={"text-10xl"} size="50" />
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ProjectList;

function GridListing({ projectListData, setSelectedId }) {
  const getRandomGridSpan = () => {
    const randomCols = Math.floor(Math.random() * 4) + 1; // Random number between 1 and 4 for grid columns
    const randomRows = Math.floor(Math.random() * 3) + 1; // Random number between 1 and 3 for grid rows

    return `col-span-${randomCols} md:col-span-${randomCols} row-span-${randomRows} md:row-span-${randomRows}`;
  };

  return (
    <div>
      <motion.div className="cont pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 grid-auto-rows-minmax(200px)">
        {projectListData.length > 0 &&
          projectListData.map((item, index) => (
            <motion.div
              key={index + 1}
              layoutId={index + 1}
              className={`${getRandomGridSpan()} p-4 bg-white shadow-md rounded-md cursor-pointer glassBg dark:text-white 
             border-r-2 border-[#efced9]`}
              initial={{ x: item.direction }}
              whileInView={{ x: 0 }}
              transition={{ delay: 0.3 + index * 0.08 }}
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-full h-[50%]">
                <img
                  src={item.image}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="">
                <motion.h2 className="text-xl font-bold">
                  {item.projectName}
                </motion.h2>
                <motion.h5 className="text-gray-600 ">
                  {item.projectDesc.slice(0, 50)}...
                </motion.h5>
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => setSelectedId(index + 1)}
                    className="border p-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    See More
                  </button>

                  <a
                    href={item.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <GithubIcon size={20} />
                  </a>
                </div>
                <div className="flex justify-end">
                  {" "}
                  <button
                    onClick={() => setSelectedId(index + 1)}
                    className="border p-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Visit
                  </button>
                </div>
                <p className="text-sm mt-2 text-gray-500">{item.projectType}</p>
              </div>
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
}
