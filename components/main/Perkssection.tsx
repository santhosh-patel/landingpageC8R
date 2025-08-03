"use client";

import React from "react";

const benefits = [
  {
    title: "COLLECTIBLE AND UNIQUE NINJAS",
    description: "Every table and all side – cloth tools to create a fresh, clean, weapon available.",
    icon: "🎭",
  },
  {
    title: "STAKING AND S SHADOW REWARDS",
    description: "Every table and all side – cloths will be made of thin, clean, weapons available.",
    icon: "💰",
  },
  {
    title: "COMMUNITY POWERED DAD",
    description: "The user goes on the first manual to call special access you can do.",
    icon: "👨‍👧‍👦",
  },
  {
    title: "READY TO JOIN THE CLARY",
    description: "See your favorite work in this part of the business to meet the clarity panel at Main University.",
    icon: "🚀",
  },
];

export const PerksSection = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            UNLOCK THE PERKS
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            A simple model is required to be automatically offer and long-term links to the
          </p>
        </div>

        {/* Benefits grid */}
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={`benefit-${index}`}
                className=" p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 text-xl mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 uppercase tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA section */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
};