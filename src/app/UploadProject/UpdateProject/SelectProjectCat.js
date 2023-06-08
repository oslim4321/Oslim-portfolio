"use client";
import MyContextProvider, { GlobalMyContextProvider } from "@/lib/Context";
import { fetchItemsByCategory } from "@/lib/QueryFirebase";
import { buttons as projectCategory } from "@/lib/utilty/arrayList";
import React, { useState } from "react";

const SelectProjectCat = ({ setQueryProject }) => {
  const { setloading, seterrorState } =
    GlobalMyContextProvider(MyContextProvider);

  const [category, setcategory] = useState("Client works");
  console.log(category);

  /* onclick button to filter item bg category from firebase */
  async function filterByCateg(e) {
    // const datasetValue = e.currentTarget.dataset.cat;
    // console.log(datasetValue, "key");
    // console.log("called");
    setloading(true);
    try {
      /* setProject to the button  that  user click */
      setcategory(e.target.value);
      /* send the the category the user click to the functnion that fetch it */
      const data = await fetchItemsByCategory(e.target.value);
      console.log(data, "from meee lol");
      setQueryProject(data);
    } catch (error) {
      setloading(false);
      seterrorState(true);
    } finally {
      setloading(false);
    }
  }

  return (
    <div>
      <div>
        <h2 className="text-2xl font-semibold leading-tight">{category} hy</h2>
      </div>
      <div className="my-2 flex sm:flex-row flex-col">
        <div className="flex flex-row mb-1 sm:mb-0">
          <div className="relative">
            <select
              onChange={filterByCateg}
              className=" h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
            >
              {projectCategory.map(({ text, category: cat }) => (
                <option key={cat} value={cat}>
                  {text}
                </option>
              ))}
            </select>
            {/* <div className=" h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
              {projectCategory.map(({ text, category }) => (
                <p key={category} onClick={() => filterByCateg(text, category)}>
                  {text}
                </p>
              ))}
            </div> */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="block relative">
          <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-current text-gray-500"
            >
              <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
            </svg>
          </span>
          <input
            placeholder="Search"
            className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default SelectProjectCat;
