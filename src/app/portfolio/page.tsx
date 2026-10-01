import type { Metadata } from "next";

import { PortfolioListing } from "@/components/portfolio-listing";

export const metadata: Metadata = {
  title: "Portfolio — Sagnik Dey",
  description:
    "Selected case studies across iOS product design, UX research, design systems, and healthcare platforms.",
};

export default function PortfolioPage() {
  return <PortfolioListing />;
}
