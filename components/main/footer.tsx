"use client";

import Link from "next/link";
import { FOOTER_DATA, NAV_LINKS } from "@/constants";

export const Footer = () => {
  const community = FOOTER_DATA.find((section) => section.title === "Community");
  const socialMedia = FOOTER_DATA.find((section) => section.title === "Social Media");
  const about = FOOTER_DATA.find((section) => section.title === "About");

  return (
    <footer className="bg-transparent bg-[url('/dots-pattern.svg')] bg-repeat p-10 rounded-2xl max-w-7xl mx-auto flex flex-col gap-12">
      {/* Top content: Left & Right */}
      <div className="flex flex-col md:flex-row justify-between gap-12">
        {/* Left: Blue box with logo and CTA */}
        <div className="bg-transparent rounded-2xl px-8 py-12 flex flex-col gap-6 max-w-lg w-full md:w-auto">
          <div className="flex items-center gap-3 font-bold text-violet-400 text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 stroke-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18" />
            </svg>
            <span className="text-blue-600">cre8tar</span>
          </div>
          <h2 className="text-3xl font-extrabold leading-tight text-blue-600">
            Fastest-Growing Rollup <br /> Ecosystems On Ethereum
          </h2>
          <button className="mt-4 w-max bg-violet-400 hover:bg-violet-500 transition text-white font-semibold rounded-full px-6 py-3">
            Book A Call
          </button>
        </div>

        {/* Right: Sections */}
        <div className="flex flex-wrap gap-10 w-full md:w-auto justify-center md:justify-start text-blue-600">
          {community && <FooterSection title={community.title} items={community.data} />}
          {socialMedia && <FooterSection title={socialMedia.title} items={socialMedia.data} />}
          {about && <FooterSection title={about.title} items={about.data} />}

          <nav className="flex flex-col gap-2 mt-6 md:mt-0 min-w-[120px]">
            <h3 className="font-semibold mb-3 text-blue-600">Navigate</h3>
            {NAV_LINKS.map(({ title, link }) => (
              <Link
                key={title}
                href={link}
                className="hover:underline text-sm text-blue-600"
              >
                {title}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom: Full width trademark line */}
      <div className="w-full border-t border-blue-200 pt-6 text-center text-blue-600 text-xs font-light">
        © cre8tar 2025 — All rights reserved.
      </div>
    </footer>
  );
};

type FooterSectionProps = {
  title: string;
  items: readonly {
    name: string;
    icon: React.ComponentType<{ className?: string }> | null;
    link: string;
  }[];
};

const FooterSection = ({ title, items }: FooterSectionProps) => (
  <div className="min-w-[120px]">
    <h3 className="font-semibold mb-3 text-blue-600">{title}</h3>
    <ul className="flex flex-col gap-2">
      {items.map(({ name, icon: Icon, link }) => (
        <li key={name}>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline text-sm text-blue-600"
          >
            {Icon && <Icon className="w-5 h-5 text-violet-400" />}
            <span>{name}</span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
