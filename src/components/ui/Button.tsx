import type { ReactNode } from "react";

type Variant = "solid" | "outline" | "subtle" | "muted" | "link";
type Size = "sm" | "md" | "lg";

const COLORS: Record<Variant, string> = {
  solid: "bg-[#c9a96e] text-[#0a0906] hover:bg-[#e0bf82]",
  outline: "border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-[#0a0906]",
  subtle: "border border-[#2a2318] text-[#f0ece4] hover:border-[#c9a96e] hover:text-[#c9a96e]",
  muted: "text-[#8a7f6e] hover:text-[#c9a96e]",
  link: "text-[#c9a96e] border-b border-[#c9a96e] pb-0.5 hover:opacity-70",
};

const SIZES: Record<Size, string> = {
  sm: "text-[11px] tracking-[0.2em] px-4 py-2 whitespace-nowrap",
  md: "text-[11px] sm:text-[12px] tracking-[0.2em] px-6 py-3.5 sm:px-8 sm:py-4",
  lg: "text-[12px] sm:text-[13px] tracking-[0.25em] px-8 py-4 sm:px-10 sm:py-5",
};

interface Props {
  variant?: Variant;
  size?: Size;
  href?: string; // external link (opens in a new tab)
  onClick?: () => void;
  className?: string;
  children: ReactNode;
}

export default function Button({ variant = "solid", size = "md", href, onClick, className = "", children }: Props) {
  const box = variant === "muted" || variant === "link" ? "text-[11px] tracking-[0.2em]" : SIZES[size];
  const cls = `font-mono-label uppercase transition-all duration-300 inline-block text-center ${COLORS[variant]} ${box} ${className}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  );
}