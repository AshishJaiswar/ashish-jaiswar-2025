import React from "react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import ashish_jaiswar from "../public/ashish_jaiswar.jpg";
import Socials from "./Socials";

const Hero = () => {
  return (
    <div className="mt-20 flex items-center justify-between relative px-5 md:px-32">
      <div className="inline-block text-5xl sm:text-7xl leading-tight">
        <p className="md:my-2">Hey!</p>
        <div className="flex items-center">
          <span className="md:my-2">I’m</span>
          <div className="w-12 md:w-20 transition-all hover:scale-200 cursor-pointer rounded-full border-bisque hover:border-4 ml-5">
            <Image
              className="rounded-full"
              src={ashish_jaiswar}
              alt="Profile Image"
            />
          </div>
        </div>
        <p className="md:my-2">Ashish</p>
        <p className="md:my-2">Jaiswar</p>
      </div>
      <div className="absolute -bottom-60 lg:static sm:mx-4">
        <h3 className="text-2xl mb-3 md:text-3xl">
          A web developer based in Mumbai, India.
        </h3>
        <p className="text-gray-500 mb-6">
          Developing responsive and scalable web interfaces for digital
          platforms.
        </p>
        <Link
          target="_blank"
          className={`${buttonVariants({
            variant: "default",
          })} px-8 mr-6 rounded-xl font-normal`}
          href="mailto:ashishjaiswar771@gmail.com"
        >
          Say Hi!
        </Link>
        <Link
          className={`${buttonVariants({
            variant: "outline",
          })} px-8 border-gray-300 rounded-xl font-normal`}
          href="/work"
        >
          See my work
        </Link>
      </div>
      <Socials />
    </div>
  );
};

export default Hero;
