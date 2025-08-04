"use client";

import Image from "next/image";

export const JoinClan = () => {
  return (
    <main className="min-h-screen w-full px-6 py-16 flex flex-col items-center justify-center text-white rounded-lg max-w-5xl mx-auto">
      <section
        className="flex flex-col md:flex-row items-center gap-12 w-full max-w-7xl rounded-lg p-8"
        style={{
          background: "transparent",
          boxShadow: "none",
        }}
      >
        {/* Left side: Text content */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <span className="text-sm font-medium text-purple-400 uppercase tracking-wider">
            GET STARTED
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-purple-300">
            MINT YOUR <br /> AVATAR TODAY!
          </h1>
          <p className="text-purple-200 text-lg max-w-md">
            Join the community on Discord and Twitter to connect with fellow
            collectors and get early updates.
          </p>
          <button
            type="button"
            className="mt-4 w-max bg-purple-400 text-purple-900 font-semibold rounded-md px-6 py-3 hover:bg-purple-500 transition"
          >
            Join The Clan
          </button>
        </div>

        {/* Right side: Image placeholder without src */}
        <div className="md:w-1/2 relative w-[320px] h-[320px]">
          <Image
            src={"" as any} // empty src to avoid error
            alt="Avatar placeholder"
            fill
            className="object-contain"
            priority
          />
        </div>
      </section>
    </main>
  );
};
