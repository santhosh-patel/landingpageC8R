"use client";

import Link from "next/link";
import { FaTwitter, FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  const socialLinks = [
    { icon: FaTwitter, link: "https://twitter.com" },
    { icon: FaDiscord, link: "https://discord.com" },
    { icon: FaInstagram, link: "https://instagram.com" },
    { icon: FaLinkedin, link: "https://linkedin.com" },
  ];

  const footerLinks = [
    { name: "Whitepaper", href: "/whitepaper" },
    { name: "Rollups", href: "/rollups" },
    { name: "Metalayer", href: "/metalayer" },
    { name: "Blog", href: "/blog" },
    { name: "Docs", href: "/docs" },
    { name: "Newsletter", href: "/newsletter" },
    { name: "Brand kit", href: "/brand-kit" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <footer className="bg-transparent bg-[url('/dots-pattern.svg')] bg-repeat p-10 rounded-2xl max-w-7xl mx-auto flex justify-between items-start">
      {/* Left side: About text, button, trademark */}
      <div className="max-w-lg flex flex-col justify-between h-full gap-6">
        <div>
          <p className="text-blue-600 text-base font-light leading-relaxed">
            Powered by cre8tar — Building the future of Ethereum ecosystems.
          </p>
          <button className="mt-6 w-max bg-violet-400 hover:bg-violet-500 transition text-white font-semibold rounded-full px-6 py-3">
            Book A Call
          </button>
        </div>
        <div className="pt-10 text-blue-600 text-xs font-light text-left">
          © cre8tar 2025 — All rights reserved.
        </div>
      </div>

      {/* Right side: Social icons and footer links */}
      <div className="flex flex-col items-center">
        <div className="flex space-x-6 mb-6">
          {socialLinks.map(({ icon: Icon, link }, i) => (
            <Link
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-purple-700 flex items-center justify-center text-white text-3xl hover:bg-purple-800 transition transform hover:scale-110 hover:shadow-lg"
            >
              <Icon />
            </Link>
          ))}
        </div>

        <nav className="flex flex-wrap justify-center gap-6 max-w-xs text-blue-600 text-sm font-light">
          {footerLinks.map(({ name, href }) => (
            <Link key={name} href={href} className="hover:underline">
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
};
