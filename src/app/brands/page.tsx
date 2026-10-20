import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { SectionHeader } from "@/components/layout/section-header";
import { Card, CheckItem, Step, Pill } from "@/components/layout/primitives";

export const metadata = {
  title: "Local Manufacturing for Brands & Retailers",
  description:
    "Explore how FAXIS.AI helps brands and retailers assess product localization, deploy local production capacity, and coordinate quality, cost, and delivery in target markets.",
};

const CASE_CARDS = [
  {
    title: "Replenish closer to demand",
    desc: "Evaluate whether local production can shorten the replenishment route, improve responsiveness, and reduce reliance on long forecast horizons.",
  },
  {
    title: "Rebalance the total cost",
    desc: "Compare the full supply-chain economics, including materials, production, quality, logistics, applicable duties and taxes, working capital, and local operations.",
  },
  {
    title: "Add qualified production options",
    desc: "Explore a second production location or regional capacity for products that warrant more flexibility in the supply chain.",
  },
  {
    title: "Expand without building everything yourself",
    desc: "Use a coordinated delivery model spanning engineering, automation, local supplier qualification, factory deployment, and ongoing operations.",
  },
];

const YOU_PROVIDE = [
  "Product drawings, specifications, images, samples, or design files, as appropriate.",
  "SKU list, estimated annual demand, order patterns, seasonality, and expected growth.",
  "Current manufacturing location and supply-chain route.",
  "Bill of materials or available information about major materials and components.",
  "Quality standards, inspection requirements, product testing, and certifications.",
  "Target market, required delivery service level, packaging, labeling, and compliance needs.",
  "Current unit cost and logistics information, where available.",
];

const WE_ASSESS = [
  "Product and process suitability for local production.",
  "Demand profile, volume, seasonality, and capacity utilization.",
  "Local versus imported component options.",
  "Supplier and manufacturing capability requirements.",
  "Engineering, testing, quality, and regulatory qualification needs.",
  "Estimated total landed cost under comparable scenarios.",
  "Capital, operating, and ramp-up requirements.",
  "Origin and trade-compliance questions that require specialist verification.",
];

const YOU_RECEIVE = [
  "A ranked list of candidate SKUs or product families.",
  "A proposed local manufacturing architecture.",
  "A preliminary cost and lead-time comparison with assumptions made explicit.",
  "Key qualification, sourcing, capital, and compliance risks.",
  "Pilot options and recommended next steps.",
];

const CATEGORIES = [
  "Everyday consumer products and household goods",
  "Home, kitchen, storage, furniture, and home-improvement products",
  "Electronics, electrical products, and electromechanical assemblies",
  "Small and large appliances and their components",
  "Hardware, tools, fixtures, and commercial equipment",
  "Retail displays, shelving, store equipment, and warehouse products",
  "Industrial products, components, accessories, and replacement parts",
  "Configurable, customized, or selected short-run products",
];

const PATH = [
  { num: "1", title: "Discovery", desc: "Align on objectives, product categories, target markets, volumes, current supply-chain challenges, and decision criteria." },
  { num: "2", title: "SKU and market assessment", desc: "Select candidate products, establish cost baselines, identify local sourcing options, and map qualification requirements." },
  { num: "3", title: "Pilot design", desc: "Define the production scope, sample and trial plan, investment structure, quality acceptance criteria, and commercial terms." },
  { num: "4", title: "Qualification and launch", desc: "Complete engineering, sourcing, testing, production trials, and required customer or regulatory approvals." },
  { num: "5", title: "Scale and operate", desc: "Expand product coverage or capacity only after the agreed acceptance criteria and operating economics are demonstrated." },
];

const MODELS = [
  { title: "Pay-per-unit manufacturing", desc: "Purchase qualified products under agreed specifications and commercial terms." },
  { title: "Reserved capacity", desc: "Secure capacity for a defined product family, period, or volume commitment." },
  { title: "Dedicated production cell or facility", desc: "Establish capacity organized around a brand's products and expected demand." },
  { title: "Joint investment", desc: "Share defined assets, funding, and governance through an agreed project structure." },
  { title: "Local supplier network", desc: "Use qualified local manufacturing partners coordinated through an agreed operating model." },
];

