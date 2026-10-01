"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

import { siteLinks } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const centerItems = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: siteLinks.portfolioHref },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === siteLinks.portfolioHref) {
    return pathname === "/portfolio" || pathname.startsWith("/work");
  }
  return false;
}

function navLinkClass(active: boolean) {
  return cn(
    "rounded-lg px-3 py-2 font-sans text-sm whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:px-3.5",
    active ? "bg-white/12 font-medium text-ink" : "text-ink-muted hover:text-ink"
  );
}

const glassShell = cn(
  "border border-white/18 bg-transparent",
  "backdrop-blur-xl backdrop-saturate-150",
  "shadow-[0_8px_32px_rgba(0,0,0,0.45),0_2px_8px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.12)]"
);

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 lg:px-6 lg:pt-5">
      <div className="pointer-events-auto relative mx-auto max-w-4xl">
        <nav
          aria-label="Primary"
          className={cn(
            "relative flex items-center rounded-lg px-2 py-1.5",
            glassShell
          )}
        >
          <Link
            href="/"
            aria-label="Sagnik Dey home"
            className="relative z-10 flex shrink-0 items-center rounded-lg p-2 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:p-2.5"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.svg" alt="" className="h-7 w-auto lg:h-8" />
          </Link>

          {/* Desktop center links */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
            {centerItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={navLinkClass(isActive(pathname, item.href))}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="relative z-10 ml-auto hidden shrink-0 items-center gap-2 md:flex">
            <Link
              href={siteLinks.resume}
              className={cn(
                "inline-flex items-center rounded-lg bg-accent px-3.5 py-2",
                "font-sans text-sm font-medium text-white transition-opacity hover:opacity-90",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              )}
            >
              Resume
            </Link>
            <a
              href={siteLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-1.5 rounded-lg bg-linkedin px-3.5 py-2",
                "font-sans text-sm font-medium text-white transition-opacity hover:opacity-90",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-linkedin focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              )}
            >
              LinkedIn
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            ref={toggleRef}
            type="button"
            className={cn(
              "relative z-10 ml-auto inline-flex size-11 items-center justify-center rounded-lg md:hidden",
              "text-ink transition-colors hover:bg-white/10",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            )}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </nav>

        {/* Mobile panel */}
        {open ? (
          <>
            <button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 z-40 bg-bg/70 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />
            <div
              id={menuId}
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              className={cn(
                "absolute inset-x-0 top-[calc(100%+0.5rem)] z-50 flex flex-col gap-1 rounded-lg p-3 md:hidden",
                glassShell
              )}
            >
              {centerItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(navLinkClass(isActive(pathname, item.href)), "w-full px-3.5 py-3")}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-1 flex flex-col gap-2 border-t border-white/12 pt-3">
                <Link
                  href={siteLinks.resume}
                  className={cn(
                    "inline-flex min-h-11 items-center justify-center rounded-lg bg-accent px-3.5 py-2.5",
                    "font-sans text-sm font-medium text-white transition-opacity hover:opacity-90",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  )}
                  onClick={() => setOpen(false)}
                >
                  Resume
                </Link>
                <a
                  href={siteLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex min-h-11 items-center justify-center gap-1.5 rounded-lg bg-linkedin px-3.5 py-2.5",
                    "font-sans text-sm font-medium text-white transition-opacity hover:opacity-90",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-linkedin"
                  )}
                  onClick={() => setOpen(false)}
                >
                  LinkedIn
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </header>
  );
}
