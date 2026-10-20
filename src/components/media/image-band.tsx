import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ImageBandProps {
  src: string;
  eyebrow?: string;
  title?: React.ReactNode;
  lead?: React.ReactNode;
  cta?: { label: string; href: string };
  align?: "center" | "left";
  minH?: string;
}

/** Full-width cinematic still-image band used as a section breaker on inner pages. */
export function ImageBand({
  src,
  eyebrow,
  title,
  lead,
  cta,
  align = "center",
  minH = "min-h-[60vh]",
}: ImageBandProps) {
  return (
    <section className={`relative overflow-hidden ${minH} flex items-center`}>
      <div
        className="absolute inset-0 bg-cover bg-center ken-burns"
        style={{ backgroundImage: `url(${src})` }}
      />
      {/* Strong gradient for text contrast */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(4,4,5,0.72) 0%, rgba(4,4,5,0.55) 45%, rgba(4,4,5,0.82) 100%)",
        }}
      />
      <div
        className={`relative z-10 w-full max-w-6xl mx-auto px-6 py-20 ${
          align === "center" ? "text-center" : "text-left"
        }`}
      >
        {eyebrow && <div className="label-industrial mb-5 !text-white/70">{eyebrow}</div>}
        {title && <h2 className="display-section text-white">{title}</h2>}
        {lead && (
          <p
            className={`mt-5 text-base md:text-lg text-white/80 leading-relaxed max-w-2xl ${
              align === "center" ? "mx-auto" : ""
            }`}
          >
            {lead}
          </p>
        )}
        {cta && (
          <div className={`mt-8 ${align === "center" ? "flex justify-center" : ""}`}>
            <Link href={cta.href} className="btn-primary">
              {cta.label}
              <ArrowUpRight size={15} strokeWidth={2.2} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
