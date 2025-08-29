import React from "react";
import Icons from "./Icons";

const Footer = () => {
  return (
    <div className="footer h-[10vh] flex justify-between items-center px-5">
      <div className="rights text-md">
        &copy; All Rights Reserved by Singh Brothers and company
      </div>
      <Icons />
    </div>
  );
};

export default Footer;
