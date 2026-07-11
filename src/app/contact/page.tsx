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
    // Simulate submission — no backend endpoint exists, so we simulate success
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        label="Get in Touch"
        eyebrow="// Contact"
        title={<>Start the <span className="text-gradient-cyan-soft">partnership conversation.</span></>}
        subtitle="Share a bit about your organization and target market. Our partnership team will respond within two business days to schedule a discovery call."
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="card-border-glow rounded-2xl p-10 lg:p-14 text-center relative">
                  <div className="chamfer-top absolute inset-0 rounded-2xl pointer-events-none" />
                  <CheckCircle2 size={52} className="text-[#30D878] mx-auto mb-5" strokeWidth={1.5} />
                  <h3 className="font-display text-2xl font-semibold text-[#E6ECF5] mb-3">
                    Inquiry received.
                  </h3>
                  <p className="text-[#8A94A6] max-w-md mx-auto mb-6">
                    Thank you, {formData.name || "partner"}. Our regional partnership team will
                    be in touch within 2 business days to schedule a discovery call.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card-border-glow rounded-2xl p-8 lg:p-10 relative">
                  <div className="chamfer-top absolute inset-0 rounded-2xl pointer-events-none" />
                  <div className="relative">
                    <h3 className="font-display text-2xl font-semibold text-[#E6ECF5] mb-2">Partnership Inquiry</h3>
                    <p className="text-sm text-[#8A94A6] mb-8">All fields required unless marked optional.</p>

                    <div className="grid md:grid-cols-2 gap-5">
                      <Field label="Full Name" icon={UserRound}>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-transparent outline-none text-[#E6ECF5] placeholder-[#5A6474] text-sm"
                          placeholder="Jane Smith"
                        />
                      </Field>
                      <Field label="Company / Organization" icon={Building2}>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full bg-transparent outline-none text-[#E6ECF5] placeholder-[#5A6474] text-sm"
                          placeholder="Acme Industrial Holdings"
                        />
                      </Field>
                      <Field label="Business Email" icon={Mail}>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-transparent outline-none text-[#E6ECF5] placeholder-[#5A6474] text-sm"
                          placeholder="jane@company.com"
                        />
                      </Field>
                      <Field label="Target Region" icon={Globe2}>
                        <select
                          value={formData.region}
                          onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                          className="w-full bg-transparent outline-none text-[#E6ECF5] text-sm appearance-none cursor-pointer"
                        >
                          {REGIONS.map((r) => (
                            <option key={r.name} value={r.name} className="bg-[#0F141C]">{r.name}</option>
                          ))}
                        </select>
                      </Field>
                    </div>

                    <div className="mt-5">
                      <label className="block text-[11px] font-mono uppercase tracking-widest text-[#8A94A6] mb-3">
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
                                ? "border-[#00E5FF]/50 bg-[rgba(0,229,255,0.06)] text-[#E6ECF5]"
                                : "border-[rgba(138,148,166,0.15)] text-[#8A94A6] hover:border-[rgba(0,229,255,0.25)]",
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
                              formData.model === m.value ? "border-[#00E5FF]" : "border-[#5A6474]",
                            ].join(" ")}>
                              {formData.model === m.value && <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />}
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
                          className="w-full bg-transparent outline-none text-[#E6ECF5] placeholder-[#5A6474] text-sm resize-none"
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
                          <ArrowUpRight size={15} strokeWidth={2.5} />
                        </>
                      )}
                    </button>

                    <p className="text-[11px] font-mono text-[#5A6474] mt-4 text-center">
                      We respond within 2 business days. All inquiries are treated in strict confidence.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Regional contacts */}
            <div className="lg:col-span-5">
              <h3 className="font-display text-xl font-semibold text-[#E6ECF5] mb-2">Regional Contacts</h3>
              <p className="text-sm text-[#8A94A6] mb-6">Reach out to the team closest to your market.</p>

              <div className="space-y-3 mb-8">
                {REGIONS.map((r, i) => (
                  <div key={r.name} className="reveal card-border-glow rounded-lg p-5 relative" data-delay={`${i * 70}`}>
                    <div className="chamfer-top absolute inset-0 rounded-lg pointer-events-none" />
                    <div className="relative flex items-start gap-4">
                      <div className="w-10 h-10 rounded-md bg-[rgba(0,229,255,0.08)] border border-[rgba(0,229,255,0.2)] flex items-center justify-center flex-shrink-0 font-mono text-xs font-bold text-[#00E5FF]">
                        {r.flag}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display text-[15px] font-semibold text-[#E6ECF5] mb-1">{r.name}</h4>
                        <p className="text-[12px] text-[#8A94A6] mb-2 leading-relaxed">{r.desc}</p>
                        <a href={`mailto:${r.email}`} className="inline-flex items-center gap-1 text-[12px] text-[#00E5FF] font-mono hover:underline">
                          <Mail size={11} />
                          {r.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="card-border-glow rounded-lg p-6 relative bg-[rgba(0,229,255,0.03)]">
                <div className="chamfer-top absolute inset-0 rounded-lg pointer-events-none" />
                <div className="relative flex items-start gap-3">
                  <MapPin size={18} className="text-[#00E5FF] flex-shrink-0 mt-0.5" strokeWidth={1.6} />
                  <div>
                    <h4 className="font-display text-sm font-semibold text-[#E6ECF5] mb-1.5">Global Headquarters</h4>
                    <p className="text-[12px] text-[#8A94A6] leading-relaxed font-mono">
                      FAXIS.AI Pte. Ltd.<br />
                      Singapore<br />
                      {/* We do not print a fake street address; this is framed as HQ */}
                    </p>
                  </div>
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
      <label className="block text-[11px] font-mono uppercase tracking-widest text-[#8A94A6] mb-2">
        <Icon size={11} className="inline mr-1.5 -mt-0.5" />
        {label}
      </label>
      <div className={[
        "rounded-lg bg-[rgba(138,148,166,0.04)] border px-3.5 transition-colors",
        multiline ? "py-3" : "h-11 flex items-center",
        "border-[rgba(138,148,166,0.15)] focus-within:border-[#00E5FF]/50 focus-within:bg-[rgba(0,229,255,0.03)]",
      ].join(" ")}>
        {children}
      </div>
    </div>
  );
}
