// "use client";
// import { createContext, useContext } from "react";
// import { useState } from "react";

// const MyContext = createContext();

// // import MyContext from "./MyContext";

// const MyContextProvider = ({ children }) => {
//   const [data, setData] = useState("");
//   const [loading, setloading] = useState(false);
//   const [errorState, seterrorState] = useState();
//   import React, { createContext, useContext, useState, ReactNode } from "react";

//   // Define the state type
//   type ToggleState = {
//     isToggled: boolean,
//     toggleFunc: () => void,
//   };

//   // Create the context
//   const ToggleContext = (createContext < ToggleState) | (undefined > undefined);

//   // Define a provider component
//   type ToggleProviderProps = {
//     children: ReactNode,
//   };

//   export const ToggleProvider: React.FC<ToggleProviderProps> = ({
//     children,
//   }) => {
//     const [isToggled, setIsToggled] = useState(false);

//     const toggleFunc = () => {
//       setIsToggled((prevIsToggled) => !prevIsToggled);
//     };

//     const state: ToggleState = {
//       isToggled,
//       toggleFunc,
//     };

//     return (
//       <ToggleContext.Provider value={state}>{children}</ToggleContext.Provider>
//     );
//   };

//   // Define a custom hook for using the context
//   export const useToggle = () => {
//     const context = useContext(ToggleContext);
//     if (!context) {
//       throw new Error("useToggle must be used within a ToggleProvider");
//     }
//     return context;
//   };

//   // Define any functions or state updates you need

//   return (
//     <MyContext.Provider
//       value={{ loading, setloading, errorState, seterrorState }}
//     >
//       {children}
//     </MyContext.Provider>
//   );
// };
// export default MyContextProvider;

// export const GlobalMyContextProvider = () => {
//   return useContext(MyContext);
// };
