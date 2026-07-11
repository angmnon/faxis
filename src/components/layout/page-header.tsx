"use client";

import * as React from "react";
import { UnmannedFactoryCanvas } from "@/components/hero/unmanned-factory-canvas";

interface PageHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  label?: string;
}

export function PageHeader({ eyebrow, title, subtitle, label }: PageHeaderProps) {
  return (
    <section className="relative min-h-[58svh] flex items-end pt-36 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <UnmannedFactoryCanvas />
      </div>
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-[#05070A]/60 via-[#05070A]/50 to-[#05070A]" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#00E5FF]/10 rounded-full blur-[140px] z-[1] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 lg:px-10">
        {label && (
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(0,229,255,0.3)] bg-[rgba(0,229,255,0.06)] mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#30D878] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#30D878]" />
            </span>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#00E5FF]">{label}</span>
          </div>
        )}
        <div className="reveal label-industrial mb-5" data-delay="50">{eyebrow}</div>
        <h1 className="reveal font-display font-semibold text-4xl sm:text-5xl lg:text-7xl leading-[1.05] tracking-tight text-[#E6ECF5] max-w-4xl" data-delay="100">
          {title}
        </h1>
        {subtitle && (
          <p className="reveal mt-6 text-base md:text-lg text-[#8A94A6] max-w-2xl leading-relaxed" data-delay="200">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
