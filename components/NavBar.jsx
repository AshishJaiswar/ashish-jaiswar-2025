import React from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import NavLinks from "./NavLinks";

const NavBar = () => {
  return (
    <nav className="arial flex justify-between items-center py-5 text-gray-800">
      <div className="flex">
        <Image src={logo} width={35} height={40} alt="A" />
        <NavLinks />
      </div>
      <div className="flex flex-col  tracking-wide text-sm">
        <span className="text-gray-500">Mumbai, India</span>
        <span className="font-semibold">16:46 pm</span>
      </div>
    </nav>
  );
};

export default NavBar;
