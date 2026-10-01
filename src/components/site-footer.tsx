"use client";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface px-6 py-10 lg:flex lg:items-center lg:justify-between lg:px-20 lg:py-12">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="mb-6 block w-full text-center font-mono text-meta text-accent uppercase transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface lg:order-2 lg:mb-0 lg:w-auto lg:text-left"
      >
        Back to top ↑
      </button>
      <p className="text-center font-mono text-meta text-ink-muted uppercase lg:order-1 lg:text-left">
        © {year} Sagnik. All rights reserved.
      </p>
    </footer>
  );
}
