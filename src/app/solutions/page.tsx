"use client";

import * as React from "react";
import { PageHeader } from "@/components/layout/page-header";
import { Box, Cog, Layers, Syringe, Check, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const SOLUTIONS = [
  {
    id: "3d-printing",
    icon: Box,
    code: "FXP-01",
    title: "Autonomous 3D Printing Factory",
    subtitle: "SLA · SLS · MJP · FDM · DLP",
    longDesc: "Our 3D printing solution is the most mature product in the FAXIS.AI lineup — a fully autonomous printing farm where parts move from upload to packing without human intervention. AI handles orientation, support generation, nesting, scheduling, and vision-based quality inspection across SLA, SLS, MJP, FDM, and DLP processes.",
    capabilities: [
      "AI-driven part orientation minimizing support volume and build time",
      "Automatic support structure generation across all supported technologies",
      "Multi-objective build packing optimizing time, material cost, and surface quality",
      "Cross-printer farm scheduling with priority and material constraints",
      "In-situ camera-based anomaly detection for print failures",
      "Post-process routing (curing, de-powdering, support removal) handled robotically",
      "AI visual QC on every finished part with per-part traceability",
    ],
    kpis: [
      { label: "Printer uptime", value: "95%+" },
      { label: "Night-shift operators", value: "0" },
      { label: "Quoting turnaround", value: "< 5 min" },
      { label: "Supported techs", value: "5" },
    ],
  },
  {
    id: "cnc",
    icon: Cog,
    code: "FXP-02",
    title: "Autonomous CNC Machining Line",
    subtitle: "3-Axis · 4-Axis · 5-Axis (AI Assist)",
    longDesc: "Our CNC solution delivers end-to-end unmanned production for standard 3-axis and 4-axis machining cells. AI quoting, AI CAM auto-programming, robotic loading and unloading, in-machine probing, and AI visual QC all run on the FAXIS.AI digital thread. For high-complexity 5-axis and mill-turn work we provide AI-assisted programming — supercharging senior engineers rather than replacing them.",
    capabilities: [
      "AI feature recognition from STEP/IGES files with DFM feedback",
      "Minute-precise autonomous quoting for standard geometries",
      "AI-generated CAM toolpaths for 3/4-axis standard parts",
      "Robotic workpiece loading/unloading via integrated cell controller",
      "In-machine probing and tool-wear monitoring with automatic offsets",
      "AI visual QC on finished parts (dimensional + cosmetic)",
      "5-axis and mill-turn AI-assist mode for expert programmers",
    ],
    kpis: [
      { label: "CAM time cut", value: "-90%" },
      { label: "Continuous operation", value: "7×24" },
      { label: "Standard cell lights-out", value: "L5" },
      { label: "Setup changeover", value: "Auto" },
    ],
  },
  {
    id: "sheet-metal",
    icon: Layers,
    code: "FXP-03",
    title: "Autonomous Sheet Metal Factory",
    subtitle: "Laser · Plasma · Bending · Welding",
    longDesc: "Our sheet metal line covers the full workflow: laser/plasma cutting, CNC bending, stamping, and robotic welding. AI optimizes nesting and sheet utilization, plans bend sequences, generates robotic welding paths, and uses vision to inspect weld quality and cosmetic finish — a complete autonomous cell for sheet metal fabrication.",
    capabilities: [
      "AI automatic nesting and sheet utilization optimization (material yield +18%)",
      "Cutting path optimization for laser/plasma with thermal-aware sequencing",
      "Automatic bend sequence planning with tool selection",
      "Robotic press-brake loading/unloading",
      "Robotic welding path generation with seam tracking",
      "AI vision-based weld inspection and cosmetic QC",
      "Auto-sorting of finished parts for downstream kitting",
    ],
    kpis: [
      { label: "Material yield", value: "+18%" },
      { label: "Bend planning", value: "Auto" },
      { label: "Weld inspection", value: "AI" },
      { label: "Process coverage", value: "4 steps" },
    ],
  },
  {
    id: "injection",
    icon: Syringe,
    code: "FXP-04",
    title: "Autonomous Injection Molding",
    subtitle: "Mold Assist · Molding · Post-Process",
    longDesc: "Our injection molding solution covers mold-making process planning plus the full autonomous production cycle. AI generates optimal process parameters (temperature profiles, pressure curves, hold times) from mold-flow analysis and historical data, robotic arms extract parts, post-process trimming/de-gating runs automatically, and on-line vision systems sort defects in real time.",
    capabilities: [
      "AI-driven mold design-for-manufacturing feedback",
      "Process parameter auto-generation (temp, pressure, hold, cooling)",
      "Closed-loop tuning based on shot-to-shot telemetry",
      "Robotic part extraction and conveyor hand-off",
      "Automatic sprue/de-gate trimming",
      "On-line vision defect detection and sorting",
      "Predictive maintenance for mold wear and machine health",
    ],
    kpis: [
      { label: "Parameter setup", value: "Auto" },
      { label: "Defect sorting", value: "Real-time" },
      { label: "Cycle optimization", value: "Closed-loop" },
      { label: "Post-process", value: "Robotic" },
    ],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        label="Solutions"
        eyebrow="// Product Matrix"
        title={<>Four autonomous factory lines. <span className="text-gradient-cyan-soft">One operating system.</span></>}
        subtitle="FAXIS.AI delivers complete lights-out factory products across 3D printing, CNC machining, sheet metal fabrication, and injection molding. Every line runs on the same AI digital thread."
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 space-y-24">
          {SOLUTIONS.map((s, i) => (
            <div key={s.id} id={s.id} className="grid lg:grid-cols-12 gap-10 items-start scroll-mt-28">
              <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="reveal">
                  <div className="aspect-[4/3] rounded-xl relative overflow-hidden border border-[rgba(138,148,166,0.15)] bg-[#080D15]">
                    {/* Abstract visualization */}
                    <div className="absolute inset-0 bg-grid-fine opacity-30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#00E5FF]/20 blur-[80px] rounded-full scale-150" />
                        <s.icon size={120} className="text-[#00E5FF]/80 relative z-10 animate-float-slow" strokeWidth={1} />
                      </div>
                    </div>
                    {/* HUD corners */}
                    <div className="absolute top-4 left-4 text-[10px] font-mono text-[#00E5FF]/70 tracking-widest">
                      {s.code}
                      <div className="mt-1 text-[#8A94A6]">{s.subtitle}</div>
                    </div>
                    <div className="absolute bottom-4 right-4 text-right">
                      <div className="flex items-center gap-1.5 justify-end text-[10px] font-mono text-[#30D878] tracking-widest">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#30D878] animate-pulse" />
                        ONLINE
                      </div>
                      <div className="text-[10px] font-mono text-[#5A6474] mt-1">LIGHTS-OUT</div>
                    </div>
                  </div>

                  {/* KPIs */}
                  <div className="grid grid-cols-4 gap-3 mt-4">
                    {s.kpis.map((k) => (
                      <div key={k.label} className="card-border-glow rounded-lg p-3 text-center relative">
                        <div className="chamfer-top absolute inset-0 rounded-lg pointer-events-none" />
                        <div className="font-display text-lg font-semibold text-[#00E5FF] relative">{k.value}</div>
                        <div className="text-[9px] font-mono uppercase tracking-wider text-[#8A94A6] mt-1 relative leading-tight">{k.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="reveal" data-delay="150">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-[10px] tracking-widest text-[#8A94A6]">{s.code}</span>
                    <span className="w-1 h-1 rounded-full bg-[#00E5FF]" />
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[rgba(48,216,120,0.1)] border border-[rgba(48,216,120,0.25)] text-[10px] font-mono tracking-wider text-[#30D878] uppercase">
                      <span className="w-1 h-1 rounded-full bg-[#30D878] animate-pulse" /> Production Validated
                    </span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#E6ECF5] leading-tight mb-2">
                    {s.title}
                  </h2>
                  <p className="text-xs font-mono text-[#00E5FF]/80 tracking-wider uppercase mb-5">
                    {s.subtitle}
                  </p>
                  <p className="text-[#8A94A6] text-base leading-relaxed mb-6">
                    {s.longDesc}
                  </p>

                  <h4 className="font-display text-sm font-semibold text-[#E6ECF5] mb-4 uppercase tracking-wider">
                    Core Capabilities
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2.5 mb-7">
                    {s.capabilities.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-[13px] text-[#B8C2D1]">
                        <Check size={14} className="text-[#00E5FF] mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                        {c}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3">
                    <Link href="/contact" className="btn-primary">
                      Discuss Deployment
                      <ArrowUpRight size={14} strokeWidth={2.5} />
                    </Link>
                    <Link href="/contact" className="btn-secondary">
                      Request Technical Brief
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
