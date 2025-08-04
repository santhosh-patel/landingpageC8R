"use client";

import Image from "next/image";

export const Highlights = () => {
  return (
    <main className="min-h-screen w-full px-6 py-16 flex flex-col items-center text-white">
      {/* Heading */}
      <h1 className="text-6xl font-extrabold mb-4 text-center">Warning Marker Design</h1>
      <p className="text-lg text-gray-300 text-center max-w-3xl mb-16">
        An advanced monument to mark radioactive zones using intuitive geometry, cultural symbols, and detectable materials.
      </p>

      <section className="flex flex-col-reverse md:flex-row items-center gap-16 max-w-7xl w-full">
        {/* Left: Descriptions */}
        <div className="md:w-1/2 space-y-8 text-left">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Rhombic Dodecahedron</h2>
            <p className="text-gray-400">
              The shape balances a sphere’s stability with flat surfaces and spiked edges to deter climbing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Laser-Etched Skull</h2>
            <p className="text-gray-400">
              Deep laser engraving creates millions of light-reflecting bubbles, resembling a cat’s eyes — universally signaling danger and death.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Embedded Warning Signs</h2>
            <p className="text-gray-400">
              Symbols are etched directly into the surface and embedded in-ground, acting as a barrier to vehicles and humans.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Connector & Foundation</h2>
            <p className="text-gray-400">
              A corrosion-resistant alloy rod and magnetic base anchor the unit to the foundation — detectable by magnetometers.
            </p>
          </div>
        </div>

        {/* Right: Image with polished frame + rotation */}
        <div className="md:w-1/2 flex justify-center relative">
          <div
            className="rounded-xl overflow-hidden"
            style={{
              width: "320px",
              height: "320px",
              transform: "rotate(45deg)",
              boxShadow: "0 0 15px 4px rgba(150, 100, 255, 0.4), inset 0 0 20px rgba(150, 100, 255, 0.2)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <Image
              src="/653e9eec853aded9208472863b1181ce.jpg"
              alt="Rhombic Dodecahedron Marker"
              width={320}
              height={320}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute bottom-[-20px] text-sm text-gray-500 text-center w-full">
            Laser-etched skull in center
          </div>
        </div>
      </section>
    </main>
  );
};
