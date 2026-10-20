import Link from "next/link";
import { ArrowUpRight, ArrowRight, ChevronDown } from "lucide-react";
import { MediaBand } from "@/components/media/media-band";
import { SectionHeader } from "@/components/layout/section-header";
import { GlobeDots } from "@/components/network/globe-dots";

const PILLARS = [
  {
    title: "Product-led",
    desc: "Start with the products customers buy and the markets brands want to serve. Select the right SKUs and production steps based on their business case.",
  },
  {
    title: "Locally delivered",
    desc: "Build or configure manufacturing capacity close to the destination market, using an appropriate mix of local production, qualified suppliers, and imported inputs where needed.",
  },
  {
    title: "Globally coordinated",
    desc: "Shared software, data standards, production workflows, and operating controls connect local facilities as one network.",
  },
];

const FAMILIES = [
  "Consumer & Everyday Products", "Electronics & Electrical", "Appliances & Home Equipment",
  "Hardware, Tools & Home Improvement", "Retail & Commercial Equipment", "Industrial Products & Parts",
  "Furniture, Storage & Modular", "Custom & Short-Run",
];

const STEPS = [
  { num: "01", title: "Assess the opportunity", desc: "Review products, demand, current routes, quality requirements, and target-market conditions." },
  { num: "02", title: "Engineer the model", desc: "Map BOM, process steps, equipment, suppliers, quality controls, and localization options." },
  { num: "03", title: "Build the business case", desc: "Compare total landed cost, lead time, inventory, capital needs, risk, and expected volumes." },
  { num: "04", title: "Deploy local capacity", desc: "Configure a new unit, transform an existing facility, or work with qualified local partners." },
  { num: "05", title: "Qualify and ramp", desc: "Run trials, validate quality, complete required approvals, and ramp against acceptance criteria." },
  { num: "06", title: "Operate and improve", desc: "Coordinate planning, quality, maintenance, and delivery; improve using operating data." },
];

const OUTCOMES = [
  ["Total landed cost", "Manufacturing, materials, logistics, applicable duties and taxes, quality, inventory, and operations—not factory price alone."],
  ["Replenishment speed", "Bring production closer to demand where shorter cycles improve responsiveness."],
  ["Inventory & working capital", "Evaluate whether shorter cycles reduce forward-inventory exposure."],
  ["Quality & traceability", "Product-specific inspection, testing, documentation, and traceability built into the plan."],
  ["Supply-chain resilience", "Additional qualified production options, less dependence on a single route."],
  ["Scalable presence", "Start with a qualified family or cell, expand in line with proven demand."],
];

