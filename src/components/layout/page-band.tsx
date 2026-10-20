import * as React from "react";

interface PageBandProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  label?: string;
}

/** Full-bleed dark gradient header band for inner pages (replaces plain PageHeader). */
export function PageBand({ eyebrow, title, subtitle, label }: PageBandProps) {
  return (
    <section className="relative overflow-hidden pt-40 pb-20 bg-[#0b0b0c]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 20% 0%, rgba(128,128,128,0.10), transparent 60%)",
        }}
      />
      <div className="relative max-w-6xl mx-auto w-full px-6">
        {label && (
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-foreground animate-pulse-dot" />
            <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-muted-foreground">
              {label}
            </span>
          </div>
        )}
        <div className="reveal label-industrial mb-5">{eyebrow}</div>
        <h1 className="reveal display-section text-foreground max-w-3xl" data-delay="100">
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
