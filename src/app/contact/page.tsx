"use client";

import * as React from "react";
import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";
import { CheckCircle2, Send, ArrowUpRight, ShieldAlert, Mail } from "lucide-react";

const IDENTITIES = [
  { value: "brand", label: "Brand or retailer" },
  { value: "partner", label: "Manufacturing or industrial partner" },
  { value: "investor", label: "Investment, site or JV partner" },
  { value: "supplier", label: "Supplier or technology partner" },
  { value: "media", label: "Media or other" },
];

const INTENT_DEFAULT: Record<string, string> = {
  brand: "brand",
  partner: "partner",
  investor: "investor",
};

const inputCls =
  "w-full bg-transparent border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-muted-foreground transition-colors";

export default function ContactPage() {
  const [identity, setIdentity] = React.useState("brand");
  const [form, setForm] = React.useState({
    name: "",
    company: "",
    email: "",
    markets: "",
    products: "",
    currentRoute: "",
    demand: "",
    message: "",
  });
  const [consent, setConsent] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  React.useEffect(() => {
    const p = new URLSearchParams(window.location.search).get("intent");
    if (p && INTENT_DEFAULT[p]) setIdentity(INTENT_DEFAULT[p]);
  }, []);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  const mailto = `mailto:angmon126@gmail.com?subject=${encodeURIComponent("FAXIS.AI enquiry — " + form.company)}`;

  return (
    <>
      <PageHeader
        label="Contact"
        eyebrow="// Contact"
        title={<>Start a conversation.</>}
        subtitle="Tell us who you are, what you make or offer, and which market matters most. This form collects an initial enquiry; we respond to meaningful submissions and take next steps under a written plan."
      />

      <section className="pb-24 lg:pb-32">
        <div className="max-w-3xl mx-auto px-6">
          {submitted ? (
            <div className="card-neutral rounded-2xl p-10 lg:p-14 text-center reveal">
              <CheckCircle2 size={52} className="text-foreground mx-auto mb-5" strokeWidth={1.5} />
              <h3 className="font-display text-2xl font-semibold text-foreground mb-3">Enquiry noted.</h3>
              <p className="text-muted-foreground max-w-md mx-auto mb-6 leading-relaxed">
                Thank you, {form.name || "there"}. Your enquiry has been recorded on this page. For a
                reliable direct route, write to us at the address below and reference your company and
                product category.
              </p>
              <a href={mailto} className="btn-primary">
                <Mail size={14} />
                Email angmon126@gmail.com
                <ArrowUpRight size={14} strokeWidth={2.2} />
              </a>
              <button onClick={() => setSubmitted(false)} className="btn-secondary mt-4">
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card-neutral rounded-2xl p-7 lg:p-10 space-y-6 reveal">
              {/* Identity */}
              <div>
                <label className="label-industrial block mb-3">I am contacting as</label>
                <div className="grid sm:grid-cols-2 gap-2">
                  {IDENTITIES.map((o) => (
                    <button
                      type="button"
                      key={o.value}
                      onClick={() => setIdentity(o.value)}
                      className={`text-left px-4 py-3 rounded-xl border text-sm transition-colors ${
                        identity === o.value
                          ? "border-foreground bg-accent text-foreground"
                          : "border-border text-muted-foreground hover:border-muted-foreground"
                      }`}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="label-industrial block mb-2">Full name *</label>
                  <input required className={inputCls} value={form.name} onChange={set("name")} placeholder="Your name" />
                </div>
                <div>
                  <label className="label-industrial block mb-2">Company / organization *</label>
                  <input required className={inputCls} value={form.company} onChange={set("company")} placeholder="Company" />
                </div>
              </div>

              <div>
                <label className="label-industrial block mb-2">Work email *</label>
                <input required type="email" className={inputCls} value={form.email} onChange={set("email")} placeholder="you@company.com" />
              </div>

              <div>
                <label className="label-industrial block mb-2">Target market(s) *</label>
                <input required className={inputCls} value={form.markets} onChange={set("markets")} placeholder="e.g. Southeast Asia, Gulf, North America" />
              </div>

              {identity === "brand" && (
                <>
                  <div>
                    <label className="label-industrial block mb-2">Product category / what you make</label>
                    <input className={inputCls} value={form.products} onChange={set("products")} placeholder="e.g. small kitchen appliances, storage furniture" />
                  </div>
                  <div>
                    <label className="label-industrial block mb-2">Current supply route</label>
                    <input className={inputCls} value={form.currentRoute} onChange={set("currentRoute")} placeholder="Where products are made and shipped from today" />
                  </div>
                  <div>
                    <label className="label-industrial block mb-2">Estimated annual demand</label>
                    <input className={inputCls} value={form.demand} onChange={set("demand")} placeholder="Units or volume range, approximate" />
                  </div>
                </>
              )}

              {identity === "partner" && (
                <div>
                  <label className="label-industrial block mb-2">Your facility or capability</label>
                  <textarea rows={3} className={inputCls} value={form.products} onChange={set("products")} placeholder="Location, equipment, product categories, current operating state" />
                </div>
              )}

              {identity === "investor" && (
                <div>
                  <label className="label-industrial block mb-2">Site, capital, or JV interest</label>
                  <textarea rows={3} className={inputCls} value={form.products} onChange={set("products")} placeholder="Market, available assets, capital capacity, objectives" />
                </div>
              )}

              <div>
                <label className="label-industrial block mb-2">Message</label>
                <textarea rows={4} className={inputCls} value={form.message} onChange={set("message")} placeholder="Share the goal, timeline context, and what you want to assess." />
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-border p-4">
                <ShieldAlert size={16} className="mt-0.5 flex-shrink-0 text-muted-foreground" />
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Do not upload confidential design files, proprietary drawings, or trade secrets through
                  this form. Detailed material is shared only after an agreed confidentiality arrangement.
                </p>
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 h-4 w-4 accent-[var(--foreground)]"
                  required
                />
                <span className="text-xs text-muted-foreground leading-relaxed">
                  I agree that FAXIS.AI may use the information above to respond to this enquiry and keep
                  it for follow-up. See our <Link href="/privacy" className="text-link underline">Privacy Policy</Link>.
                </span>
              </label>

              <button type="submit" disabled={loading || !consent} className="btn-primary w-full justify-center disabled:opacity-50">
                {loading ? "Sending…" : "Send Enquiry"}
                <Send size={14} strokeWidth={2.2} />
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
