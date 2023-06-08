import React from "react";
import ProjectList from "./ProjectList";
import { getData } from "@/lib/QueryFirebase";
import ParentWrap from "./ParentWrap";

const page = async () => {
  const data = await getData();
  // console.log(data, "data");

  return (
    <div className="antialiased font-sans bg-gray-200">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          {/* here */}

          <ParentWrap project={data} />
        </div>
      </div>
    </div>
  );
};

export default page;
