"use client";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-9f00 h-1[100vh] text-white py-6"
      style={{
        backgroundImage: `url("/images/12557718_4990044.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col mb-4 md:mb-0">
          <h2 className="text-lg font-semibold">Your Name</h2>
          <p className="text-sm">Web Developer</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            My Work
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            My Shelf
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            My Résumé
          </a>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="mailto:adewaleselim6@gmail.com"
            className="text-gray-400 hover:text-white"
          >
            adewaleselim6@gmail.com
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            GitHub
          </a>
          {/* Add more social media links here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
