"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectList = ({ project, projectListData }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [pupUpShow, setpupUpShow] = useState();
  useEffect(() => {
    setpupUpShow(projectListData[selectedId - 1]);
  }, [selectedId]);
  console.log(selectedId, "selectedId");
  return (
    <>
      <motion.div className="cont pt-10 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 grid-auto-rows-minmax(200px, auto)">
        {projectListData.map((item, index) => (
          <motion.div
            key={index}
            layoutId={index}
            className={`p-4 bg-white shadow-md rounded-md cursor-pointer w-full h-full row-span-1 md:row-span-4 ${item.grid} glassBg dark:text-white 
             md:flex justify-center items-center border-r-2 border-[#efced9]`}
            initial={{ x: item.direction }} // Replace 'direction' with the desired initial position (-100 for left, 100 for right, etc.)
            whileInView={{ x: 0 }}
            transition={{ delay: 0.3 + index * 0.08 }} // Add stagger effect to delay each grid item's animation
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className=" md:w-[70%]">
              <div className="w-full h-full">
                <img
                  src={item.image}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>
            <div className="md:w-[30%] ">
              <motion.h2 className="text-xl font-bold">
                {item.projectName}
              </motion.h2>
              <motion.h5 className="text-gray-600 ">
                {item.projectDesc.slice(0, 50)}
              </motion.h5>
              <button
                onClick={() => setSelectedId(index + 1)}
                className="border p-2"
              >
                See details
              </button>
            </div>
          </motion.div>
        ))}

        <AnimatePresence>
          {selectedId && pupUpShow && (
            <motion.div
              layoutId={selectedId}
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
              // onClick={() => setSelectedId(null)}
            >
              <motion.div
                className="bg-white w-[60%] h-[60%] shadow-md rounded-md p-4 overflow-scroll"
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <img src={pupUpShow.image} alt="" className="w-[500px]" />
                <motion.h5 className="text-gray-600 mb-2">
                  {pupUpShow.projectName}
                </motion.h5>
                <motion.h2 className="text-xl font-bold">
                  {pupUpShow.projectDesc}
                </motion.h2>
                <div className="flex gap-10">
                  {pupUpShow.projectImages.length > 0 &&
                    pupUpShow.projectImages.map((img) => (
                      <img src={img} alt="" />
                    ))}
                </div>
                <motion.button
                  onClick={() => setSelectedId(null)}
                  className="mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none"
                >
                  Close
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default ProjectList;
