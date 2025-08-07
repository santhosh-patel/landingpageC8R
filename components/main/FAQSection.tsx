"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { slideInFromTop, slideInFromLeft } from "@/lib/motion";

export const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is nftninja?",
      answer:
        "nftninja is a collection of 5,000 unique, masked ninja NFTs living on the Ethereum blockchain. Each ninja is packed with distinct traits, rarity, and hidden utility within the ecosystem.",
    },
    {
      question: "How can I mint a ninja?",
      answer:
        "Connect your wallet to our minting portal during the sale period. Select your desired quantity and confirm the transaction.",
    },
    {
      question: "Will there be a game or metaverse integration?",
      answer:
        "Yes! We're developing a P2E game where your ninjas can battle, complete missions, and earn $SHADOW tokens.",
    },
    {
      question: "What is $shadow and how do I earn it?",
      answer:
        "$SHADOW is our utility token earned through gameplay, staking, and community participation.",
    },
    {
      question: "What can I do with my nftninja?",
      answer:
        "Use as avatars, stake for rewards, participate in governance, or trade on secondary markets.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="w-full px-4 py-20 sm:px-8 md:px-12 lg:px-24"
    >
      {/* Header */}
      <motion.div variants={slideInFromTop} className="text-center mb-16">
        <h2 className="text-5xl font-bold text-white mb-2">FAQ</h2>
        <div className="flex flex-col items-center">
          <motion.h3
            variants={slideInFromLeft(0.3)}
            className="text-3xl font-bold text-white mb-1"
          >
            FREQUENTLY ASKED
          </motion.h3>
          <motion.h3
            variants={slideInFromLeft(0.4)}
            className="text-3xl font-bold text-white"
          >
            QUESTIONS
          </motion.h3>
        </div>
        <motion.p
          variants={slideInFromLeft(0.5)}
          className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto"
        >
          Here are some of the most common queries to help you get started.
        </motion.p>
      </motion.div>

      {/* FAQ Items */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            variants={slideInFromLeft(0.3 + index * 0.1)}
            className="overflow-hidden"
          >
            <motion.div
              className="p-6 rounded-xl border-2 border-gray-500 cursor-pointer transition-all"
              onClick={() => toggleFAQ(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                boxShadow: "none",
                backgroundColor: "transparent",
              }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-white">
                  <span className="text-purple-400 mr-2">{index + 1}.</span>
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  className="text-2xl font-bold text-white"
                >
                  <motion.span
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="block"
                  >
                    +
                  </motion.span>
                </motion.div>
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pt-4"
                  >
                    <p className="text-gray-300">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
