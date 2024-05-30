import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const Phone = ({ imgSrc, className, dark = false, ...props }: Props) => {
  return (
    <div
      className={cn("relative pointer-events-none z-50", className)}
      {...props}
    >
      <img
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        alt="phone image"
      />

      <div className="absolute -z-10 inset-0">
        <img src={imgSrc} alt="overlaying image" className="object-cover" />
      </div>
    </div>
  );
};

export default Phone;
