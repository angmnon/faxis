"use client";

import * as React from "react";

/**
 * Animated "telemetry strip" — simulated live factory metrics scrolling.
 * Acts as a dynamic, industrial-looking data band between sections.
 */
const METRICS = [
  { code: "FXP-01", label: "3D-PRINT FARM", cell: "CELL-A07", status: "RUN", load: 92 },
  { code: "FXP-02", label: "CNC 3-AXIS", cell: "CELL-C21", status: "RUN", load: 87 },
  { code: "FXP-03", label: "LASER CUT", cell: "CELL-S14", status: "RUN", load: 95 },
  { code: "FXP-04", label: "INJECTION", cell: "CELL-I03", status: "RUN", load: 78 },
  { code: "FXP-02", label: "CNC 4-AXIS", cell: "CELL-C34", status: "RUN", load: 81 },
  { code: "FXP-01", label: "SLA BATCH", cell: "CELL-A02", status: "QUEUE", load: 0 },
  { code: "FXP-03", label: "BEND CELL", cell: "CELL-B11", status: "RUN", load: 69 },
  { code: "FXP-02", label: "ROBOT LOAD", cell: "CELL-R08", status: "RUN", load: 99 },
  { code: "FXP-04", label: "VISION QC", cell: "CELL-Q01", status: "RUN", load: 88 },
  { code: "FXP-01", label: "SLS FARM", cell: "CELL-A15", status: "RUN", load: 94 },
  { code: "FXP-03", label: "WELD CELL", cell: "CELL-W05", status: "RUN", load: 73 },
  { code: "FXP-02", label: "5-AX ASST", cell: "CELL-C52", status: "ASSIST", load: 45 },
];

function StatusDot({ status }: { status: string }) {
  const color = status === "RUN" ? "#30D878" : status === "QUEUE" ? "#FF9F0A" : "#00E5FF";
  return (
    <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: color }} />
      <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: color }} />
    </span>
  );
}

export function TelemetryStrip() {
  const items = [...METRICS, ...METRICS];
  return (
    <div className="relative py-6 border-y border-[rgba(138,148,166,0.1)] bg-[#05080D] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#05070A] via-transparent to-[#05070A] z-10 pointer-events-none" />
      <div className="flex animate-marquee gap-4 whitespace-nowrap w-max">
        {items.map((m, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-4 py-2 rounded-md border border-[rgba(138,148,166,0.12)] bg-[rgba(15,20,28,0.6)] font-mono text-[11px]"
          >
            <StatusDot status={m.status} />
            <span className="text-[#00E5FF] tracking-wider">{m.code}</span>
            <span className="text-[#8A94A6]">{m.label}</span>
            <span className="text-[#5A6474]">/</span>
            <span className="text-[#B8C2D1]">{m.cell}</span>
            <span className="text-[#5A6474]">/</span>
            <span
              className="tracking-wider"
              style={{ color: m.status === "RUN" ? "#30D878" : m.status === "QUEUE" ? "#FF9F0A" : "#00E5FF" }}
            >
              {m.status}
            </span>
            {m.load > 0 && (
              <>
                <span className="text-[#5A6474]">/</span>
                <span className="text-[#B8C2D1]">LOAD {m.load}%</span>
                <span className="w-10 h-1 bg-[rgba(138,148,166,0.15)] rounded-full overflow-hidden">
                  <span
                    className="block h-full rounded-full"
                    style={{
                      width: `${m.load}%`,
                      background: m.load > 90 ? "linear-gradient(90deg,#FF9F0A,#FF5E3A)" : "linear-gradient(90deg,#00E5FF,#30D878)",
                    }}
                  />
                </span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
