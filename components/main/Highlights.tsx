"use client";

import Link from "next/link";

const card = {
  name: "Distributor 1",
  logo: "https://via.placeholder.com/420", // Replace with your image URL
  description:
    "Top quality content provider with innovative and trusted media services worldwide.",
  link: "#",
};

export const Highlights = () => {
  return (
    <main className="min-h-screen w-full px-6 py-12 flex flex-col items-center text-center text-white">
      {/* Page Heading */}
      <h1 className="text-6xl font-extrabold mb-4 max-w-4xl">
        Welcome to Our Marketplace
      </h1>
      <p className="text-xl text-white mb-16 max-w-3xl">
        Discover trusted partners and exceptional content providers who elevate your experience.
      </p>

      {/* Content Section */}
      <section className="flex flex-col md:flex-row w-full max-w-7xl gap-12 items-center">
        {/* Left side: Single large tilted image */}
        <Link
          href={card.link}
          target="_blank"
          rel="noopener noreferrer"
          className="md:w-1/2 flex justify-center"
        >
          <img
            src={card.logo}
            alt={card.name}
            draggable={false}
            className="rounded-xl object-cover"
            style={{
              width: "320px",
              height: "320px",
              transform: "rotate(65deg)",
              boxShadow:
                "0 0 15px 4px rgba(150, 100, 255, 0.6), inset 0 0 20px rgba(150, 100, 255, 0.4)",
            }}
          />
        </Link>

        {/* Right side: Headings and details */}
        <div className="md:w-1/2 flex flex-col justify-center max-w-lg text-left md:text-left">
          <h2 className="text-5xl font-extrabold mb-6">
            Our Trusted Content Distributor
          </h2>
          <p className-=" text-xl leading-relaxed">
            Partnering with the best in the industry to deliver high-quality,
            reliable content that elevates your experience. Our distributor
            stands out through innovation and commitment to excellence.
          </p>
        </div>
      </section>
    </main>
  );
};
