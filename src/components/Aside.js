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

function Aside() {
  const [mode, setmode] = UseThemesSwitcher();

  function toggleDarkLightMode() {
    setmode(mode === "light" ? "dark" : "light");
    setshowCurtain(mode);
  }
  return (
    <div>
      <nav className="fled justify-center items-center flex-wrap DeskNav">
        <motion.a
          href={"https://twitter.com/selim_adewale"}
          className="w- mx-3  w-6"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.8 }}
        >
          <TwitterIcon className="text-[#fab0c8] text-lg hover:text-black dark:hover:text-light" />
        </motion.a>
        <motion.a
          href={"https://github.com/oslim4321"}
          className="w- mx-3  w-6"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon className="text-[#fab0c8] text-lg hover:text-black dark:hover:text-light" />
        </motion.a>
        <motion.a
          href={"https://m.facebook.com/selim.sooto"}
          className="w- mx-3  w-6"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Facebook className="text-[#fab0c8] text-lg hover:text-black dark:hover:text-light" />
        </motion.a>
        <motion.a
          href={"https://wa.me/07087121696"}
          className="w- mx-3  w-6"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Whatsapp className="text-[#fab0c8] text-lg hover:text-black dark:hover:text-light" />
        </motion.a>

        <button
          onClick={toggleDarkLightMode}
          className={` w-6 ml-3 rounded-full  dark:bg-light bg-dark ${
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
