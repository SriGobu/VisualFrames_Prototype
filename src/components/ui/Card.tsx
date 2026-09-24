import type { ReactNode } from "react";

/** Bordered box that lights up gold on hover. */
export function Card({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <div className={`border border-[#2a2318] hover:border-[#c9a96e] transition-colors duration-300 ${className}`}>
      {children}
    </div>
  );
}

export function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <Card className="p-6 md:p-8">
      <h3 className="font-display text-lg text-[#f0ece4] mb-3">{title}</h3>
      <div className="w-8 h-px bg-[#c9a96e] mb-4" />
      <p className="font-body text-sm text-[#8a7f6e] leading-relaxed">{desc}</p>
    </Card>
  );
}