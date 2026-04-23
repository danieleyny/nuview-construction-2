import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
  label?: string;
  muted?: boolean;
};

export function Section({ children, className, id, label, muted }: Props) {
  return (
    <section
      id={id}
      aria-label={label}
      className={cn(
        "relative w-full py-24 md:py-32 lg:py-40",
        muted && "bg-[var(--charcoal)]",
        className
      )}
    >
      {children}
    </section>
  );
}
