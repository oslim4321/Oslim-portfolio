import TransitionEffect from "@/src/components/TransitionEffect";
import ProjectParent from "./ProjectParent";
// import { db } from "@/lib/utilty/firebase";
// import { collection, getDocs, query, where } from "firebase/firestore";
import { fetchItemsByCategory, getData } from "@/lib/QueryFirebase";

const page = async () => {
  // const data = await getData();
  const data = await fetchItemsByCategory("client-work");

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
