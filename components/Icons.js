import React from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Icons = () => {
  return (
    <div className="icons flex gap-5 text-xl">
      <Link
        href={
          "https://www.linkedin.com/in/ranveer-singh-22812028b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        }
        target="_blank"
      >
        <FaLinkedin />
      </Link>
      <Link href={"https://github.com/RANVEER12082005"} target="_blank">
        <FaGithub />
      </Link>
      <Link
        href={
          "https://www.instagram.com/ranveer_0812?igsh=MWgwcTNlb25qNGF3MA=="
        }
        target="_blank"
      >
        <FaInstagram />
      </Link>
    </div>
  );
};

export default Icons;
