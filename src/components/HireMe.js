// import React from "react";

// const HireMe = () => {
//   return (
//     <div className="fixed right-0 bottom-0 flex items-center justify-center">
//       <div className="w-72 flex justify-center items-center relative">
//         <img
//           src="/images/Web_Designer_._Web_Developer_.__1_-removebg-preview.png"
//           className="fill fill-dark c origin-center"
//           alt=""
//         />
//         <span className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
//           <div className="bg-black rounded-full h-20 w-20 hover:bg-light hover:text-dark flex items-center justify-center">
//             <span className="text-light text-sm">Hire</span>
//           </div>
//         </span>
//       </div>
//     </div>
//   );
// };

// export default HireMe;
import { motion } from "framer-motion";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed right-0 bottom-0 z-50 cursor-pointer m-5">
      <Link href="mailto:adewaleselim6@gmail.com">
        <div className="w-24 h-24 rounded-full border-4 border-[#EFCED9] flex justify-center items-center">
          <motion.span
            className="text-black text-lg font-bold origin-center "
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            HIRE ME
          </motion.span>
        </div>
      </Link>
    </div>
  );
};

export default HireMe;
