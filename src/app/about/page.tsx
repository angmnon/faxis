import Link from "next/link";
import { ArrowUpRight, Compass, Users, ShieldCheck, Globe2 } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { SectionHeader } from "@/components/layout/section-header";
import { Card } from "@/components/layout/primitives";

export const metadata = {
  title: "About FAXIS.AI",
  description:
    "FAXIS.AI helps global brands and retailers build local manufacturing capacity closer to the markets they serve. Headquartered in Singapore.",
};

const PRINCIPLES = [
  {
    icon: Compass,
    title: "Start with the product and market",
    desc: "Every program answers: what is made, who buys it, where it is sold, and what problem local production solves. A factory follows the business case, not the other way around.",
  },
  {
    icon: ShieldCheck,
    title: "Commit on evidence",
    desc: "Costs, timelines, automation level, and capacity are stated after engineering review and qualification. We do not promise uniform numbers before a product-specific assessment.",
  },
  {
    icon: Users,
    title: "People remain accountable",
    desc: "Automation coordinates repetitive, validated work; qualified people own engineering, quality release, safety, and customer commitments.",
  },
  {
    icon: Globe2,
    title: "Local delivery, global coordination",
    desc: "Capacity sits near demand; planning, quality standards, and operating knowledge are coordinated across the network.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About"
        eyebrow="// About FAXIS.AI"
        title={<>A local-manufacturing partner for global brands.</>}
        subtitle="FAXIS.AI was created around a simple observation: as demand fragments and supply chains lengthen, brands need qualified production closer to their customers—and most cannot design, automate, and operate that capability on their own."
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="What We Do"
            title={<>We turn product and market requirements into operating local capacity.</>}
          />
          <div className="grid lg:grid-cols-2 gap-4">
            <Card>
              <h3 className="font-display text-base font-semibold text-foreground mb-3">For brands and retailers</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We assess which products can be produced locally, compare total landed cost and replenishment trade-offs, design the production model, and support deployment and ongoing operations.
              </p>
            </Card>
            <Card>
              <h3 className="font-display text-base font-semibold text-foreground mb-3">For manufacturers and partners</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We work with existing factories, site owners, and industrial partners to add connected automation, operating software, quality workflows, and access to brand programs under clearly defined commercial structures.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-muted/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader eyebrow="Operating Principles" title={<>How we choose to work.</>} />
          <div className="grid md:grid-cols-2 gap-4">
            {PRINCIPLES.map((p) => (
              <Card key={p.title}>
                <p.icon size={20} className="text-foreground mb-4" strokeWidth={1.6} />
                <h3 className="font-display text-base font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{p.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="card-neutral rounded-2xl p-10 lg:p-14 text-center">
            <h2 className="reveal font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground max-w-2xl mx-auto leading-tight">
              Headquartered in Singapore, building programs around target markets.
            </h2>
            <p className="reveal text-muted-foreground max-w-xl mx-auto mt-6 leading-relaxed">
              We publish confirmed offices, sites, and partners as programs are qualified. Interested in a program, a partnership, or a site discussion?
            </p>
            <div className="reveal flex flex-wrap justify-center gap-3 mt-10">
              <Link href="/contact?intent=brand" className="btn-primary">
                Start a Conversation
                <ArrowUpRight size={15} strokeWidth={2.2} />
              </Link>
              <Link href="/how-it-works" className="btn-secondary">
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
