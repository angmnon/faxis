"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface MediaBandProps {
  video?: string;
  poster?: string;
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  align?: "center" | "left";
  minH?: string;
  children?: React.ReactNode;
  tone?: "dark" | "gradient";
}

/**
 * Full-viewport cinematic band: optional looping background video or still,
 * gradient overlay, oversized title, one or two CTAs.
 */
export function MediaBand({
  video,
  poster,
  eyebrow,
  title,
  lead,
  primaryCta,
  secondaryCta,
  align = "center",
  minH = "min-h-[100svh]",
  children,
  tone = "dark",
}: MediaBandProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const sectionRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (!videoRef.current) return;
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [video]);

  return (
    <section ref={sectionRef} className={`relative overflow-hidden ${minH} flex items-center`}>
      {/* Background media */}
      {video && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={video}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      )}
      {!video && poster && (
        <div
          className="absolute inset-0 ken-burns bg-cover bg-center"
          style={{ backgroundImage: `url(${poster})` }}
        />
      )}
      {!video && !poster && (
        <div className="absolute inset-0 bg-[#0b0b0c]" />
      )}

      {/* Overlay */}
      {tone === "dark" ? <div className="band-overlay" /> : <div className="band-overlay-simple" />}

      {/* Content */}
      <div
        className={`relative z-10 w-full max-w-6xl mx-auto px-6 py-28 ${
          align === "center" ? "text-center" : "text-left"
        }`}
      >
        {eyebrow && (
          <div className="label-industrial mb-6 !text-white/70" data-delay="50">{eyebrow}</div>
        )}
        <h2 className="display-section text-white">{title}</h2>
        {lead && (
          <p className={`mt-6 text-base md:text-lg text-white/80 leading-relaxed max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
            {lead}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className={`flex flex-wrap gap-3 mt-10 ${align === "center" ? "justify-center" : ""}`}>
            {primaryCta && (
              <Link href={primaryCta.href} className="btn-primary">
                {primaryCta.label}
                <ArrowUpRight size={15} strokeWidth={2.2} />
              </Link>
            )}
            {secondaryCta && (
              <Link href={secondaryCta.href} className="btn-secondary">
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
