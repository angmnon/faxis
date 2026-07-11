"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Play, ChevronDown, Cpu, Factory, Zap, Shield } from "lucide-react";
import { UnmannedFactoryCanvas } from "./unmanned-factory-canvas";

function Stat({ value, label, suffix }: { value: string; label: string; suffix?: string }) {
  return (
    <div className="flex flex-col">
      <div className="flex items-baseline gap-1">
        <span className="font-display text-3xl md:text-4xl font-semibold text-[#E6ECF5] tracking-tight">
          {value}
        </span>
        {suffix && (
          <span className="text-[#00E5FF] text-lg font-semibold font-display">{suffix}</span>
        )}
      </div>
      <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#8A94A6] mt-1.5">
        {label}
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-24 pb-20">
      {/* Canvas background */}
      <div className="absolute inset-0 z-0">
        <UnmannedFactoryCanvas />
      </div>

      {/* Gradient overlays for legibility */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070A]/40 via-transparent to-[#05070A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05070A]/80 via-transparent to-[#05070A]/30" />
      </div>

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#00E5FF]/10 rounded-full blur-[150px] z-[1] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#7B61FF]/10 rounded-full blur-[150px] z-[1] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 lg:px-10">
        <div className="max-w-4xl">
          {/* Industrial eyebrow */}
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(0,229,255,0.3)] bg-[rgba(0,229,255,0.06)] mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#30D878] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#30D878]" />
            </span>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#00E5FF]">
              Live — Global Network Online
            </span>
          </div>

          {/* Headline */}
          <h1 className="reveal font-display font-semibold text-[44px] sm:text-6xl lg:text-7xl xl:text-[88px] leading-[1.02] tracking-[-0.02em] text-[#E6ECF5] mb-6" data-delay="100">
            Redefining
            <br />
            Manufacturing with
            <br />
            <span className="text-gradient-cyan">Lights-Out AI Factories</span>
          </h1>

          {/* Subhead */}
          <p className="reveal text-base md:text-lg text-[#8A94A6] leading-relaxed max-w-2xl mb-10" data-delay="200">
            FAXIS.AI builds fully autonomous AI factories across 3D printing, CNC machining,
            sheet metal, and injection molding — operating 24/7 without human presence on the floor.
            One digital thread. Zero manual handoffs. A trillion-dollar industry, reengineered.
          </p>

          {/* CTAs */}
          <div className="reveal flex flex-wrap gap-4 mb-16" data-delay="300">
            <Link href="/contact" className="btn-primary">
              Become a Global Partner
              <ArrowUpRight size={15} strokeWidth={2.5} />
            </Link>
            <Link href="/#platform" className="btn-secondary">
              <Play size={14} className="text-[#00E5FF]" fill="#00E5FF" />
              Watch Factory Demo
            </Link>
          </div>

          {/* Stats bar */}
          <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-3xl border-t border-[rgba(138,148,166,0.15)] pt-10" data-delay="400">
            <Stat value="4" suffix="x" label="Core Process Verticals" />
            <Stat value="7×24" label="Lights-Out Operation" />
            <Stat value="$1T+" label="Addressable Market" />
            <Stat value="3" label="Funding Rounds Closed" />
          </div>
        </div>
      </div>

      {/* Feature chips floating */}
      <div className="hidden lg:flex absolute right-10 top-1/2 -translate-y-1/2 z-10 flex-col gap-3">
        {[
          { icon: Cpu, label: "AI QUOTING ENGINE" },
          { icon: Factory, label: "AUTONOMOUS EXECUTION" },
          { icon: Zap, label: "REAL-TIME APS" },
          { icon: Shield, label: "AI VISUAL QC" },
        ].map((f, i) => (
          <div
            key={f.label}
            className="reveal flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg bg-[rgba(15,20,28,0.7)] backdrop-blur-md border border-[rgba(138,148,166,0.15)] hover:border-[rgba(0,229,255,0.4)] transition-all"
            data-delay={`${500 + i * 100}`}
          >
            <f.icon size={14} className="text-[#00E5FF]" />
            <span className="text-[10px] font-mono tracking-[0.15em] text-[#8A94A6]">{f.label}</span>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono tracking-[0.25em] text-[#8A94A6] uppercase">Scroll</span>
        <ChevronDown size={18} className="text-[#00E5FF] animate-bounce" />
      </div>
    </section>
  );
}
