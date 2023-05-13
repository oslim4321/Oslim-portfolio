// import "./styles.css";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroPageAnimatedLeft() {
  return (
    <motion.div
      // className="box bg-black"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      }}
    >
      <Image
        src="/images/32745786_03-removebg-preview.png"
        alt="oslim"
        width={"300"}
        height={"300"}
        className="w-[100%]"
      />
    </motion.div>
  );
}
