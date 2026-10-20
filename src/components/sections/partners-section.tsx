"use client";

import * as React from "react";
import { BadgeCheck, Handshake, Building2, Globe2, Award, ArrowUpRight, Check, TrendingUp } from "lucide-react";
import Link from "next/link";

const MODELS = [
  {
    code: "Model 01",
    icon: Building2,
    title: "Regional Master Partner",
    tag: "Lightest entry",
    desc: "Ideal for first-time partners in new markets. FAXIS.AI builds & operates the factory; you lead regional business development and earn tiered commission on every order you bring in.",
    best: "New market entry, asset-light expansion",
    points: [
      "Lowest capital commitment",
      "Exclusive or priority regional rights",
      "Tiered commission structure",
      "Path to upgrade to JV / License",
    ],
  },
  {
    code: "Model 02",
    icon: Award,
    title: "Joint Venture Factory",
    tag: "Strategic tie-up",
    desc: "Co-invest with FAXIS.AI in a dedicated factory entity in your region. FAXIS.AI leads technology and operations; you lead business and local resourcing. Share profits proportional to contribution.",
    best: "Strategic investors, deep regional networks",
    points: [
      "Co-invested JV entity",
      "Shared profit distribution",
      "Co-branded market presence",
      "Long-term market exclusivity",
    ],
    featured: true,
  },
  {
    code: "Model 03",
    icon: Award,
    title: "License & Operate",
    tag: "Maximum autonomy",
    desc: "For partners with existing facilities and customer base. License the FAXIS.AI technology stack and operating playbook to transform your own factory into a lights-out facility.",
    best: "Established manufacturers, equipment owners",
    points: [
      "Full tech stack licensing",
      "Operational playbook transfer",
      "Remote ops support from FAXIS.AI",
      "Highest long-term revenue share",
    ],
  },
];

const PARTNER_TYPES = [
  "Local industrial equipment distributors & agents",
  "Manufacturing-focused investment firms",
  "Regional engineering & system integrators",
  "Manufacturing-domain serial entrepreneurs",
];

const ROADMAP = [
  { phase: "Phase 01", title: "Benchmark Market Validation", desc: "Sign 1–2 anchor partners; launch first lights-out factories; validate playbook.", regions: "Selected mature manufacturing markets" },
  { phase: "Phase 02", title: "Regional Network Expansion", desc: "Replicate proven playbook across adjacent markets in the same macro-region.", regions: "Intra-regional replication" },
  { phase: "Phase 03", title: "Global Network Rollout", desc: "Open partner recruitment globally — North America, Europe, SEA, Middle East.", regions: "Multi-continental coverage" },
];

export function PartnersSection() {
  return (
    <section id="partners" className="relative py-24 lg:py-36 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-14 lg:mb-20">
          <div className="reveal label-industrial mb-5">04 — Global Partner Network</div>
          <h2 className="reveal font-display text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight text-foreground mb-6" data-delay="100">
            A global network of lights-out factories.
          </h2>
          <p className="reveal text-muted-foreground text-base md:text-lg leading-relaxed" data-delay="200">
            FAXIS.AI supplies the AI technology and factory operating system. Our local partners
            bring market access, regional relationships, and operational know-how. Together, we
            deploy lights-out manufacturing faster and more capital-efficiently than any
            wholly-owned international expansion ever could.
          </p>
        </div>

        {/* Three models */}
        <div className="grid md:grid-cols-3 gap-5 mb-20">
          {MODELS.map((m, i) => (
            <div
              key={m.title}
              className={[
                "reveal card-neutral rounded-2xl p-7 lg:p-8 relative flex flex-col",
                m.featured ? "border-foreground/40 lg:scale-[1.02] lg:-my-1" : "",
              ].join(" ")}
              data-delay={`${i * 80}`}
            >
              {m.featured && (
                <div className="absolute top-5 right-5 px-2.5 py-1 rounded-full bg-foreground text-background text-[10px] font-mono uppercase tracking-wider">
                  Recommended
                </div>
              )}

              <div className="flex items-center gap-2 mb-5">
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground">{m.code}</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                  {m.tag}
                </span>
              </div>

              <div className="w-12 h-12 rounded-xl border border-border bg-muted flex items-center justify-center mb-5">
                <m.icon size={22} className="text-foreground" strokeWidth={1.6} />
              </div>

              <h3 className="font-display text-xl lg:text-[22px] font-semibold text-foreground mb-2 leading-tight">
                {m.title}
              </h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed mb-5">
                {m.desc}
              </p>

              <div className="mb-5 pb-5 border-b border-border">
                <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-2">Best Fit</div>
                <p className="text-[13px] text-foreground/80">{m.best}</p>
              </div>

              <ul className="space-y-2 mb-6 flex-grow">
                {m.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-[13px] text-foreground/80">
                    <Check size={13} className="mt-0.5 flex-shrink-0 text-foreground" strokeWidth={2.5} />
                    {p}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-foreground mt-auto pt-3"
              >
                Discuss this model
                <ArrowUpRight size={13} strokeWidth={2.2} />
              </Link>
            </div>
          ))}
        </div>

        {/* Who we're looking for + Roadmap */}
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="reveal card-neutral rounded-2xl p-8 lg:p-10" data-delay="100">
            <div className="flex items-center gap-3 mb-6">
              <Globe2 size={20} className="text-foreground" strokeWidth={1.6} />
              <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground">
                Ideal partner profiles
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              We look for partners with strong local manufacturing relationships, proven
              execution capability, and a long-term commitment to the lights-out transition.
              Specifically:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PARTNER_TYPES.map((t) => (
                <div key={t} className="flex items-start gap-2.5 p-3 rounded-lg border border-border bg-muted/40">
                  <BadgeCheck size={16} className="text-foreground mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span className="text-[13px] text-foreground/80 leading-snug">{t}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-border">
              <div>
                <div className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase mb-1">Time to launch</div>
                <div className="font-display text-2xl font-semibold text-foreground">5–8 <span className="text-base text-muted-foreground font-normal">months</span></div>
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase mb-1">Operating mode</div>
                <div className="font-display text-2xl font-semibold text-foreground">7×24</div>
              </div>
            </div>
          </div>

          <div className="reveal card-neutral rounded-2xl p-8 lg:p-10" data-delay="200">
            <div className="flex items-center gap-3 mb-6">
              <Globe2 size={20} className="text-foreground" strokeWidth={1.6} />
              <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground">
                Global rollout roadmap
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-7">
              We expand deliberately — prove the model, then replicate. Our phased approach
              ensures every market we enter benefits from a battle-tested playbook.
            </p>

            <div className="space-y-0 relative">
              <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border" />
              {ROADMAP.map((r) => (
                <div key={r.phase} className="relative pl-11 pb-7 last:pb-0">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center bg-card border border-border">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                  </div>
                  <div className="font-mono text-[10px] tracking-widest text-muted-foreground mb-1.5 uppercase">
                    {r.phase}
                  </div>
                  <h4 className="font-display text-base font-semibold text-foreground mb-1.5">{r.title}</h4>
                  <p className="text-[13px] text-muted-foreground leading-relaxed mb-1.5">{r.desc}</p>
                  <p className="text-[11px] font-mono text-muted-foreground tracking-wider uppercase">
                    <TrendingUp size={10} className="inline mr-1 -mt-0.5" />
                    {r.regions}
                  </p>
                </div>
              ))}
            </div>

            <Link href="/contact" className="btn-primary w-full justify-center mt-7">
              <Handshake size={15} strokeWidth={2} />
              Start a Partnership Conversation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
