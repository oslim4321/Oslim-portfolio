import MyContextProvider, { GlobalMyContextProvider } from "@/lib/Context";
import { fetchItemsByCategory } from "@/lib/QueryFirebase";

import { motion } from "framer-motion";

const PaginatePage = ({ project, setproject, setprojectData }) => {
  const { setloading, seterrorState } =
    GlobalMyContextProvider(MyContextProvider);

  /* onclick button to filter item bg category from firebase */
  async function filterByCateg(text, category) {
    setloading(true);
    try {
      /* setProject to the button  that  user click */
      setproject(text);
      /* send the the category the user click to the functnion that fetch it */
      const data = await fetchItemsByCategory(category);
      setprojectData(data);
    } catch (error) {
      setloading(false);
    } finally {
      setloading(false);
    }
  }

  return (
    <div>
      {buttons.map(({ text, category }) => (
        <motion.button
          key={text}
          onClick={() => filterByCateg(text, category)}
          // onClick={() => }
          className={`mx-2 px-4 py-2 rounded-lg text-sm font-medium border shadow dark:text-light my-3 ${
            text === project ? "border border-[#f2b6af]" : null
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {text.trim()}
          {/* <Link
            href={{
              pathname: "project",
              search: text.trim(),
            }}
          >
            {text.trim()}
          </Link> */}
        </motion.button>
      ))}
    </div>
  );
};

export default PaginatePage;

const buttons = [
  {
    text: "All",
    category: "all",
  },
  {
    text: "Personal projects",
    category: "personal-projects",
  },
  {
    text: "Open source projects",
    category: "open-source-projects",
  },
  {
    text: "Education projects",
    category: "education-projects",
  },
  {
    text: "Freelance projects",
    category: "freelance projects",
  },
  {
    text: "My CSS Student Project",
    category: "my css student works",
  },
];
