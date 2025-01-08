import React from "react";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { RxExternalLink } from "react-icons/rx";
import { experienceData, awardsData } from "@/data";

const Highlights = () => {
  return (
    <div className="mt-80 lg:mt-28 bg-bisque px-5 pt-20 pb-10 md:px-32 lg:flex justify-between">
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
