import React from "react";
import NavLinks from "./NavLinks";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Footer = () => {
  return (
    <div className="flex items-center justify-between py-10 px-5 md:px-32">
      <NavLinks />
      <span className="text-sm">&copy; 2025</span>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <span className="text-slate-800 text-sm font-semibold">AJ</span>
          </TooltipTrigger>
          <TooltipContent>
            <span>Made with ❤️ and Next.js</span>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default Footer;
