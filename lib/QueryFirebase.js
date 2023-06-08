import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import { db } from "./utilty/firebase";

// Function to fetch items based on category
// export const fetchItemsByCategory = async (category) => {
//   console.log("started fetchiong");

//   const colRef = collection(db, "projects");

//   try {
//     const q = query(colRef, where("category", "==", category));
//     const snapshot = await getDocs(q);

//     const items = snapshot.docs.map((doc) => doc.data(), id: doc.id);
//     return items;
//   } catch (error) {
//     console.error("Error fetching items:", error);
//     return [];
//   }
// };
export const fetchItemsByCategory = async (category) => {
  console.log("started fetching");

  const colRef = collection(db, "projects");

  try {
    const q = query(colRef, where("category", "==", category));
    const snapshot = await getDocs(q);

    const items = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return items;
  } catch (error) {
    console.error("Error fetching items:", error);
    return [];
  }
};

export async function getData() {
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

export const getProjectById = async (id) => {
  let project;
  try {
    const colRef = doc(db, "projects", id);
    const res = await getDoc(colRef);
    project = { ...res.data(), id: res.id };
    return project;
  } catch (error) {
    console.log(error);
  }
};
//  l
//  const colRef = doc(db, "projects", id);
//  getDoc(colRef)
//    .then((doc) => {
//      project.push({ ...doc.data(), id: doc.id });
//      return project;
//    })

//    .catch((err) => {
//      console.log(err);
//    });
