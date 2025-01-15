import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MyStory from "@/components/MyStory";
import Skills from "@/components/Skills";
import React from "react";

export const metadata = {
  title: "Ashish Jaiswar - me",
  description: "Learn more about Ashish Jaiswar - Skills, Resume, Socials",
};

const AboutMe = () => {
  return (
    <div>
      <MyStory />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default AboutMe;
