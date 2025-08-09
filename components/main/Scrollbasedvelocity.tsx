"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
  className?: string;
}

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const ParallaxText = ({
  children,
  baseVelocity = 100,
  className,
}: ParallaxProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const [repetitions, setRepetitions] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const calculateRepetitions = () => {
      if (containerRef.current && textRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const textWidth = textRef.current.offsetWidth;
        const newRepetitions = Math.ceil(containerWidth / textWidth) + 3; // buffer to prevent gaps
        setRepetitions(newRepetitions);
      }
    };

    calculateRepetitions();
    window.addEventListener("resize", calculateRepetitions);
    return () => window.removeEventListener("resize", calculateRepetitions);
  }, [children]);

  const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      ref={containerRef}
      className="w-screen overflow-hidden whitespace-nowrap"
      style={{ margin: 0, padding: 0 }}
    >
      <motion.div className={cn("inline-block", className)} style={{ x }}>
        {Array.from({ length: repetitions }).map((_, i) => (
          <span
            key={i}
            ref={i === 0 ? textRef : null}
            style={{ whiteSpace: "nowrap", margin: 0, padding: 0 }}
          >
            {children}{" "}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export const ScrollBasedVelocity = () => {
  return (
    <main className="w-screen m-0 p-0 flex flex-col items-center text-white">
      <section
        className="w-screen overflow-hidden flex flex-col gap-0 max-w-full m-0 p-0"
        style={{ minHeight: "auto" }}
      >
        <div className="w-full flex flex-col gap-0 relative" style={{ height: "auto" }}>
          <div className="rounded-xl overflow-hidden p-0" style={{ height: "auto" }}>
            <ParallaxText
              baseVelocity={5}
              className="font-display text-center text-4xl font-bold -tracking-widest text-black dark:text-white md:text-7xl md:leading-[5rem]"
            >
              + cre8tar 
            </ParallaxText>
            <ParallaxText
              baseVelocity={-5}
              className="font-display text-center text-4xl font-bold -tracking-widest text-black dark:text-white md:text-7xl md:leading-[5rem]"
            >
              + cre8tar + C8R 
            </ParallaxText>
          </div>
        </div>
      </section>
    </main>
  );
};
