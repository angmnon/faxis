import { PageBand } from "@/components/layout/page-band";

export const metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <>
      <PageBand
        eyebrow="// Legal"
        title={<>Terms of Use</>}
        subtitle="Terms governing use of the FAXIS.AI website. Commercial partnership terms are agreed separately in writing."
      />
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="space-y-8 text-foreground/80 leading-relaxed text-[15px]">
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">1. Acceptance of terms</h2>
              <p>By accessing this website you agree to be bound by these terms. If you do not agree, please do not use the site.</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">2. Content ownership</h2>
              <p>All content on this site — including text, graphics, logos, and code — is owned by FAXIS.AI Pte. Ltd. or its licensors and is protected by intellectual property laws.</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">3. Use of information</h2>
              <p>Content on this site is provided for informational purposes about FAXIS.AI and its partnership programs. It does not constitute a binding offer. Commercial terms are agreed in signed partnership agreements.</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">4. No warranty</h2>
              <p>The site is provided on an &quot;as-is&quot; basis. While we strive for accuracy, we do not warrant that content is error-free or continuously available.</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">5. Limitation of liability</h2>
              <p>To the maximum extent permitted by law, FAXIS.AI is not liable for any indirect or consequential damages arising from use of the site.</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">6. Changes</h2>
              <p>We may update these terms from time to time. The current version will be posted on this page.</p>
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
