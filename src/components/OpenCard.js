"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    id: 1,
    subtitle: "Subtitle 1",
    title: "Title 1",
    grid: "col-span-1 md:col-span-2",
  },
  {
    id: 2,
    subtitle: "Subtitle 2",
    title: "Title 2",
    grid: "col-span-1 md:col-span-2 row-span-1 md:row-span-2",
  },
  {
    id: 3,
    subtitle: "Subtitle 3",
    title: "Title 3",
    grid: "col-span-1 md:col-span-2",
  },
  {
    id: 4,
    subtitle: "Subtitle 3",
    title: "Title 3",
    grid: "",
  },
  {
    id: 5,
    subtitle: "Subtitle 3",
    title: "Title 3",
    grid: "",
  },
  {
    id: 6,
    subtitle: "Subtitle 3",
    title: "Title 3",
    grid: "col-span-1 md:col-span-2",
  },
  // Add more items here
];

const ExampleComponent = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="cont pt-10 grid grid-cols-2 grid-rows-3 md:grid-rows-4 md:grid-cols-4 gap-2 md:gap-4 h-screen">
      {items.map((item) => (
        <motion.div
          key={item.id}
          layoutId={item.id}
          onClick={() => setSelectedId(item.id)}
          className={`p-4 bg-white shadow-md rounded-md cursor-pointer ${item.grid} glassBg dark:text-white`}
        >
          <motion.h5 className="text-gray-600 mb-2">{item.subtitle}</motion.h5>
          <motion.h2 className="text-xl font-bold">{item.title}</motion.h2>
        </motion.div>
      ))}

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
    </div>
  );
};

export default ExampleComponent;
