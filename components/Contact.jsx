import React from "react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Contact = () => {
  return (
    <div className="py-20 text-center">
      <h5>Have a project in mind?</h5>
      <h2 className="text-3xl my-5 font-medium">
        Let's bring it to life together!
      </h2>
      <Link
        target="_blank"
        className={`${buttonVariants({
          variant: "default",
        })} px-8 mt-5 rounded-xl font-normal`}
        href="mailto:ashishjaiswar771@gmail.com"
      >
        Talk with me
      </Link>
    </div>
  );
};

export default Contact;
