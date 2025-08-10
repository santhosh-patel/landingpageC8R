"use client";

import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

const roadmapData = [
  {
    title: "LAUNCH & BENT",
    bullets: [
      "Welcome all 20 minutes at the celebration",
      "Follows on an occasion, and celebrate!",
      "Community channels welcome!",
    ],
    color: "from-yellow-400 to-yellow-600",
  },
  {
    title: "GAME MECHANICS",
    bullets: [
      "Learn the rules of the ninja world",
      "Progression system explained",
      "Unlockable skills revealed",
    ],
    color: "from-green-400 to-green-600",
  },
  {
    title: "SHADOW TOKEN",
    bullets: [
      "Utility token for the community",
      "Earnable through missions",
      "Used for marketplace trading",
    ],
    color: "from-purple-400 to-purple-600",
  },
  {
    title: "LORE EXPANSION",
    bullets: [
      "New chapters added monthly",
      "Backstory deep dives",
      "Community voting on plot twists",
    ],
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "METAVERSE ENTRY",
    bullets: [
      "Virtual dojo integration",
      "Playable avatars in VR",
      "Interconnected metaverse hubs",
    ],
    color: "from-pink-400 to-pink-600",
  },
];

export const Roadmap = () => {
  const lineRef = useRef(null);
  const isInView = useInView(lineRef, { once: true });
  const lineControls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      lineControls.start({ scaleY: 1, transition: { duration: 1.2 } });
    }
  }, [isInView, lineControls]);

  return (
    <section className="py-16 bg-transparent">
      {/* Header */}
      <div className="text-center mb-12 px-6">
        <h3 className="text-1xl font-extrabold mb-4 text-white uppercase">
          ROADMAP
        </h3>
        <h1 className="text-5xl font-extrabold mb-4 text-white uppercase">
          THE PATH OF CRE8TAR
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          A weekly workshop organized by our community, guiding you through each
          phase of our ninja journey.
        </p>
      </div>

      {/* Timeline Path */}
      <div className="relative w-full max-w-5xl mx-auto min-h-[700px]">
        {/* Vertical line */}
        <motion.div
          ref={lineRef}
          className="absolute top-0 h-full w-3 bg-gray-400 rounded-full origin-top left-1/2 -translate-x-1/2 z-0"
          initial={{ scaleY: 0 }}
          animate={lineControls}
        />

        <div className="flex flex-col space-y-20 relative z-10">
          {roadmapData.map((phase, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`flex items-center w-full justify-${
                  isLeft ? "start" : "end"
                } relative`}
                style={{ position: "relative" }}
              >
                {/* Coin */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * idx }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center absolute top-1/2 z-20 w-20 h-20"
                  style={{
                    top: "25%",
                    left: "47%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <Image
                    src="/c8coin.png"
                    alt={`Coin ${idx + 1}`}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "20px",
                      pointerEvents: "none",
                      userSelect: "none",
                    }}
                  >
                    {idx + 1}
                  </span>
                </motion.div>

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * idx + 0.3 }}
                  viewport={{ once: true }}
                  className={`w-5/12 p-6 bg-transparent rounded-lg shadow-none text-left`}
                  style={{
                    maxWidth: "720px",
                    zIndex: 10,
                    marginLeft:
                      !isLeft && (idx === 1 || idx === 3)
                        ? "750px"     //card 2,4 adjusted to align with the line
                        : isLeft
                        ? "0"
                        : "auto",
                    marginRight:
                      !isLeft && (idx === 1 || idx === 3)
                        ? "auto"
                        : isLeft
                        ? "auto"
                        : "0",
                  }}
                >
                  <h2
                    className="text-xl font-bold uppercase mb-3 text-white"
                    style={{ whiteSpace: "nowrap", textAlign: "left" }}
                  >
                    {phase.title}
                  </h2>

                  <ul className="space-y-2 text-gray-300 text-sm text-left">
                    {phase.bullets.map((bullet, i) => (
                      <li key={i}>• {bullet}</li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
