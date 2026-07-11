import { PageHeader } from "@/components/layout/page-header";
import { Target, Globe2, Sparkles, Shield, Rocket, Users, Award, Cpu } from "lucide-react";
import Link from "next/link";

const VALUES = [
  { icon: Target, title: "Engineering Precision", desc: "We treat every process parameter, every millisecond of cycle time, and every micron of tolerance as a first-class design problem." },
  { icon: Sparkles, title: "AI-Native Mindset", desc: "We do not bolt AI onto legacy workflows. We design factories from first principles around what AI and robotics make possible." },
  { icon: Globe2, title: "Global by Design", desc: "Headquartered in Singapore, built from day one as a global platform — our partner network spans continents, not provinces." },
  { icon: Shield, title: "Operational Rigor", desc: "Lights-out manufacturing demands reliability beyond human-shift assumptions. Our systems self-diagnose, self-heal, and report transparently." },
];

const MILESTONES = [
  { year: "2025", title: "Founded in Singapore", desc: "FAXIS.AI is founded by a team of industrial-AI and advanced-manufacturing veterans, with a mission to deliver fully unmanned production." },
  { year: "2025", title: "Three funding rounds closed", desc: "Tens of millions USD in capital raised to accelerate product development and global market entry." },
  { year: "2026", title: "Four process families validated", desc: "Autonomous production validated across 3D printing, CNC machining, sheet metal, and injection molding." },
  { year: "2026", title: "Global Partner Network launched", desc: "Opening the platform to qualified regional partners across North America, Europe, Southeast Asia, and the Middle East." },
];

const LEADERSHIP = [
  { name: "Founding Team", role: "Industry veterans from leading AI robotics firms, advanced manufacturing companies, and global technology companies.", initials: "FX" },
  { name: "Engineering Leadership", role: "PhD-level engineers in computer vision, CAM/CAD, optimization, robotics, and distributed systems.", initials: "EN" },
  { name: "Manufacturing Ops", role: "Decades of combined experience building and operating production factories in high-mix, high-precision segments.", initials: "OP" },
  { name: "Global Business", role: "Regional leaders with deep networks in industrial equipment distribution and manufacturing investment.", initials: "BD" },
];

