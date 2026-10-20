import * as React from "react";

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
}

export function SectionHeader({ eyebrow, title, lead, align = "left" }: SectionHeaderProps) {
  const centered = align === "center";
  return (
    <div className={centered ? "max-w-3xl mx-auto text-center mb-14 lg:mb-20" : "max-w-3xl mb-14 lg:mb-20"}>
      <div className="reveal label-industrial mb-5">{eyebrow}</div>
      <h2
        className="reveal font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.12] tracking-tight text-foreground"
        data-delay="100"
      >
        {title}
      </h2>
      {lead && (
        <p
          className="reveal mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl"
          data-delay="200"
        >
          {lead}
        </p>
      )}
    </div>
  );
}
