import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ashish_jaiswar from "../public/ashish_jaiswar.jpg";
import {
  FaXTwitter,
  FaLinkedin,
  FaGithub,
  FaMedium,
  FaInstagram,
} from "react-icons/fa6";
const Hero = () => {
  const normal = "25px";

  return (
    <div className="mt-20 flex items-center justify-between relative px-5 md:px-32">
      <div className="inline-block text-5xl sm:text-7xl leading-tight">
        <p>Hey!</p>
        <div className="flex items-center">
          <span>I’m</span>
          <div className="w-20 transition-all hover:scale-200 cursor-pointer rounded-full border-bisque hover:border-4 ml-5">
            <Image
              className="rounded-full"
              src={ashish_jaiswar}
              alt="Profile Image"
            />
          </div>
        </div>
        <p>Ashish</p>
        <p>Jaiswar</p>
      </div>
      <div className="absolute -bottom-60 lg:static sm:mx-4">
        <h3 className="text-2xl mb-3 md:text-3xl">
          A web developer based in Mumbai, India.
        </h3>
        <p className="text-gray-500 mb-6">
          Developing responsive and scalable web interfaces for digital
          platforms.
        </p>
        <Button className="px-8 mr-6 rounded-xl font-normal">Say Hi!</Button>
        <Button
          variant="outline"
          className="px-8 border-gray-300 rounded-xl font-normal"
        >
          See my work
        </Button>
      </div>
      <div className="text-gray-600">
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
    </div>
  );
};

export default Hero;
