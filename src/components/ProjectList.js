"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedImg from "./AnimatedImg";
import PaginatePage from "../app/project/PaginatePage";
const items = [
  {
    id: 1,
    subtitle: "Subtitle 1",
    title: "Title 1",
    grid: "col-span-2 sm:col-span-1 md:col-span-2 row-span-1 md:row-span-3",
    direction: "-100%",
  },
  {
    id: 2,
    subtitle: "Subtitle 2",
    title: "Title 2",
    grid: "col-span-2 sm:col-span-1 md:col-span-2 row-span-1 md:row-span-3",
    direction: "-100%",
  },
  {
    id: 3,
    subtitle: "Subtitle 3",
    title: "Title 3",
    grid: "col-span-2 sm:col-span-1 md:col-span-2 row-span-1 md:row-span-3",
    direction: "-100%",
  },
  {
    id: 4,
    subtitle: "Subtitle 4",
    title: "Title 4",
    grid: "col-span-1 md:col-span-1 row-span-1 md:row-span-1",
    direction: "-100%",
  },
  {
    id: 5,
    subtitle: "Subtitle 5",
    title: "Title 5",
    grid: "col-span-1 md:col-span-1 row-span-1 md:row-span-1",
    direction: "-100%",
  },
  {
    id: 6,
    subtitle: "Subtitle 6",
    title: "Title 6",
    grid: "col-span-2 sm:col-span-1 md:col-span-2 row-span-1 md:row-span-4",
    direction: "-100%",
  },
  // Add more items here
];

const ExampleComponent = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      <PaginatePage />
      <motion.div
        className="cont pt-10 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 grid-auto-rows-minmax(200px, auto)"
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            layoutId={item.id}
            onClick={() => setSelectedId(item.id)}
            className={`p-4 bg-white shadow-md rounded-md cursor-pointer w-full h-full row-span-1 md:row-span-4 ${item.grid} glassBg dark:text-white 
          md:flex justify-center items-center border-r-2 border-[#efced9]`}
            initial={{ y: item.direction }}
            animate={{ y: 0 }}
            transition={{ delay: 0.1 + index * 0.08 }}
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className=" md:w-[70%]">
              <img
                src="/images/cartoonTable.jpg"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="md:w-[30%] ">
              <motion.h5 className="text-gray-600 ">{item.subtitle}</motion.h5>
              <motion.h2 className="text-xl font-bold">{item.title}</motion.h2>
            </div>
          </motion.div>
        ))}

        {/* <div className="w-full h-full relatidve">
        <AnimatedImg
          path={"/images/cartoonTable.jpg"}
          alt={item.subtitle}
          className="absolute inset-0 w-full h-full object-cover z-30"
        />
      </div>
      <div>
        <motion.h5 className="text-gray-600 mb-2">{item.subtitle}</motion.h5>
        <motion.h2 className="text-xl font-bold">{item.title}</motion.h2>Z
      </div> */}

        <AnimatePresence>
          {selectedId && (
            <motion.div
              layoutId={selectedId}
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
              // onClick={() => setSelectedId(null)}
            >
              <motion.div
                className="bg-white w-[60%] h-[60%] shadow-md rounded-md p-4"
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h5 className="text-gray-600 mb-2">
                  {items[selectedId - 1].subtitle}
                </motion.h5>
                <motion.h2 className="text-xl font-bold">
                  {items[selectedId - 1].title}
                </motion.h2>
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

export default ExampleComponent;
