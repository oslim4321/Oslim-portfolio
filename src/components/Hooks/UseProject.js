import { useState } from "react";

export const useProjectCate = () => {
  const [projectCate, setprojectCate] = useState("lol");

  return { projectCate, setprojectCate };
};
