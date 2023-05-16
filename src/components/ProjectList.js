import React from "react";

const ProjectList = () => {
  return (
    <div class="h-s cont">
      <div class="grid grid-cols-2 grid-rosws-3 md:grsid-rows-4 md:grid-cols-4 gap-2 md:gap-4 h-screen">
        <div class="bg-indigo-100 col-span-1 md:col-span-2">
          <span>01</span>
        </div>
        <div class="bg-fuchsia-100 col-span-1 md:col-span-2 row-span-1 md:row-span-2">
          <span>02</span>
        </div>
        <div class="bg-purple-100 col-span-1 md:col-span-2">
          <span>03</span>
        </div>
        <div class="bg-violet-100">
          <span>04</span>
        </div>
        <div class="bg-sky-100">
          <span>05</span>
        </div>
        <div class="bg-emerald-100 col-span-1 md:col-span-2">
          <span>06</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
