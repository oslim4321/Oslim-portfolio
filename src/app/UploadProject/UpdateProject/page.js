import React from "react";
import SelectProjectCat from "./SelectProjectCat";
import ProjectList from "./ProjectList";
import { getData } from "@/lib/QueryFirebase";

const page = async () => {
  const data = await getData();
  console.log(data, "data");

  return (
    <div className="antialiased font-sans bg-gray-200">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          {/* here */}
          <SelectProjectCat />
          <ProjectList project={data} />
        </div>
      </div>
    </div>
  );
};

export default page;
