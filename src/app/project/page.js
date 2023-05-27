import TransitionEffect from "@/src/components/TransitionEffect";
import ProjectParent from "./ProjectParent";
import { db } from "@/lib/utilty/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

async function getData() {
  let project = [];
  try {
    // setloading(true);
    const colRef = collection(db, "projects");

    const q = query(colRef, where("category", "==", "client-work"));
    const res = await getDocs(q);
    res.docs.forEach((doc) => {
      project.push({ ...doc.data(), id: doc.id });
    });
    if (project.length < 1) {
      console.log("check internet connection");
    }
    return project;
  } catch (error) {
    throw Error;
    // return error;
  } finally {
    // setloading(false);
  }
}

const page = async () => {
  const data = await getData();
  console.log(data, "data");
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
