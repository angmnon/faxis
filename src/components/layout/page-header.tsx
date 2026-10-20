"use client";

import * as React from "react";

interface PageHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  label?: string;
}

export function PageHeader({ eyebrow, title, subtitle, label }: PageHeaderProps) {
  return (
    <section className="relative pt-36 pb-16 overflow-hidden hero-backdrop">
      <div className="max-w-6xl mx-auto w-full px-6">
        {label && (
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-foreground animate-pulse-dot" />
            <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-muted-foreground">
              {label}
            </span>
          </div>
        )}
        <div className="reveal label-industrial mb-5" data-delay="50">{eyebrow}</div>
        <h1 className="reveal font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-foreground max-w-3xl" data-delay="100">
          {title}
        </h1>
        {subtitle && (
          <p className="reveal mt-6 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed" data-delay="200">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
