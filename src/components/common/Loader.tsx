import React from "react";
import { cn } from "@/lib/utils";

const Loader = ({className}) => {
  return (
    <div className={cn("animate-spin rounded-full size-12 border-t-4 border-blue-500 border-solid",
        className )}
        ></div>
  );
};

export default Loader;
