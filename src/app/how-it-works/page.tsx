import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { PageBand } from "@/components/layout/page-band";
import { SectionHeader } from "@/components/layout/section-header";
import { ImageBand } from "@/components/media/image-band";
import { Card, CheckItem, Step } from "@/components/layout/primitives";

export const metadata = {
  title: "How Local Manufacturing Programs Work",
  description:
    "From SKU assessment and engineering design to local capacity deployment, qualification, ramp-up, and ongoing operations—how FAXIS.AI structures a local manufacturing program.",
};

const STAGES = [
  { num: "01", title: "Discovery & product review", desc: "Understand commercial goals, product family, target market, demand profile, current supply chain, quality and compliance needs, and decision criteria." },
  { num: "02", title: "Feasibility & SKU selection", desc: "Review technical feasibility, available local suppliers, equipment options, materials, expected volumes, and preliminary total landed cost to shortlist suitable products." },
  { num: "03", title: "Engineering & business case", desc: "Define the production architecture, process steps, equipment, sourcing strategy, quality plan, investment, operating costs, and a transparent cost comparison." },
  { num: "04", title: "Production system design", desc: "Configure the factory or production cell: layout, equipment, automation level, software, materials flow, quality stations, workforce plan, and control procedures." },
  { num: "05", title: "Build, source & qualify", desc: "Secure equipment and suppliers, integrate systems, run trials, validate quality, and complete required testing or approvals before production release." },
  { num: "06", title: "Ramp-up & ongoing operations", desc: "Introduce SKUs incrementally, monitor output and quality, manage maintenance and materials, and improve the program using operating data." },
];

const ASSESSMENT_OUTPUTS = [
  "Candidate SKU or product-family ranking with reasoning.",
  "Proposed production route and process architecture.",
  "Preliminary total landed cost comparison, with assumptions explicit.",
  "Qualification, supplier, equipment, capital, and compliance requirements.",
  "Recommended pilot scope, acceptance criteria, and next steps.",
];

const MODEL_OPTIONS = [
  { title: "Contract manufacturing", desc: "FAXIS.AI or an agreed local operating entity manufactures approved products against specifications, quality plans, and commercial terms." },
  { title: "Reserved capacity", desc: "A defined capacity window or minimum purchase commitment supports planning of equipment, materials, and operations." },
  { title: "Brand-anchored facility", desc: "A dedicated facility or production unit designed around one brand's product family and demand profile." },
  { title: "Joint venture / asset partnership", desc: "A local industrial or capital partner shares ownership and investment, with technology, operations, sales, and governance contractually defined." },
  { title: "Existing-factory transformation", desc: "A local manufacturer contributes the established site and capabilities; FAXIS.AI helps integrate a connected, automated operating system." },
];

const OPERATIONS = [
  "Demand and production planning aligned to purchase signals and replenishment needs.",
  "Materials, suppliers, equipment, and quality stations coordinated in one workflow.",
  "Work instructions, process parameters, inspection records, and traceability documented.",
  "Exceptions escalated to the right owner, with human review where required.",
  "Operating data reviewed to guide controlled process improvements.",
];

export default function HowItWorksPage() {
  return (
    <>
      <PageBand
        label="How It Works"
        eyebrow="// How It Works"
        title={<>From product opportunity to operating local capacity.</>}
        subtitle="Every program follows a structured path: understand the product and market, prove the business case, design the production system, qualify it, ramp it, and operate it continuously. Scope, timeline, and investment are defined per program rather than promised as a single fixed plan."
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader eyebrow="The Program Path" title={<>Six stages, one accountable team.</>} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {STAGES.map((s) => <Step key={s.num} num={s.num} title={s.title} desc={s.desc} />)}
          </div>
        </div>
      </section>

      <ImageBand
        src="/media/machining.jpg"
        align="left"
        eyebrow="Engineering the cell"
        title={<>Equipment, software, and people configured around the product.</>}
        lead="Automation is applied where it is safe and justified; trained people own engineering, quality release, and customer decisions."
      />

      <section className="py-20 lg:py-28 bg-muted/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="The Starting Point: SKU Localization Assessment"
            title={<>Assess before you commit.</>}
            lead="Most programs begin with a focused review of a defined SKU group rather than a broad product portfolio. The assessment compares the current route with a proposed local route using the same assumptions and unit of measure."
          />
          <div className="grid lg:grid-cols-2 gap-4">
            <Card>
              <h3 className="font-display text-base font-semibold text-foreground mb-4">What the assessment produces</h3>
              <ul className="space-y-2.5">
                {ASSESSMENT_OUTPUTS.map((x) => <CheckItem key={x}>{x}</CheckItem>)}
              </ul>
            </Card>
            <Card>
              <h3 className="font-display text-base font-semibold text-foreground mb-4">What it does not replace</h3>
              <ul className="space-y-2.5">
                <CheckItem>Detailed engineering drawings and production-rate studies.</CheckItem>
                <CheckItem>Firm supplier quotations and finalized capital estimates.</CheckItem>
                <CheckItem>Product certification, regulatory approval, or customs origin determination.</CheckItem>
                <CheckItem>A fixed implementation timetable without scope and acceptance criteria.</CheckItem>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="Ways to Structure Capacity"
            title={<>The structure follows the business case.</>}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {MODEL_OPTIONS.map((m) => (
              <Card key={m.title}>
                <h3 className="font-display text-[15px] font-semibold text-foreground mb-2">{m.title}</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{m.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-muted/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="Ongoing Operations"
            title={<>A running factory needs more than machines.</>}
            lead="After qualification, the program continues through coordinated operating procedures and software. Automation applies where it is safe and justified; trained people remain accountable for quality, exceptions, and process changes."
          />
          <div className="grid md:grid-cols-2 gap-4">
            {OPERATIONS.map((x) => (
              <Card key={x}>
                <CheckItem>{x}</CheckItem>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ImageBand
        src="/media/warehouse.jpg"
        align="center"
        eyebrow="From pilot to scale"
        title={<>Prove the model, then expand on evidence.</>}
        lead="SKUs are introduced incrementally; capacity grows only after acceptance criteria and operating economics are demonstrated."
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="card-neutral rounded-2xl p-10 lg:p-14 text-center">
            <h2 className="reveal font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground max-w-2xl mx-auto leading-tight">
              Bring a candidate product family. We&apos;ll test the local manufacturing case.
            </h2>
            <div className="reveal flex flex-wrap justify-center gap-3 mt-10">
              <Link href="/contact?intent=brand" className="btn-primary">
                Start a Program Discussion
                <ArrowUpRight size={15} strokeWidth={2.2} />
              </Link>
              <Link href="/brands" className="btn-secondary">
                For Brands & Retailers
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
