"use client";

import * as React from "react";
import { Brain, Network, Boxes, LineChart, Code2, ShieldCheck, Gauge, Workflow } from "lucide-react";

const MOATS = [
  {
    icon: Network,
    title: "End-to-End Digital Thread",
    desc: "One unified data backbone connects quoting, scheduling, CAM, execution, and QC — no disconnected silos, no manual handoffs.",
  },
  {
    icon: Brain,
    title: "Multi-Modal AI Core",
    desc: "Vision models parse drawings; foundation models generate CAM; constraint solvers optimize production. AI is not an add-on — it is the system.",
  },
  {
    icon: Workflow,
    title: "Closed-Loop Self-Improvement",
    desc: "Every cut, every defect, every cycle feeds back into model training. Factories get better every shift they run.",
  },
  {
    icon: Boxes,
    title: "Standardized Deployment Kit",
    desc: "Modular, replicable factory blueprints. From JV signing to first good part in 5–8 months, regardless of region.",
  },
  {
    icon: Gauge,
    title: "Tiered Automation Strategy",
    desc: "Standard scenarios fully unmanned; complex scenarios (5-axis, mill-turn) AI-assisted — robust delivery where competitors overpromise.",
  },
  {
    icon: Code2,
    title: "Full Software Stack Ownership",
    desc: "We build the quoting engine, APS, CAM system, MES, and QC stack in-house — not a patchwork of third-party tools.",
  },
  {
    icon: ShieldCheck,
    title: "Anomaly Self-Healing",
    desc: "Predictive maintenance, tool-breakage detection, and autonomous recovery keep lines running through 7×24 lights-out shifts.",
  },
  {
    icon: LineChart,
    title: "Real-Time Operational Data",
    desc: "Every cell streams telemetry. Operators, partners, and clients see the same single source of truth from day one.",
  },
];

const COMPARISON_ROWS = [
  { metric: "Delivery scope", faxis: "End-to-end lights-out factory", traditional: "Equipment / line integration", single: "Single-machine automation" },
  { metric: "Core technology", faxis: "AI-driven digital thread", traditional: "Mechatronic integration", single: "Single-device control" },
  { metric: "Data loop", faxis: "Closed-loop self-optimization", traditional: "Siloed by station", single: "No cross-stage data" },
  { metric: "Replication", faxis: "Standardized, fast global rollout", traditional: "Custom per project", single: "Per-machine, line re-designed" },
  { metric: "Complex processes", faxis: "Tiered: full auto + AI assist", traditional: "Manual-dependent", single: "Single operation only" },
];

export function TechnologySection() {
  return (
    <section id="technology" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 mb-14 lg:mb-20">
          <div className="lg:col-span-7">
            <div className="reveal label-industrial mb-5">03 — The Moat</div>
            <h2 className="reveal font-display text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight text-foreground" data-delay="100">
              Not a tool vendor. The operating system for manufacturing.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-8">
            <p className="reveal text-muted-foreground text-base leading-relaxed" data-delay="200">
              Traditional integrators sell equipment. Automation vendors sell single machines.
              FAXIS.AI delivers the complete autonomous factory — software, hardware integration,
              and operating capability — and keeps it running, learning, and improving.
            </p>
          </div>
        </div>

        {/* Moats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {MOATS.map((m, i) => (
            <div
              key={m.title}
              className="reveal card-neutral rounded-xl p-6"
              data-delay={`${i * 60}`}
            >
              <m.icon size={20} className="text-foreground mb-4" strokeWidth={1.7} />
              <h4 className="font-display text-[15px] font-semibold text-foreground mb-2 leading-tight">
                {m.title}
              </h4>
              <p className="text-[13px] text-muted-foreground leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="reveal" data-delay="200">
          <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-6">
            How FAXIS.AI compares
          </h3>
          <div className="card-neutral rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border bg-muted/40">
                    <th className="py-4 px-6 text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-medium">Dimension</th>
                    <th className="py-4 px-6 text-[11px] font-mono uppercase tracking-wider text-foreground font-semibold">FAXIS.AI</th>
                    <th className="py-4 px-6 text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-medium">Traditional integrators</th>
                    <th className="py-4 px-6 text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-medium">Single-point automation</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr key={row.metric} className={i !== COMPARISON_ROWS.length - 1 ? "border-b border-border" : ""}>
                      <td className="py-4 px-6 text-[13px] text-muted-foreground font-mono">{row.metric}</td>
                      <td className="py-4 px-6 text-[14px] text-foreground font-medium">{row.faxis}</td>
                      <td className="py-4 px-6 text-[14px] text-muted-foreground">{row.traditional}</td>
                      <td className="py-4 px-6 text-[14px] text-muted-foreground">{row.single}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
