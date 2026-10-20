"use client";

import * as React from "react";
import { Box, Cog, Layers, Syringe, ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";

const SOLUTIONS = [
  {
    id: "3d-printing",
    icon: Box,
    code: "FXP-01",
    title: "Autonomous 3D Printing Factory",
    subtitle: "SLA · SLS · MJP · FDM · DLP",
    desc: "Our most mature product line. AI-driven part orientation, auto-support generation, multi-objective build optimization (time/material/surface quality), and AI vision QC — a single click sends a file to the printer farm.",
    maturity: "Fully Lights-Out",
    stats: [
      { label: "Process Coverage", value: "5+" },
      { label: "Auto Nesting", value: "99%" },
      { label: "Lights-Out Readiness", value: "L5" },
    ],
    highlights: [
      "AI auto-orientation & support generation",
      "Multi-printer farm scheduling",
      "In-situ visual anomaly detection",
      "Zero-operator night shifts",
    ],
  },
  {
    id: "cnc",
    icon: Cog,
    code: "FXP-02",
    title: "Autonomous CNC Machining Line",
    subtitle: "3-Axis · 4-Axis · 5-Axis Assist",
    desc: "End-to-end unmanned production for standard 3/4-axis cells: AI quoting, AI CAM auto-programming, robotic loading/unloading, in-machine probing, AI visual QC — all orchestrated by our digital thread.",
    maturity: "Standard Scenarios Full Auto",
    stats: [
      { label: "Standard Cells", value: "24/7" },
      { label: "CAM Time Cut", value: "-90%" },
      { label: "5-Axis Mode", value: "AI Assist" },
    ],
    highlights: [
      "AI CAM auto-programming for 3/4-axis",
      "Robotic workpiece handling",
      "Adaptive 5-axis assist for experts",
      "Tiered automation strategy (robust delivery)",
    ],
  },
  {
    id: "sheet-metal",
    icon: Layers,
    code: "FXP-03",
    title: "Autonomous Sheet Metal Factory",
    subtitle: "Laser · Plasma · Bending · Welding",
    desc: "AI nesting & layout optimization, automated bend sequencing, robotic welding path generation, and visual weld QC — the complete sheet metal workflow, engineered for zero-operator cells.",
    maturity: "Production Validated",
    stats: [
      { label: "Material Yield", value: "+18%" },
      { label: "Process Steps", value: "4" },
      { label: "Robotic Welding", value: "Auto" },
    ],
    highlights: [
      "AI automated nesting & sheet utilization",
      "Bend sequence auto-planning",
      "Robotic welding path generation",
      "Vision-based weld & cosmetic QC",
    ],
  },
  {
    id: "injection",
    icon: Syringe,
    code: "FXP-04",
    title: "Autonomous Injection Molding",
    subtitle: "Mold Planning · Molding · Post-Process",
    desc: "From mold flow simulation to production: AI generates optimal process parameters (temperature, pressure, hold curves), robotic part extraction, post-process handling, and on-line defect sorting.",
    maturity: "Production Validated",
    stats: [
      { label: "Cycle Optimization", value: "Auto" },
      { label: "Defect Sorting", value: "AI" },
      { label: "Mold Assist", value: "DFM" },
    ],
    highlights: [
      "AI process parameter auto-generation",
      "Robotic part extraction & degating",
      "On-line visual defect sorting",
      "Closed-loop parameter tuning",
    ],
  },
];

export function SolutionsSection() {
  return (
    <section id="solutions" className="relative py-24 lg:py-32 bg-muted/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 mb-14 lg:mb-20">
          <div className="lg:col-span-7">
            <div className="reveal label-industrial mb-5">02 — Product Matrix</div>
            <h2 className="reveal font-display text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight text-foreground" data-delay="100">
              Four unmanned factory lines. One operating system.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-8">
            <p className="reveal text-muted-foreground text-base leading-relaxed" data-delay="200">
              FAXIS.AI has already built and validated AI-powered unmanned production across
              four of the largest manufacturing process families — a $1T+ combined market.
              Each line is a complete, deployable factory product; together they form the
              world&apos;s broadest autonomous manufacturing platform.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {SOLUTIONS.map((s, i) => (
            <div
              key={s.id}
              className="reveal card-neutral rounded-2xl p-7 lg:p-8 relative flex flex-col"
              data-delay={`${i * 80}`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl border border-border bg-muted flex items-center justify-center">
                  <s.icon size={22} className="text-foreground" strokeWidth={1.6} />
                </div>
                <span className="font-mono text-[10px] text-muted-foreground tracking-widest">
                  {s.code}
                </span>
              </div>

              <span className="inline-flex w-fit items-center gap-1.5 px-2.5 py-1 rounded-full border border-border text-[10px] font-mono tracking-wider text-muted-foreground uppercase mb-4">
                <span className="w-1 h-1 rounded-full bg-foreground" />
                {s.maturity}
              </span>

              <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-1.5 leading-tight">
                {s.title}
              </h3>
              <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-4">
                {s.subtitle}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {s.desc}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 py-5 border-y border-border mb-5">
                {s.stats.map((st) => (
                  <div key={st.label}>
                    <div className="font-display text-xl font-semibold text-foreground">{st.value}</div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mt-1">{st.label}</div>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <ul className="space-y-2 mb-6 flex-grow">
                {s.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-[13px] text-foreground/80">
                    <Check size={14} className="text-foreground mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                    {h}
                  </li>
                ))}
              </ul>

              <Link href={`/solutions#${s.id}`} className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground group/link">
                <span>Explore capabilities</span>
                <ArrowUpRight size={14} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" strokeWidth={2.2} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
