/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "motion/react";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import React, { useState, useEffect, useMemo } from "react";

export function HeroSectionOne() {
  const pillOptions = useMemo(() => [
    { id: "agent", label: "Agent", imgSrc: "/lp-agent.png" },
    { id: "chats", label: "Chats", imgSrc: "/lp-chat.jpg" },
    { id: "docs", label: "Docs", imgSrc: "/lp-docs.jpg" },
  ], []);
  const [activePill, setActivePill] = useState(pillOptions[2].id); // Default to "Docs"

  // Auto-rotate through pills
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePill(prevPill => {
        const currentIndex = pillOptions.findIndex(opt => opt.id === prevPill);
        const nextIndex = (currentIndex + 1) % pillOptions.length;
        return pillOptions[nextIndex].id;
      });
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [pillOptions]);

  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
      <div className="absolute inset-y-0 left-[-100px] h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-100 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-[-100px] h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-100 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-[90vh] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>

      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold md:text-4xl lg:text-7xl component-text" style={{ fontFamily: "var(--font-dm-serif-display)" }}>
          {"Den where humans and agents collaborate to get more done"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word === "Den" ? (
                  <PointerHighlight>
                    <span>{word}</span>
                  </PointerHighlight>
                ) : (
                  word
                )}
              </motion.span>
            ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal component-text noto-serif"
        >
          All of your chats, docs and agents in one place.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button className="w-60 transform rounded-lg bg-black border border-gray-300  px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200" onClick={() => window.location.href = 'https://app.getden.io/signup'}>
            Get started from free
          </button>
          <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900" onClick={() => window.location.href = 'https://form.typeform.com/to/SMN0NWPe?typeform-source=getden.io'}>
            Book a demo
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.2 }}
          className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
        >
          <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
            <img
              src={pillOptions.find(opt => opt.id === activePill)?.imgSrc || "/image.png"}
              alt={`${pillOptions.find(opt => opt.id === activePill)?.label || 'Landing page'} preview`}
              className="aspect-[16/9] h-auto w-full object-contain"
              onError={(e) => {
                // Fallback in case image fails to load
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = `/placeholder.svg`;
              }}
              height={1000}
              width={1000}
            />
          </div>
        </motion.div>

        {/* Pill Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="relative z-10 mt-8 flex justify-center"
        >
          <div className="flex space-x-1 rounded-full bg-neutral-200 p-1.5 dark:bg-neutral-800 shadow-sm">
            {pillOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setActivePill(option.id)}
                className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                  ${
                    activePill === option.id
                      ? "bg-white text-neutral-900 shadow-md dark:bg-neutral-100 dark:text-neutral-900"
                      : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                  }
                `}
              >
                {option.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
