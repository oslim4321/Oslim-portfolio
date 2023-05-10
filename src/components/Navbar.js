import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="max-w-[90%] mx-auto font-medium flex item justify-between">
        <nav>
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/Projects">Projects</Link>
          <Link href="/">Resume</Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
