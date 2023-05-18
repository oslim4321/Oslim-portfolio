import TransitionEffect from "@/src/components/TransitionEffect";
import ProjectParent from "./ProjectParent";
import dbConnect from "@/lib/mongodb";
import User from "@/model/user";

async function getData() {
  await dbConnect();

  const project = await User.find();
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

      {/* <ProjectList /> */}
      {/* <ProjectList /> */}
    </>
  );
};

export default page;
