"use client";

import { YearOfExperiance } from "@/lib/MyDetails";
import { motion } from "framer-motion";
import Link from "next/link";
import FoldAnimation from "./FoldAnimation";

const BuildAndPaint = () => {
  return (
    <section className="flex flex-wrap items-center py-16">
      <div className="cont grid grid-cols-12 bg-white dark:bg-dark dark:border dark:text-light shadow md:h-[100vh] p-4 overflow-hidden">
        <div className="col-span-12 md:col-span-5 mt-28 relative">
          <div className="md:w-[70%] mx-auto ">
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
              className="text-gray-500 text-center md:text-left my-10 mb-20 md:mb-0 dark:text-light"
            >
              I am a professional web developer with over <YearOfExperiance />{" "}
              years of freelance experience. I have a strong portfolio of work
              that demonstrates my skills and abilities. I am confident that I
              can meet your needs and deliver high-quality work on time and
              within budget.
            </motion.p>
            <Link href="project">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-[#303841] text-white font-semibold dark:bg-slate-700 dark:text-light absolute bottom-0 md:bottom-28 dark:hover:bg-slate-300 dark:hover:text-dark w-full md:w-[80%] hover:bg-dark focus:outline-none"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                See My Work
              </motion.button>
            </Link>
            {/* <FoldAnimation /> */}
          </div>
        </div>
        <div className="w-px  bg-[#efced9] mx-8 hidden md:block" />
        {/* right */}
        <div className="col-span-12 md:col-span-5 mt-28 relative">
          <div className="md:w-[70%] mx-auto ">
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
              className="text-gray-500 text-center md:text-left my-10 mb-20 md:mb-0 dark:text-light"
            >
              I am a painter and cartoonist with a passion for using my art to
              tell stories and connect with others. I enjoy experimenting with
              different mediums and techniques, and I am always looking for new
              ways to surprise and amaze my clients.
            </motion.p>

            <Link href={"coming-soon"}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-[#303841] text-white font-semibold dark:bg-slate-700 dark:text-light absolute bottom-0 md:bottom-28 dark:hover:bg-slate-300 dark:hover:text-dark w-full md:w-[80%] hover:bg-dark focus:outline-none"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                See My Work
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildAndPaint;
