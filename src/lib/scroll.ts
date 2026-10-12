"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

/** Desktop-only scroll choreography (pins, rails). Phones get reveals only. */
export const DESKTOP = "(min-width: 1024px) and (prefers-reduced-motion: no-preference)";
/** Any viewport, motion allowed. Reduced motion renders the final state. */
export const MOTION_OK = "(prefers-reduced-motion: no-preference)";
