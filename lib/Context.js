"use client";
import { createContext, useContext } from "react";
import { useState } from "react";

const MyContext = createContext();

// import MyContext from "./MyContext";

const MyContextProvider = ({ children }) => {
  const [data, setData] = useState("");
  const [loading, setloading] = useState(false);
  const [errorState, seterrorState] = useState();

  // Define any functions or state updates you need

  return (
    <MyContext.Provider
      value={{ loading, setloading, errorState, seterrorState }}
    >
      {children}
    </MyContext.Provider>
  );
};
export default MyContextProvider;

export const GlobalMyContextProvider = () => {
  return useContext(MyContext);
};
