import * as React from "react";
import { Check } from "lucide-react";

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal card-neutral rounded-2xl p-7 ${className}`}>{children}</div>;
}

export function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-[13.5px] text-foreground/80 leading-relaxed">
      <Check size={14} className="mt-0.5 flex-shrink-0 text-foreground" strokeWidth={2.5} />
      <span>{children}</span>
    </li>
  );
}

export function Step({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="reveal card-neutral rounded-xl p-6">
      <div className="font-mono text-2xl font-semibold text-muted-foreground mb-4">{num}</div>
      <h3 className="font-display text-base font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-[13px] text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex w-fit items-center gap-1.5 px-2.5 py-1 rounded-full border border-border text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
      <span className="w-1 h-1 rounded-full bg-foreground" />
      {children}
    </span>
  );
}
