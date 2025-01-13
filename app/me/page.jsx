import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MyStory from "@/components/MyStory";
import Skills from "@/components/Skills";
import React from "react";

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
