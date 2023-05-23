import { useState } from "react";

export const useProjectCate = () => {
  const [projectCate, setprojectCate] = useState("");
  console.log(projectCate, "from main");

  const handleChange = (data) => {
    setprojectCate(data);
  };

  return { projectCate, handleChange };
};
