import { cn } from "@/lib/cn";
import { createElement, type ElementType, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "full";
  as?: ElementType;
};

const sizes = {
  sm: "max-w-[880px]",
  md: "max-w-[1200px]",
  lg: "max-w-[1440px]",
  full: "max-w-none",
};

export function Container({ children, className, size = "lg", as: Tag = "div" }: Props) {
  return createElement(
    Tag,
    { className: cn("mx-auto w-full px-6 md:px-12 lg:px-24", sizes[size], className) },
    children
  );
}
