import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";

export const metadata = {
  title: "Insights",
  description: "Notes on local manufacturing, supply-chain strategy, and program learning from FAXIS.AI.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        label="Insights"
        eyebrow="// Insights"
        title={<>Notes on local manufacturing, coming together.</>}
        subtitle="We will publish program-learning notes, methodology explanations, and careful market observations here as material becomes ready. Until then, there are no placeholder articles."
      />
      <section className="pb-24 lg:pb-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="card-neutral rounded-2xl p-10 text-center">
            <p className="text-muted-foreground text-sm leading-relaxed max-w-lg mx-auto">
              This section is being prepared. We do not publish content that has not been developed and reviewed.
            </p>
            <Link href="/contact" className="btn-secondary mt-8 inline-flex">
              Notify Me When Publishing Begins
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
