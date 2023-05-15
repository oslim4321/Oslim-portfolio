"use client";

import { motion } from "framer-motion";

const BuildAndPaint = () => {
  return (
    <section className="flex flex-wrap items-center py-16">
      <div className="cont grid grid-cols-12 bg-white dark:bg-dark dark:border dark:text-light shadow md:h-[100vh] p-4 overflow-hidden">
        <div className="col-span-12 md:col-span-5 mt-28">
          <div className="md:w-[70%] mx-auto">
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl text-center md:text-left font-bold tracking-widest mb-4 text-[#e49db5]"
            >
              I Develop & <br /> Design Website
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-500 text-center md:text-left my-10 dark:text-light"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
              et!
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[#303841] text-white font-semibold dark:bg-light dark:text-dark dark:hover:bg-slate-300 w-full hover:bg-dark focus:outline-none"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              See My Work
            </motion.button>
          </div>
        </div>
        <div className="w-px  bg-[#efced9] mx-8 hidden md:block" />
        {/* right */}
        <div className="col-span-12 md:col-span-5 mt-28">
          <div className="md:w-[70%] mx-auto">
            <motion.h1
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl text-center md:text-left font-bold tracking-widest mb-4 text-[#e49db5]"
            >
              I Paint, <br /> Sometimes
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-500 text-center md:text-left my-10 dark:text-light"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
              et!
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[#303841] text-white font-semibold dark:bg-light dark:text-dark dark:hover:bg-slate-300 w-full hover:bg-dark focus:outline-none"
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
