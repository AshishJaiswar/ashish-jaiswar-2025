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
      <Link href="https://www.linkedin.com/in/ashishjaiswar">
        <div className="border rounded-full transition-all delay-75 p-2 border-gray-300 my-4 hover:text-gray-800 hover:border-gray-600">
          <FaLinkedin size={normal} />
        </div>
      </Link>
      <Link href="https://twitter.com/ashishjaiswar_">
        <div className="border rounded-full transition-all delay-75 p-2 border-gray-300 my-4 hover:text-gray-800 hover:border-gray-600">
          <FaXTwitter size={normal} />
        </div>
      </Link>
      <Link href="https://medium.com/@ashishjaiswar">
        <div className="border rounded-full transition-all delay-75 p-2 border-gray-300 my-4 hover:text-gray-800 hover:border-gray-600">
          <FaMedium size={normal} />
        </div>
      </Link>
      <Link href="https://github.com/AshishJaiswar">
        <div className="border rounded-full transition-all delay-75 p-2 border-gray-300 my-4 hover:text-gray-800 hover:border-gray-600">
          <FaGithub size={normal} />
        </div>
      </Link>
      <Link href="https://www.instagram.com/ashishjaiswar_/">
        <div className="border rounded-full transition-all delay-75 p-2 border-gray-300 my-4 hover:text-gray-800 hover:border-gray-600">
          <FaInstagram size={normal} />
        </div>
      </Link>
    </div>
  );
};

export default Socials;
