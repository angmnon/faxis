"use client";

import * as React from "react";
import { PageHeader } from "@/components/layout/page-header";
import { Cpu, Bot, Wrench, Globe2, Code2, LineChart, ArrowUpRight, MapPin } from "lucide-react";
import Link from "next/link";

const VALUES = [
  { icon: Cpu, title: "AI-First Engineering", desc: "We build with foundation models at the core, not as an afterthought." },
  { icon: Bot, title: "Robotics & Hardware", desc: "Work with physical machines that produce real parts every day." },
  { icon: Globe2, title: "Global Ambition", desc: "Join early and shape how manufacturing runs across continents." },
];

const CATEGORIES = [
  {
    name: "AI / Machine Learning",
    icon: Cpu,
    roles: [
      { title: "Senior Computer Vision Engineer", location: "Singapore / Remote", type: "Full-time" },
      { title: "Multimodal ML Engineer (Geometry / CAD)", location: "Singapore", type: "Full-time" },
      { title: "ML Platform Engineer", location: "Singapore / Remote", type: "Full-time" },
    ],
  },
  {
    name: "Software Engineering",
    icon: Code2,
    roles: [
      { title: "Senior Full-Stack Engineer (Factory OS)", location: "Singapore", type: "Full-time" },
      { title: "CAM / Toolpath Algorithms Engineer", location: "Singapore / Remote", type: "Full-time" },
      { title: "Frontend Engineer (Industrial UI)", location: "Remote", type: "Full-time" },
    ],
  },
  {
    name: "Manufacturing & Robotics",
    icon: Wrench,
    roles: [
      { title: "Robotics & Automation Engineer", location: "On-site (Factory)", type: "Full-time" },
      { title: "Manufacturing Process Engineer (CNC)", location: "On-site (Factory)", type: "Full-time" },
      { title: "Mechatronics Integration Engineer", location: "On-site (Factory)", type: "Full-time" },
    ],
  },
  {
    name: "Business & Operations",
    icon: LineChart,
    roles: [
      { title: "Regional Partnerships Lead (North America)", location: "Remote (US)", type: "Full-time" },
      { title: "Regional Partnerships Lead (Europe)", location: "Remote (EU)", type: "Full-time" },
      { title: "Factory Launch Program Manager", location: "Singapore / Travel", type: "Full-time" },
    ],
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        label="Careers @ FAXIS.AI"
        eyebrow="// Join the Team"
        title={<>Build the factories that <span className="text-gradient-cyan-soft">build themselves.</span></>}
        subtitle="If the idea of rewriting the operating system for a trillion-dollar industry excites you, we want to talk. We hire engineers, roboticists, manufacturing experts, and market builders who refuse to accept that 'it's always been done this way.'"
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          {/* Values */}
          <div className="grid md:grid-cols-3 gap-5 mb-20">
            {VALUES.map((v, i) => (
              <div key={v.title} className="reveal card-border-glow rounded-xl p-7 relative" data-delay={`${i * 80}`}>
                <div className="chamfer-top absolute inset-0 rounded-xl pointer-events-none" />
                <v.icon size={22} className="text-[#00E5FF] mb-4" strokeWidth={1.6} />
                <h3 className="font-display text-lg font-semibold text-[#E6ECF5] mb-2">{v.title}</h3>
                <p className="text-[13px] text-[#8A94A6] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          {/* Open roles */}
          <div className="mb-10">
            <div className="label-industrial mb-5">{"//"} Open Roles</div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#E6ECF5]">
              Current openings
            </h2>
          </div>

          <div className="space-y-10">
            {CATEGORIES.map((cat) => (
              <div key={cat.name}>
                <div className="flex items-center gap-3 mb-5">
                  <cat.icon size={18} className="text-[#00E5FF]" strokeWidth={1.6} />
                  <h3 className="font-display text-xl font-semibold text-[#E6ECF5]">{cat.name}</h3>
                  <span className="text-xs font-mono text-[#5A6474]">({cat.roles.length})</span>
                </div>
                <div className="card-border-glow rounded-xl overflow-hidden divide-y divide-[rgba(138,148,166,0.08)]">
                  {cat.roles.map((r, i) => (
                    <div key={r.title} className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-5 lg:p-6 hover:bg-[rgba(0,229,255,0.02)] transition-colors group">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-md bg-[rgba(0,229,255,0.06)] border border-[rgba(0,229,255,0.15)] flex items-center justify-center flex-shrink-0 font-mono text-[10px] font-bold text-[#00E5FF]">
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <div>
                          <h4 className="font-display text-[15px] font-semibold text-[#E6ECF5] group-hover:text-[#00E5FF] transition-colors">{r.title}</h4>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5 text-xs text-[#8A94A6]">
                            <span className="inline-flex items-center gap-1 font-mono">
                              <MapPin size={10} />{r.location}
                            </span>
                            <span className="font-mono">/</span>
                            <span className="font-mono">{r.type}</span>
                          </div>
                        </div>
                      </div>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#00E5FF] hover:gap-2.5 transition-all md:pr-2"
                      >
                        Apply
                        <ArrowUpRight size={13} strokeWidth={2.2} />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 card-border-glow rounded-xl p-8 lg:p-12 text-center relative overflow-hidden">
            <div className="chamfer-top absolute inset-0 rounded-xl pointer-events-none" />
            <div className="absolute right-0 top-0 w-72 h-72 bg-[#00E5FF]/10 rounded-full blur-[100px]" />
            <div className="relative">
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-[#E6ECF5] mb-3">
                Don&apos;t see your role?
              </h3>
              <p className="text-[#8A94A6] max-w-xl mx-auto mb-6 text-sm">
                We&apos;re always looking for exceptional engineers, operators, and builders.
                Tell us how you&apos;d contribute to the lights-out future.
              </p>
              <Link href="/contact" className="btn-primary inline-flex">
                Reach Out Directly
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
