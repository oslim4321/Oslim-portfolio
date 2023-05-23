import TransitionEffect from "@/src/components/TransitionEffect";
import ProjectParent from "./ProjectParent";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/utilty/firebase";

async function getData() {
  let project = [];
  try {
    const colRef = collection(db, "projects");
    const res = await getDocs(colRef);
    res.docs.forEach((doc) => {
      project.push({ ...doc.data(), id: doc.id });
    });
    // Recommendation: handle errors

    return project;
  } catch (error) {
    if (error) {
      return error;
    }
    console.log(error.message);
  }
}

const page = async () => {
  const data = await getData();
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
        <ProjectParent projectListData={data} />
      </div>
    </>
  );
};

export default page;
