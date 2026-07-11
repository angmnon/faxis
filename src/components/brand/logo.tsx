"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface LogoMarkProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  glow?: boolean;
}

/**
 * FAXIS.AI geometric icon mark.
 * An axis-cross with an X (milling-tool / CNC crosshair aesthetic) + center node.
 */
export function LogoMark({ size = 32, glow = false, className, ...props }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      style={glow ? { filter: "drop-shadow(0 0 8px rgba(0,229,255,0.55))" } : undefined}
      {...props}
    >
      <defs>
        <linearGradient id="faxis-grad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#00E5FF" />
          <stop offset="1" stopColor="#7B61FF" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="#0A0F17" stroke="url(#faxis-grad)" strokeOpacity="0.7" strokeWidth="1.2" />
      <line x1="12" y1="32" x2="52" y2="32" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="12" x2="32" y2="52" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" />
      <line x1="18" y1="18" x2="46" y2="46" stroke="#00E5FF" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="46" y1="18" x2="18" y2="46" stroke="#00E5FF" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="32" cy="32" r="5" fill="#05070A" stroke="#00E5FF" strokeWidth="2" />
      <circle cx="32" cy="32" r="2" fill="#00E5FF" />
      <path d="M14 14L20 14M14 14L14 20" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <path d="M50 14L44 14M50 14L50 20" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <path d="M14 50L20 50M14 50L14 44" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <path d="M50 50L44 50M50 50L50 44" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  showMark?: boolean;
  className?: string;
}

export function Logo({ variant = "light", size = "md", showMark = true, className }: LogoProps) {
  const sizes = {
    sm: { mark: 24, text: "text-[15px]", ai: "text-[10px]" },
    md: { mark: 32, text: "text-[20px]", ai: "text-[12px]" },
    lg: { mark: 44, text: "text-[28px]", ai: "text-[16px]" },
  };
  const s = sizes[size];
  const textColor = variant === "light" ? "text-[#E6ECF5]" : "text-[#0A0F17]";
  const dotColor = "text-[#00E5FF]";

  return (
    <div className={cn("flex items-center gap-2.5 select-none", className)}>
      {showMark && <LogoMark size={s.mark} />}
      <div className="flex items-baseline leading-none">
        <span
          className={cn(
            "font-semibold tracking-tight font-display",
            s.text,
            textColor,
          )}
          style={{ letterSpacing: "-0.02em" }}
        >
          FAXIS
        </span>
        <span
          className={cn(
            "font-semibold tracking-tight font-display ml-0.5",
            s.text,
            dotColor,
          )}
        >
          .AI
        </span>
      </div>
    </div>
  );
}
