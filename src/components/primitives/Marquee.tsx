"use client";

import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  speed?: number;
  reverse?: boolean;
};

export function Marquee({ children, className, speed = 40, reverse }: Props) {
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div
        className="flex w-max items-center whitespace-nowrap will-change-transform"
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        <div className="flex items-center">{children}</div>
        <div className="flex items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
