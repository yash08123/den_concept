import React from "react";
import { NavbarDemo } from "@/components/Navbar";
import { HeroSectionOne } from "@/components/Hero";
import { StickyScrollRevealDemo } from "@/components/Feature";
import { AnimatedTestimonialsDemo } from "@/components/Testimonials";
import { BackgroundBoxesDemo } from "@/components/CallToAction";

export default function Home() {
  return (
    <>
      <NavbarDemo />
      <HeroSectionOne />
      <StickyScrollRevealDemo />
      <AnimatedTestimonialsDemo />
      <BackgroundBoxesDemo />

    </>
  );
}
