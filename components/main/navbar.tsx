"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

import { NAV_LINKS, SOCIALS } from "@/constants"; // Your constants for nav links and socials
import { MdMenu } from "react-icons/md";

export const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const navExpandedRef = useRef<HTMLDivElement>(null);
  const collapseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleExpanded = () => setExpanded((v) => !v);

  const collapseNav = () => {
    setExpanded(false);
    clearCollapseTimeout();
  };

  const scheduleCollapse = () => {
    clearCollapseTimeout();
    collapseTimeoutRef.current = setTimeout(() => setExpanded(false), 800);
  };

  const clearCollapseTimeout = () => {
    if (collapseTimeoutRef.current) {
      clearTimeout(collapseTimeoutRef.current);
      collapseTimeoutRef.current = null;
    }
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && expanded) collapseNav();
    };

    const onClickOutside = (e: MouseEvent) => {
      if (
        expanded &&
        navContainerRef.current &&
        navExpandedRef.current &&
        !navContainerRef.current.contains(e.target as Node) &&
        !navExpandedRef.current.contains(e.target as Node)
      ) {
        collapseNav();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [expanded]);

  const onMouseEnter = () => clearCollapseTimeout();

  const onMouseLeave = () => {
    if (expanded) {
      scheduleCollapse();
    }
  };

  useEffect(() => {
    if (!expanded) return;
    const anchors = navExpandedRef.current?.querySelectorAll('a[href^="#"]');
    if (!anchors) return;

    const onClick = (e: Event) => {
      e.preventDefault();
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
      if (href) {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          collapseNav();
        }
      }
    };

    anchors.forEach((a) => a.addEventListener("click", onClick));
    return () =>
      anchors.forEach((a) => a.removeEventListener("click", onClick));
  }, [expanded]);

  const onSocialClick = (socialName: string) => {
    const urls: Record<string, string> = {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      discord: "https://discord.com",
      mail: "mailto:contact@yoursite.com",
    };
    const url = urls[socialName];
    if (url) {
      if (socialName === "mail") window.location.href = url;
      else window.open(url, "_blank", "noopener,noreferrer");
    }
    collapseNav();
  };

  return (
    <>
      <style jsx>{`
        /* Your existing styles here, unchanged */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          padding: 20px;
          overflow-x: hidden;
        }
        .nav-container {
          position: fixed;
          top: 10px; /* changed from bottom: 10px */
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .social-icon {
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px,
            rgba(0, 0, 0, 0.08) 0px 2px 4px;
          opacity: 1;
          transform: scale(1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        .social-icon svg {
          width: 24px;
          height: 24px;
          fill: #333;
          transition: all 0.3s ease;
        }
        .menu-button {
          width: 70px;
          height: 70px;
          background: rgba(193, 255, 179, 1);
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 24px,
            rgba(0, 0, 0, 0.08) 0px 4px 8px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1001;
          position: relative;
        }
        .menu-button:hover {
          transform: scale(1.05);
          box-shadow: rgba(0, 0, 0, 0.15) 0px 12px 32px,
            rgba(0, 0, 0, 0.12) 0px 6px 12px;
        }
        .menu-button svg {
          width: 28px;
          height: 28px;
          fill: #000;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-expanded {
          position: fixed;
          top: 10px; /* changed from bottom: 10px */
          left: 50%;
          transform: translateX(-50%);
          background: rgba(15, 15, 15, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 50px;
          padding: 15px 30px;
          display: flex;
          align-items: center;
          gap: 20px;
          opacity: 0;
          visibility: hidden;
          transform: translateX(-50%) scaleX(0);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 999;
          box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 32px,
            rgba(0, 0, 0, 0.15) 0px 4px 16px;
        }
        .nav-expanded.active {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) scaleX(1);
        }
        .nav-link {
          color: white;
          text-decoration: none;
          padding: 12px 20px;
          border-radius: 30px;
          font-size: 16px;
          font-weight: 500;
          white-space: nowrap;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          transform: translateY(10px);
        }
        .nav-expanded.active .nav-link {
          opacity: 1;
          transform: translateY(0);
        }
        .nav-link:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }
        .nav-expanded.active .nav-link:nth-child(1) {
          transition-delay: 0.1s;
        }
        .nav-expanded.active .nav-link:nth-child(2) {
          transition-delay: 0.15s;
        }
        .nav-expanded.active .nav-link:nth-child(3) {
          transition-delay: 0.2s;
        }
        .nav-container.expanded .social-icon {
          opacity: 0;
          transform: scale(0);
          pointer-events: none;
        }
        .nav-container.expanded .menu-button {
          opacity: 0;
          transform: scale(0);
          pointer-events: none;
        }
        /* Additional hidden class for smooth hide */
        .hidden {
          opacity: 0 !important;
          pointer-events: none !important;
          transform: scale(0) !important;
          transition: opacity 0.4s, transform 0.4s;
        }
        @media (max-width: 768px) {
          .nav-expanded {
            padding: 12px 20px;
            gap: 15px;
            max-width: 90vw;
            overflow-x: auto;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .nav-expanded::-webkit-scrollbar {
            display: none;
          }
          .nav-link {
            padding: 10px 16px;
            font-size: 14px;
          }
          .social-icon {
            width: 50px;
            height: 50px;
          }
          .social-icon svg {
            width: 20px;
            height: 20px;
          }
          .menu-button {
            width: 60px;
            height: 60px;
          }
          .menu-button svg {
            width: 24px;
            height: 24px;
          }
        }
        @media (max-width: 480px) {
          .nav-container {
            gap: 10px;
          }
          .nav-expanded {
            gap: 12px;
            padding: 10px 15px;
          }
          .nav-link {
            padding: 8px 12px;
            font-size: 13px;
          }
        }
      `}</style>

      <div
        ref={navContainerRef}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`nav-container ${expanded ? "expanded" : ""}`}
      >
        {/* Left social icons */}
        {SOCIALS.slice(0, 3).map(({ name, icon: Icon }) => (
          <button
            key={name}
            title={name}
            onClick={() => onSocialClick(name.toLowerCase())}
            className={`social-icon ${expanded ? "hidden" : ""}`}
            type="button"
          >
            <Icon />
          </button>
        ))}

        {/* Center menu button */}
        <button
          aria-label={expanded ? "Collapse menu" : "Expand menu"}
          onClick={toggleExpanded}
          className={`menu-button ${expanded ? "hidden" : ""}`}
          type="button"
        >
          <MdMenu />
        </button>

        {/* Right social icons */}
        {SOCIALS.slice(3, 6).map(({ name, icon: Icon }) => (
          <button
            key={name}
            title={name}
            onClick={() => onSocialClick(name.toLowerCase())}
            className={`social-icon ${expanded ? "hidden" : ""}`}
            type="button"
          >
            <Icon />
          </button>
        ))}
      </div>

      <div
        ref={navExpandedRef}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`nav-expanded ${expanded ? "active" : ""}`}
      >
        {NAV_LINKS.map(({ title, link }) => (
          <Link
            key={title}
            href={link}
            className="nav-link"
            onClick={collapseNav}
          >
            {title}
          </Link>
        ))}
      </div>
    </>
  );
};
