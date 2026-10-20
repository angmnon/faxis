import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { ArrowUpRight, MapPin } from "lucide-react";

const FOOTER_LINKS = {
  Solutions: [
    { label: "For Brands & Retailers", href: "/brands" },
    { label: "Product & SKU Localization", href: "/brands#assessment" },
    { label: "Local Factory Deployment", href: "/how-it-works" },
    { label: "Manufacturing Operations", href: "/how-it-works" },
    { label: "Existing Factory Transformation", href: "/technology" },
  ],
  Explore: [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Technology", href: "/technology" },
    { label: "Global Network", href: "/network" },
    { label: "FAQ", href: "/faq" },
    { label: "About FAXIS.AI", href: "/about" },
    { label: "Insights", href: "/insights" },
  ],
  "Work With Us": [
    { label: "Brand & Retailer Enquiries", href: "/contact?intent=brand" },
    { label: "Manufacturing Partners", href: "/contact?intent=partner" },
    { label: "Investment & Site Partners", href: "/contact?intent=investor" },
    { label: "Careers", href: "/careers" },
  ],
};

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        {/* CTA banner */}
        <div className="card-neutral rounded-2xl p-10 lg:p-12 mb-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <div className="label-industrial mb-3">Have a product or market in mind?</div>
            <h3 className="font-display text-2xl lg:text-3xl font-semibold text-foreground leading-tight max-w-xl tracking-tight">
              Let&apos;s assess the local manufacturing opportunity.
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact?intent=brand" className="btn-primary">
              Start a Conversation
              <ArrowUpRight size={15} strokeWidth={2.2} />
            </Link>
            <Link href="/how-it-works" className="btn-secondary">
              How It Works
            </Link>
          </div>
        </div>

        {/* Footer main */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-6">
          <div className="col-span-2">
            <Logo size="lg" />
            <p className="font-display text-sm font-medium text-foreground mt-5">
              Manufacturing, closer to every market.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mt-3 max-w-xs">
              FAXIS.AI helps global brands and retailers design, deploy, and operate AI-enabled
              manufacturing capacity in the markets they serve. We connect product requirements,
              manufacturing systems, local capabilities, quality controls, and ongoing operations
              through a coordinated production network.
            </p>
            <div className="mt-6 flex items-start gap-2.5 text-sm text-muted-foreground">
              <MapPin size={15} className="mt-0.5 flex-shrink-0" />
              <span>Headquartered in Singapore</span>
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-foreground font-semibold text-[13px] mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={11}
                        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 FAXIS.AI Pte. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="/cookies" className="hover:text-foreground transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
