import TransitionEffect from "@/src/components/TransitionEffect";
import ProjectParent from "./ProjectParent";

const page = async () => {
  const data = await getData();
  console.log(data);
  return (
    <>
      <TransitionEffect />
      <ProjectParent />
    </>
  );
};

export default page;
