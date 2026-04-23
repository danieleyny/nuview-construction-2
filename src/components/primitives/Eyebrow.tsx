import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  code?: string;
};

export function Eyebrow({ children, className, code }: Props) {
  return (
    <div className={cn("flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-[var(--ash)]", className)}>
      {code && <span className="text-[var(--ember)]">{code}</span>}
      <span className="h-px w-8 bg-[var(--ash)]/40" aria-hidden />
      <span>{children}</span>
    </div>
  );
}
