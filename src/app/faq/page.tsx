import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageBand } from "@/components/layout/page-band";
import { ImageBand } from "@/components/media/image-band";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export const metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers about what FAXIS.AI does, how local manufacturing programs are assessed, product fit, commercial structures, and how to begin.",
};

const FAQS = [
  {
    q: "What does FAXIS.AI actually do?",
    a: "FAXIS.AI helps global brands and retailers assess, design, deploy, and operate AI-enabled local manufacturing capacity in target markets. We combine product and process assessment, production system design, automation and software integration, local supplier and facility coordination, quality planning, and ongoing operations support.",
  },
  {
    q: "Is FAXIS.AI a single autonomous, fully unattended factory?",
    a: "No. FAXIS.AI is a coordinated local-manufacturing network and operating model. Automation is applied where it is safe, reliable, and justified; qualified people remain responsible for engineering, quality release, safety, and customer decisions. We do not describe operation as fully unattended.",
  },
  {
    q: "Which products can be produced locally?",
    a: "We evaluate everyday consumer and household goods, appliances and components, electronics and electromechanical assemblies, hardware and tools, retail and commercial equipment, furniture and storage, industrial parts, and selected configurable or short-run products. Fit depends on design, materials, volumes, quality requirements, local suppliers, and compliance—not a fixed process list.",
  },
  {
    q: "Which countries or markets do you serve?",
    a: "Programs are developed around a brand's target market and the available local supply base. Confirmed sites and partners are published as programs are qualified; we do not list unbuilt locations as existing capacity.",
  },
  {
    q: "How long does a program take?",
    a: "There is no fixed timetable. Scope, engineering, sourcing, qualification, certification, and ramp-up vary by product and market. A realistic plan and milestones are agreed after the SKU assessment and engineering review.",
  },
  {
    q: "Does local production guarantee lower cost or avoid tariffs?",
    a: "No guarantee can be made without a product-specific review. Local production must be evaluated on total landed cost—materials, production, logistics, applicable duties and taxes, quality, inventory, and operations. Tariff and origin treatment requires professional verification for each product and market.",
  },
  {
    q: "How does an engagement begin?",
    a: "With an SKU Localization Assessment: you share the product family, target market, estimated demand, current supply route, and available quality requirements. We assess feasibility, economics, and qualification needs and return a decision-oriented summary with assumptions stated.",
  },
  {
    q: "Can an existing local factory be transformed?",
    a: "Yes. An established manufacturer can contribute its site, workforce, and capabilities while FAXIS.AI helps integrate connected automation, planning and quality software, and coordinated operating procedures. Transformation scope is agreed per facility.",
  },
  {
    q: "How are product designs, data, and IP handled?",
    a: "Sensitive design files and commercial data are shared under agreed confidentiality and data-handling terms before a formal program. Ownership, licensing, and use of IP are defined in the relevant commercial agreement.",
  },
  {
    q: "I represent an investor, site owner, or JV partner. How do we engage?",
    a: "Use the contact form and select 'Investment, site or JV partner.' Share your market, available assets, capital capacity, and objectives; we review fit against current and planned programs.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageBand
        label="FAQ"
        eyebrow="// Frequently Asked Questions"
        title={<>Questions, answered plainly.</>}
        subtitle="Short, direct answers about what FAXIS.AI does, how programs start, and what we do not promise."
      />
      <ImageBand
        src="/media/inspection.jpg"
        align="center"
        eyebrow="Quality first"
        title={<>Evidence, assumptions, and qualifications stated clearly.</>}
      />
      <section className="pb-24 lg:pb-32">
        <div className="max-w-3xl mx-auto px-6">
          <Accordion type="single" collapsible className="reveal">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-base font-medium text-foreground">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-12 card-neutral rounded-2xl p-8 text-center">
            <p className="text-muted-foreground text-sm mb-5">Have a question not covered here?</p>
            <Link href="/contact" className="btn-primary">
              Contact Us
              <ArrowUpRight size={14} strokeWidth={2.2} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