export default function BrandsPage() {
  return (
    <>
      <PageHeader
        label="For Brands & Retailers"
        eyebrow="// Brands & Retailers"
        title={<>Make your products closer to the customers who buy them.</>}
        subtitle="FAXIS.AI helps brands and retailers evaluate, build, and operate local manufacturing capacity in target markets. Start with a product family or SKU group. We assess the business case, design the production model, and coordinate deployment and operations around your product, demand, and quality requirements."
      />

      {/* Business case */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="The Business Case"
            title={<>Local production should solve a real supply-chain problem.</>}
            lead="Local manufacturing is not automatically cheaper or better. It becomes compelling when the combined value of production cost, logistics, duty exposure, replenishment speed, inventory, resilience, and customer service outweighs the cost and complexity of operating locally. We help your team assess that trade-off before committing to a factory or production line."
          />
          <div className="grid md:grid-cols-2 gap-4">
            {CASE_CARDS.map((c) => (
              <Card key={c.title}>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What we need from you */}
      <section className="py-20 lg:py-28 bg-muted/30 border-y border-border" id="assessment">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="Start With Product and Market"
            title={<>Start with the product and the market—not a factory blueprint.</>}
            lead="To assess a product family, we typically work with information such as the list below. We can begin with partial information and identify what is needed for a reliable assessment. Confidential material should be shared through an agreed secure process and subject to appropriate confidentiality and data-handling terms."
          />
          <div className="grid lg:grid-cols-3 gap-4">
            <Card>
              <h3 className="font-display text-base font-semibold text-foreground mb-4">You provide</h3>
              <ul className="space-y-2.5">
                {YOU_PROVIDE.map((x) => <CheckItem key={x}>{x}</CheckItem>)}
              </ul>
            </Card>
            <Card>
              <h3 className="font-display text-base font-semibold text-foreground mb-4">We assess</h3>
              <ul className="space-y-2.5">
                {WE_ASSESS.map((x) => <CheckItem key={x}>{x}</CheckItem>)}
              </ul>
            </Card>
            <Card>
              <h3 className="font-display text-base font-semibold text-foreground mb-4">You receive</h3>
              <ul className="space-y-2.5">
                {YOU_RECEIVE.map((x) => <CheckItem key={x}>{x}</CheckItem>)}
              </ul>
            </Card>
          </div>
          <p className="text-xs text-muted-foreground mt-8 max-w-3xl">
            The assessment is a decision-support process. Final costs, production commitments, certifications, and origin treatment require detailed engineering, supplier quotes, testing, and qualified professional review where appropriate.
          </p>
          <div className="mt-8">
            <Link href="/contact?intent=brand" className="btn-primary">
              Request an SKU Assessment
              <ArrowUpRight size={14} strokeWidth={2.2} />
            </Link>
          </div>
        </div>
      </section>

      {/* Product categories */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="Product Categories"
            title={<>One partner across product categories.</>}
            lead="Our scope is defined by the product and its manufacturing requirements, not by a fixed list of processes. Each product family is evaluated for technical feasibility, supply-chain economics, quality and compliance requirements, and the level of automation that can be reliably deployed."
          />
          <div className="flex flex-wrap gap-2.5">
            {CATEGORIES.map((c) => <Pill key={c}>{c}</Pill>)}
          </div>
        </div>
      </section>

      {/* Engagement path */}
      <section className="py-20 lg:py-28 bg-muted/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="Engagement Path"
            title={<>Start small. Prove the model. Expand on evidence.</>}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {PATH.map((s) => <Step key={s.num} num={s.num} title={s.title} desc={s.desc} />)}
          </div>
        </div>
      </section>

      {/* Commercial models */}
      <section className="py-20 lg:py-28" id="models">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="Commercial Models"
            title={<>Choose the right way to access local manufacturing.</>}
            lead="The best structure depends on demand certainty, capital intensity, IP and quality requirements, local regulations, and the parties' desired ownership and operating roles."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {MODELS.map((m) => (
              <Card key={m.title}>
                <h3 className="font-display text-[15px] font-semibold text-foreground mb-2">{m.title}</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{m.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="card-neutral rounded-2xl p-10 lg:p-14 text-center">
            <h2 className="reveal font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground max-w-2xl mx-auto leading-tight">
              Let&apos;s identify the right first products and the right first market.
            </h2>
            <p className="reveal text-muted-foreground max-w-xl mx-auto mt-6 leading-relaxed">
              Tell us what you make, where you sell, and what you want to improve. We&apos;ll start by assessing whether local manufacturing can create a defensible business case.
            </p>
            <div className="reveal flex flex-wrap justify-center gap-3 mt-10">
              <Link href="/contact?intent=brand" className="btn-primary">
                Request an SKU Assessment
                <ArrowUpRight size={15} strokeWidth={2.2} />
              </Link>
              <Link href="/how-it-works" className="btn-secondary">
                <ArrowRight size={14} />
                Discuss a Brand Program
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
