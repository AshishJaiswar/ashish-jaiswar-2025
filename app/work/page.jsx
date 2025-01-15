import React from "react";
import WorkGrid from "@/components/WorkGrid";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Ashish Jaiswar - work",
  description:
    "Curated some of my best web projects built with React.js and Next.js.",
};

const Work = () => {
  return (
    <div>
      <WorkGrid />
      <Contact />
      <Footer />
    </div>
  );
};

export default Work;
