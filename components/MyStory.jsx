import React from "react";
import Image from "next/image";
import coverImage from "@/public/cover.jpg";
import Socials from "./Socials";
import { FaLongArrowAltRight } from "react-icons/fa";

const MyStory = () => {
  return (
    <div className="p-5 md:px-32 mb-10">
      <h1 className="text-3xl my-5 font-medium text-center">Here's my story</h1>
      <div className="flex justify-center my-10">
        <Image src={coverImage} width={800} height={800} alt="Cover Image" />
      </div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        I am Ashish Jaiswar a web developer based in Mumbai, India. I have 4+
        years of professional experience in developing web applications, I've
        worked on diverse projects ranging from interactive dashboards to modern
        web applications for the insurance and banking sectors.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        I am passionate about building scalable and responsive web interfaces.
        My expertise lies in developing web applications using modern
        technologies like React, Next.js, JavaScript, Python and Tailwind CSS. I
        am always eager to learn new technologies and frameworks to enhance my
        skills and knowledge.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        My mission is to build a personal brand, deliver quality work and spread
        my knowledge to the community.
      </p>
      <div className="flex items-center">
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Feel free to connect with me on my socials to stay updated with my
          latest projects and insights.
        </p>
        <span className="mx-3">
          <FaLongArrowAltRight />
        </span>
        <Socials className="flex justify-between w-64" />
      </div>
    </div>
  );
};

export default MyStory;
