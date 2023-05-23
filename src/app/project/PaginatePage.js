import { fetchItemsByCategory } from "@/lib/QueryFirebase";
import { motion } from "framer-motion";
import Link from "next/link";

const PaginatePage = ({ buttonList, setproject }) => {
  // const router = useRouter();

  const handleButtonClick = (route) => {
    // router.push(route);
  };

  function filterByCateg(text) {
    setproject(text);

    fetchItemsByCategory(text);
  }

  return (
    <div>
      {buttonList.map(({ text, category }) => (
        <motion.button
          key={text}
          onClick={() => filterByCateg(category)}
          // onClick={() => }
          className={`mx-2 px-4 py-2 rounded-lg text-sm font-medium border shadow`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href={{
              pathname: "project",
              search: text.trim(),
            }}
          >
            {text.trim()}
          </Link>
        </motion.button>
      ))}
    </div>
  );
};

export default PaginatePage;
