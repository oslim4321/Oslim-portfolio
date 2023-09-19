"use client";

import React, { useEffect, useState } from "react";

const UseThemesSwitcher = () => {
  const preferDarkQuery = "{prefer-color-scheme: dark}";
  const [mode, setMode] = useState();

  useEffect(() => {
    localStorage.setItem('theme', 'dark')
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = localStorage.getItem("theme");

    const handleChange = () => {
      if (userPref) {
        let check = userPref === "dark" ? "dark" : "light";
        // let check = mediaQuery.matches ? "dark" : "dark";

        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("light");
        }
      } else {
        let check = mediaQuery.matches ? "dark" : "light";
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("light");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };
    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [mode]);

  return [mode, setMode];
};

export default UseThemesSwitcher;
