"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface LogoMarkProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

/**
 * FAXIS.AI geometric icon mark: axis cross with an X (milling-tool / CNC crosshair).
 * Monochrome — inherits currentColor so it adapts to theme.
 */
export function LogoMark({ size = 32, className, ...props }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      {...props}
    >
      <rect width="64" height="64" rx="14" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.4" />
      <line x1="12" y1="32" x2="52" y2="32" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="32" y1="12" x2="32" y2="52" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="19" y1="19" x2="45" y2="45" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="45" y1="19" x2="19" y2="45" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="32" cy="32" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="32" cy="32" r="1.8" fill="currentColor" />
    </svg>
  );
}

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showMark?: boolean;
  className?: string;
}

export function Logo({ size = "md", showMark = true, className }: LogoProps) {
  const sizes = {
    sm: { mark: 22, text: "text-[15px]" },
    md: { mark: 28, text: "text-[19px]" },
    lg: { mark: 40, text: "text-[26px]" },
  };
  const s = sizes[size];

  return (
    <div className={cn("flex items-center gap-2.5 select-none text-foreground", className)}>
      {showMark && <LogoMark size={s.mark} />}
      <div className="flex items-baseline leading-none">
        <span
          className={cn("font-semibold tracking-tight font-display", s.text)}
          style={{ letterSpacing: "-0.03em" }}
        >
          FAXIS
        </span>
        <span className={cn("font-medium tracking-tight font-display ml-0.5 text-muted-foreground", s.text)}>
          .AI
        </span>
      </div>
    </div>
  );
}
