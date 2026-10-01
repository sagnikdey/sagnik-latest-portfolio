import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type ArrowButtonProps = {
  href: string;
  className?: string;
  label: string;
};

export function ArrowButton({ href, className, label }: ArrowButtonProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={cn(
        "inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-accent transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg lg:size-14",
        className
      )}
    >
      <Image
        src="/images/arrow-right.svg"
        alt=""
        width={20}
        height={20}
        className="size-5"
        aria-hidden
      />
    </Link>
  );
}
