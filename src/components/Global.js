"use client";
import React, { useEffect } from "react";
import HireMe from "./HireMe";
import Aside from "./Aside";

const Global = () => {
  // useEffect(() => {
  //   localStorage.setItem("theme", "dark");
  // });

  // useEff

  return (
    <div>
      <HireMe />
      {/* <div className="fixed top-[50%] transform translate-y-1/2 left-9 hidden md:block">
        <Aside />
      </div> */}
    </div>
  );
};

export default Global;
