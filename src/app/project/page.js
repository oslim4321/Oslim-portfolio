import TransitionEffect from "@/src/components/TransitionEffect";
import ProjectParent from "./ProjectParent";
import { db } from "@/lib/utilty/firebase";
import { collection, getDocs } from "firebase/firestore";

async function getData() {
  let project = [];
  try {
    // setloading(true);
    const colRef = collection(db, "projects");
    const res = await getDocs(colRef);
    res.docs.forEach((doc) => {
      project.push({ ...doc.data(), id: doc.id });
    });

    // setprojectData(project);
    return project;
  } catch (error) {
    return error;
  } finally {
    // setloading(false);
  }
}

const page = async () => {
  const data = await getData();
  console.log(data);
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
        <ProjectParent data={data} />
      </div>
    </>
  );
};

export default page;
