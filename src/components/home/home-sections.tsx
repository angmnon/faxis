"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowUpRight, ArrowRight, Clock, PackageX, Network, Building2,
  Compass, MapPin, Globe2, BarChart3, Factory,
  ShieldCheck, TrendingUp, ClipboardCheck,
  Store, Laptop, Home, Wrench, Archive, Cpu, Boxes, SlidersHorizontal,
} from "lucide-react";
import { SectionHeader } from "@/components/layout/section-header";

/* ---------- S2: Customer problem ---------- */
const PROBLEMS = [
  {
    icon: Clock,
    title: "Longer replenishment cycles",
    desc: "Long transport routes and production lead times can make it harder to respond to changing demand, promotions, seasonal peaks, and product updates.",
  },
  {
    icon: PackageX,
    title: "Inventory tied up in the supply chain",
    desc: "Long planning horizons can require more forward inventory and expose brands to forecasting errors, markdowns, and product obsolescence.",
  },
  {
    icon: Network,
    title: "Concentrated sourcing risk",
    desc: "Reliance on a narrow set of production locations can increase exposure to disruption, policy changes, capacity constraints, and supplier concentration.",
  },
  {
    icon: Building2,
    title: "Complex local expansion",
    desc: "Building manufacturing capability in a new market requires product engineering, equipment, suppliers, quality systems, compliance, and operational expertise—not just floor space.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="The Supply Chain Challenge"
          title={<>Global demand has changed. Manufacturing needs to move closer.</>}
          lead="Centralized production can deliver scale. But for many products, long replenishment cycles, inventory commitments, cross-border logistics, and concentrated sourcing create growing commercial trade-offs. Brands and retailers need a practical way to add qualified production capacity near the customers they serve—without designing, integrating, and operating every system themselves."
        />
        <div className="grid md:grid-cols-2 gap-4">
          {PROBLEMS.map((p, i) => (
            <div key={p.title} className="reveal card-neutral rounded-2xl p-7" data-delay={`${i * 80}`}>
              <p.icon size={20} className="text-foreground mb-4" strokeWidth={1.6} />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- S3: FAXIS.AI model ---------- */
const PILLARS = [
  {
    icon: Compass,
    title: "Product-led",
    desc: "Start with the products customers buy and the markets brands want to serve. Select the right SKUs and production steps based on their business case.",
  },
  {
    icon: MapPin,
    title: "Locally delivered",
    desc: "Build or configure manufacturing capacity close to the destination market, using an appropriate mix of local production, qualified suppliers, and imported inputs where needed.",
  },
  {
    icon: Globe2,
    title: "Globally coordinated",
    desc: "Use shared software, data standards, production workflows, and operating controls to coordinate local facilities as part of a connected network.",
  },
];

export function ModelSection() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="A Different Manufacturing Model"
          title={<>Build local production. Coordinate it globally.</>}
          lead="FAXIS.AI turns a brand's product and market requirements into a manufacturing program. We assess which products make sense to localize, design the production architecture, coordinate the right equipment and qualified local capabilities, deploy the operating system, and support production through ramp-up and ongoing operations. Rather than forcing every product through one process, we configure the system around the bill of materials, production steps, quality requirements, volume profile, and local supply conditions."
        />
        <div className="grid md:grid-cols-3 gap-4">
          {PILLARS.map((p, i) => (
            <div key={p.title} className="reveal card-neutral rounded-2xl p-7" data-delay={`${i * 80}`}>
              <p.icon size={20} className="text-foreground mb-4" strokeWidth={1.6} />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="reveal mt-10">
          <Link href="/how-it-works" className="btn-secondary">
            See the Local Manufacturing Model
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- S4: What can be made ---------- */
const FAMILIES = [
  { icon: Store, title: "Consumer & Everyday Products", desc: "Home, kitchen, storage, personal-use accessories, seasonal products, and other everyday goods." },
  { icon: Cpu, title: "Electronics & Electrical Products", desc: "Devices, electrical goods, connected hardware, electromechanical assemblies, and selected subassemblies—subject to supplier, testing, and compliance qualification." },
  { icon: Home, title: "Appliances & Home Equipment", desc: "Small and large appliances, components, housings, structural parts, wiring assemblies, and final assembly or testing programs." },
  { icon: Wrench, title: "Home Improvement, Hardware & Tools", desc: "Metal and plastic components, fixtures, fittings, tool accessories, storage systems, and building-related products." },
  { icon: Archive, title: "Retail, Commercial & Store Equipment", desc: "Display fixtures, shelving components, point-of-sale structures, back-of-house equipment, and store or warehouse products." },
  { icon: Boxes, title: "Industrial Products & Replacement Parts", desc: "Components, assemblies, accessories, spare parts, and selected low-volume or configurable products." },
  { icon: SlidersHorizontal, title: "Furniture, Storage & Modular Products", desc: "Frames, hardware, connectors, panels, modular assemblies, and products that benefit from regional replenishment." },
  { icon: Laptop, title: "Custom, Configurable & Short-Run", desc: "Products where flexible capacity, lower inventory exposure, or local customization may matter more than a single global mass-production route." },
];

export function ProductSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Product-Agnostic by Design"
          title={<>Start with the product. We design the manufacturing system around it.</>}
          lead="FAXIS.AI is built for manufacturing across product categories. The right production route depends on product design, materials, sourcing, volumes, certification, quality requirements, and local economics. A program may combine multiple processes and specialist suppliers under a coordinated operating model."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FAMILIES.map((f, i) => (
            <div key={f.title} className="reveal card-neutral rounded-xl p-6" data-delay={`${i * 60}`}>
              <f.icon size={18} className="text-foreground mb-3" strokeWidth={1.6} />
              <h3 className="font-display text-[15px] font-semibold text-foreground mb-1.5 leading-tight">{f.title}</h3>
              <p className="text-[12.5px] text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
        <p className="reveal text-xs text-muted-foreground mt-8 max-w-2xl">
          Not every product is suitable for every location. Each program starts with a feasibility and qualification review.
        </p>
        <div className="reveal mt-6">
          <Link href="/solutions" className="btn-primary">
            Assess a Product for Local Manufacturing
            <ArrowUpRight size={14} strokeWidth={2.2} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- S5: How it works ---------- */
const STEPS = [
  { num: "01", title: "Assess the opportunity", desc: "Review target products, demand patterns, current supply routes, quality requirements, and target-market conditions. Identify where local production may create measurable value." },
  { num: "02", title: "Engineer the production model", desc: "Map the bill of materials, process steps, equipment, suppliers, workforce requirements, quality controls, certifications, and localization options." },
  { num: "03", title: "Build the business case", desc: "Compare current and proposed supply chains using total landed cost, replenishment lead time, inventory, capital needs, operating risk, and expected volumes." },
  { num: "04", title: "Deploy local capacity", desc: "Configure a new manufacturing unit, transform an existing facility, or work with qualified local production partners. The structure depends on the product and market." },
  { num: "05", title: "Qualify and ramp", desc: "Run engineering trials, validate processes, verify product quality, complete required approvals, and ramp production against an agreed acceptance plan." },
  { num: "06", title: "Operate and improve", desc: "Coordinate planning, production, quality, maintenance, and delivery. Use operational data to identify bottlenecks and improve performance over time." },
];

export function ProcessSection() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="From Product to Local Production"
          title={<>One accountable program. From assessment to ongoing operations.</>}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {STEPS.map((s, i) => (
            <div key={s.num} className="reveal card-neutral rounded-xl p-6" data-delay={`${i * 60}`}>
              <div className="font-mono text-2xl font-semibold text-muted-foreground mb-4">{s.num}</div>
              <h3 className="font-display text-base font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="reveal mt-10">
          <Link href="/contact?intent=brand" className="btn-secondary">
            Discuss Your Manufacturing Program
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- S6: Outcomes ---------- */
const OUTCOMES = [
  { icon: BarChart3, title: "Total landed cost", desc: "Compare manufacturing, components, logistics, duties and taxes where applicable, inventory, quality, and operating costs—not factory price alone." },
  { icon: Clock, title: "Time to market and replenishment", desc: "Bring production closer to demand where local capacity can shorten the route from order to shelf or end customer." },
  { icon: PackageX, title: "Inventory and working capital", desc: "Evaluate whether shorter replenishment cycles and more responsive production can reduce the need for forward inventory." },
  { icon: ShieldCheck, title: "Quality and traceability", desc: "Build product-specific inspection, testing, documentation, and traceability into the production plan." },
  { icon: Network, title: "Supply-chain resilience", desc: "Create additional qualified production options and reduce dependence on a single route where the economics justify it." },
  { icon: TrendingUp, title: "Scalable local presence", desc: "Start with a qualified product family or production cell, then expand capacity in line with proven demand." },
];

export function OutcomeSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Outcomes That Matter"
          title={<>Better supply-chain decisions, measured at the product level.</>}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {OUTCOMES.map((o, i) => (
            <div key={o.title} className="reveal card-neutral rounded-xl p-6" data-delay={`${i * 60}`}>
              <o.icon size={18} className="text-foreground mb-3" strokeWidth={1.6} />
              <h3 className="font-display text-[15px] font-semibold text-foreground mb-1.5">{o.title}</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- S7: Technology summary ---------- */
const TECH_BULLETS = [
  "Product and process intelligence: translate product requirements into a manufacturing and qualification plan.",
  "Planning and coordination: align demand, materials, capacity, equipment, and production schedules.",
  "Production execution: connect approved work instructions, machines, robotics, and operator workflows.",
  "Quality and traceability: record inspections, test results, process data, and relevant product history.",
  "Operational visibility: monitor production status, exceptions, utilization, and delivery performance.",
  "Continuous improvement: use operating data to guide controlled process improvements.",
];

export function TechSummarySection() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="The Operating Layer"
          title={<>AI connects the decisions. Automation executes the work.</>}
          lead="A local factory is more than a collection of machines. It needs product and process data, production planning, equipment coordination, quality controls, material availability, traceability, and a clear way to manage exceptions. FAXIS.AI combines AI-enabled workflows, manufacturing software, automation integration, and operating procedures to coordinate these elements as one production system."
        />
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-4 max-w-4xl">
          {TECH_BULLETS.map((b, i) => (
            <div key={i} className="reveal flex items-start gap-3 text-sm text-foreground/80" data-delay={`${i * 50}`}>
              <Check />
              <span className="leading-relaxed">{b}</span>
            </div>
          ))}
        </div>
        <p className="reveal text-sm text-muted-foreground mt-8 max-w-3xl">
          Automation is applied where it is safe, technically appropriate, and commercially justified. Human review and intervention remain part of the operating design wherever the process, product, or risk profile requires them.
        </p>
        <div className="reveal mt-8">
          <Link href="/technology" className="btn-secondary">
            Explore the FAXIS.AI Technology Model
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Check() {
  return <ClipboardCheck size={15} className="mt-0.5 flex-shrink-0 text-foreground" strokeWidth={2.2} />;
}

/* ---------- S8: Business models ---------- */
const MODELS = [
  { title: "Contract manufacturing", desc: "FAXIS.AI or an agreed local operating entity manufactures defined products to an approved specification, quality plan, volume schedule, and commercial agreement." },
  { title: "Reserved capacity", desc: "A brand commits to a defined capacity window or minimum purchase arrangement, allowing the program to plan equipment, materials, and operations with greater confidence." },
  { title: "Brand-anchored local facility", desc: "A dedicated facility or production unit is designed around one brand's product family, demand profile, and supply-chain requirements." },
  { title: "Joint venture or asset partnership", desc: "A local industrial or capital partner participates in funding or owning production assets, with technology, operations, sales, and governance contractually defined." },
  { title: "Existing-factory transformation", desc: "An existing local manufacturer provides an established site and capabilities, while FAXIS.AI helps integrate and operate a more connected, automated system." },
];

export function BusinessModelSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Flexible Ways to Build Local Capacity"
          title={<>The manufacturing arrangement should fit the business case.</>}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {MODELS.map((m, i) => (
            <div key={m.title} className="reveal card-neutral rounded-xl p-6" data-delay={`${i * 60}`}>
              <Factory size={18} className="text-foreground mb-3" strokeWidth={1.6} />
              <h3 className="font-display text-[15px] font-semibold text-foreground mb-1.5">{m.title}</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
        <div className="reveal mt-10">
          <Link href="/brands#models" className="btn-secondary">
            Compare Manufacturing Models
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- S9: Network ---------- */
export function NetworkSection() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Local Where It Matters. Connected Everywhere."
          title={<>A network designed around market demand.</>}
          lead="FAXIS.AI's ambition is to connect qualified manufacturing capacity across markets through common operating principles, technology, and quality governance. Each location is configured around the product mix, local supply base, customer requirements, and business case—not copied blindly from another country. The network may include dedicated FAXIS.AI-operated sites, joint ventures, qualified contract manufacturers, transformed existing factories, and specialized suppliers."
        />
        <Link href="/network" className="btn-primary reveal">
          Explore the Global Network
          <ArrowUpRight size={14} strokeWidth={2.2} />
        </Link>
      </div>
    </section>
  );
}

/* ---------- S10: Closing CTA ---------- */
export function ClosingCta() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="card-neutral rounded-2xl p-10 lg:p-14 text-center">
          <h2 className="reveal font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground max-w-2xl mx-auto leading-tight">
            Have a product. Have a target market. Let&apos;s assess the manufacturing opportunity.
          </h2>
          <p className="reveal text-muted-foreground max-w-xl mx-auto mt-6 leading-relaxed" data-delay="100">
            Share your product category, target market, estimated demand, and current supply-chain model. We will use that starting point to determine whether local production merits a deeper assessment.
          </p>
          <div className="reveal flex flex-wrap justify-center gap-3 mt-10" data-delay="200">
            <Link href="/contact?intent=brand" className="btn-primary">
              Plan Local Production
              <ArrowUpRight size={15} strokeWidth={2.2} />
            </Link>
            <Link href="/contact?intent=partner" className="btn-secondary">
              Become a Manufacturing Partner
            </Link>
          </div>
          <p className="reveal text-xs text-muted-foreground mt-8 max-w-xl mx-auto" data-delay="250">
            Initial discussions are exploratory. A production plan, cost estimate, timeline, and investment proposal require product-specific information and a feasibility review.
          </p>
        </div>
      </div>
    </section>
  );
}
