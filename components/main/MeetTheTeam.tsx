"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";

export const MeetTheTeam = () => {
  const teamMembers = [
    {
      name: "BENGEM MINT",
      role: "Founder & Strategist",
      image: "/team-bengem.png"
    },
    {
      name: "WHISPERMANCER",
      role: "Business & Trail Designer",
      image: "/team-whisper.png"
    },
    {
      name: "KODEXAGE",
      role: "Luxet Breakchain Developer",
      image: "/team-kodex.png"
    }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative w-full px-5 py-20 z-[20] flex flex-col items-center"
    >
      {/* Header Section */}
      <motion.div 
        variants={slideInFromTop}
        className="flex flex-col items-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white mb-4">MEET THE TEAM</h2>
        <motion.p 
          variants={slideInFromLeft(0.5)}
          className="text-lg text-gray-200 max-w-[800px] text-center"
        >
          A sketch-crafted ecosystem built for sustainability, utility, and long-term holder value.
        </motion.p>
      </motion.div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[1200px] mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div 
            key={member.name}
            variants={slideInFromLeft(0.3 + index * 0.2)}
            initial="hidden"
            animate="visible"
            whileHover={{ y: -10 }}
            className="flex flex-col items-center p-8 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all border border-white/10 hover:border-white/20"
          >
            <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-2 border-purple-400/30">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 text-center">{member.name}</h3>
            <p className="text-purple-200 text-center">{member.role}</p>
          </motion.div>
        ))}
      </div>

      {/* Decorative Elements */}
      <motion.div 
        variants={slideInFromLeft(1.2)}
        className="absolute -bottom-20 left-0 w-full h-32 bg-gradient-to-t from-purple-500/10 to-transparent z-0"
      />
    </motion.div>
  );
};