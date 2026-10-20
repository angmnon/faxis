"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[92svh] flex items-center overflow-hidden pt-32 pb-16 hero-backdrop">
      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 text-center">
        {/* Eyebrow */}
        <div className="reveal inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
          <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-muted-foreground">
            A Global Local-Manufacturing Network
          </span>
        </div>

        {/* Headline */}
        <h1 className="reveal font-display font-semibold text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-[-0.03em] text-foreground mb-6" data-delay="100">
          Manufacturing, closer
          <br />
          to every market.
        </h1>

        {/* Subhead */}
        <p className="reveal text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6" data-delay="200">
          FAXIS.AI helps global brands and retailers design, deploy, and operate manufacturing
          capacity in the markets they serve. We combine AI-enabled production systems, automation,
          local manufacturing capabilities, and coordinated operations to help products move from
          demand to delivery with fewer supply-chain handoffs.
        </p>
        <p className="reveal text-sm text-muted-foreground/80 max-w-xl mx-auto mb-10" data-delay="250">
          From everyday products to electronics and appliances, we build the right production system
          around the product—not the other way around.
        </p>

        {/* CTAs */}
        <div className="reveal flex flex-wrap justify-center gap-3" data-delay="300">
          <Link href="/contact?intent=brand" className="btn-primary">
            Plan Local Production
            <ArrowUpRight size={15} strokeWidth={2.2} />
          </Link>
          <Link href="/how-it-works" className="btn-secondary">
            <ArrowRight size={14} />
            Explore How It Works
          </Link>
        </div>
      </div>
    </section>
  );
}
