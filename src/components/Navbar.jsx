import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="header">
      <Link
        href={"/"}
        className="w-10 h-10 bg-white rounded-lg flex items-center justify-center font-bold shadow-md"
      >
        <p className="blue-gradient_text">CZ</p>
      </Link>
      <nav className="flex text-lg gap-7 font-medium text-black">
        <Link href={"/about"} className="">
          About
        </Link>
        <Link href={"/projects"}>Projects</Link>
      </nav>
    </header>
  );
};

export default Navbar;
