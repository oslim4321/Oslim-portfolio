import TransitionEffect from "@/src/components/TransitionEffect";
import ProjectParent from "./ProjectParent";
// import { db } from "@/lib/utilty/firebase";
// import { collection, getDocs, query, where } from "firebase/firestore";
import { getData } from "@/lib/QueryFirebase";

const page = async () => {
  const data = await getData();
  console.log(data, "data");
  const styleOverflow = {
    overflow: "hidden",
  };
  return (
    <>
      <TransitionEffect />
      <section>
        <div style={styleOverflow}>
          <ProjectParent data={data} />
        </div>
      </section>
    </>
  );
};

export default page;
