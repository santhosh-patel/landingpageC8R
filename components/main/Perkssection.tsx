"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const benefits = [
  {
    title: "COLLECTIBLE & UNIQUE NINJAS",
    description:
      "Each ninja is uniquely crafted with rare traits and powerful hidden abilities.",
    icon: "🎭",
  },
  {
    title: "STAKING & SHADOW REWARDS",
    description:
      "Stake your ninjas to earn exclusive SHADOW tokens and unlock special perks.",
    icon: "💰",
  },
  {
    title: "COMMUNITY POWER",
    description:
      "Join a strong community that supports and grows together with exclusive access.",
    icon: "👨‍👧‍👦",
  },
  {
    title: "READY TO JOIN THE CLAW?",
    description:
      "Become part of the clan and shape the future of CRE8TAR ninjas with us.",
    icon: "🚀",
  },
];

const cardHeights = [260, 400, 420, 280];

export const PerksSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-16 bg-transparent" ref={containerRef}>
      {/* Header */}
      <div className="w-full max-w-full text-center px-8 mb-10">
        <h2 className="text-4xl font-extrabold text-white uppercase">UNLOCK THE PERKS</h2>
        <p className="text-gray-300 mt-2 max-w-xl mx-auto">
          Discover the unique features and benefits available to CRE8TAR ninja holders.
        </p>
      </div>

      {/* Grid */}
      <div className="mx-auto px-8" style={{ maxWidth: 1200 }}>
        <div
          className="card-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 24,
            alignItems: "start",
          }}
        >
          {benefits.map((benefit, idx) => {
            const height = cardHeights[idx];
            const extraStyle = idx === 2 ? { marginTop: "-140px" } : {};

            return (
              <motion.div
                key={idx}
                className="flex flex-col items-center p-5 rounded-lg shadow-md bg-gray-800 bg-opacity-80"
                style={{ height, ...extraStyle }}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.3, duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2 uppercase text-center">{benefit.title}</h3>
                <p className="text-gray-400 text-center text-base leading-relaxed max-w-xs mb-4">
                  {benefit.description}
                </p>

                {(idx === 0 || idx === benefits.length - 1) && (
                  <button
                    onClick={() => window.open("https://www.youtube.com", "_blank")}
                    className="mx-auto w-[200px] py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-300"
                  >
                    Visit YouTube
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
