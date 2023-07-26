import { motion } from "framer-motion";

const RotatingAnimation = ({ children, languages }) => {
  const angle = 360 / languages.length;

  return (
    <>
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>{children}</div>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {languages.map((language, index) => (
            <div
              key={index}
              className="absolute"
              style={{
                top: "50%",
                left: "50%",
                transform: `rotate(${
                  index * angle
                }deg) translate(-50%, -200px)`,
                color: "#caaad9",
                fontWeight: "bold",
              }}
            >
              <div className="c-[300px] md:w-[100px] h-[300px] md:h-[100px] ">
                {language}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default RotatingAnimation;
