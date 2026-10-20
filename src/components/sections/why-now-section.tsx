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
  { value: "$1.0–1.3T", label: "Global CNC / Machining TAM" },
  { value: "$3.2–3.5T", label: "Global Injection Molding TAM" },
  { value: "~$230B", label: "Global Sheet Metal TAM" },
  { value: "$29–38B", label: "Global 3D Printing TAM" },
];

export function WhyNowSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-muted/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 mb-14 lg:mb-20">
          <div className="lg:col-span-7">
            <div className="reveal label-industrial mb-5">Why Now</div>
            <h2 className="reveal font-display text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight text-foreground mb-6" data-delay="100">
              The window for lights-out manufacturing is open.
            </h2>
            <p className="reveal text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl" data-delay="200">
              Three structural forces — chronic skilled-labor shortage, relentlessly rising
              labor costs, and the re-localization of global supply chains — have pushed
              manufacturers to evaluate unmanned production not as a futuristic concept but
              as an operational necessity.
            </p>
          </div>
        </div>

        {/* Market stats */}
        <div className="reveal grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 lg:mb-24" data-delay="150">
          {MARKET_STATS.map((s) => (
            <div key={s.label} className="card-neutral rounded-xl p-6">
              <div className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-2">{s.value}</div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground leading-snug">
                {s.label}
              </p>
              <div className="mt-4 h-1 rounded-full bg-foreground/15 overflow-hidden">
                <div className="h-full w-2/3 rounded-full bg-foreground/60" />
              </div>
            </div>
          ))}
        </div>

        {/* Three drivers */}
        <div className="grid md:grid-cols-3 gap-4 mb-24">
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
            <div key={d.title} className="reveal card-neutral rounded-xl p-7 h-full" data-delay={`${i * 80}`}>
              <div className="font-mono text-[10px] tracking-widest text-muted-foreground mb-3 uppercase">
                Driver 0{i + 1}
              </div>
              <h4 className="font-display text-lg font-semibold text-foreground mb-3">{d.title}</h4>
              <p className="text-[13px] text-muted-foreground leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>

        {/* Process timeline */}
        <div>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <div className="reveal label-industrial mb-4">Partnership Process</div>
              <h3 className="reveal font-display text-3xl md:text-4xl font-semibold text-foreground tracking-tight" data-delay="100">
                From first contact to factory go-live
              </h3>
            </div>
            <div className="reveal flex items-center gap-2 text-sm text-muted-foreground" data-delay="200">
              <Globe size={15} />
              <span>Standard timeline: ~5–8 months</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROCESS_STEPS.map((s, i) => (
              <div
                key={s.num}
                className="reveal card-neutral rounded-xl p-6"
                data-delay={`${i * 60}`}
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-2xl font-semibold text-muted-foreground">{s.num}</span>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                    <TrendingUp size={10} />
                    {s.weeks}
                  </span>
                </div>
                <s.icon size={20} className="text-foreground mb-3" strokeWidth={1.7} />
                <h4 className="font-display text-[15px] font-semibold text-foreground mb-1.5">{s.title}</h4>
                <p className="text-[12.5px] text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
