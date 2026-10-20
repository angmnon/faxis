import Link from "next/link";
import { ArrowUpRight, Building2, Handshake, Factory, Wrench, MapPin, ShieldCheck, Gauge } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { SectionHeader } from "@/components/layout/section-header";
import { Card, CheckItem } from "@/components/layout/primitives";

export const metadata = {
  title: "Global Network — Local Capacity, Coordinated Operations",
  description:
    "FAXIS.AI connects dedicated sites, joint ventures, qualified contract manufacturers, transformed factories, and specialist suppliers into a coordinated local-manufacturing network.",
};

const SITE_TYPES = [
  {
    icon: Building2,
    title: "Dedicated FAXIS.AI-operated sites",
    desc: "Production units designed and operated around a defined product family and target market under the FAXIS.AI operating model.",
  },
  {
    icon: Handshake,
    title: "Joint ventures & asset partnerships",
    desc: "Shared ownership or investment with a local industrial or capital partner, with technology, operations, and governance defined contractually.",
  },
  {
    icon: Factory,
    title: "Qualified contract manufacturers",
    desc: "Established local production partners operating under agreed specifications, quality plans, and coordination standards.",
  },
  {
    icon: Wrench,
    title: "Transformed existing factories",
    desc: "Current local manufacturers that add connected automation, operating software, and quality workflows while retaining their existing base.",
  },
  {
    icon: MapPin,
    title: "Specialist suppliers",
    desc: "Process- or material-specific partners integrated into a program where the product cannot reasonably be produced end-to-end at one site.",
  },
];

const QUALIFICATION = [
  "Product and process fit with the site's equipment, skills, and capacity.",
  "Quality system, inspection, and traceability capability reviewed before production release.",
  "Safety, environmental, and labor practices assessed against applicable local requirements.",
  "Commercial terms, ownership, and governance defined in writing before operation.",
  "Ramp-up governed by agreed acceptance criteria rather than assumed performance.",
];

export default function NetworkPage() {
  return (
    <>
      <PageHeader
        label="Global Network"
        eyebrow="// Global Network"
        title={<>Local where it matters. Connected everywhere.</>}
        subtitle="FAXIS.AI builds a network of qualified local manufacturing capacity—configured around market demand, not copied from a single template. Each location is evaluated for the product it can realistically serve, the partners it can rely on, and the operating controls it must meet."
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="Site Types"
            title={<>A mixed network, one operating standard.</>}
            lead="Not every market needs a wholly owned greenfield plant. The network combines different ownership and operating structures, all connected to the same planning, quality, and visibility layer."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SITE_TYPES.map((s) => (
              <Card key={s.title}>
                <s.icon size={20} className="text-foreground mb-4" strokeWidth={1.6} />
                <h3 className="font-display text-base font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-muted/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="Qualification Principles"
            title={<>A location joins the network on evidence, not on a listing.</>}
          />
          <div className="grid lg:grid-cols-2 gap-4">
            <Card>
              <h3 className="font-display text-base font-semibold text-foreground mb-4">Before a site or partner joins</h3>
              <ul className="space-y-2.5">
                {QUALIFICATION.map((x) => <CheckItem key={x}>{x}</CheckItem>)}
              </ul>
            </Card>
            <Card>
              <h3 className="font-display text-base font-semibold text-foreground mb-4">Coordinated in operation</h3>
              <ul className="space-y-2.5">
                <CheckItem>Common planning and visibility workflows across locations.</CheckItem>
                <CheckItem>Consistent quality documentation and traceability standards.</CheckItem>
                <CheckItem>Capacity shared or reserved according to each commercial agreement.</CheckItem>
                <CheckItem>Operating data reviewed to improve performance over time.</CheckItem>
              </ul>
            </Card>
          </div>
          <p className="text-xs text-muted-foreground mt-8 max-w-3xl">
            Confirmed sites, partners, and coverage will be published as programs are qualified and launched. We do not list unbuilt or uncommitted locations as existing capacity.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="card-neutral rounded-2xl p-10 lg:p-14 text-center">
            <h2 className="reveal font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground max-w-2xl mx-auto leading-tight">
              Own a factory, site, or local production capability?
            </h2>
            <p className="reveal text-muted-foreground max-w-xl mx-auto mt-6 leading-relaxed">
              Tell us about your equipment, product categories, location, and current operating state. We will assess fit against active and future programs.
            </p>
            <div className="reveal flex flex-wrap justify-center gap-3 mt-10">
              <Link href="/contact?intent=partner" className="btn-primary">
                Become a Manufacturing Partner
                <ArrowUpRight size={15} strokeWidth={2.2} />
              </Link>
              <Link href="/how-it-works" className="btn-secondary">
                How Programs Are Structured
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
