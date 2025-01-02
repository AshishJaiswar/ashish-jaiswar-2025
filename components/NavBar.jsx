import React from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import NavLinks from "./NavLinks";

const NavBar = () => {
  return (
    <nav className="arial flex justify-between items-center py-5">
      <div className="flex">
        <div className="w-8 h-10 flex items-center">
          <Image src={logo} alt="A" />
        </div>
        <NavLinks />
      </div>
      <div className="flex flex-col tracking-wide text-sm">
        <span className="font-semibold">16:46 PM</span>
      </div>
    </nav>
  );
};

export default NavBar;
