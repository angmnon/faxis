import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

const FOOTER_LINKS = {
  Platform: [
    { label: "AI Quoting Engine", href: "/#technology" },
    { label: "AI Scheduling (APS)", href: "/#technology" },
    { label: "AI CAM & Process", href: "/#technology" },
    { label: "Lights-Out Execution", href: "/#technology" },
  ],
  Solutions: [
    { label: "3D Printing", href: "/#solutions" },
    { label: "CNC Machining", href: "/#solutions" },
    { label: "Sheet Metal", href: "/#solutions" },
    { label: "Injection Molding", href: "/#solutions" },
  ],
  Company: [
    { label: "About FAXIS.AI", href: "/about" },
    { label: "Global Partners", href: "/#partners" },
    { label: "Careers", href: "/careers" },
    { label: "News & Press", href: "/about" },
  ],
  Partners: [
    { label: "Partnership Models", href: "/#partners" },
    { label: "Regional Master Partner", href: "/#partners" },
    { label: "JV Factory", href: "/#partners" },
    { label: "License & Operate", href: "/#partners" },
  ],
};

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        {/* CTA banner */}
        <div className="card-neutral rounded-2xl p-10 lg:p-12 mb-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <div className="label-industrial mb-3">Join the Network</div>
            <h3 className="font-display text-2xl lg:text-3xl font-semibold text-foreground leading-tight max-w-xl tracking-tight">
              Redefine manufacturing with us. Build the future of lights-out production.
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Become a Partner
              <ArrowUpRight size={15} strokeWidth={2.2} />
            </Link>
            <Link href="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>

        {/* Footer main */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-6">
          <div className="col-span-2">
            <Logo size="lg" />
            <p className="text-muted-foreground text-sm leading-relaxed mt-5 max-w-xs">
              FAXIS.AI is an AI technology company dedicated to fully unmanned industrial
              manufacturing, building the world&apos;s first end-to-end network of lights-out factories.
            </p>
            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 flex-shrink-0" />
                <span>Headquartered in Singapore<br />Operating across 4 continents</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="flex-shrink-0" />
                <a href="mailto:partners@faxis.ai" className="hover:text-foreground transition-colors">
                  partners@faxis.ai
                </a>
              </div>
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
            © 2026 FAXIS.AI Pte. Ltd. — Lights-Out Factory Network. All rights reserved.
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
