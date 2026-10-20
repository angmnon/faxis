"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="font-display text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
        {value}
      </span>
      <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-muted-foreground mt-2">
        {label}
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[92svh] flex items-center overflow-hidden pt-28 pb-16 hero-backdrop">
      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 text-center">
        {/* Eyebrow */}
        <div className="reveal inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-foreground animate-pulse-dot" />
          <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-muted-foreground">
            Live — Global Network Online
          </span>
        </div>

        {/* Headline */}
        <h1 className="reveal font-display font-semibold text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-[-0.03em] text-foreground mb-6" data-delay="100">
          Redefining Manufacturing
          <br />
          with Lights-Out AI Factories
        </h1>

        {/* Subhead */}
        <p className="reveal text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10" data-delay="200">
          FAXIS.AI builds fully autonomous AI factories across 3D printing, CNC machining,
          sheet metal, and injection molding — operating 24/7 without human presence on the floor.
          One digital thread. Zero manual handoffs. A trillion-dollar industry, reengineered.
        </p>

        {/* CTAs */}
        <div className="reveal flex flex-wrap justify-center gap-3 mb-16" data-delay="300">
          <Link href="/contact" className="btn-primary">
            Become a Global Partner
            <ArrowUpRight size={15} strokeWidth={2.2} />
          </Link>
          <Link href="/#platform" className="btn-secondary">
            <Play size={14} />
            Watch Factory Demo
          </Link>
        </div>

        {/* Stats bar */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-3xl mx-auto border-t border-border pt-10" data-delay="400">
          <Stat value="4x" label="Core Process Verticals" />
          <Stat value="7×24" label="Lights-Out Operation" />
          <Stat value="$1T+" label="Addressable Market" />
          <Stat value="3" label="Funding Rounds Closed" />
        </div>
      </div>
    </section>
  );
}
