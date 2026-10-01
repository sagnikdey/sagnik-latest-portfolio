"use client";

import dynamic from "next/dynamic";

const SideRays = dynamic(() => import("@/components/bits/side-rays"), {
  ssr: false,
});

export function SiteBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <SideRays
        speed={2.5}
        rayColor1="#FF4500"
        rayColor2="#6197d3"
        intensity={1.6}
        spread={2.5}
        origin="top-left"
        tilt={0}
        saturation={1.35}
        blend={0.55}
        falloff={1.6}
        opacity={0.7}
      />
    </div>
  );
}
