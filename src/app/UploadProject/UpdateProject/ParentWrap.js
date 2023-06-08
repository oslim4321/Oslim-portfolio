"use client";
import React, { useState } from "react";
import ProjectList from "./ProjectList";
import SelectProjectCat from "./SelectProjectCat";
import MyContextProvider, { GlobalMyContextProvider } from "@/lib/Context";

const ParentWrap = ({ project }) => {
  const [QueryProject, setQueryProject] = useState(false);
  const { loading, errorState } = GlobalMyContextProvider(MyContextProvider);

  if (!QueryProject) {
    setQueryProject(project);
  }

  return (
    <div>
      {loading ? (
        " getting projects.."
      ) : errorState ? (
        "error"
      ) : (
        <div>
          {" "}
          <SelectProjectCat setQueryProject={setQueryProject} />
          <ProjectList QueryProject={QueryProject} />
        </div>
      )}
    </div>
  );
};

export default ParentWrap;
//  errorState ? "error" : ""