export const metadata = {
  title: "About FAXIS.AI — The AI Company Building Lights-Out Manufacturing",
  description: "Learn about FAXIS.AI's mission, team, values, and global ambition to redefine manufacturing through fully autonomous AI factories.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About FAXIS.AI"
        eyebrow="// Our Mission"
        title={<>Engineered to run when the lights are off. <span className="text-gradient-cyan-soft">Human-led, AI-operated.</span></>}
        subtitle="FAXIS.AI is an AI technology company headquartered in Singapore, dedicated to making fully unmanned industrial manufacturing a global, replicable reality across every major process family."
      />

      {/* Mission block */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="reveal label-industrial mb-5">{"//"} Mission</div>
              <h2 className="reveal font-display text-3xl md:text-4xl font-semibold leading-tight text-[#E6ECF5] mb-6" data-delay="100">
                Autonomous production, from upload to delivery — without a single human hand on the floor.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-4">
              <p className="reveal text-[#B8C2D1] text-base leading-relaxed mb-5" data-delay="200">
                FAXIS.AI was founded in 2025 on a clear thesis: the trillion-dollar global manufacturing industry
                is at the beginning of a once-in-a-generation transition. Labor is no longer abundant,
                supply chains are re-localizing, and multi-modal AI has crossed the threshold required to
                handle the perceptual and cognitive work that previously ran on experienced human engineers.
              </p>
              <p className="reveal text-[#8A94A6] text-base leading-relaxed mb-5" data-delay="250">
                We are not a software tool vendor, and we are not a machine builder. We are a technology
                company that delivers and operates complete autonomous factories — and we are building a
                global network of partners to deploy them in every major manufacturing market on earth.
              </p>
              <p className="reveal text-[#8A94A6] text-base leading-relaxed" data-delay="300">
                Our goal is not incremental automation: it is 7×24 lights-out operation across
                quoting, scheduling, CAM programming, production, and quality control. Not as a demo.
                As a deployed, revenue-generating operating model.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="h-px divider-glow" />
      </div>

      {/* Values */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-14">
            <div className="reveal label-industrial mb-5">{"//"} Core Values</div>
            <h2 className="reveal font-display text-3xl md:text-4xl font-semibold leading-tight text-[#E6ECF5]" data-delay="100">
              Principles that shape every line of code and every factory line.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {VALUES.map((v, i) => (
              <div key={v.title} className="reveal card-border-glow rounded-xl p-7 relative" data-delay={`${i * 80}`}>
                <div className="chamfer-top absolute inset-0 rounded-xl pointer-events-none" />
                <v.icon size={22} className="text-[#00E5FF] mb-4" strokeWidth={1.6} />
                <h3 className="font-display text-lg font-semibold text-[#E6ECF5] mb-2">{v.title}</h3>
                <p className="text-[13px] text-[#8A94A6] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 lg:py-28 bg-[#060A10] border-y border-[rgba(138,148,166,0.08)]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-14">
            <div className="reveal label-industrial mb-5">{"//"} Trajectory</div>
            <h2 className="reveal font-display text-3xl md:text-4xl font-semibold leading-tight text-[#E6ECF5]" data-delay="100">
              From founding to global network in under two years.
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-0 md:left-[110px] top-2 bottom-2 w-px bg-gradient-to-b from-[#00E5FF]/50 to-transparent" />
            {MILESTONES.map((m, i) => (
              <div key={m.title} className="reveal relative flex flex-col md:flex-row md:items-start gap-4 md:gap-8 mb-10 last:mb-0 pl-8 md:pl-0" data-delay={`${i * 100}`}>
                <div className="md:w-[110px] flex-shrink-0">
                  <div className="absolute left-[-9px] md:left-[101px] top-2 w-4 h-4 rounded-full bg-[#05070A] border-2 border-[#00E5FF] flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse-glow" />
                  </div>
                  <span className="font-mono text-xl text-[#00E5FF] font-semibold">{m.year}</span>
                </div>
                <div className="card-border-glow rounded-lg p-6 flex-grow relative">
                  <div className="chamfer-top absolute inset-0 rounded-lg pointer-events-none" />
                  <h4 className="font-display text-lg font-semibold text-[#E6ECF5] mb-2 relative">
                    {m.title}
                  </h4>
                  <p className="text-[13px] text-[#8A94A6] leading-relaxed relative">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-14">
            <div className="reveal label-industrial mb-5">{"//"} The Team</div>
            <h2 className="reveal font-display text-3xl md:text-4xl font-semibold leading-tight text-[#E6ECF5]" data-delay="100">
              Built by people who ship hardware, write production software, and operate factories.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {LEADERSHIP.map((p, i) => (
              <div key={p.name} className="reveal card-border-glow rounded-xl p-6 text-center relative" data-delay={`${i * 80}`}>
                <div className="chamfer-top absolute inset-0 rounded-xl pointer-events-none" />
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#0A1520] to-[#0F141C] border border-[rgba(0,229,255,0.25)] flex items-center justify-center mb-4 relative">
                  <span className="font-display text-2xl font-bold text-[#00E5FF]">{p.initials}</span>
                  <span className="absolute inset-0 rounded-full" style={{ boxShadow: "inset 0 0 20px rgba(0,229,255,0.1)" }} />
                </div>
                <h4 className="font-display text-[15px] font-semibold text-[#E6ECF5] mb-1.5">{p.name}</h4>
                <p className="text-[12px] text-[#8A94A6] leading-relaxed">{p.role}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/careers" className="btn-primary inline-flex">
              <Users size={15} strokeWidth={2} />
              Join Our Team
              <Rocket size={14} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
