import { fetchItemsByCategory } from "@/lib/QueryFirebase";
import { useProjectCate } from "@/src/components/Hooks/UseProject";

import { motion } from "framer-motion";
import Link from "next/link";

const PaginatePage = ({ buttonList, setproject }) => {
  const { setprojectCate } = useProjectCate();

  // const router = useRouter();

  const handleButtonClick = (route) => {
    // router.push(route);
  };

  async function filterByCateg(text, category) {
    setproject(text);

    const data = await fetchItemsByCategory(category);

    setprojectCate(data);
  }

  return (
    <div>
      {buttonList.map(({ text, category }) => (
        <motion.button
          key={text}
          onClick={() => filterByCateg(text, category)}
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
