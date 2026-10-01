import { cn } from "@/lib/utils";

type TagProps = {
  children: React.ReactNode;
  className?: string;
};

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg border border-border bg-surface-raised px-2.5 py-1 font-mono text-tag text-ink-muted whitespace-nowrap",
        className
      )}
    >
      {children}
    </span>
  );
}
