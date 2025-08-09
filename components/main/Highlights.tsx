"use client";

import { useState } from "react";
import { TbH2 } from "react-icons/tb";

type FlipCardProps = {
  frontImageSrc: string;
  frontImageAlt: string;
  backContent: React.ReactNode;
};

const FlipCard = ({ frontImageSrc, frontImageAlt, backContent }: FlipCardProps) => {
  const [flipped, setFlipped] = useState(false);
  const radius = 12;

  return (
    <div
      className="relative w-64 h-80 cursor-pointer"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      style={{ perspective: 1000 }}
    >
      <div
        className="relative w-full h-full shadow-lg"
        style={{
          borderRadius: radius,
          transition: "transform 1.5s ease",
          transformStyle: "preserve-3d",
          transformOrigin: "center",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          position: "relative",
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      >
        {/* Front side */}
        <div
          className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <img
            src={frontImageSrc}
            alt={frontImageAlt}
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: radius }}
          />
        </div>

        {/* Back side */}
        <div
          className="absolute top-0 left-0 w-full h-full rounded-lg flex flex-col justify-center items-center p-6 bg-black bg-opacity-80 text-white select-none"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderRadius: radius,
          }}
        >
          {backContent}
        </div>
      </div>
    </div>
  );
};

export const Highlights = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-transparent px-8 py-12 text-white">
      <h3 className="text-2xl font-bold mb-12 uppercase text-center max-w-3xl">ABOUT CRE8TAR</h3>
      <h1 className="text-4xl font-bold mb-12 uppercase text-center max-w-3xl">
         Unique Avatars Rare traits 
        <br />
      true ownership
      </h1>

      <div className="flex flex-wrap justify-center gap-12">
        <FlipCard
          frontImageSrc="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=256&q=80"
          frontImageAlt="Avatar 1"
          backContent={
            <>
              <h3 className="text-xl font-semibold mb-2">Avatar 1 Details</h3>
              <p>Rare traits and unique design make this avatar stand out.</p>
            </>
          }
        />
        <FlipCard
          frontImageSrc="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=256&q=80"
          frontImageAlt="Avatar 2"
          backContent={
            <>
              <h3 className="text-xl font-semibold mb-2">Avatar 2 Details</h3>
              <p>Crafted for true ownership with exclusive features.</p>
            </>
          }
        />
        <FlipCard
          frontImageSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80"
          frontImageAlt="Avatar 3"
          backContent={
            <>
              <h3 className="text-xl font-semibold mb-2">Avatar 3 Details</h3>
              <p>Limited edition with rare visual elements.</p>
            </>
          }
        />
      </div>

      <p className="max-w-3xl text-center mt-16 text-lg leading-relaxed bg-transparent">
        CRE8TAR offers unique avatars with rare traits and true ownership.<br/>
       Designed with detail and backed by exclusive technology.
      </p>
    </main>
  );
};
