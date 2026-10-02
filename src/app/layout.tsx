import type { Metadata } from "next";
import { Big_Shoulders } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { SiteBackground } from "@/components/site-background";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

import "./globals.css";

const display = Big_Shoulders({
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz"],
  variable: "--font-display-loaded",
  display: "swap",
  // Capsize metrics still key off "Big Shoulders Display"; family was renamed.
  adjustFontFallback: false,
  fallback: ["Arial Narrow", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Sagnik Dey — Product Designer & Creative Strategist",
  description:
    "Product Design Manager with 15+ years of experience leading UX/UI, design systems, and front-end collaboration across enterprise, healthcare, and startup environments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="relative min-h-screen bg-bg font-sans text-ink antialiased ">
        <SiteBackground />
        <div className="relative z-10">
          <SiteNav />
          <main className="">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
