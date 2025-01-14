import React from "react";
import Marquee from "@/components/ui/marquee";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { skillsData } from "@/data";

const Skills = () => {
  return (
    <div className="bg-bisque px-5  py-10 md:px-32">
      <h1 className="text-3xl my-5 font-medium">Tech Stack</h1>
      <div className="relative flex w-full my-10 flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:25s]">
          {skillsData.map((data, index) => (
            <div
              key={index}
              className="bg-flora-white p-3 rounded-lg text-gray-600"
            >
              {data.icon}
            </div>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:25s]">
          {skillsData.map((data, index) => (
            <div
              key={index}
              className="bg-flora-white p-3 rounded-lg text-gray-600"
            >
              {data.icon}
            </div>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3"></div>
      </div>
      <div className="mb-5 flex flex-col items-center justify-center">
        <p className="text-center">
          Want to learn more? My resume is packed with skills, experience, and
          passion—check it out!
        </p>
        <Link
          target="_blank"
          className={`${buttonVariants({
            variant: "outline",
          })} px-8 mt-5 rounded-xl font-normal`}
          href=""
        >
          Resume
        </Link>
      </div>
    </div>
  );
};

export default Skills;
