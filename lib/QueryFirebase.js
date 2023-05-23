import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./utilty/firebase";

// Function to fetch items based on category
export const fetchItemsByCategory = async (category) => {
  console.log(category, "categoryHere");
  const colRef = collection(db, "projects");

  try {
    const q = query(colRef, where("category", "==", category));
    const snapshot = await getDocs(q);

    const items = snapshot.docs.map((doc) => doc.data());
    return items;

  } catch (error) {
    console.error("Error fetching items:", error);
    return [];
  }
};
