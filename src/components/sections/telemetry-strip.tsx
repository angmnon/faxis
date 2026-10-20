"use client";

import * as React from "react";

/**
 * Simulated live factory metrics scrolling in a neutral data band.
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
  return (
    <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
      {status === "RUN" && (
        <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-foreground opacity-60" />
      )}
      <span
        className="relative inline-flex rounded-full h-1.5 w-1.5"
        style={{ background: status === "RUN" ? "currentColor" : "transparent", color: "inherit", border: status === "RUN" ? "none" : "1px solid var(--muted-foreground)" }}
      />
    </span>
  );
}

export function TelemetryStrip() {
  const items = [...METRICS, ...METRICS];
  return (
    <div className="relative py-5 border-y border-border bg-muted/30 overflow-hidden">
      <div className="flex animate-marquee gap-3 whitespace-nowrap w-max">
        {items.map((m, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-4 py-2 rounded-full border border-border bg-card font-mono text-[11px] text-muted-foreground"
          >
            <StatusDot status={m.status} />
            <span className="text-foreground tracking-wider">{m.code}</span>
            <span>{m.label}</span>
            <span className="opacity-50">/</span>
            <span>{m.cell}</span>
            <span className="opacity-50">/</span>
            <span className="uppercase">{m.status}</span>
            {m.load > 0 && (
              <>
                <span className="opacity-50">/</span>
                <span>LOAD {m.load}%</span>
                <span className="w-10 h-1 bg-foreground/15 rounded-full overflow-hidden">
                  <span
                    className="block h-full rounded-full bg-foreground/60"
                    style={{ width: `${m.load}%` }}
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
