import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/selected-work";
import { Testimonials } from "@/components/testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <About />
      <Testimonials />
    </>
  );
}
