import { PageHeader } from "@/components/layout/page-header";

export const metadata = { title: "Cookies Policy" };

export default function CookiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="// Legal"
        title={<>Cookies <span className="text-gradient-cyan-soft">Policy</span></>}
        subtitle="How FAXIS.AI uses cookies and similar technologies on our website."
      />
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 prose prose-invert">
          <div className="space-y-8 text-[#B8C2D1] leading-relaxed text-[15px]">
            <div>
              <h2 className="font-display text-xl font-semibold text-[#E6ECF5] mb-3">1. What are cookies</h2>
              <p>Cookies are small text files stored on your device when you visit a website. They help us understand how you interact with our site, remember your preferences, and improve your browsing experience. Some cookies are strictly necessary for the website to function, while others help us analyze traffic patterns.</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-[#E6ECF5] mb-3">2. How we use cookies</h2>
              <p>FAXIS.AI uses cookies only for essential technical purposes and aggregated analytics. We do not use advertising cookies, tracking cookies from third-party advertisers, or cross-site tracking technologies. The limited analytics data we collect is anonymized and used exclusively to improve our website and understand which sections are most relevant to our visitors.</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-[#E6ECF5] mb-3">3. Types of cookies we use</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-[#E6ECF5]">Strictly necessary cookies:</strong> Required for basic website functionality and security. These cannot be disabled.</li>
                <li><strong className="text-[#E6ECF5]">Analytics cookies:</strong> Anonymized aggregated data about page visits and usage patterns, used for internal reporting only.</li>
                <li><strong className="text-[#E6ECF5]">Preference cookies:</strong> Remember your display preferences (such as dark mode) during your session.</li>
              </ul>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-[#E6ECF5] mb-3">4. Third-party services</h2>
              <p>Our website may use limited third-party services (e.g., font delivery, form processing) that may set their own cookies. These services are selected for their privacy-conscious practices and do not share data for advertising purposes.</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-[#E6ECF5] mb-3">5. Managing cookies</h2>
              <p>You can control and delete cookies through your browser settings. Most browsers allow you to block all cookies, delete existing cookies, or receive a warning before a cookie is stored. Please note that disabling certain cookies may affect website functionality.</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-[#E6ECF5] mb-3">6. Contact</h2>
              <p>For questions about our use of cookies, contact us at <a href="mailto:privacy@faxis.ai" className="text-[#00E5FF] hover:underline">privacy@faxis.ai</a>.</p>
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
