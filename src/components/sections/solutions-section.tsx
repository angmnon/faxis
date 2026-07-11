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
    accent: "from-[#00E5FF] to-[#0088FF]",
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
    accent: "from-[#7B61FF] to-[#00E5FF]",
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
    accent: "from-[#FF9F0A] to-[#FF5E3A]",
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
    accent: "from-[#30D878] to-[#00E5FF]",
  },
];

export function SolutionsSection() {
  return (
    <section id="solutions" className="relative py-28 lg:py-36 bg-[#060A10]">
      <div className="absolute inset-0 bg-grid-factory opacity-[0.06]" />
      <div className="absolute top-0 left-0 right-0 h-px divider-glow" />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16 lg:mb-20">
          <div className="lg:col-span-7">
            <div className="reveal label-industrial mb-5">{"//"} 02 — Product Matrix</div>
            <h2 className="reveal font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-[#E6ECF5]" data-delay="100">
              Four unmanned factory lines.
              <br />
              <span className="text-gradient-cyan-soft">One operating system.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-8">
            <p className="reveal text-[#8A94A6] text-base leading-relaxed" data-delay="200">
              FAXIS.AI has already built and validated AI-powered unmanned production across
              four of the largest manufacturing process families — a $1T+ combined market.
              Each line is a complete, deployable factory product; together they form the
              world&apos;s broadest autonomous manufacturing platform.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {SOLUTIONS.map((s, i) => (
            <div
              key={s.id}
              className="reveal card-border-glow rounded-xl p-7 lg:p-9 relative overflow-hidden group"
              data-delay={`${i * 100}`}
            >
              <div className="chamfer-top absolute inset-0 rounded-xl pointer-events-none" />

              {/* Accent glow */}
              <div className={`absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br ${s.accent} opacity-[0.08] blur-[80px] group-hover:opacity-[0.16] transition-opacity`} />

              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${s.accent} bg-opacity-10 border border-white/10 flex items-center justify-center relative`}
                    style={{ background: `linear-gradient(135deg, rgba(0,229,255,0.12), rgba(123,97,255,0.06))`, borderColor: "rgba(138,148,166,0.2)" }}
                  >
                    <s.icon size={24} className="text-[#00E5FF]" strokeWidth={1.6} />
                  </div>
                  <span className="font-mono text-[10px] text-[#8A94A6] tracking-widest">
                    {s.code}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[rgba(48,216,120,0.1)] border border-[rgba(48,216,120,0.25)] text-[10px] font-mono tracking-wider text-[#30D878] uppercase">
                    <span className="w-1 h-1 rounded-full bg-[#30D878] animate-pulse" />
                    {s.maturity}
                  </span>
                </div>

                <h3 className="font-display text-xl lg:text-2xl font-semibold text-[#E6ECF5] mb-1.5 leading-tight">
                  {s.title}
                </h3>
                <p className="text-xs font-mono text-[#00E5FF]/80 tracking-wider uppercase mb-4">
                  {s.subtitle}
                </p>
                <p className="text-sm text-[#8A94A6] leading-relaxed mb-6">
                  {s.desc}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 py-5 border-y border-[rgba(138,148,166,0.12)] mb-5">
                  {s.stats.map((st) => (
                    <div key={st.label}>
                      <div className="font-display text-xl font-semibold text-[#E6ECF5]">{st.value}</div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#8A94A6] mt-1">{st.label}</div>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {s.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-[13px] text-[#B8C2D1]">
                      <Check size={14} className="text-[#00E5FF] mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                      {h}
                    </li>
                  ))}
                </ul>

                <Link href={`/solutions#${s.id}`} className="inline-flex items-center gap-1.5 text-sm font-medium text-[#00E5FF] group/link">
                  <span>Explore {s.title.split(" ")[2]} Capabilities</span>
                  <ArrowUpRight size={14} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" strokeWidth={2.2} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
