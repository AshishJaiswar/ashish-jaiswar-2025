import React from "react";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { selectedWorkData } from "@/data/work";

const SelectedWork = () => {
  return (
    <div className="bg-bisque px-5 pt-5 pb-20 md:px-32">
      <h1 className="text-3xl mb-10">Selected Works</h1>
      <div className="lg:grid grid-cols-2 gap-8 py-4">
        {selectedWorkData.map((work, index) => (
          <Card className="mb-6 bg-flora-white" key={index}>
            <CardContent className="p-2 rounded-lg">
              <Image
                src={work.image}
                className="rounded-lg border border-gray-100"
                alt={work.title}
                width={1000}
                height={1000}
              />
              <h4 className="mt-4 mb-2 font-semibold text-gray-800">
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

export default SelectedWork;
