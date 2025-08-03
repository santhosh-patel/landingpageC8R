"use client";

import React from "react";

const mintingSteps = [
  {
    stepNumber: "01",
    title: "CONNECT WALLET",
    description: "Use MetaMask or MetaMask or WalletConnect to connect with NFTNinja.",
  },
  {
    stepNumber: "02",
    title: "MINT OR BUY",
    description: "Mint directly during launch or buy on secondary like OpenSea.",
  },
  {
    stepNumber: "03",
    title: "STAKE, COLLECT",
    description: "Start earning rewards, join the clan, and participate in ecosystem.",
  },
];

export const Mintstep = () => {
  return (
    // Ensure no background on the main section. Explicitly set bg-transparent if needed.
    <section className="py-20 px-4 bg-transparent"> 
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4 text-white">
          HOW TO BUY
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-wider mb-4 text-white">
          MINITYOURNINJA
        </h1>
        <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-6 text-white">
          IN 3 STEPS
        </h3>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
          A stealth-crafted ecosystem built for sustainability, utility, and long-term holder value.
        </p>
      </div>

      {/* Steps Section - Ensure no background on the container and individual step divs */}
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {mintingSteps.map((step, index) => (
          // No bg- classes here. If 'p-8' was causing a background, remove it.
          // The image clearly shows a border-radius and padding, implying a box.
          // Let's re-add padding but still ensure no background color.
          <div key={index} className="p-8 text-center rounded-lg"> {/* Added padding and rounded corners, but NO bg- */}
            <div className="text-6xl font-bold mb-6 text-yellow-300">
              {step.stepNumber}
            </div>
            <h4 className="text-2xl font-bold uppercase mb-4 text-white">
              {step.title}
            </h4>
            <p className="text-gray-300">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <p className="text-xl md:text-2xl mb-8 text-white">
          Grab Your Personal Ninja Link And Start Your Adventure In The Shadows!
        </p>
        <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition-opacity">
          Copy Link
        </button>
      </div>
    </section>
  );
};