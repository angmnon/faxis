"use client";

import * as React from "react";
import { PageHeader } from "@/components/layout/page-header";
import { Mail, MapPin, Globe2, ArrowUpRight, CheckCircle2, Send, Building2, UserRound, Briefcase, MessageSquare } from "lucide-react";

const REGIONS = [
  { name: "Asia-Pacific (HQ)", flag: "SG", desc: "Singapore headquarters & Asia-Pac partnerships", email: "apac@faxis.ai" },
  { name: "North America", flag: "US", desc: "US, Canada & Mexico partner development", email: "namerica@faxis.ai" },
  { name: "Europe", flag: "EU", desc: "EU, UK & EFTA regional partners", email: "europe@faxis.ai" },
  { name: "Middle East & Africa", flag: "AE", desc: "GCC, MENA & African partnerships", email: "mena@faxis.ai" },
];

const MODELS = [
  { value: "regional", label: "Regional Master Partner" },
  { value: "jv", label: "Joint Venture Factory" },
  { value: "license", label: "License & Operate" },
  { value: "unsure", label: "Not sure yet — let's discuss" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "", company: "", email: "", region: "Asia-Pacific (HQ)", model: "unsure", message: "",
  });
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        label="Get in Touch"
        eyebrow="// Contact"
        title={<>Start the partnership conversation.</>}
        subtitle="Share a bit about your organization and target market. Our partnership team will respond within two business days to schedule a discovery call."
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="card-neutral rounded-2xl p-10 lg:p-14 text-center">
                  <CheckCircle2 size={52} className="text-foreground mx-auto mb-5" strokeWidth={1.5} />
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                    Inquiry received.
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto mb-6">
                    Thank you, {formData.name || "partner"}. Our regional partnership team will
                    be in touch within 2 business days to schedule a discovery call.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-secondary">
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card-neutral rounded-2xl p-8 lg:p-10">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-2">Partnership Inquiry</h3>
                  <p className="text-sm text-muted-foreground mb-8">All fields required unless marked optional.</p>

                  <div className="grid md:grid-cols-2 gap-5">
                    <Field label="Full Name" icon={UserRound}>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent outline-none text-foreground placeholder-muted-foreground text-sm"
                        placeholder="Jane Smith"
                      />
                    </Field>
                    <Field label="Company / Organization" icon={Building2}>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-transparent outline-none text-foreground placeholder-muted-foreground text-sm"
                        placeholder="Acme Industrial Holdings"
                      />
                    </Field>
                    <Field label="Business Email" icon={Mail}>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent outline-none text-foreground placeholder-muted-foreground text-sm"
                        placeholder="jane@company.com"
                      />
                    </Field>
                    <Field label="Target Region" icon={Globe2}>
                      <select
                        value={formData.region}
                        onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                        className="w-full bg-transparent outline-none text-foreground text-sm appearance-none cursor-pointer"
                      >
                        {REGIONS.map((r) => (
                          <option key={r.name} value={r.name}>{r.name}</option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <div className="mt-5">
                    <label className="block text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-3">
                      <Briefcase size={11} className="inline mr-1.5 -mt-0.5" />
                      Partnership Model of Interest
                    </label>
                    <div className="grid sm:grid-cols-2 gap-2.5">
                      {MODELS.map((m) => (
                        <label
                          key={m.value}
                          className={[
                            "flex items-center gap-2.5 p-3 rounded-lg border cursor-pointer transition-all text-sm",
                            formData.model === m.value
                              ? "border-foreground/60 bg-muted text-foreground"
                              : "border-border text-muted-foreground hover:border-muted-foreground",
                          ].join(" ")}
                        >
                          <input
                            type="radio"
                            name="model"
                            value={m.value}
                            checked={formData.model === m.value}
                            onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                            className="hidden"
                          />
                          <span className={[
                            "w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center",
                            formData.model === m.value ? "border-foreground" : "border-muted-foreground",
                          ].join(" ")}>
                            {formData.model === m.value && <span className="w-1.5 h-1.5 rounded-full bg-foreground" />}
                          </span>
                          {m.label}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5">
                    <Field label="Tell us about your business & goals" icon={MessageSquare} multiline>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-transparent outline-none text-foreground placeholder-muted-foreground text-sm resize-none"
                        placeholder="Your background, manufacturing relationships, target market, and timeline..."
                      />
                    </Field>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center mt-7 !py-3.5 disabled:opacity-60"
                  >
                    {loading ? (
                      <>Processing...</>
                    ) : (
                      <>
                        <Send size={15} strokeWidth={2} />
                        Submit Partnership Inquiry
                        <ArrowUpRight size={15} strokeWidth={2.2} />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] font-mono text-muted-foreground mt-4 text-center">
                    We respond within 2 business days. All inquiries are treated in strict confidence.
                  </p>
                </form>
              )}
            </div>

            {/* Regional contacts */}
            <div className="lg:col-span-5">
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Regional Contacts</h3>
              <p className="text-sm text-muted-foreground mb-6">Reach out to the team closest to your market.</p>

              <div className="space-y-3 mb-8">
                {REGIONS.map((r, i) => (
                  <div key={r.name} className="reveal card-neutral rounded-lg p-5" data-delay={`${i * 70}`}>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-md border border-border bg-muted flex items-center justify-center flex-shrink-0 font-mono text-xs font-bold text-foreground">
                        {r.flag}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display text-[15px] font-semibold text-foreground mb-1">{r.name}</h4>
                        <p className="text-[12px] text-muted-foreground mb-2 leading-relaxed">{r.desc}</p>
                        <a href={`mailto:${r.email}`} className="inline-flex items-center gap-1 text-[12px] text-foreground font-mono hover:underline">
                          <Mail size={11} />
                          {r.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="card-neutral rounded-lg p-6 flex items-start gap-3">
                <MapPin size={18} className="text-foreground flex-shrink-0 mt-0.5" strokeWidth={1.6} />
                <div>
                  <h4 className="font-display text-sm font-semibold text-foreground mb-1.5">Global Headquarters</h4>
                  <p className="text-[12px] text-muted-foreground leading-relaxed font-mono">
                    FAXIS.AI Pte. Ltd.<br />
                    Singapore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, icon: Icon, children, multiline }: { label: string; icon: React.ElementType; children: React.ReactNode; multiline?: boolean }) {
  return (
    <div>
      <label className="block text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
        <Icon size={11} className="inline mr-1.5 -mt-0.5" />
        {label}
      </label>
      <div className={[
        "rounded-lg bg-muted/40 border border-border px-3.5 transition-colors",
        multiline ? "py-3" : "h-11 flex items-center",
        "focus-within:border-muted-foreground",
      ].join(" ")}>
        {children}
      </div>
    </div>
  );
}
