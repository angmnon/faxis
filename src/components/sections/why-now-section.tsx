"use client";

import * as React from "react";
import { Users, FileSearch, PenLine, MapPin, Hammer, Rocket, Globe, TrendingUp } from "lucide-react";

const PROCESS_STEPS = [
  { num: "01", weeks: "1–2 weeks", icon: Users, title: "Initial Discussion", desc: "Mutual introductions, assess intent, align on target region and preferred model." },
  { num: "02", weeks: "2–4 weeks", icon: FileSearch, title: "Mutual Due Diligence", desc: "FAXIS.AI evaluates partner credentials; partner audits our technology and terms." },
  { num: "03", weeks: "2–3 weeks", icon: PenLine, title: "Agreement Signed", desc: "Define partnership model, revenue framework, and regional scope. Execute contract." },
  { num: "04", weeks: "4–8 weeks", icon: MapPin, title: "Site Selection & Planning", desc: "Joint site selection; FAXIS.AI leads factory design & equipment specification." },
  { num: "05", weeks: "8–16 weeks", icon: Hammer, title: "Factory Build & Deploy", desc: "Equipment installation, unmanned system deployment and tuning; partner warms up local pipeline." },
  { num: "06", weeks: "4–6 weeks", icon: Rocket, title: "Trial Run & Go-Live", desc: "Trial production validates quality and throughput; first orders delivered; factory opens for business." },
];

const MARKET_STATS = [
  { value: "$1.0–1.3T", label: "Global CNC / Machining TAM", tint: "cyan" },
  { value: "$3.2–3.5T", label: "Global Injection Molding TAM", tint: "violet" },
  { value: "~$230B", label: "Global Sheet Metal TAM", tint: "amber" },
  { value: "$29–38B", label: "Global 3D Printing TAM", tint: "mint" },
];

export function WhyNowSection() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-grid-fine opacity-[0.06]" />
      <div className="absolute -top-20 left-1/4 w-[500px] h-[500px] bg-[#0088FF]/[0.05] blur-[140px] rounded-full" />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16 lg:mb-20">
          <div className="lg:col-span-7">
            <div className="reveal label-industrial mb-5">{"//"} Why Now</div>
            <h2 className="reveal font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-[#E6ECF5] mb-6" data-delay="100">
              The window for
              <br />
              <span className="text-gradient-cyan-soft">lights-out manufacturing is open.</span>
            </h2>
            <p className="reveal text-[#8A94A6] text-base md:text-lg leading-relaxed max-w-2xl" data-delay="200">
              Three structural forces — chronic skilled-labor shortage, relentlessly rising
              labor costs, and the re-localization of global supply chains — have pushed
              manufacturers to evaluate unmanned production not as a futuristic concept but
              as an operational necessity.
            </p>
          </div>
        </div>

        {/* Market stats */}
        <div className="reveal grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16 lg:mb-24" data-delay="150">
          {MARKET_STATS.map((s, i) => (
            <div
              key={s.label}
              className="card-border-glow rounded-xl p-6 relative overflow-hidden"
            >
              <div className="chamfer-top absolute inset-0 rounded-xl pointer-events-none" />
              <div className="relative">
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-display text-2xl lg:text-3xl font-semibold text-[#E6ECF5]">{s.value}</span>
                </div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-[#8A94A6] leading-snug">
                  {s.label}
                </p>
                <div className={`mt-4 h-1 rounded-full bg-gradient-to-r ${
                  s.tint === "cyan" ? "from-[#00E5FF] to-[#0088FF]" :
                  s.tint === "violet" ? "from-[#7B61FF] to-[#00E5FF]" :
                  s.tint === "amber" ? "from-[#FF9F0A] to-[#FF5E3A]" :
                  "from-[#30D878] to-[#00E5FF]"
                } opacity-60`} />
              </div>
            </div>
          ))}
        </div>

        {/* Three drivers */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6 mb-24">
          {[
            {
              title: "Structural labor shortage",
              desc: "Aging workforces in developed markets and a shrinking pipeline of skilled machinists, mold technicians, and welders make labor-replacing automation non-negotiable.",
            },
            {
              title: "Cost curves have tipped",
              desc: "Robotics, vision systems, and compute costs have fallen to the point where lights-out lines deliver ROI within commercially viable payback windows.",
            },
            {
              title: "AI has crossed the threshold",
              desc: "Multi-modal models now do in minutes what senior process engineers used to do in days — quoting, CAM programming, quality inspection — at global scale.",
            },
          ].map((d, i) => (
            <div key={d.title} className="reveal relative" data-delay={`${i * 100}`}>
              <div className="card-border-glow rounded-lg p-7 h-full">
                <div className="chamfer-top absolute inset-0 rounded-lg pointer-events-none" />
                <div className="font-mono text-[10px] tracking-widest text-[#00E5FF]/80 mb-3">
                  DRIVER 0{i + 1}
                </div>
                <h4 className="font-display text-lg font-semibold text-[#E6ECF5] mb-3">{d.title}</h4>
                <p className="text-[13px] text-[#8A94A6] leading-relaxed">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Process timeline */}
        <div>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <div className="reveal label-industrial mb-4">{"//"} Partnership Process</div>
              <h3 className="reveal font-display text-3xl md:text-4xl font-semibold text-[#E6ECF5]" data-delay="100">
                From first contact to factory go-live
              </h3>
            </div>
            <div className="reveal flex items-center gap-2 text-sm text-[#8A94A6]" data-delay="200">
              <Globe size={15} className="text-[#00E5FF]" />
              <span>Standard timeline: ~5–8 months</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROCESS_STEPS.map((s, i) => (
              <div
                key={s.num}
                className="reveal card-border-glow rounded-lg p-6 relative"
                data-delay={`${i * 60}`}
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-2xl font-semibold text-[#00E5FF]/40">{s.num}</span>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[#8A94A6]">
                    <TrendingUp size={10} className="text-[#FF9F0A]" />
                    {s.weeks}
                  </span>
                </div>
                <s.icon size={20} className="text-[#00E5FF] mb-3" strokeWidth={1.6} />
                <h4 className="font-display text-[15px] font-semibold text-[#E6ECF5] mb-1.5">{s.title}</h4>
                <p className="text-[12.5px] text-[#8A94A6] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
