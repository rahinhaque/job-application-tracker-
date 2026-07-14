"use client";

import Link from "next/link";
import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { SiFiverr, SiUpwork } from "react-icons/si";
import { HiOutlineBriefcase } from "react-icons/hi";
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const socialLinks = [
    {
      icon: AiOutlineFacebook,
      href: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: AiOutlineLinkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    { icon: AiOutlineTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: SiUpwork, href: "https://upwork.com", label: "Upwork" },
    { icon: SiFiverr, href: "https://fiverr.com", label: "Fiverr" },
  ];

  const productLinks = [
    { label: "Features", href: "#" },
    { label: "Dashboard", href: "#" },
    { label: "Pricing", href: "#" },
  ];

  const companyLinks = [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
  ];

  const legalLinks = [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* top accent line matching the hero gradient */}
      <div className="h-1 w-full bg-gradient-to-r from-violet-500 via-purple-500 to-violet-600" />

      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          {/* Brand + contact */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600">
                <HiOutlineBriefcase className="h-5 w-5 text-white" />
              </span>
              <span className="text-lg font-bold text-white">Job Tracker</span>
            </div>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
              Track and manage your job search with ease — from wish list to
              offer, all in one place.
            </p>

            <div className="mt-6 space-y-2 text-sm text-gray-400">
              <p>📞 +1 (555) 123-4567</p>
              <p>📧 contact@example.com</p>
              <p>📍 123 Main St, City, Country</p>
            </div>

            {/* Social icons */}
            <div className="mt-6 flex space-x-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-gray-300 transition-colors duration-200 hover:bg-violet-600 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Product
            </p>
            <ul className="space-y-3">
              {productLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-gray-400 transition-colors hover:text-violet-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Company
            </p>
            <ul className="space-y-3">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-gray-400 transition-colors hover:text-violet-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Legal
            </p>
            <ul className="space-y-3">
              {legalLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-gray-400 transition-colors hover:text-violet-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-6 md:flex-row">
          <p className="text-sm text-gray-500">
            © {year || "2024"} Job Tracker. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Free forever, no credit card required.
          </p>
        </div>
      </div>
    </footer>
  );
}
