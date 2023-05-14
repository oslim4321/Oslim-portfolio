"use client";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useRef } from "react";

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
    <div className="cont flex justify-center items-center flex-wrap">
      <div className="px-20 py-4 rounded-full flex flex-col justify-center items-center">
        <span className=" inline-block text-7xl font-bold">
          <AnimatedNumber value={50} /> +
        </span>
        <h2 className=" text-xl font-medium text-dark/70 dark:text-light/75">
          Complete project
        </h2>
      </div>
      <div className="px-20 py-4 rounded-full flex flex-col justify-center items-center mx-20">
        <span className=" inline-block text-7xl font-bold">
          {" "}
          <AnimatedNumber value={2} /> +
        </span>
        <h2 className=" text-xl font-medium text-dark/70 dark:text-light/75">
          Years of Experience
        </h2>
      </div>
      <div className="px-20 py-4 rounded-full flex flex-col justify-center items-center">
        <span className=" inline-block text-7xl font-bold">
          {" "}
          <AnimatedNumber value={5} /> +
        </span>
        <h2 className=" text-xl font-medium text-dark/70 dark:text-light/75">
          Satisfied Client
        </h2>
      </div>
    </div>
  );
};

export default Capability;
