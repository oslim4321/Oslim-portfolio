import { MyEmail, MyName } from "@/lib/MyDetails";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="h-1[100vh] text-white py-6 dark:bg-dark"
      style={{
        backgroundImage: "/images/12557718_4990044.jpg",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center cont">
        <div className="flex flex-col mb-4 md:mb-0">
          <h2 className="text-lg font-semibold text-dark dark:text-light">
            <MyName />
          </h2>
          <p className="text-sm text-dark dark:text-light">Web Developer</p>
        </div>
        <div className="flex space-x-4">
          <Link
            href="project"
            className="text-gray-400 hover:text-slate-400 dark:"
          >
            My Work
          </Link>
          {/* <Link
            target="_blank"
            href="#"
            className="text-gray-400 hover:text-slate-400 dark:"
          >
            My Shelf
          </Link> */}
          <Link
            href="resume"
            target="_blank"
            className="text-gray-400 hover:text-slate-400 dark:"
          >
            My Résumé
          </Link>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link
            href={`mailto:${(<MyEmail />)}`}
            className="text-gray-400 hover:text-white"
          >
            <MyEmail />
          </Link>
          <Link
            href="https://github.com/oslim4321"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            GitHub
          </Link>
          {/* Add more social media links here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
