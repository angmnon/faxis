"use client";

import * as React from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { useScrollY } from "@/hooks/use-scroll";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { href: "/#platform", label: "Platform" },
  { href: "/#solutions", label: "Solutions" },
  { href: "/#technology", label: "Technology" },
  { href: "/#partners", label: "Partners" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const scrolled = useScrollY(24);
  const [open, setOpen] = React.useState(false);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "backdrop-blur-xl bg-[#05070A]/75 border-b border-[rgba(138,148,166,0.12)]"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-18 py-4">
          <Link href="/" className="flex items-center" aria-label="FAXIS.AI Home">
            <Logo size="md" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-[13.5px] font-medium text-[#8A94A6] hover:text-[#E6ECF5] transition-colors group"
              >
                {link.label}
                <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-gradient-to-r from-[#00E5FF] to-[#7B61FF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="btn-primary !py-2.5 !px-5 !text-[13px]"
            >
              <span>Become a Partner</span>
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-[#E6ECF5] p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={[
          "lg:hidden overflow-hidden transition-all duration-400 bg-[#0A0F17]/95 backdrop-blur-xl border-t border-[rgba(138,148,166,0.1)]",
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <nav className="flex flex-col px-6 py-4 gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-[15px] text-[#E6ECF5] border-b border-[rgba(138,148,166,0.08)] flex items-center justify-between"
            >
              {link.label}
              <ArrowUpRight size={14} className="text-[#00E5FF]" />
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-4 w-full justify-center"
          >
            Become a Partner
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
