import React from "react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { workData } from "@/data/work";

const WorkGrid = () => {
  return (
    <div className="p-5 md:px-32">
      <h1 className="text-3xl my-5 font-medium text-center">
        A selection of my favorite works
      </h1>
      <div className="mt-10 lg:grid grid-cols-2 gap-8 py-4">
        {workData.map((work, index) => (
          <Card className="mb-6" key={index}>
            <CardContent className="p-2 rounded-lg">
              <Image
                src={work.image}
                className="rounded-lg border border-gray-100"
                alt={work.title}
                width={1000}
                height={1000}
              />
              <h4 className="mt-4 mb-2 text-lg font-semibold text-gray-800">
                {work.title}
              </h4>
              <p className="text-gray-600 text-sm">{work.description}</p>
              <div className="mt-4 mb-2">
                <Link
                  target="_blank"
                  className={`bg-gray-700 ${buttonVariants({
                    variant: "default",
                  })} px-8 mr-6 rounded-xl font-normal`}
                  href={work.link}
                >
                  Visit
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WorkGrid;
