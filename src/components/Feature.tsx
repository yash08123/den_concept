"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
// import { cn } from "@/lib/utils";

const content = [
  {
    title: "50+ integrations",
    description: "Agent can complete the tasks in all your favouraite apps.",
    content: (
      <div className="flex h-full w-full items-center justify-center component-text">
        <video
          src="/tools.mp4"
          className="h-full w-full object-contain rounded-lg"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    ),
  },
  {
    title: "Hyper Personalized",
    description: "AI generated emails that you can actually trust",
    content: (
      <div className="flex h-full w-full items-center justify-center component-text">
        <video
          src="/personalized.mp4"
          className="h-full w-full object-contain rounded-lg"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    ),
  },
  {
    title: "Question Answering",
    description: "Den can answer any question about you company full stop.",
    content: (
      <div className="flex h-full w-full items-center justify-center component-text">
        <video
          src="/askanything.mp4"
          className="h-full w-full object-contain rounded-lg"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    ),
  },
  {
    title: "Agent swarm",
    description: "Agent can complete the tasks in all your favouraite apps.",
    content: (
      <div className="flex h-full w-full items-center justify-center component-text">
        <video
          src="/swarm.mp4"
          className="h-full w-full object-contain rounded-lg"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <>
      <div className="w-full py-4">
        <StickyScroll 
          content={content} 
          contentClassName="w-1/2 h-80" 
        />
        <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="fromfeature absolute mx-auto h-px w-[90vh] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </div>
      </div>
    </>
  );
}
