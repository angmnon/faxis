"use client";

import * as React from "react";

/**
 * Lightweight decorative network globe: SVG dot sphere + arcs, slow rotation.
 * No 3D library, no external assets.
 */
const DOTS: Array<[number, number]> = [
  [30, 28], [52, 20], [70, 32], [22, 46], [44, 40], [62, 48],
  [80, 44], [36, 58], [58, 62], [76, 60], [18, 66], [48, 74],
  [68, 78], [32, 82], [60, 30], [84, 24], [12, 36], [40, 16],
];

const ARCS: Array<[[number, number], [number, number]]> = [
  [[30, 28], [62, 48]],
  [[52, 20], [80, 44]],
  [[22, 46], [58, 62]],
  [[70, 32], [36, 58]],
  [[18, 66], [68, 78]],
];

export function GlobeDots() {
  return (
    <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] mx-auto">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Sphere outline + graticule */}
        <circle cx="100" cy="100" r="82" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.6" />
        {[30, 55, 80, 105, 130, 150].map((y) => (
          <ellipse key={y} cx="100" cy="100" rx="82" ry={Math.abs(100 - y) * 0.9} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" />
        ))}
        {[-50, -25, 0, 25, 50].map((x) => (
          <ellipse key={x} cx="100" cy="100" rx={Math.abs(100 - (100 + x)) * 0.9 || 10} ry="82" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" />
        ))}
        {/* Arcs */}
        {ARCS.map(([a, b], i) => (
          <path
            key={i}
            d={`M ${a[0] * 1.6} ${a[1] * 1.6} Q 100 60 ${b[0] * 1.6} ${b[1] * 1.6}`}
            fill="none"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="0.7"
            strokeDasharray="3 4"
          />
        ))}
        {/* Dots */}
        {DOTS.map(([x, y], i) => (
          <circle
            key={i}
            cx={x * 1.6}
            cy={y * 1.6}
            r="2"
            fill="#fafafa"
            className="network-dot"
            style={{ animationDelay: `${(i % 6) * 0.5}s` }}
          />
        ))}
      </svg>
    </div>
  );
}
