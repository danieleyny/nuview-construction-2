"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  className?: string;
  delay?: number;
  amount?: number;
  splitWords?: boolean;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function RevealText({
  children,
  as = "p",
  className,
  delay = 0,
  amount = 0.2,
  splitWords = false,
}: Props) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as any;

  if (splitWords && typeof children === "string") {
    const words = children.split(" ");
    return (
      <MotionTag className={cn("inline-block", className)}>
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden align-bottom">
            <motion.span
              className="inline-block will-change-transform"
              initial={reduce ? { opacity: 0 } : { y: "110%", opacity: 0 }}
              whileInView={reduce ? { opacity: 1 } : { y: "0%", opacity: 1 }}
              viewport={{ once: true, amount }}
              transition={{ duration: 0.9, ease, delay: delay + i * 0.04 }}
            >
              {word}
              {i < words.length - 1 && "\u00A0"}
            </motion.span>
          </span>
        ))}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40 }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </MotionTag>
  );
}
