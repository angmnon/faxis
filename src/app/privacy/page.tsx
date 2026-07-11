import { PageHeader } from "@/components/layout/page-header";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="// Legal"
        title={<>Privacy <span className="text-gradient-cyan-soft">Policy</span></>}
        subtitle="How FAXIS.AI collects, uses, and protects information from visitors to our website and our business partners."
      />
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 prose prose-invert">
          <div className="space-y-8 text-[#B8C2D1] leading-relaxed text-[15px]">
            <div>
              <h2 className="font-display text-xl font-semibold text-[#E6ECF5] mb-3">1. Information we collect</h2>
              <p>We collect limited information necessary to operate our website and manage partnership inquiries. This includes contact information you voluntarily submit through our forms, aggregated website analytics, and technical data required for security and service delivery.</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-[#E6ECF5] mb-3">2. How we use information</h2>
              <p>Submitted information is used solely to respond to partnership inquiries, deliver requested materials, and maintain ongoing business relationships. We do not sell personal data. We do not use marketing tracking cookies beyond aggregated analytics.</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-[#E6ECF5] mb-3">3. Data security</h2>
              <p>We apply industry-standard security practices to protect information in transit and at rest. Access is limited to employees and partners with a legitimate business need.</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-[#E6ECF5] mb-3">4. International transfers</h2>
              <p>As a global company headquartered in Singapore, information may be accessed by our teams and partners in other jurisdictions, always under appropriate confidentiality and security obligations.</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-[#E6ECF5] mb-3">5. Contact</h2>
              <p>For privacy-related questions, contact us at <a href="mailto:privacy@faxis.ai" className="text-[#00E5FF] hover:underline">privacy@faxis.ai</a>.</p>
            </div>
            <p className="text-xs text-[#5A6474] font-mono pt-6 border-t border-[rgba(138,148,166,0.1)]">
              Last updated: July 2026
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
