import TransitionEffect from "@/src/components/TransitionEffect";
import ProjectParent from "./ProjectParent";

const page = async () => {
  // const data = await getData();
  // console.log(data);
  // .then((snapshot) => {
  //   let project = [];
  //   snapshot.docs.forEach((doc) => {
  //     project.push({ ...doc.data(), id: doc.id });
  //   });

  //   console.log(project, "project");
  // })
  // .catch((err) => {
  //   console.log(err.message);
  // });
  const styleOverflow = {
    overflow: "hidden",
  };
  return (
    <>
      <div style={styleOverflow}>
        <TransitionEffect />
        <ProjectParent />
      </div>
    </>
  );
};

export default page;
