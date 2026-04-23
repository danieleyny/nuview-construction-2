"use client";

import { cn } from "@/lib/cn";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef, type MouseEvent, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  magnetic?: boolean;
  icon?: boolean;
  className?: string;
};

type LinkProps = BaseProps & { href: string; onClick?: never; type?: never; disabled?: never };
type BtnProps = BaseProps & {
  href?: never;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

type Props = LinkProps | BtnProps;

const base =
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans font-medium transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] disabled:opacity-50 disabled:pointer-events-none select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--ember)] text-[var(--obsidian)] hover:bg-[var(--ember-hot)] rounded-[var(--radius-md)]",
  secondary:
    "border border-[var(--bone)]/20 text-[var(--bone)] hover:bg-[var(--bone)]/5 hover:border-[var(--bone)]/40 rounded-[var(--radius-md)]",
  ghost: "text-[var(--bone)] hover:text-[var(--ember)] rounded-[var(--radius-md)]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[0.82rem]",
  md: "h-12 px-6 text-[0.88rem]",
  lg: "h-14 px-8 text-[0.95rem]",
};

export function Button(props: Props) {
  const { children, variant = "primary", size = "md", magnetic = true, icon = true, className } = props;
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

  function onMove(e: MouseEvent) {
    if (!magnetic) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * 0.2;
    const y = (e.clientY - (r.top + r.height / 2)) * 0.2;
    (el as HTMLElement).style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }

  function onLeave() {
    const el = ref.current;
    if (el) (el as HTMLElement).style.transform = "translate3d(0,0,0)";
  }

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight
          className="size-[1.1em] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden
        />
      )}
    </>
  );

  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    return (
      <Link
        href={props.href}
        ref={ref as React.RefObject<HTMLAnchorElement>}
        className={classes}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        data-cursor="link"
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      className={classes}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={(props as BtnProps).onClick}
      type={(props as BtnProps).type ?? "button"}
      disabled={(props as BtnProps).disabled}
      data-cursor="link"
    >
      {content}
    </button>
  );
}
