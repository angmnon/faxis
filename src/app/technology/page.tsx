import Link from "next/link";
import { ArrowUpRight, ArrowRight, Search, Workflow, Bot, ClipboardCheck, BarChart3, SlidersHorizontal, ShieldCheck, Users } from "lucide-react";
import { PageBand } from "@/components/layout/page-band";
import { SectionHeader } from "@/components/layout/section-header";
import { ImageBand } from "@/components/media/image-band";
import { Card, CheckItem } from "@/components/layout/primitives";

export const metadata = {
  title: "Technology Model — AI-Enabled Manufacturing Operations",
  description:
    "FAXIS.AI's operating layer connects product intelligence, planning, production execution, quality, visibility, and continuous improvement across local manufacturing capacity, with human review where required.",
};

const MODULES = [
  {
    icon: Search,
    title: "Product & process intelligence",
    desc: "Translate product specifications, BOM, drawings, and market requirements into a manufacturing plan, process route, and qualification checklist.",
  },
  {
    icon: Workflow,
    title: "Planning & coordination",
    desc: "Align demand signals, materials, equipment, suppliers, and schedules so local capacity can respond without overcommitting forward inventory.",
  },
  {
    icon: Bot,
    title: "Production execution & automation",
    desc: "Connect approved work instructions, machines, robotics, handling, and operator workflows. Automation is deployed where it is safe, reliable, and commercially justified.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality & traceability",
    desc: "Record inspection results, test data, process parameters, and material history against each product or batch for traceability and continuous review.",
  },
  {
    icon: BarChart3,
    title: "Operational visibility",
    desc: "Monitor production status, exceptions, utilization, and delivery performance so planners and operators can respond before small issues become delays.",
  },
  {
    icon: SlidersHorizontal,
    title: "Continuous improvement",
    desc: "Use operating data to identify bottlenecks, standardize successful changes, and guide controlled process improvements over time.",
  },
];

const PRINCIPLES = [
  {
    icon: Users,
    title: "Human-supervised, not unqualified autonomy",
    desc: "The system coordinates work and surfaces exceptions; qualified people remain responsible for product release, process changes, safety, and customer decisions.",
  },
  {
    icon: ShieldCheck,
    title: "Processes before promises",
    desc: "A capability is committed only after engineering review, supplier qualification, trial validation, and agreed acceptance criteria.",
  },
  {
    icon: Workflow,
    title: "Connected, not monolithic",
    desc: "The operating layer integrates with existing equipment, suppliers, quality systems, and customer workflows rather than requiring a single universal platform.",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <PageBand
        label="Technology"
        eyebrow="// Technology Model"
        title={<>Software coordinates. Machines execute. People stay accountable.</>}
        subtitle="FAXIS.AI's technology is an operating layer for local manufacturing: it connects product requirements, planning, equipment, quality, and delivery into a coherent production system. It is not a single autonomous machine and not a claim of fully unattended operation."
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="The Operating Layer"
            title={<>Six connected functions, one production system.</>}
            lead="A local factory runs reliably when its decisions, materials, machines, and quality records are coordinated consistently. Our operating layer links these functions across dedicated sites, partner factories, and transformed facilities."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {MODULES.map((m) => (
              <Card key={m.title}>
                <m.icon size={20} className="text-foreground mb-4" strokeWidth={1.6} />
                <h3 className="font-display text-base font-semibold text-foreground mb-2">{m.title}</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{m.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ImageBand
        src="/media/machining.jpg"
        align="left"
        eyebrow="Where machines meet software"
        title={<>Data flows from the cell to the decisions that run it.</>}
        lead="Equipment, quality stations, and planning are linked so status, output, and exceptions are visible across the network."
      />

      <section className="py-20 lg:py-28 bg-muted/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader eyebrow="Design Principles" title={<>Built for reliable operation, not marketing tiers.</>} />
          <div className="grid md:grid-cols-3 gap-4">
            {PRINCIPLES.map((p) => (
              <Card key={p.title}>
                <p.icon size={20} className="text-foreground mb-4" strokeWidth={1.6} />
                <h3 className="font-display text-[15px] font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{p.desc}</p>
              </Card>
            ))}
          </div>
          <div className="grid lg:grid-cols-2 gap-4 mt-12">
            <Card>
              <h3 className="font-display text-base font-semibold text-foreground mb-4">Where automation fits</h3>
              <ul className="space-y-2.5">
                <CheckItem>Repetitive material handling, loading, and machine tending.</CheckItem>
                <CheckItem>Standard inspection and data capture where reliability can be validated.</CheckItem>
                <CheckItem>Scheduling, documentation, and exception routing.</CheckItem>
                <CheckItem>Reproducible process steps under controlled parameters.</CheckItem>
              </ul>
            </Card>
            <Card>
              <h3 className="font-display text-base font-semibold text-foreground mb-4">Where humans stay essential</h3>
              <ul className="space-y-2.5">
                <CheckItem>New-product engineering and process validation.</CheckItem>
                <CheckItem>Quality release, safety decisions, and customer commitments.</CheckItem>
                <CheckItem>Non-routine faults and unvalidated changes.</CheckItem>
                <CheckItem>Regulatory and compliance determinations.</CheckItem>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <ImageBand
        src="/media/network-globe.jpg"
        align="center"
        eyebrow="One operating layer"
        title={<>Local sites run locally. Standards stay consistent globally.</>}
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="card-neutral rounded-2xl p-10 lg:p-14 text-center">
            <h2 className="reveal font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground max-w-2xl mx-auto leading-tight">
              Want to explore how an existing factory could be connected?
            </h2>
            <div className="reveal flex flex-wrap justify-center gap-3 mt-10">
              <Link href="/contact?intent=partner" className="btn-primary">
                Discuss a Factory Transformation
                <ArrowUpRight size={15} strokeWidth={2.2} />
              </Link>
              <Link href="/network" className="btn-secondary">
                <ArrowRight size={14} />
                Explore the Network
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
