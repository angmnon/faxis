import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { SectionHeader } from "@/components/layout/section-header";
import { Card } from "@/components/layout/primitives";

export const metadata = {
  title: "Careers",
  description:
    "FAXIS.AI is building a team around local manufacturing programs. General talent interest; specific roles are published as programs scale.",
};

const TEAM_FIELDS = [
  "Program and commercial management for brand manufacturing projects.",
  "Manufacturing engineering, process design, and industrial automation.",
  "Quality systems, compliance, and supplier qualification.",
  "Software, data, and operations for the manufacturing operating layer.",
  "Local deployment, operations, and site partnership support.",
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        label="Careers"
        eyebrow="// Careers"
        title={<>Join as programs take shape.</>}
        subtitle="FAXIS.AI is building a small, capable team around local manufacturing programs. Specific roles are published only when a program or function is ready to hire—we do not maintain a placeholder list of openings."
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="Where We Build Capability"
            title={<>Fields that grow with the programs.</>}
            lead="Roles emerge from active programs rather than from a fixed organizational chart. The areas below indicate where capability tends to be needed first."
          />
          <div className="grid md:grid-cols-2 gap-4">
            {TEAM_FIELDS.map((t) => (
              <Card key={t}>
                <p className="text-sm text-foreground/85 leading-relaxed">{t}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-muted/30 border-y border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="card-neutral rounded-2xl p-10 lg:p-14">
            <h2 className="reveal font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground leading-tight mb-4">
              No open listings right now.
            </h2>
            <p className="reveal text-muted-foreground max-w-lg mx-auto leading-relaxed">
              If your background fits the fields above, you may leave a general note with your profile
              and area of interest. We reach out when a relevant role opens.
            </p>
            <div className="reveal flex flex-wrap justify-center gap-3 mt-8">
              <Link href="/contact?intent=media" className="btn-primary">
                Share Your Background
                <ArrowUpRight size={14} strokeWidth={2.2} />
              </Link>
              <Link href="/about" className="btn-secondary">
                About FAXIS.AI
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
