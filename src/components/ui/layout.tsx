import type { ReactNode } from "react";

const WIDTHS = { "7xl": "max-w-7xl", "4xl": "max-w-4xl", "3xl": "max-w-3xl" };

export function Container({
  size = "7xl",
  className = "",
  children,
}: {
  size?: keyof typeof WIDTHS;
  className?: string;
  children: ReactNode;
}) {
  return <div className={`${WIDTHS[size]} mx-auto px-5 sm:px-6 ${className}`}>{children}</div>;
}

/** Full-width band with consistent vertical rhythm. `alt` = slightly lighter background. */
export function Section({
  alt = false,
  className = "",
  children,
}: {
  alt?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={`py-16 md:py-24 ${alt ? "bg-[#121008]" : ""}`}>
      <Container className={className}>{children}</Container>
    </section>
  );
}

/** Wrapper for inner pages — clears the fixed navbar. */
export function PageWrap({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`pt-24 md:pt-28 ${className}`}>{children}</div>;
}

export function Eyebrow({ className = "mb-4", children }: { className?: string; children: ReactNode }) {
  return (
    <p
      className={`font-mono-label text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#c9a96e] ${className}`}
    >
      {children}
    </p>
  );
}