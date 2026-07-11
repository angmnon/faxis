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
    <footer className="relative mt-32 border-t border-[rgba(138,148,166,0.12)] bg-[#06090E]">
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/40 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 pt-20 pb-10">
        {/* CTA banner */}
        <div className="relative overflow-hidden rounded-2xl border border-[rgba(138,148,166,0.15)] bg-gradient-to-br from-[#0A1520] to-[#080D15] p-10 lg:p-14 mb-20">
          <div className="absolute inset-0 bg-grid-fine opacity-40" />
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-[120px]" />
          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <div className="label-industrial mb-4">{"//"} Join the Network</div>
              <h3 className="font-display text-3xl lg:text-4xl font-semibold text-[#E6ECF5] leading-tight max-w-2xl">
                Redefine manufacturing with us.{" "}
                <span className="text-gradient-cyan-soft">Build the future of lights-out production.</span>
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Become a Partner
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Footer main */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-6">
          <div className="col-span-2 lg:col-span-2">
            <Logo size="lg" />
            <p className="text-[#8A94A6] text-sm leading-relaxed mt-5 max-w-xs">
              FAXIS.AI is an AI technology company dedicated to fully unmanned industrial manufacturing,
              building the world&apos;s first end-to-end network of lights-out factories.
            </p>
            <div className="mt-6 space-y-3 text-sm text-[#8A94A6]">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#00E5FF] mt-0.5 flex-shrink-0" />
                <span>Headquartered in Singapore<br />Operating across 4 continents</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#00E5FF] flex-shrink-0" />
                <a href="mailto:partners@faxis.ai" className="hover:text-[#00E5FF] transition-colors">partners@faxis.ai</a>
              </div>
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[#E6ECF5] font-semibold text-[13px] font-display tracking-wide mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-[#8A94A6] hover:text-[#00E5FF] transition-colors inline-flex items-center gap-1 group"
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
        <div className="mt-16 pt-8 border-t border-[rgba(138,148,166,0.1)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-[#5A6474] font-mono">
            © 2026 FAXIS.AI Pte. Ltd. — Lights-Out Factory Network. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-[#5A6474] font-mono">
            <Link href="/privacy" className="hover:text-[#8A94A6] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#8A94A6] transition-colors">Terms</Link>
            <Link href="/cookies" className="hover:text-[#8A94A6] transition-colors">Cookies</Link>
          </div>
        </div>

        {/* Industrial text mark */}
        <div className="mt-8 overflow-hidden">
          <p className="font-display text-[18vw] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-b from-[rgba(0,229,255,0.06)] to-transparent tracking-tight select-none text-center whitespace-nowrap">
            FAXIS.AI
          </p>
        </div>
      </div>
    </footer>
  );
}
