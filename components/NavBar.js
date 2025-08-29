import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="nav h-[10vh] flex justify-center p-4 gap-25 text-lg">
      <Link href={"/"} className="mt-2">
        Home
      </Link>
      <Link href={"#skills"} className="mt-2">
        Skills
      </Link>
      <Link href={"#projects"} className="mt-2">
        Projects
      </Link>
      <Link
        href={"/contact"}
        className="border-2 px-4 py-1 rounded-sm hover:bg-black hover:text-white hover:border-black hover:transition-all text-center my-auto"
      >
        Contact
      </Link>
    </div>
  );
};

export default NavBar;
