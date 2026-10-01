"use client";

import Image from "next/image";

import BlurText from "@/components/bits/blur-text";
import { TextLink } from "@/components/text-link";
import { heroContent, siteLinks } from "@/data/portfolio";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="border-b border-border">
      <div className="lg:grid lg:min-h-[879px] lg:grid-cols-[minmax(0,768fr)_minmax(0,672fr)]">
        <div className="flex flex-col justify-between gap-8 px-6 pt-10 pb-14 lg:gap-10 lg:p-20">
          <div className="flex flex-col gap-4 lg:gap-6 pt-20">
            <p className="font-mono text-eyebrow font-medium text-accent lg:text-eyebrow-lg">
              {heroContent.eyebrow}
            </p>
            <h1 id="hero-heading" className="sr-only">
              {heroContent.title}
            </h1>
            <div aria-hidden>
              <BlurText
                text={heroContent.title}
                delay={80}
                animateBy="words"
                direction="bottom"
                className="font-display text-display-hero font-black uppercase text-ink lg:text-display-hero-lg"
              />
            </div>
          </div>

          <div className="relative aspect-[342/216] w-full overflow-hidden lg:hidden">
            <Image
              src="/images/hero-portrait.jpg"
              alt="Portrait of Sagnik Dey"
              fill
              className="object-cover object-[center_20%]"
              sizes="(max-width: 1023px) 100vw, 0px"
              priority
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-5 text-ink-muted">
              <p className="text-lede lg:text-lede-lg">
                {heroContent.paragraphs[0]}
              </p>
              <p className="text-body lg:text-body-lg">
                {heroContent.paragraphs[1]}
              </p>
            </div>
            <div className="flex gap-6 lg:gap-10">
              <TextLink href={siteLinks.linkedin} external>
                LinkedIn
              </TextLink>
              <TextLink href={siteLinks.resume}>Resume</TextLink>
            </div>
          </div>
        </div>

        <div className="relative hidden overflow-hidden lg:block">
          <Image
            src="/images/hero-portrait.jpg"
            alt="Portrait of Sagnik Dey"
            fill
            className="object-cover object-[center_15%]"
            sizes="(min-width: 1024px) 47vw, 0px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
