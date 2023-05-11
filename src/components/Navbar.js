"use client";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { usePathname, useRouter } from "next/navigation";

const CustomLink = ({ href, title, className = "" }) => {
  const pathname = usePathname();

  console.log(pathname);
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
      ${pathname === href ? "w-full" : "w-0"}
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <div className="w-full py-8">
      <div className="max-w-[90%] mx-auto font-medium flex items-center justify-between">
        <nav>
          <CustomLink href="/" title="Home" className="mx-2" />
          <CustomLink href="/about" title="About" className="mx-2" />
          <CustomLink href="/project" title="Project" className="mx-2" />
          <CustomLink href="/resume" title="Resume" className="mx-2" />
        </nav>

        <nav>
          <Link href={"/"}>T</Link>
          <Link href={"/"}>T</Link>
          <Link href={"/"}>T</Link>
          <Link href={"/"}>T</Link>
          <Link href={"/"}>T</Link>
          <span>
            <button
              type="button"
              aria-label="Open contact menu"
              aria-controls="contact-menu"
              aria-expanded="false"
              className="menu-toggle"
            ></button>
          </span>
        </nav>

        <div className="absolute left-[50%] top-2 translate-x-[-50%]">
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
