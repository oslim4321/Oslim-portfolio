import { motion } from "framer-motion";
import {
  DribbbleIcon,
  Facebook,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
  Whatsapp,
} from "./Icons";
import UseThemesSwitcher from "./Hooks/UseThemesSwitcher";

function Aside({ setshowCurtain }) {
  const [mode, setmode] = UseThemesSwitcher();

  function toggleDarkLightMode() {
    setmode(mode === "light" ? "dark" : "light");
    setshowCurtain(mode);
  }
  return (
    <div>
      <nav className="flex flex-col justify-center gap-8 items-center flex-wrap DeskNav">
        <motion.a
          href={"https://twitter.com/selim_adewale"}
          className="w-10 shadow"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.8 }}
        >
          <TwitterIcon
            className="text-[#a772bf] text-lg p-2 border border-[#fab0c8] hover:text-black dark:hover:text-light"
            width={"30px"}
            height={"30px"}
          />
        </motion.a>
        <motion.a
          href={"https://github.com/oslim4321"}
          className="w-10 shadow"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon
            className="text-[#a772bf] text-lg p-2 border border-[#fab0c8] hover:text-black dark:hover:text-light"
            width={"30px"}
            height={"30px"}
          />
        </motion.a>
        <motion.a
          href={"https://m.facebook.com/selim.sooto"}
          className="w-10 shadow"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Facebook
            className="text-[#a772bf] text-lg p-2 border border-[#fab0c8] hover:text-black dark:hover:text-light"
            width={"30px"}
            height={"30px"}
          />
        </motion.a>
        <motion.a
          href={"https://wa.me/07087121696"}
          className="w-10 shadow"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Whatsapp
            className="text-[#a772bf] text-lg p-2 border border-[#fab0c8] hover:text-black dark:hover:text-light"
            width={"30px"}
            height={"30px"}
          />
        </motion.a>

        <button
          onClick={toggleDarkLightMode}
          className={` w-6 rounded-full  dark:bg-light bg-dark ${
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          } `}
        >
          {mode === "dark" ? (
            <SunIcon className={"fill-dark text-lg"} />
          ) : (
            <MoonIcon className={"fill-dark text-lg"} />
          )}
        </button>
      </nav>
    </div>
  );
}

export default Aside;
// fab0c8;
