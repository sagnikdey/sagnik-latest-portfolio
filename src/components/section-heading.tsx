import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  children: React.ReactNode;
  underline?: boolean;
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  children,
  underline = false,
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-3 lg:gap-4", className)}>
      <Tag>
        {children}
      </Tag>
      {underline ? <span className="h-1 w-[60px] bg-accent lg:w-20" aria-hidden /> : null}
    </div>
  );
}
