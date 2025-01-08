import React from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import NavLinks from "./NavLinks";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="font-normal flex justify-between items-center py-5 px-5 md:px-32">
      <div className="flex">
        <div className="w-8 h-10 flex items-center">
          <Link href="/">
            <Image src={logo} alt="A" />
          </Link>
        </div>
        <NavLinks />
      </div>
      <div className="flex flex-col tracking-wide text-sm">
        <span className="text-gray-600">Mumbai, India</span>
        <span className="font-semibold">16:46 PM</span>
      </div>
    </nav>
  );
};

export default NavBar;
