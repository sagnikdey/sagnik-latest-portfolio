import Link from "next/link";

import { cn } from "@/lib/utils";

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  showArrow?: boolean;
};

export function TextLink({
  href,
  children,
  className,
  external = false,
  showArrow = true,
}: TextLinkProps) {
  const classes = cn(
    "font-mono text-link font-bold uppercase text-ink transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
    className
  );

  const content = (
    <>
      {showArrow ? <span aria-hidden="true">↗ </span> : null}
      {children}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
