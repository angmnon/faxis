import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showMark?: boolean;
  className?: string;
}

/**
 * FAXIS.AI lockup: radial-ring mark + custom wordmark (transparent PNGs).
 * Dark-mode native; mark renders white, wordmark renders white.
 */
export function Logo({ size = "md", showMark = true, className }: LogoProps) {
  const sizes = {
    sm: { mark: 18, word: 17 },
    md: { mark: 24, word: 23 },
    lg: { mark: 34, word: 32 },
  };
  const s = sizes[size];

  return (
    <div className={cn("flex items-center gap-2.5 select-none", className)}>
      {showMark && (
        <img
          src="/assets/logo-mark.png"
          alt="FAXIS.AI mark"
          width={s.mark}
          height={s.mark}
          className="shrink-0"
        />
      )}
      <img
        src="/assets/logo-wordmark.png"
        alt="FAXIS.AI"
        width={Math.round(s.word * 3.99)}
        height={s.word}
        className="h-auto w-auto"
      />
    </div>
  );
}
