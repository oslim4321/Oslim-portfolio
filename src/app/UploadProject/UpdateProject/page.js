import React from "react";
import SelectProjectCat from "./SelectProjectCat";
import ProjectList from "./ProjectList";

const page = () => {
  return (
    <div className="antialiased font-sans bg-gray-200">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          {/* here */}
          <SelectProjectCat />
          <ProjectList />
        </div>
      </div>
    </div>
  );
};

export default page;
