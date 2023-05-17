import { motion } from "framer-motion";
import Link from "next/link";
// import { useRouter } from "next/router";

// const PaginateButton = ({ text, isActive, onClick }) => {
//   return (
//     <motion.button
//       onClick={onClick}
//       className={`mx-2 px-4 py-2 rounded-lg text-sm font-medium ${
//         isActive
//           ? "bg-blue-500 text-white"
//           : "bg-gray-200 text-gray-800 hover:bg-gray-300"
//       }`}
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//     >
//       {text}
//     </motion.button>
//   );
// };

const PaginatePage = ({ text }) => {
  // const router = useRouter();

  const handleButtonClick = (route) => {
    // router.push(route);
  };

  /* ${
        isActive
          ? "bg-blue-500 text-white"
          : "bg-gray-200 text-gray-800 hover:bg-gray-300"
      } */

  return (
    <motion.button
      // onClick={onClick}
      className={`mx-2 px-4 py-2 rounded-lg text-sm font-medium `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
    </motion.button>
    // <div className="flex justify-center pt-8">
    //   <PaginateButton
    //     text="Soft works"
    //     // isActive={router.asPath === "/soft-works"}
    //     onClick={() => handleButtonClick("/soft-works")}
    //   />
    //   <PaginateButton
    //     text="Skill work"
    //     // isActive={router.asPath === "/skill-work"}
    //     onClick={() => handleButtonClick("/skill-work")}
    //   />
    //   <PaginateButton
    //     text="Full stack project"
    //     // isActive={router.asPath === "/full-stack-project"}
    //     onClick={() => handleButtonClick("/full-stack-project")}
    //   />
    //   <PaginateButton
    //     text="MERN stack project"
    //     // isActive={router.asPath === "/mern-stack-project"}
    //     onClick={() => handleButtonClick("/mern-stack-project")}
    //   />
    //   <PaginateButton
    //     text="Client works"
    //     // isActive={router.asPath === "/client-works"}
    //     onClick={() => handleButtonClick("/client-works")}
    //   />
    // </div>
  );
};

export default PaginatePage;