export default function HomePage() {
  return (
    <>
      {/* Hero — full-viewport cinematic */}
      <MediaBand
        video="/media/hero.mp4"
        eyebrow="A Global Local-Manufacturing Network"
        align="center"
        minH="min-h-[100svh]"
        title={
          <h1 className="display-hero text-foreground">
            Manufacturing, closer
            <br />
            to every market.
          </h1>
        }
        lead="FAXIS.AI helps global brands and retailers design, deploy, and operate manufacturing capacity in the markets they serve—AI-enabled systems, automation, local capabilities, and coordinated operations."
        primaryCta={{ label: "Plan Local Production", href: "/contact?intent=brand" }}
        secondaryCta={{ label: "Explore How It Works", href: "/how-it-works" }}
      >
        <div className="mt-16 flex justify-center">
          <ChevronDown size={20} className="scroll-hint text-muted-foreground" />
        </div>
      </MediaBand>

      {/* Chapter A — problem */}
      <MediaBand
        video="/media/trade-route.mp4"
        align="left"
        minH="min-h-[90svh]"
        eyebrow="The Supply Chain Challenge"
        title={
          <h2 className="display-section text-foreground">
            Global demand has changed. Manufacturing needs to move closer.
          </h2>
        }
        lead="Centralized production delivers scale, but long replenishment cycles, forward inventory, concentrated sourcing, and complex local expansion create growing trade-offs. Brands need qualified production capacity near the customers they serve—without designing, integrating, and operating every system themselves."
        secondaryCta={{ label: "See the Local Manufacturing Model", href: "/how-it-works" }}
      />

      {/* Chapter B — model */}
      <section className="py-28 lg:py-40 bg-[#0b0b0c]">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="A Different Manufacturing Model"
            title="Build local production. Coordinate it globally."
            lead="FAXIS.AI turns product and market requirements into a manufacturing program—assessment, design, deployment, and ongoing operations—configured around the product rather than forcing every part through one process."
          />
          <div className="grid md:grid-cols-3 gap-10">
            {PILLARS.map((p) => (
              <div key={p.title} className="reveal">
                <div className="label-industrial mb-3">{p.title}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter C — product families */}
      <section className="py-28 lg:py-40 border-y border-border bg-[#080809]">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="Product-Agnostic by Design"
            title="Start with the product. We design the system around it."
            lead="The right route depends on design, materials, volumes, quality, local suppliers, and compliance. A program may combine multiple processes and specialist suppliers under one operating model."
          />
          <div className="flex flex-wrap gap-2.5">
            {FAMILIES.map((f) => (
              <span key={f} className="inline-flex px-3 py-1.5 rounded-full border border-border text-[12px] text-muted-foreground">
                {f}
              </span>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/solutions" className="btn-primary">
              Assess a Product Family
              <ArrowUpRight size={14} strokeWidth={2.2} />
            </Link>
          </div>
        </div>
      </section>

      {/* Chapter D — process timeline */}
      <section className="py-28 lg:py-40 bg-[#0b0b0c]">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="From Product to Local Production"
            title="One accountable program, from assessment to operation."
          />
          <div className="max-w-3xl divide-y divide-border">
            {STEPS.map((s) => (
              <div key={s.num} className="reveal py-7 flex gap-8">
                <span className="font-mono text-2xl text-muted-foreground w-14 flex-shrink-0">{s.num}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter E — outcomes & technology */}
      <section className="py-28 lg:py-40 border-y border-border bg-[#080809]">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <SectionHeader
              eyebrow="Outcomes That Matter"
              title="Better decisions, measured at the product level."
            />
            <div className="space-y-5">
              {OUTCOMES.map(([t, d]) => (
                <div key={t} className="reveal">
                  <div className="text-sm font-semibold text-foreground mb-1">{t}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader
              eyebrow="The Operating Layer"
              title="Software connects. Machines execute. People stay accountable."
              lead="An operating layer links product intelligence, planning, equipment, quality, and delivery into one production system. Automation applies where it is safe and justified; trained people own engineering, quality release, safety, and customer decisions."
            />
            <Link href="/technology" className="btn-secondary">
              Explore the Technology Model
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Chapter F — network globe */}
      <section className="py-28 lg:py-40 bg-[#0b0b0c]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <SectionHeader
            eyebrow="Local Where It Matters. Connected Everywhere."
            title="A network designed around market demand."
            lead="Dedicated sites, joint ventures, qualified contract manufacturers, transformed factories, and specialist suppliers—connected through common planning, quality, and visibility standards."
          />
          <GlobeDots />
          <div className="mt-12">
            <Link href="/network" className="btn-secondary">
              Explore the Global Network
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-28 lg:py-40">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="display-section text-foreground">
            Have a product. Have a target market.
            <br />
            Let&apos;s assess the opportunity.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-6 leading-relaxed">
            Share your product category, target market, estimated demand, and current supply-chain model. We will use that starting point to assess whether local production merits a deeper review.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            <Link href="/contact?intent=brand" className="btn-primary">
              Plan Local Production
              <ArrowUpRight size={15} strokeWidth={2.2} />
            </Link>
            <Link href="/contact?intent=partner" className="btn-secondary">
              Become a Manufacturing Partner
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
