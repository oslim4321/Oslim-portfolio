import { motion } from "framer-motion";
import Link from "next/link";

const PaginatePage = ({ buttonList, setproject }) => {
  // const router = useRouter();

  const handleButtonClick = (route) => {
    // router.push(route);
  };

  return (
    <div>
      {buttonList.map(({ text }) => (
        <motion.button
          key={text}
          onClick={() => setproject(text)}
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
