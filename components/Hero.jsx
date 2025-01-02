import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ashish_jaiswar from "../public/ashish_jaiswar.jpg";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
const Hero = () => {
  return (
    <div className="mt-20 flex items-center justify-between relative">
      <div className="inline-block text-7xl leading-tight">
        <p>Hey!</p>
        <div className="flex items-center">
          <span>I’m</span>
          <div className="w-20 cursor-pointer rounded-full border-gray-600 border-4 p-1 ml-5">
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
      <div className="absolute -bottom-60 sm:static sm:mx-4">
        <h3 className="text-2xl mb-3 md:text-3xl">
          A web developer based in Mumbai, India.
        </h3>
        <p className="text-gray-500 mb-6">
          Developing responsive and scalable web interfaces for digital
          platforms.
        </p>
        <Button className="px-8 mr-6">Say Hi!</Button>
        <Button variant="outline" className="px-8 border-gray-300">
          My work
        </Button>
      </div>
      <div className="text-gray-600">
        <div className="border rounded-full border-gray-300 p-2 my-4">
          <Link href="https://www.linkedin.com/in/ashishjaiswar">
            <FaLinkedin size="25px" />
          </Link>
        </div>
        <div className="border rounded-full border-gray-300 p-2 my-4">
          <Link href="https://twitter.com/ashishjaiswar_">
            <FaXTwitter size="25px" />
          </Link>
        </div>
        <div className="border rounded-full border-gray-300 p-2 my-4">
          <Link href="https://github.com/AshishJaiswar">
            <FaGithub size="25px" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
