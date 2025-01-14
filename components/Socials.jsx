import React from "react";
import Link from "next/link";
import {
  FaXTwitter,
  FaLinkedin,
  FaGithub,
  FaMedium,
  FaInstagram,
} from "react-icons/fa6";

const Socials = (props) => {
  const normal = "25px";
  return (
    <div className="text-gray-600" {...props}>
      <Link href="https://www.linkedin.com/in/ashishjaiswar" target="_blank">
        <div className="transition-all delay-50 p-2 my-4 hover:text-gray-800 hover:bg-bisque rounded-full">
          <FaLinkedin size={normal} />
        </div>
      </Link>
      <Link href="https://twitter.com/ashishjaiswar_" target="_blank">
        <div className="transition-all delay-50 p-2 my-4 hover:text-gray-800 hover:bg-bisque rounded-full">
          <FaXTwitter size={normal} />
        </div>
      </Link>
      <Link href="https://medium.com/@ashishjaiswar" target="_blank">
        <div className="transition-all delay-50 p-2 my-4 hover:text-gray-800 hover:bg-bisque rounded-full">
          <FaMedium size={normal} />
        </div>
      </Link>
      <Link href="https://github.com/AshishJaiswar" target="_blank">
        <div className="transition-all delay-50 p-2 my-4 hover:text-gray-800 hover:bg-bisque rounded-full">
          <FaGithub size={normal} />
        </div>
      </Link>
      <Link href="https://www.instagram.com/ashishjaiswar_/" target="_blank">
        <div className="transition-all delay-50 p-2 my-4 hover:text-gray-800 hover:bg-bisque rounded-full">
          <FaInstagram size={normal} />
        </div>
      </Link>
    </div>
  );
};

export default Socials;
