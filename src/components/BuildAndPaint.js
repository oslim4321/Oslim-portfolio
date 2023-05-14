"use client";

import { motion } from "framer-motion";

const BuildAndPaint = () => {
  return (
    <section className="flex items-center py-16">
      <div className="cont flex bg-white shadow md:h-[100vh] p-4 overflow-hidden">
        <div className="flex-1 mt-28">
          <div className="w-[60%] mx-auto">
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold tracking-widest mb-4 text-[#e49db5]"
            >
              I Develop & <br /> Design Website
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-500 my-10"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
              et!
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[#303841] text-white font-semibold w-full hover:bg-blue-600 focus:outline-none"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              See My Work
            </motion.button>
          </div>
        </div>
        <div className="w-px  bg-[#efced9] mx-8" />
        {/* right */}
        <div className="flex-1 mt-28">
          <div className="w-[60%] mx-auto">
            <motion.h1
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold tracking-widest mb-4 text-[#e49db5]"
            >
              I Paint, <br /> Sometimes
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-500 my-10"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
              et!
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[#303841] text-white font-semibold w-full hover:bg-blue-600 focus:outline-none"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              See My Work
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildAndPaint;
