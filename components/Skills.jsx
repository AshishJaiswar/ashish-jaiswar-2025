import React from "react";
import Marquee from "@/components/ui/marquee";
import { skillsData } from "@/data";

const Skills = () => {
  return (
    <div className="bg-bisque px-5  py-10 md:px-32">
      <h1 className="text-3xl my-5 font-medium">Tech Stack</h1>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:20s]">
          {skillsData.map((data, index) => (
            <div
              key={index}
              className="bg-flora-white p-3 rounded-lg text-gray-600"
            >
              {data.icon}
            </div>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
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
    </div>
  );
};

export default Skills;
