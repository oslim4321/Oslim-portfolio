import TransitionEffect from "@/src/components/TransitionEffect";
import ProjectParent from "./ProjectParent";
import dbConnect from "@/lib/mongodb";
import Project from "@/model/Project";

async function getData() {
  await dbConnect();

  const project = await Project.find();
  // console.log(project);
  return project;
}

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
