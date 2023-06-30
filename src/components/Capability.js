"use client";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { merriweather } from "@/lib/utilty/Font";

const AnimatedNumber = ({ value }) => {
  const ref = useRef();
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const Capability = () => {
  return (
    <div className="cont flex justify-center items-center flex-wrap py-10">
      <div className="px-20 py-4 rounded-full flex flex-col justify-center my-2 items-center">
        <span
          className={`inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl fdont-bold ${merriweather.className}`}
        >
          <AnimatedNumber value={150} /> +
        </span>
        <h2 className="text-base md:text-xl text-center md:text-left font-medium text-dark/70 dark:text-light/75">
          Complete project
        </h2>
      </div>
      <div className="px-20 py-4 rounded-full flex flex-col justify-center my-2 items-center mx-20">
        <span
          className={`inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl fdont-bold ${merriweather.className}`}
        >
          {" "}
          <AnimatedNumber value={4} /> +
        </span>
        <h2 className="text-base md:text-xl text-center md:text-left font-medium text-dark/70 dark:text-light/75">
          Years of Experience
        </h2>
      </div>
      <div className="px-20 py-4 rounded-full flex flex-col justify-center my-2 items-center">
        <span
          className={`inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl fdont-bold ${merriweather.className}`}
        >
          {" "}
          <AnimatedNumber value={19} /> +
        </span>
        <h2 className="text-base md:text-xl text-center md:text-left font-medium text-dark/70 dark:text-light/75">
          Satisfied Client
        </h2>
      </div>
    </div>
  );
};

export default Capability;
