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
    <section id="platform" className="relative py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mb-14 lg:mb-20">
          <div className="reveal label-industrial mb-5">01 — The Digital Thread</div>
          <h2 className="reveal font-display text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight text-foreground mb-6" data-delay="100">
            One unified loop. From drawing to delivery.
          </h2>
          <p className="reveal text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl" data-delay="200">
            FAXIS.AI does not sell a single tool or a single machine. We deliver a fully
            autonomous production pipeline — a single digital thread that carries every order
            from upload to shipment, with humans only intervening on exceptional anomalies.
          </p>
        </div>

        {/* Pipeline grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PIPELINE_STEPS.map((step, i) => (
            <div
              key={step.label}
              className="reveal card-neutral rounded-xl p-6 group"
              data-delay={`${i * 60}`}
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-10 h-10 rounded-lg border border-border bg-muted flex items-center justify-center">
                  <step.icon size={18} className="text-foreground" strokeWidth={1.7} />
                </div>
                <span className="font-mono text-[11px] text-muted-foreground tracking-widest">
                  {step.label}
                </span>
              </div>
              <h3 className="font-display text-base font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
              {i < PIPELINE_STEPS.length - 1 && (
                <div className="hidden lg:flex mt-5 justify-end">
                  <ArrowRight size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
