"use client";

import React from "react";

const phases = [
  {
    date: "1-6 May, 2021",
    title: "Registration",
    description: "Pick your favourite event(s) and register in that event by filling the form corresponding to that event. Its that easy :)",
    alignRight: true,
  },
  {
    date: "6-9 May, 2021",
    title: "Participation",
    description: "Participate online. The links for your registered events will be sent to you via email and whatsapp groups. Use those links and show your talent.",
    alignRight: false,
  },
  {
    date: "10 May, 2021",
    title: "Result Declaration",
    description: "The ultimate genius will be revealed by our judging panel on 10th May, 2021 and the results will be announced on the whatsapp groups and will be mailed to you.",
    alignRight: true,
  },
  {
    date: "12 May, 2021",
    title: "Prize Distribution",
    description: "The winners will be contacted by our team for their addresses and the winning goodies will be sent at their addresses.",
    alignRight: false,
  },
];

export const Roadmap = () => {
  return (
    <section className="py-12">
      {/* Page heading */}
      <div className="text-center mb-12 px-6">
        <h1 className="text-5xl font-extrabold mb-4 text-white">Product Roadmap</h1>
        <p className="text-white max-w-2xl mx-auto">
          Here's your guide to the phases of our project, outlining key milestones and deliverables.
        </p>
      </div>

      {/* Main content */}
      <div className="text-white">
        <div className="container mx-auto flex flex-col items-start md:flex-row">
          {/* Left info panel */}
          <div className="flex flex-col w-full md:w-1/3 mt-2 md:mt-12 px-8">
            <p className="ml-2 text-yellow-300 uppercase tracking-loose">Working Process</p>
            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2 text-white">
              Working Process of Fest
            </p>
            <p className="text-sm md:text-base text-gray-300 mb-4">
              Here's your guide to the tech fest 2021 process. Go through all the steps to know the exact process of the fest.
            </p>
            <a
              href="#"
              className="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
            >
              Explore Now
            </a>
          </div>

          {/* Timeline */}
          <div className="ml-0 md:ml-12 w-full md:w-2/3">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                {/* Vertical timeline lines */}
                <div
                  className="absolute h-full border border-yellow-400"
                  style={{ right: "50%", borderRadius: "1%" }}
                />
                <div
                  className="absolute h-full border border-yellow-400"
                  style={{ left: "50%", borderRadius: "1%" }}
                />

                {/* Timeline items */}
                {phases.map(({ date, title, description, alignRight }, i) => (
                  <div
                    key={i}
                    className={`mb-8 flex justify-between items-center w-full ${
                      alignRight ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div className="order-1 w-5/12" />
                    <div
                      className={`order-1 w-5/12 px-1 py-4 ${
                        alignRight ? "text-right" : "text-left"
                      }`}
                    >
                      <p className="mb-3 text-base text-yellow-300">{date}</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl text-white">{title}</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-300">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};