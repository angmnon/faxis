import { PageHeader } from "@/components/layout/page-header";

export const metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="// Legal"
        title={<>Terms of <span className="text-gradient-cyan-soft">Use</span></>}
        subtitle="Terms governing use of the FAXIS.AI website. Commercial partnership terms are agreed separately in writing."
      />
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-[#B8C2D1] leading-relaxed text-[15px] space-y-8">
          <div>
            <h2 className="font-display text-xl font-semibold text-[#E6ECF5] mb-3">1. Acceptance of terms</h2>
            <p>By accessing this website you agree to be bound by these terms. If you do not agree, please do not use the site.</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-[#E6ECF5] mb-3">2. Content ownership</h2>
            <p>All content on this site — including text, graphics, logos, and code — is owned by FAXIS.AI Pte. Ltd. or its licensors and is protected by intellectual property laws.</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-[#E6ECF5] mb-3">3. Use of information</h2>
            <p>Content on this site is provided for informational purposes about FAXIS.AI and its partnership programs. It does not constitute a binding offer. Commercial terms are agreed in signed partnership agreements.</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-[#E6ECF5] mb-3">4. No warranty</h2>
            <p>The site is provided on an &quot;as-is&quot; basis. While we strive for accuracy, we do not warrant that content is error-free or continuously available.</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-[#E6ECF5] mb-3">5. Limitation of liability</h2>
            <p>To the maximum extent permitted by law, FAXIS.AI is not liable for any indirect or consequential damages arising from use of the site.</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-[#E6ECF5] mb-3">6. Changes</h2>
            <p>We may update these terms from time to time. The current version will be posted on this page.</p>
          </div>
          <p className="text-xs text-[#5A6474] font-mono pt-6 border-t border-[rgba(138,148,166,0.1)]">
            Last updated: July 2026
          </p>
        </div>
      </section>
    </>
  );
}
