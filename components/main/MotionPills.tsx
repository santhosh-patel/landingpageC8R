"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const pills = [
  { name: "Pill 1", logo: "https://via.placeholder.com/24", link: "#" },
  { name: "Pill 2", logo: "https://via.placeholder.com/24", link: "#" },
  { name: "Pill 3", logo: "https://via.placeholder.com/24", link: "#" },
  { name: "Pill 4", logo: "https://via.placeholder.com/24", link: "#" },
  { name: "Pill 5", logo: "https://via.placeholder.com/24", link: "#" },
  { name: "Pill 6", logo: "https://via.placeholder.com/24", link: "#" },
];

const PILL_WIDTH = 128; // px — width of each pill (w-32)
const PILL_COUNT = pills.length;
const GAP_SIZE = 8; // px gap between pills

const ONE_SET_WIDTH = PILL_COUNT * PILL_WIDTH + (PILL_COUNT - 1) * GAP_SIZE;
const TOTAL_WIDTH = ONE_SET_WIDTH * 2; // duplicated set width

const duplicatedPills = [...pills, ...pills];

const DURATION = 30; // seconds
const ROWS = 3;

export const MotionPills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <div
  ref={ref}
  className="w-full overflow-hidden"
  style={{ padding: 0, marginTop: '6rem' }}
>
   <h2 className="text-white text-2xl font-semibold mb-10 text-center">
    Top Content Distributors
  </h2>
      {[...Array(ROWS)].map((_, rowIndex) => {
        const isReverse = rowIndex === 1; // second line scroll opposite
        return (
          <motion.div
            key={rowIndex}
            className="flex mb-6"
            style={{ width: TOTAL_WIDTH, gap: GAP_SIZE }}
            animate={
              isInView
                ? isReverse
                  ? { x: [-ONE_SET_WIDTH, 0] }
                  : { x: [0, -ONE_SET_WIDTH] }
                : { x: 0 }
            }
            transition={{
              duration: DURATION,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {duplicatedPills.map(({ name, logo, link }, i) => (
              <Link
                key={`${rowIndex}-${i}`}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gray-800 text-white rounded-full px-4 py-1 cursor-pointer select-none whitespace-nowrap w-32 flex-shrink-0"
                style={{ margin: 0 }}
              >
                <img
                  src={logo}
                  alt={name}
                  className="w-6 h-6 rounded-full object-contain"
                  draggable={false}
                />
                <span className="text-sm font-medium ml-2">{name}</span>
              </Link>
            ))}
          </motion.div>
        );
      })}
    </div>
  );
};
