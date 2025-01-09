"use client";

import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Time = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const options = { timeZone: "Asia/Kolkata", hour12: true };
      setTime(now.toLocaleTimeString("en-US", options));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) {
    return <Skeleton className="h-4 w-[100px]" />;
  }
  return <span className="font-semibold">{time}</span>;
};

export default Time;
