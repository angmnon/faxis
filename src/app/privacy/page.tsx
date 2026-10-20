import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="// Legal"
        title={<>Privacy Policy</>}
        subtitle="How FAXIS.AI collects, uses, and protects information from visitors to our website and our business partners."
      />
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="space-y-8 text-foreground/80 leading-relaxed text-[15px]">
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">1. Information we collect</h2>
              <p>We collect limited information necessary to operate our website and manage partnership inquiries. This includes contact information you voluntarily submit through our forms, aggregated website analytics, and technical data required for security and service delivery.</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">2. How we use information</h2>
              <p>Submitted information is used solely to respond to partnership inquiries, deliver requested materials, and maintain ongoing business relationships. We do not sell personal data. We do not use marketing tracking cookies beyond aggregated analytics.</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">3. Data security</h2>
              <p>We apply industry-standard security practices to protect information in transit and at rest. Access is limited to employees and partners with a legitimate business need.</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">4. International transfers</h2>
              <p>As a global company headquartered in Singapore, information may be accessed by our teams and partners in other jurisdictions, always under appropriate confidentiality and security obligations.</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">5. Contact</h2>
              <p>For privacy-related questions, reach us through the <Link href="/contact" className="text-link hover:underline">contact page</Link>.</p>
            </div>
            <p className="text-xs text-muted-foreground font-mono pt-6 border-t border-border">
              Last updated: July 2026
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
