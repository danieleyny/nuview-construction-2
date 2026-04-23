"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/cn";

type Props = Omit<ImageProps, "placeholder"> & {
  wrapperClassName?: string;
  rounded?: boolean;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function RevealImage({ wrapperClassName, rounded = false, alt, ...props }: Props) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "relative overflow-hidden bg-[var(--graphite)]",
        rounded && "rounded-[var(--radius-lg)]",
        wrapperClassName
      )}
      initial={reduce ? { opacity: 0 } : { clipPath: "inset(0 100% 0 0)", opacity: 0 }}
      whileInView={reduce ? { opacity: 1 } : { clipPath: "inset(0 0% 0 0)", opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease }}
    >
      <motion.div
        className="h-full w-full"
        initial={reduce ? { scale: 1 } : { scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.4, ease }}
      >
        <Image alt={alt} {...props} />
      </motion.div>
    </motion.div>
  );
}
