import Link from "next/link";
import { ArrowUpRight, ArrowRight, Store, Cpu, Home, Wrench, Archive, Boxes, SlidersHorizontal, Laptop, Printer, Cog, Layers, Container } from "lucide-react";
import { PageBand } from "@/components/layout/page-band";
import { SectionHeader } from "@/components/layout/section-header";
import { Card, CheckItem } from "@/components/layout/primitives";

export const metadata = {
  title: "Solutions — Local Manufacturing by Product Family",
  description:
    "FAXIS.AI organizes solutions around product families and markets—not a fixed process list. Assess what can be produced locally, how the program is structured, and which processes may enter an appendix stage.",
};

const FAMILIES = [
  { icon: Store, title: "Consumer & Everyday Products", desc: "Home, kitchen, storage, personal-use accessories, seasonal products, and other everyday goods suited to regional replenishment." },
  { icon: Cpu, title: "Electronics & Electrical", desc: "Devices, electrical goods, connected hardware, electromechanical assemblies, and selected subassemblies, subject to supplier, testing, and compliance qualification." },
  { icon: Home, title: "Appliances & Home Equipment", desc: "Small and large appliances, housings, structural parts, wiring assemblies, and final assembly or testing programs." },
  { icon: Wrench, title: "Hardware, Tools & Home Improvement", desc: "Metal and plastic components, fixtures, fittings, tool accessories, storage systems, and building-related products." },
  { icon: Archive, title: "Retail & Commercial Equipment", desc: "Display fixtures, shelving components, point-of-sale structures, back-of-house equipment, and store or warehouse products." },
  { icon: Boxes, title: "Industrial Products & Parts", desc: "Components, assemblies, accessories, spare parts, and selected low-volume or configurable products." },
  { icon: SlidersHorizontal, title: "Furniture, Storage & Modular", desc: "Frames, hardware, connectors, panels, modular assemblies, and products that benefit from regional production." },
  { icon: Laptop, title: "Custom & Short-Run", desc: "Configurable, customized, or selected short-run products where flexibility and lower inventory exposure matter." },
];

const STAGES = [
  {
    num: "01",
    title: "Assess the product family",
    desc: "Review demand, design, materials, current sourcing, quality requirements, and target market to decide whether local production merits a deeper business case.",
  },
  {
    num: "02",
    title: "Design the production architecture",
    desc: "Define process steps, equipment, suppliers, quality stations, automation level, and operating controls for that specific product mix.",
  },
  {
    num: "03",
    title: "Deploy and qualify capacity",
    desc: "Build or configure a dedicated site, transform an existing factory, or engage qualified local partners; run trials and acceptance criteria.",
  },
  {
    num: "04",
    title: "Operate and improve",
    desc: "Coordinate planning, quality, maintenance, and delivery under one operating layer; expand on proven results.",
  },
];

/* Appendix: the four known manufacturing processes, listed only as technical options */
const PROCESSES = [
  {
    icon: Printer,
    name: "3D Printing / Additive Manufacturing",
    note: "Rapid prototypes, tooling, and selected low-volume or complex geometry parts; evaluated per part.",
  },
  {
    icon: Cog,
    name: "CNC Machining",
    note: "Precision metal and plastic parts; level of automation and support defined per program and complexity.",
  },
  {
    icon: Layers,
    name: "Sheet Metal Fabrication",
    note: "Folded, formed, and assembled metal components for fixtures, enclosures, and equipment.",
  },
  {
    icon: Container,
    name: "Injection Molding",
    note: "Volume plastic components where tooling economics and demand justify the route.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageBand
        label="Solutions"
        eyebrow="// Solutions"
        title={<>Organized around what you make, not how a machine is grouped.</>}
        subtitle="FAXIS.AI does not define the company by a single manufacturing process. We start from the product family and target market, then configure the production route—processes, suppliers, equipment, quality, and operations—around the business case."
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="Product Families"
            title={<>Eight families we assess for local production.</>}
            lead="Every program begins with feasibility and qualification review. A family appearing here means it can be assessed, not that it is automatically produced in every market."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FAMILIES.map((f) => (
              <Card key={f.title}>
                <f.icon size={18} className="text-foreground mb-3" strokeWidth={1.6} />
                <h3 className="font-display text-[15px] font-semibold text-foreground mb-1.5 leading-tight">{f.title}</h3>
                <p className="text-[12.5px] text-muted-foreground leading-relaxed">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-muted/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader eyebrow="How a Program Takes Shape" title={<>From product review to operating capacity.</>} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {STAGES.map((s) => (
              <Card key={s.num}>
                <div className="font-mono text-2xl font-semibold text-muted-foreground mb-4">{s.num}</div>
                <h3 className="font-display text-[15px] font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{s.desc}</p>
              </Card>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact?intent=brand" className="btn-primary">
              Assess a Product Family
              <ArrowUpRight size={14} strokeWidth={2.2} />
            </Link>
            <Link href="/how-it-works" className="btn-secondary">
              <ArrowRight size={14} />
              See the Program Path
            </Link>
          </div>
        </div>
      </section>

      {/* Appendix: known processes */}
      <section className="py-20 lg:py-28" id="processes">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="Appendix · Technical Processes Available in a Program"
            title={<>Known processes, used where the case supports them.</>}
            lead="The following processes may enter a program as technical options after product-specific review. They are reference capabilities, not a definition of what FAXIS.AI sells, and not commitments to operate each one in every market."
          />
          <div className="grid md:grid-cols-2 gap-4">
            {PROCESSES.map((p) => (
              <Card key={p.name}>
                <p.icon size={18} className="text-foreground mb-3" strokeWidth={1.6} />
                <h3 className="font-display text-[15px] font-semibold text-foreground mb-1.5">{p.name}</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{p.note}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8 space-y-2.5 max-w-3xl">
            <CheckItem>Process selection follows product design, volume, quality, and local supplier conditions.</CheckItem>
            <CheckItem>Automation level, equipment, and staffing are defined per program rather than promised as a uniform standard.</CheckItem>
            <CheckItem>Final process routes require engineering review, supplier qualification, and trial validation.</CheckItem>
          </div>
        </div>
      </section>
    </>
  );
}
