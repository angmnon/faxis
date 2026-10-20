"use client";

import * as React from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { useScrollY } from "@/hooks/use-scroll";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { href: "/solutions", label: "Solutions" },
  { href: "/brands", label: "For Brands & Retailers" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/technology", label: "Technology" },
  { href: "/network", label: "Global Network" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const scrolled = useScrollY(16);
  const [open, setOpen] = React.useState(false);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center" aria-label="FAXIS.AI Home">
            <Logo size="md" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-[13.5px] font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <Link href="/contact?intent=brand" className="btn-primary !py-2 !px-4 text-[13.5px]">
              Plan Local Production
              <ArrowUpRight size={14} strokeWidth={2.2} />
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setOpen(!open)}
              className="text-foreground p-2 -mr-2"
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={[
          "lg:hidden overflow-hidden transition-all duration-300 bg-background/95 backdrop-blur-xl border-b border-border",
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <nav className="flex flex-col px-6 py-4 gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-[15px] text-foreground border-b border-border flex items-center justify-between"
            >
              {link.label}
              <ArrowUpRight size={14} className="text-muted-foreground" />
            </Link>
          ))}
          <Link
            href="/contact?intent=brand"
            onClick={() => setOpen(false)}
            className="btn-primary mt-4 w-full justify-center"
          >
            Plan Local Production
            <ArrowUpRight size={14} strokeWidth={2.2} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
