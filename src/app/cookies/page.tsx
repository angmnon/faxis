import Link from "next/link";
import { PageBand } from "@/components/layout/page-band";

export const metadata = { title: "Cookies Policy" };

export default function CookiesPage() {
  return (
    <>
      <PageBand
        eyebrow="// Legal"
        title={<>Cookies Policy</>}
        subtitle="How FAXIS.AI uses cookies and similar technologies on our website."
      />
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="space-y-8 text-foreground/80 leading-relaxed text-[15px]">
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">1. What are cookies</h2>
              <p>Cookies are small text files stored on your device when you visit a website. They help us understand how you interact with our site, remember your preferences, and improve your browsing experience. Some cookies are strictly necessary for the website to function, while others help us analyze traffic patterns.</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">2. How we use cookies</h2>
              <p>FAXIS.AI uses cookies only for essential technical purposes and aggregated analytics. We do not use advertising cookies, tracking cookies from third-party advertisers, or cross-site tracking technologies. The limited analytics data we collect is anonymized and used exclusively to improve our website and understand which sections are most relevant to our visitors.</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">3. Types of cookies we use</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-foreground">Strictly necessary cookies:</strong> Required for basic website functionality and security. These cannot be disabled.</li>
                <li><strong className="text-foreground">Analytics cookies:</strong> Anonymized aggregated data about page visits and usage patterns, used for internal reporting only.</li>
                <li><strong className="text-foreground">Preference cookies:</strong> Remember your display preferences (such as dark mode) during your session.</li>
              </ul>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">4. Third-party services</h2>
              <p>Our website may use limited third-party services (e.g., font delivery, form processing) that may set their own cookies. These services are selected for their privacy-conscious practices and do not share data for advertising purposes.</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">5. Managing cookies</h2>
              <p>You can control and delete cookies through your browser settings. Most browsers allow you to block all cookies, delete existing cookies, or receive a warning before a cookie is stored. Please note that disabling certain cookies may affect website functionality.</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">6. Contact</h2>
              <p>For questions about our use of cookies, reach us through the <Link href="/contact" className="text-link hover:underline">contact page</Link>.</p>
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
