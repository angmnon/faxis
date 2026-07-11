"use client";

import * as React from "react";
import {
  Upload, ScanSearch, FileSpreadsheet, CalendarClock, Cog, Bot, Eye, Package,
  ArrowRight,
} from "lucide-react";

const PIPELINE_STEPS = [
  { icon: Upload, label: "01", title: "Drawing Upload", desc: "Customer submits CAD files & requirements via API or portal." },
  { icon: ScanSearch, label: "02", title: "AI Feature Recognition", desc: "Multi-modal AI parses geometry, identifies features, runs DFM analysis." },
  { icon: FileSpreadsheet, label: "03", title: "Autonomous Quoting", desc: "Minute-precise pricing generated without a single process engineer." },
  { icon: CalendarClock, label: "04", title: "AI Scheduling (APS)", desc: "Constraint-based scheduler dynamically allocates orders across cells." },
  { icon: Cog, label: "05", title: "AI CAM Generation", desc: "Toolpaths, parameters & G-code synthesized from geometric intent." },
  { icon: Bot, label: "06", title: "Lights-Out Execution", desc: "Robotic loading, autonomous machining, zero operators on the floor." },
  { icon: Eye, label: "07", title: "AI Visual QC", desc: "Computer vision inspects every part; anomalies flagged at line speed." },
  { icon: Package, label: "08", title: "Auto-Pack & Logistics", desc: "Packaging, labeling and handoff to carrier systems — fully automated." },
];

export function PlatformSection() {
  return (
    <section id="platform" className="relative py-28 lg:py-36">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-fine opacity-[0.15]" />
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00E5FF]/[0.04] blur-[120px] rounded-full" />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <div className="reveal label-industrial mb-5">{"//"} 01 — The Digital Thread</div>
          <h2 className="reveal font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-[#E6ECF5] mb-6" data-delay="100">
            One unified loop.
            <br />
            <span className="text-gradient-cyan-soft">From drawing to delivery.</span>
          </h2>
          <p className="reveal text-[#8A94A6] text-base md:text-lg leading-relaxed max-w-2xl" data-delay="200">
            FAXIS.AI does not sell a single tool or a single machine. We deliver a fully
            autonomous production pipeline — a single digital thread that carries every order
            from upload to shipment, with humans only intervening on exceptional anomalies.
          </p>
        </div>

        {/* Pipeline visualization */}
        <div className="relative">
          {/* Horizontal connector line behind */}
          <div className="hidden lg:block absolute top-[72px] left-12 right-12 h-px">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
            {PIPELINE_STEPS.map((step, i) => (
              <div
                key={step.label}
                className="reveal card-border-glow rounded-lg p-6 relative group"
                data-delay={`${i * 80}`}
              >
                <div className="chamfer-top absolute inset-0 rounded-lg pointer-events-none" />
                {/* Step number */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-md bg-[rgba(0,229,255,0.08)] border border-[rgba(0,229,255,0.25)] flex items-center justify-center group-hover:border-[#00E5FF]/60 transition-colors">
                    <step.icon size={18} className="text-[#00E5FF]" strokeWidth={1.8} />
                  </div>
                  <span className="font-mono text-[11px] text-[#8A94A6] tracking-widest">
                    STEP {step.label}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-[#E6ECF5] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#8A94A6] leading-relaxed">
                  {step.desc}
                </p>

                {/* Connection arrow to next */}
                {i < PIPELINE_STEPS.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-[60px] z-10 w-6 h-6 items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-[#0F141C] border border-[rgba(0,229,255,0.25)] flex items-center justify-center">
                      <ArrowRight size={10} className="text-[#00E5FF]" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
