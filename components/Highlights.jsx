import React from "react";
import Link from "next/link";
import { Separator } from "./ui/separator";
import {
  SiInfosys,
  SiTcs,
  SiAccenture,
  SiReact,
  SiFreecodecamp,
} from "react-icons/si";
import { RxExternalLink } from "react-icons/rx";
const experienceData = [
  {
    company: "Accenture",
    role: "Sr. Frontend developer",
    date: "Sep 2024 - Present",
    icon: <SiAccenture size="30px" />,
  },
  {
    company: "TCS",
    role: "Frontend developer",
    date: "Apr 2023 - Sep 2024",
    icon: <SiTcs size="30px" />,
  },
  {
    company: "Infosys",
    role: "Python developer",
    date: "Nov 2020 - Mar 2023",
    icon: <SiInfosys size="30px" />,
  },
];

const awardsData = [
  {
    title: "INSTA Award",
    company: "Infosys",
    icon: <SiInfosys size="30px" />,
    date: "Jun 2022",
    link: "https://drive.google.com/file/d/1FYcMNlBfjutdm68KbQczTaiD4YAMXzhY",
  },
  {
    title: "React 18 certification",
    company: "CodeWithMosh",
    icon: <SiReact size="30px" />,
    date: "May 2023",
    link: "https://drive.google.com/file/d/1mfk_fOZfwIDT9MJdsqzi4W1RZuuVLOwb",
  },
  {
    title: "JavaScript certification",
    company: "FreeCodeCamp",
    icon: <SiFreecodecamp size="30px" />,
    date: "Mar 2024",
    link: "https://www.freecodecamp.org/certification/ashishjaiswar/javascript-algorithms-and-data-structures-v8",
  },
];
const Highlights = () => {
  return (
    <div className="mt-80 lg:mt-28 bg-bisque px-5 py-10 md:px-32 lg:flex justify-between">
      <div className="lg:mr-5 lg:w-1/2">
        <h1 className="text-3xl mb-10">Working Experience</h1>
        {experienceData.map((data, index) => (
          <div key={index}>
            <div className="flex items-center my-5">
              <div className="bg-flora-white p-3 rounded-lg mr-4 text-gray-600">
                {data.icon}
              </div>
              <div>
                <h4>
                  {data.role} at <b>{data.company}</b>
                </h4>
                <p className="text-gray-600 text-sm">{data.date}</p>
              </div>
            </div>
            {experienceData.length - 1 !== index ? (
              <Separator className="bg-flora-white" />
            ) : null}
          </div>
        ))}
      </div>
      <div className="lg:ml-5 lg:w-1/2">
        <h1 className=" text-3xl mb-10 mt-16 lg:mt-0">
          Awards & Certifications
        </h1>
        {awardsData.map((data, index) => (
          <div key={index}>
            <div className="flex items-center my-5">
              <div className="bg-flora-white p-3 rounded-lg mr-4 text-gray-600">
                {data.icon}
              </div>
              <div className="flex justify-between items-center w-full">
                <div>
                  <h4>
                    {data.title} at <b>{data.company}</b>
                  </h4>
                  <p className="text-gray-600 text-sm">{data.date}</p>
                </div>
                <Link href={data.link}>
                  <div className="text-gray-600">
                    <RxExternalLink size="25px" />
                  </div>
                </Link>
              </div>
            </div>
            {experienceData.length - 1 !== index ? (
              <Separator className="bg-flora-white" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
